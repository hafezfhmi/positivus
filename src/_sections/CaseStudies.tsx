import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="container mt-16 overflow-hidden lg:mt-36">
      <div className="text-center lg:flex lg:gap-10 lg:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
          Case Studies
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <br className="hidden lg:inline" />
          Success through Our Case Studies
        </p>
      </div>
      <div className="auto-cols-1 mt-10 grid gap-7 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:rounded-[2.8125rem] lg:bg-p-dark lg:px-0 lg:py-16">
        <Card className="flex flex-col justify-between bg-p-dark py-10 text-white lg:border-0 lg:px-16 lg:py-0">
          <p className="leading-6 xl:text-lg">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <Link
            href="#"
            className="mt-5 inline-flex items-center gap-3.5 border-b-2 border-transparent text-xl text-p-green hover:border-p-green"
          >
            Learn more
            <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
          </Link>
        </Card>
        <Card className="flex flex-col justify-between bg-p-dark py-10 text-white lg:rounded-none lg:border-0 lg:border-x lg:border-white lg:px-16 lg:py-0">
          <p className="leading-6 xl:text-lg">
            For an online fashion retailer, we developed an SEO strategy that
            improved their search engine rankings, leading to a 40% boost in
            organic traffic and a 30% rise in monthly revenue.
          </p>
          <Link
            href="#"
            className="mt-5 inline-flex items-center gap-3.5 border-b-2 border-transparent text-xl text-p-green hover:border-p-green"
          >
            Learn more
            <Arrow color1="fill-p-green" className="w-5 -rotate-[30deg]" />
          </Link>
        </Card>
        <Card className="flex flex-col justify-between bg-p-dark py-10 text-white lg:border-0 lg:px-16 lg:py-0">
          <p className="leading-6 xl:text-lg">
            For a SaaS provider, we executed a content marketing campaign that
            increased lead generation by 35%, while reducing customer
            acquisition costs by 20%.
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
    </section>
  );
}
