import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function Button({ className, href, children }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`inline-block w-full rounded-xl border bg-p-dark px-7 py-5 text-center text-xl text-white ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`inline-block w-full rounded-xl border bg-p-dark px-7 py-5 text-xl leading-7 text-white ${className}`}
    >
      {children}
    </button>
  );
}
