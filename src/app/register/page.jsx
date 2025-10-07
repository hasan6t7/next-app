"use client";

import { useState } from "react";
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

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      alert("User registered successfully!");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className=" flex items-center justify-center  min-h-[calc(100vh-324px)]">
      <Card className="w-full max-w-md shadow-lg bg-[#1D232A] text-white border-[#1D232A]">
        <CardHeader className="text-center">
          <CardTitle className={"text-3xl font-bold"}>Register</CardTitle>
          <CardDescription className={"font-semibold"}>
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2"
                required 
              />
            </div>
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
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2"
                required 
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-amber-600 hover:bg-amber-700"
            >
              Register
            </Button>
            <CardDescription className={"font-semibold text-center" }>
              Already have an account ?{" "}
              <Link className=" text-amber-600" href={"/login"}>
                Login
              </Link>
            </CardDescription>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
