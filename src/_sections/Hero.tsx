import Button from "@/_components/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-5">
      <h1 className="mt-3 text-h1-mob font-medium">
        Navigating the digital landscape for success
      </h1>
      <Image
        src="/hero-illustration.svg"
        alt=""
        width={360}
        height={310}
        className="w-full px-3.5 mt-2.5"
      />
      <p className="mt-5 leading-6">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <Button className="mt-10">Book a consultation</Button>
    </section>
  );
}
