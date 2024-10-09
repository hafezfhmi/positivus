import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h1 className="mt-10 text-h1-mob font-medium">
        Navigating the digial landscape for success
      </h1>
      <Image
        src="/hero-illustration.svg"
        alt="A megaphone"
        width={360}
        height={310}
        className="w-full px-3.5 mt-2.5"
      />
      <p className="mt-5 leading-6">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button className="h-[68px] w-full mt-10 rounded-[14px] text-xl leading-7 text-white bg-dark">
        Book a consultation
      </button>{" "}
    </section>
  );
}
