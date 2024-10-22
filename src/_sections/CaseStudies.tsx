import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="mt-16 overflow-hidden lg:mt-36">
      <div className="container">
        <div className="px-5 text-center lg:flex lg:gap-10 lg:text-start">
          <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
            Case Studies
          </h2>
          <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing{" "}
            <br className="hidden lg:inline" />
            Success through Our Case Studies
          </p>
        </div>
        <div className="mt-10 grid auto-cols-[80%] grid-flow-col gap-5 pl-5 md:auto-cols-[60%] lg:mt-20 xl:grid-cols-3 xl:gap-0 xl:rounded-[2.8125rem] xl:bg-p-dark xl:px-0 xl:py-16">
          <Card className="bg-p-dark py-10 text-white xl:border-0 xl:px-16 xl:py-0">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-3.5 border-b-2 border-transparent text-xl text-p-green hover:border-p-green"
            >
              Learn more
              <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
            </Link>
          </Card>
          <Card className="bg-p-dark py-10 text-white xl:rounded-none xl:border-0 xl:border-x xl:border-white xl:px-16 xl:py-0">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-3.5 border-b-2 border-transparent text-xl text-p-green hover:border-p-green"
            >
              Learn more
              <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
            </Link>
          </Card>
          <Card className="bg-p-dark py-10 text-white xl:border-0 xl:px-16 xl:py-0">
            <p className="leading-6 xl:text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-3.5 border-b-2 border-transparent text-xl text-p-green hover:border-p-green"
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
