import Button from "@/_components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mt-2 items-center md:mt-4 md:flex lg:mt-8 xl:mt-12 xl:gap-20">
      <div className="md:w-1/2">
        <h1 className="mt-3 text-h1-mob font-medium md:leading-tight lg:leading-normal xl:text-h1">
          Navigating the digital landscape for success
        </h1>
        <Image
          src="/hero-illustration.svg"
          alt=""
          width={360}
          height={310}
          priority={true}
          className="mt-2.5 w-full px-3.5 md:hidden"
        />
        <p className="mt-5 leading-6 xl:text-xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="mt-10 hover:bg-p-green hover:!text-black md:mt-8 hover:border hover:border-black md:w-auto">
          Book a consultation
        </Button>
      </div>
      <Image
        src="/hero-illustration.svg"
        alt=""
        width={360}
        height={310}
        priority={true}
        className="mt-2.5 hidden w-full px-3.5 md:block md:w-1/2"
      />
    </section>
  );
}
