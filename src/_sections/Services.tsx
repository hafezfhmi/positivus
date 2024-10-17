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
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-1.5 text-h2-mob font-medium bg-p-green inline rounded-md">
          Services
        </h2>
        <p className="mt-7 leading-6">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid gap-7 mt-10">
        {services.map((service, index) => (
          <Link href="#" key={service.line1}>
            <Card className={determineContainerBackground(index)}>
              <div className="inline-flex flex-col">
                <h3
                  className={`self-start px-1.5 text-h3-mob font-medium ${determineTextBackground(index)} rounded-md`}
                >
                  {service.line1}
                </h3>
                <h3
                  className={`self-start px-[0.43rem] text-h3-mob font-medium ${index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white"} rounded-md`}
                >
                  {service.line2}
                </h3>
              </div>
              <div className="flex justify-between gap-5 items-end mt-7">
                <Arrow
                  color1={
                    determineArrowColor(index) === "normal"
                      ? "fill-p-green"
                      : "fill-p-dark"
                  }
                  className={`w-10 rounded-full -rotate-[30deg] ${determineArrowColor(index) === "normal" ? "bg-black" : "bg-white"}`}
                />
                <Image
                  src={`/${service.image}.svg`}
                  alt={service.image}
                  width={160}
                  height={128}
                  className="w-40 h-32"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
