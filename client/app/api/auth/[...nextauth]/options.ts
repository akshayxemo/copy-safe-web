import {
  registerUser,
  varifyUserExist,
  varifyUserExistence,
} from "@/actions/server.actions";
import { userCredential } from "@/types";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
        const response = await varifyUserExist(user);
        if (!response.error) {
          return {
            id: response._id,
            name: response.name,
            email: response.email,
            image: response.image,
            authId: response.authId,
            subscription: response.subscription,
          };
        } else {
          throw new Error(response.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      console.log("token : ", token);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      console.log("session:", session);
      return session;
    },
    async signIn({ user, account, profile }) {
      // Check if the sign-in method is OAuth Google
      if (account?.type === "oauth" && account?.provider === "google") {
        // Check if the user already exists in your database
        const existingUser = await varifyUserExistence(user.email as string);

        if (!existingUser) {
          // If the user doesn't exist, create a new user record in your database
          const res = await registerUser({
            name: profile?.name as string,
            email: user.email as string,
          });
        }
      }

      return true; // Continue the sign-in process
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signinError", // Error code passed in query string as ?error=
  },
};
