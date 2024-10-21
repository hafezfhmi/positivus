import Button from "@/_components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container md:flex items-center mt-2 md:mt-4 lg:mt-8 xl:mt-12 xl:gap-20">
      <div className="md:w-1/2">
        <h1 className="mt-3 text-h1-mob xl:text-h1 font-medium md:leading-tight lg:leading-normal">
          Navigating the digital landscape for success
        </h1>
        <Image
          src="/hero-illustration.svg"
          alt=""
          width={360}
          height={310}
          priority={true}
          className="w-full px-3.5 mt-2.5 md:hidden"
        />
        <p className="mt-5 leading-6 xl:text-xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="mt-10 md:mt-8 md:w-auto">Book a consultation</Button>
      </div>
      <Image
        src="/hero-illustration.svg"
        alt=""
        width={360}
        height={310}
        priority={true}
        className="w-full md:w-1/2 px-3.5 mt-2.5 hidden md:block"
      />
    </section>
  );
}
