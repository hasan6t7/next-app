"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ActiveLink from "../hooks/ActiveLink";
import { signOut, useSession } from "next-auth/react";
import { Loader } from "./Loader";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });

  if (status === "loading") return <Loader></Loader>;

 

  return (
    <div className="navbar  text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <ActiveLink href={"/"}>Home</ActiveLink>
            </li>
            {session && (
              <li>
                <ActiveLink href={"/dashboard/add-product"}>
                  Add Product
                </ActiveLink>
              </li>
            )}
           
            <li>
              <ActiveLink href={"/products"}>Products</ActiveLink>
            </li>
             <li>
              <ActiveLink href={"/contact"}>Contact</ActiveLink>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="text-3xl font-bold">
          Next<span className="text-amber-600">App</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-semibold">
          <li>
            <ActiveLink href={"/"}>Home</ActiveLink>
          </li>
          {session && (
            <li>
              <ActiveLink href={"/dashboard/add-product"}>
                Add Product
              </ActiveLink>
            </li>
          )}
         
          <li>
            <ActiveLink href={"/products"}>Products</ActiveLink>
          </li>
           <li>
            <ActiveLink href={"/contact"}>Contact</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!session ? (
          <Link href={"/login"}>
            <Button className={"bg-amber-600 hover:bg-amber-700 px-6 py-2"}>
              Login
            </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Button
              className={"bg-amber-600 hover:bg-amber-700 px-6 py-2"}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
