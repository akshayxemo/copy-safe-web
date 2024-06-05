import React from "react";
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

const Signin = () => {
  return (
    <section className="pt-20 pb-8">
      <div className="bg-footer-pattern absolute w-full h-full left-0 bottom-0"></div>
      <div className="container flex justify-center mt-8">
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
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/5 border-none h-12 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </CardContent>
          <CardFooter className="flex flex-col justify-between items-center gap-4">
            <p className="text-sm">
              Don't have an account ?{" "}
              <Link href={"/signup"} className="text-blue-500">
                Sign Up
              </Link>
            </p>
            <Button className="bg-purple-900/20 hover:bg-purple-900 w-full">
              Log in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Signin;
