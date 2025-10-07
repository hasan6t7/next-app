"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  // single state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // optionally reset
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Contact Us
        </h2>

        <Card className="max-w-2xl mx-auto shadow-lg border-none bg-[#1D232A] text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Get in Touch</CardTitle>
            <CardDescription className="text-gray-300">
              Fill the form and we will respond quickly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2  text-white  border-gray-600"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2  text-white  border-gray-600"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="mt-2  text-white  border-gray-600"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
