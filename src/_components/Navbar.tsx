import Link from "next/link";
import PositivusLogo from "./PositivusLogo";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 bg-white p-7 px-5 z-50">
      <Link href="#">
        <PositivusLogo className="w-36 h-6 xl:w-52 xl:h-9" />
      </Link>
      <button className="flex items-center w-6 h-4 lg:hidden">
        <span className="w-full h-0.5 relative bg-black before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-full before:h-0.5 before:bg-black after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-0.5 after:bg-black"></span>
      </button>
      <ul className="hidden lg:flex items-center text-lg xl:text-xl gap-10">
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
        <Button className="bg-white !text-black border border-black !text-lg xl:!text-xl">
          Request a quote
        </Button>
      </ul>
    </nav>
  );
}
