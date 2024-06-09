import {
  registerUser,
  updateUserAuthId,
  loginUser,
  varifyUserExistence,
} from "@/actions/server.actions";
import { userCredential } from "@/types";
import { generateRandomString } from "@/utils/functions";
import type { NextAuthOptions, User, Account, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedUser extends User {
  chatId?: string;
  subscription?: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      async profile(profile) {
        console.log("Profile Google: ", profile);
        // const response = await varifyUserExistence(profile.email);
        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
          // subscription: response.data.subscription,
          // chatId: response.data.chatId,
        };
      },
      clientId: process.env.GOOGLE_ID as any,
      clientSecret: process.env.GOOGLE_SECRET as any,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = credentials as userCredential;
        const response = await loginUser(user);
        if (!response.error) {
          return {
            id: response._id,
            name: response.name,
            email: response.email,
            image: response.image,
            authId: response.authId,
            subscription: response.subscription,
            chatId: response.chatId,
          };
        } else {
          throw new Error(response.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("token : ", token, user);
      const extendedUser: ExtendedUser = user;
      if (extendedUser) {
        token.chatId = extendedUser.chatId;
        token.subscription = extendedUser.subscription;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.chatId = token.chatId;
        session.user.subscription = token.subscription;
      }
      console.log("session:", session);
      return session;
    },
    async signIn({ user, account, profile }) {
      // Check if the sign-in method is OAuth Google
      if (account?.type === "oauth" && account?.provider === "google") {
        // Check if the user already exists in your database
        const existingUser = await varifyUserExistence(user.email as string);
        console.log("exist:", existingUser, profile);
        let chatId, subscription;
        if (existingUser.error) {
          // If the user doesn't exist, create a new user record in your database
          const res = await registerUser({
            name: profile?.name as string,
            email: user.email as string,
            password: generateRandomString(8),
            authId: profile?.sub as string,
            image: user.image as string,
          });
          chatId = res.data.chatId;
          subscription = res.data.subscription;
          console.log("96: options", res);
        } else if (!existingUser.data.authId) {
          const res = await updateUserAuthId(user.email as string, {
            authId: profile?.sub as string,
            image: user.image as string,
          });
          console.log("102: options", res);
          chatId = res.data.chatId;
          subscription = res.data.subscription;
        } else {
          chatId = existingUser.data.chatId;
          subscription = existingUser.data.subscription;
        }

        user.chatId = chatId;
        user.subscription = subscription;
      }
      return true; // Continue the sign-in process
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signinError", // Error code passed in query string as ?error=
  },
};
