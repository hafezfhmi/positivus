import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-[1.875rem] px-5">
      <Image src="/logo.svg" alt="Positivus home" width={144} height={24} />
      <button className="flex items-center w-6 h-4">
        <span className="w-full h-[0.125rem] relative bg-black before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-full before:h-[0.125rem] before:bg-black after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-[0.125rem] after:bg-black"></span>
      </button>
    </nav>
  );
}
