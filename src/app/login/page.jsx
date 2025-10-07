"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) alert(res.error);
    else router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-324px)]">
      <Card className="w-full max-w-md shadow-lg bg-[#1D232A] text-white border-none">
        <CardHeader className="text-center">
          <CardTitle className={"text-2xl font-bold"}>Login</CardTitle>
          <CardDescription className={"font-semibold"}>
            Enter your credentials to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                required
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2"
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-amber-600 hover:bg-amber-700"
            >
              Login
            </Button>
            <CardDescription className={"font-semibold text-center"}>
              Already have an account ?{" "}
              <Link className=" text-amber-600" href={"/register"}>
                Register
              </Link>
            </CardDescription>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
