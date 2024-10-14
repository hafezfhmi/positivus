import Card from "@/_components/Card";
import Image from "next/image";

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
      : "bg-p-white";
}

function determineTextBackground(index: number) {
  return index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white";
}

export default function Services() {
  return (
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-[0.43rem] text-h2-mob font-medium bg-p-green inline rounded-md">
          Services
        </h2>
        <p className="mt-7 leading-6">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid gap-7 mt-10">
        {services.map((service, index) => (
          <Card
            key={service.line1}
            className={determineContainerBackground(index)}
          >
            <div className="inline-flex flex-col">
              <h3
                className={`self-start px-[0.43rem] text-h3-mob font-medium ${determineTextBackground(index)} rounded-md`}
              >
                {service.line1}
              </h3>
              <h3
                className={`self-start px-[0.43rem] text-h3-mob font-medium ${index === 0 || index % 3 === 0 ? "bg-p-green" : "bg-white"} rounded-md`}
              >
                {service.line2}
              </h3>
            </div>
            <div className="flex justify-between gap-5 items-end mt-[1.6875rem]">
              <Image
                src="/arrow-fill.svg"
                alt=""
                width={41}
                height={41}
                className="w-[2.5625rem] h-[2.5625rem] min-w-0"
              />
              <Image
                src={`/${service.image}.svg`}
                alt={service.image}
                width={165}
                height={130}
                className="w-[10.3625rem] h-[8.125rem] min-w-0"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
