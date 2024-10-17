import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="mt-16">
      <div className="text-center px-5">
        <h2 className="px-1.5 text-h2-mob font-medium bg-p-green inline rounded-md">
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
            className="mt-5 text-p-green inline-flex items-center gap-3.5 text-xl"
          >
            Learn more
            <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
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
            className="mt-5 text-p-green flex items-center gap-3.5 text-xl"
          >
            Learn more
            <Arrow color1="fill-p-green" className="h-10 -rotate-[30deg]" />
          </Link>
        </Card>
      </div>
    </section>
  );
}
