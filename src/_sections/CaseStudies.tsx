import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="mt-16 lg:mt-36 overflow-hidden">
      <div className="container">
        <div className="px-5 lg:flex lg:gap-10 text-center lg:text-start">
          <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
            Case Studies
          </h2>
          <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="grid auto-cols-[80%] md:auto-cols-[60%] xl:grid-cols-3 grid-flow-col gap-5 xl:gap-0 pl-5 xl:px-0 xl:py-16 mt-10 lg:mt-20 xl:bg-p-dark xl:rounded-[2.8125rem]">
          <Card className="bg-p-dark text-white py-10 xl:py-0 xl:px-16 xl:border-0">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 text-p-green inline-flex items-center gap-3.5 text-xl"
            >
              Learn more
              <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
            </Link>
          </Card>
          <Card className="bg-p-dark text-white py-10 xl:py-0 xl:px-16 xl:border-0 xl:border-x xl:border-white xl:rounded-none">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 text-p-green flex items-center gap-3.5 text-xl"
            >
              Learn more
              <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
            </Link>
          </Card>
          <Card className="bg-p-dark text-white py-10 xl:py-0 xl:px-16 xl:border-0">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 text-p-green inline-flex items-center gap-3.5 text-xl"
            >
              Learn more
              <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
