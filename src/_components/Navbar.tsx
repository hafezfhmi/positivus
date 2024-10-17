import Link from "next/link";
import PositivusLogo from "./PositivusLogo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-7 px-5">
      <Link href="#">
        <PositivusLogo />
      </Link>
      <button className="flex items-center w-6 h-4">
        <span className="w-full h-0.5 relative bg-black before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-full before:h-0.5 before:bg-black after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-0.5 after:bg-black"></span>
      </button>
    </nav>
  );
}
