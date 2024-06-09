"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitCredentials = async (data: any) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/chat",
    });

    console.log("login", res);
  };
  return (
    <Card className="bg-purple-500/10 border-none backdrop-blur-lg w-96 text-white">
      <CardHeader>
        <CardTitle>Log Into Your Account</CardTitle>
        <CardDescription>Let's log you in.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          className="bg-white/5 border-none h-12 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          className="bg-white/5 border-none h-12 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          {...register("password", { required: true })}
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-between items-center gap-4">
        <p className="text-sm">
          Don't have an account ?{" "}
          <Link href={"/auth/signup"} className="text-blue-500">
            Sign Up
          </Link>
        </p>
        <Button
          className="bg-purple-900/20 hover:bg-purple-900 w-full"
          onClick={handleSubmit(onSubmitCredentials)}
        >
          Log in
        </Button>
        <div className="relative flex items-center justify-center w-full px-1">
          <div className="flex-grow border-t border-gray-500/20"></div>
          <span className="flex-shrink mx-4 text-gray-500/50">or</span>
          <div className="flex-grow border-t border-gray-500/20"></div>
        </div>
        <Button
          className="bg-purple-900/20 hover:bg-purple-900 w-full"
          onClick={() => {
            signIn("google", {
              redirect: true,
              callbackUrl: "/chat",
            });
          }}
        >
          <Image
            src={`/icons/icons8-google.svg`}
            alt="icon-8-google-icon"
            width={20}
            height={20}
            className="mr-3"
          />{" "}
          <span>Log in with Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
