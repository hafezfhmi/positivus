import Card from "@/_components/Card";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="mt-16">
      <div className="text-center px-5">
        <h2 className="px-[0.43rem] text-h2-mob font-medium bg-p-green inline rounded-md">
          Case Studies
        </h2>
        <p className="mt-7 leading-6">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex gap-5 pl-5 overflow-hidden">
        <Card className="flex-none basis-4/5 bg-p-dark text-white mt-10 py-10">
          <p className="leading-6">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link
            href="#"
            className="mt-5 text-p-green flex items-center gap-[0.9375rem] text-xl"
          >
            Learn more
            <Image src="/arrow.svg" alt="" width="17" height="10" />
          </Link>
        </Card>
        <Card className="flex-none basis-4/5 bg-p-dark text-white mt-10 py-10">
          <p className="leading-6">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link
            href="#"
            className="mt-5 text-p-green flex items-center gap-[0.9375rem] text-xl"
          >
            Learn more
            <Image src="/arrow.svg" alt="" width="17" height="10" />
          </Link>
        </Card>
      </div>
    </section>
  );
}
