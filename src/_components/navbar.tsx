import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-[30px]">
      <Image src="/logo.svg" alt="Positivus home" width={144} height={24} />
      <button className="flex items-center w-6 h-4">
        <span className="w-full h-[2px] relative bg-black before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-black after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-[2px] after:bg-black"></span>
      </button>
    </nav>
  );
}
