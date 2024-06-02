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

const Signup = () => {
  return (
    <section className="pt-20 pb-8">
      <div className="bg-footer-pattern absolute w-full h-full left-0 bottom-0"></div>
      <div className="container flex justify-center mt-8">
        <Card className="bg-purple-500/5 border-none backdrop-blur-lg w-96 text-white">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Lets create your first account to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Name"
              className="bg-white/5 border-none h-12"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/5 border-none h-12"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/5 border-none h-12"
            />
          </CardContent>
          <CardFooter className="flex flex-col justify-between items-center gap-4">
            <p className="text-sm">
              Already have an account ?{" "}
              <Link href={"/signin"} className="text-blue-500">
                Login
              </Link>
            </p>
            <Button className="bg-purple-900/20 hover:bg-purple-900 w-full">
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Signup;
