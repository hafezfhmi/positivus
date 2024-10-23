"use client";

import Link from "next/link";
import PositivusLogo from "./PositivusLogo";
import Button from "./Button";
import { useState } from "react";

function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav((prevVal) => !prevVal);
  };

  const handleClickNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      <button
        className="z-20 flex h-4 w-6 items-center lg:hidden"
        onClick={handleShowMobileNav}
      >
        <span
          className={`relative h-0.5 w-full bg-black transition before:absolute before:bottom-2 before:left-0 before:h-0.5 before:w-full before:origin-top-right before:bg-black before:transition before:content-[''] after:absolute after:left-0 after:top-2 after:h-0.5 after:w-full after:origin-bottom-right after:bg-black after:transition after:content-[''] ${showMobileNav ? "bg-transparent before:-rotate-45 after:rotate-45" : "before:rotate-0 after:rotate-0"}`}
        ></span>
      </button>
      <nav
        className={`fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-white transition-all lg:hidden ${showMobileNav ? "left-0" : "left-full"}`}
      >
        <ul className="container flex flex-col items-center justify-center gap-8 text-3xl">
          <li className="flex-shrink-0" onClick={handleClickNav}>
            <Link href="#">About us</Link>
          </li>
          <li className="flex-shrink-0" onClick={handleClickNav}>
            <Link href="#">Services</Link>
          </li>
          <li className="flex-shrink-0" onClick={handleClickNav}>
            <Link href="#">Use Cases</Link>
          </li>
          <li className="flex-shrink-0" onClick={handleClickNav}>
            <Link href="#">Pricing</Link>
          </li>
          <li className="flex-shrink-0" onClick={handleClickNav}>
            <Link href="#">Blog</Link>
          </li>
          <Button
            href="#"
            className="!w-auto border border-black bg-white !text-3xl !text-black hover:bg-p-green"
            onClick={handleClickNav}
          >
            Request a quote
          </Button>
        </ul>
      </nav>
    </>
  );
}

export default function Navbar() {
  return (
    <header className="container top-0 z-50 flex items-center justify-between bg-white py-7">
      <Link href="#">
        <PositivusLogo className="h-6 w-auto xl:h-9 xl:w-52" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-10 text-lg xl:text-xl">
          <li className="flex-shrink-0">
            <Link href="#">About us</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="#">Services</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="#">Use Cases</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="#">Pricing</Link>
          </li>
          <li className="flex-shrink-0">
            <Link href="#">Blog</Link>
          </li>
          <Button
            href="#"
            className="border border-black bg-white !text-lg !text-black hover:bg-p-green xl:!text-xl"
          >
            Request a quote
          </Button>
        </ul>
      </nav>
      <MobileNav />
    </header>
  );
}
