import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    line1: "Search engine",
    line2: "optimization",
    image: "search-engine-optimization",
  },
  {
    line1: "Pay-per-click",
    line2: "advertising",
    image: "pay-per-click-advertising",
  },
  {
    line1: "Social Media",
    line2: "Marketing",
    image: "social-media-marketing",
  },
  { line1: "Email", line2: "Marketing", image: "email-marketing" },
  { line1: "Content", line2: "Creation", image: "content-creation" },
  {
    line1: "Analytics and",
    line2: "Tracking",
    image: "analytics-and-tracking",
  },
];

function determineContainerBackground(index: number) {
  return (index + 1 - 3 * Math.floor(index / 3)) % 3 === 0
    ? "bg-p-dark"
    : (index + 1 - 3 * Math.floor(index / 3)) % 2 === 0
      ? "bg-p-green"
      : "bg-p-grey";
}

function determineTextBackground(index: number) {
  return index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white";
}

function determineArrowColor(index: number) {
  return (index + 1 - 3 * Math.floor(index / 3)) % 3 === 0 ? "dark" : "normal";
}

export default function Services() {
  return (
    <section className="container mt-16 lg:mt-36">
      <div className="text-center lg:flex lg:gap-10 lg:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start lg:text-h2">
          Services
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl lg:text-lg">
          At our digital marketing agency, we offer a range of services to{" "}
          <br className="hidden lg:inline" />
          help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mt-10 grid auto-rows-fr gap-7 lg:mt-20 lg:grid-cols-2 lg:gap-10">
        {services.map((service, index) => (
          <Link href="#" key={service.line1}>
            <Card
              className={`duration-75 hover:-translate-y-2 hover:shadow-[0px_0.75rem_#191A23] xl:grid xl:h-full xl:grid-cols-2 xl:gap-16 ${determineContainerBackground(index)}`}
            >
              <div>
                <div className="inline-flex flex-col">
                  <h3
                    className={`self-start px-1.5 text-h3-mob font-medium lg:text-h3 ${determineTextBackground(index)} rounded-md`}
                  >
                    {service.line1}
                  </h3>
                  <h3
                    className={`self-start px-[0.43rem] text-h3-mob font-medium lg:text-h3 ${index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white"} rounded-md`}
                  >
                    {service.line2}
                  </h3>
                </div>
                <div className="mt-7 flex items-end justify-between gap-5 xl:mt-24">
                  <div className="flex items-center gap-4">
                    <Arrow
                      color1={
                        determineArrowColor(index) === "normal"
                          ? "fill-p-green"
                          : "fill-p-dark"
                      }
                      className={`h-10 w-10 -rotate-[30deg] rounded-full p-2 ${determineArrowColor(index) === "normal" ? "bg-black" : "bg-white"}`}
                    />
                    <p
                      className={`hidden text-xl xl:block ${determineArrowColor(index) === "normal" ? "text-black" : "text-white"}`}
                    >
                      Learn more
                    </p>
                  </div>
                  <Image
                    src={`/${service.image}.svg`}
                    alt={service.image}
                    width={160}
                    height={128}
                    className="h-32 w-40 xl:hidden"
                  />
                </div>
              </div>
              <Image
                src={`/${service.image}.svg`}
                alt={service.image}
                width={160}
                height={128}
                className="hidden h-48 w-auto self-center justify-self-end xl:block"
              />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
