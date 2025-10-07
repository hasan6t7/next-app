"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md transition-colors duration-200 ${
        isActive ? " text-amber-600" : " hover:text-amber-600 "
      }`}
    >
      {children}
    </Link>
  );
}
