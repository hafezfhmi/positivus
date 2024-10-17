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
        className={`w-full text-center block py-5 px-7 rounded-xl text-xl leading-7 text-white bg-p-dark ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`w-full py-5 px-7 rounded-xl text-xl leading-7 text-white bg-p-dark ${className}`}
    >
      {children}
    </button>
  );
}
