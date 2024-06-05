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
import { useForm } from "react-hook-form";
import { registerUser } from "@/actions/server.actions";
import { redirect } from "next/navigation";
// import axios from "axios";

const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm();
  console.log(process.env.NEXT_PUBLIC_SERVER_BASE);
  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await registerUser(data);
    if (!response.error) {
      reset({ name: "", email: "", password: "" });
      redirect("/auth/signin");
    } else {
      console.log(response.message);
    }
    // axios
    //   .post(`${process.env.NEXT_PUBLIC_SERVER_BASE}/auth/user/create`, data)
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === 201) reset({ name: "", email: "", password: "" });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="bg-purple-500/10 border-none backdrop-blur-lg w-96 text-white">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Let's create your account first to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Name"
            className="bg-white/5 border-none h-12 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            {...register("name", { required: true })}
          />
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
            Already have an account ?{" "}
            <Link href={"/auth/signin"} className="text-blue-500">
              Login
            </Link>
          </p>
          <Button className="bg-purple-900/20 hover:bg-purple-900 w-full">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignupForm;
