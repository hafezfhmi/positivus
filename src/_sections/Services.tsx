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
      <div className="lg:flex lg:gap-10 text-center lg:text-start">
        <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
          Services
        </h2>
        <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
          At our digital marketing agency, we offer a range of services to{" "}
          <br className="hidden lg:inline" />
          help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid lg:grid-cols-2 auto-rows-fr gap-7 lg:gap-10 mt-10 lg:mt-20">
        {services.map((service, index) => (
          <Link href="#" key={service.line1}>
            <Card
              className={`xl:grid xl:grid-cols-2 xl:gap-16 xl:h-full hover:-translate-y-2 hover:shadow-[0px_0.75rem_#191A23] duration-75 ${determineContainerBackground(index)}`}
            >
              <div>
                <div className="inline-flex flex-col">
                  <h3
                    className={`self-start px-1.5 text-h3-mob lg:text-h3 font-medium ${determineTextBackground(index)} rounded-md`}
                  >
                    {service.line1}
                  </h3>
                  <h3
                    className={`self-start px-[0.43rem] text-h3-mob lg:text-h3 font-medium ${index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white"} rounded-md`}
                  >
                    {service.line2}
                  </h3>
                </div>
                <div className="flex justify-between gap-5 items-end mt-7 xl:mt-24">
                  <div className="flex items-center gap-4">
                    <Arrow
                      color1={
                        determineArrowColor(index) === "normal"
                          ? "fill-p-green"
                          : "fill-p-dark"
                      }
                      className={`w-10 h-10 p-2 rounded-full -rotate-[30deg] ${determineArrowColor(index) === "normal" ? "bg-black" : "bg-white"}`}
                    />
                    <p
                      className={`hidden xl:block text-xl ${determineArrowColor(index) === "normal" ? "text-black" : "text-white"}`}
                    >
                      Learn more
                    </p>
                  </div>
                  <Image
                    src={`/${service.image}.svg`}
                    alt={service.image}
                    width={160}
                    height={128}
                    className="w-40 h-32 xl:hidden"
                  />
                </div>
              </div>
              <Image
                src={`/${service.image}.svg`}
                alt={service.image}
                width={160}
                height={128}
                className="w-auto h-48 hidden xl:block self-center justify-self-end"
              />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
