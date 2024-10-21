import Link from "next/link";
import PositivusLogo from "./PositivusLogo";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="container top-0 z-50 flex items-center justify-between bg-white py-7">
      <Link href="#">
        <PositivusLogo className="h-6 w-auto xl:h-9 xl:w-52" />
      </Link>
      <button className="flex h-4 w-6 items-center lg:hidden">
        <span className="relative h-0.5 w-full bg-black before:absolute before:bottom-2 before:left-0 before:h-0.5 before:w-full before:bg-black before:content-[''] after:absolute after:left-0 after:top-2 after:h-0.5 after:w-full after:bg-black after:content-['']"></span>
      </button>
      <ul className="hidden items-center gap-10 text-lg lg:flex xl:text-xl">
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
  );
}
