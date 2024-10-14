import Card from "@/_components/Card";
import Image from "next/image";

const processList = [
  "Consultation",
  "Research and Strategy Development",
  "Implementation",
  "Monitoring and Optimization",
  "Reporting and Communication",
  "Continual Improvement",
];

export default function WorkingProcess() {
  return (
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-[0.43rem] text-h2-mob font-medium bg-p-green inline rounded-md">
          Our Working Process
        </h2>
        <p className="mt-7 leading-6">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-7 mt-7">
        {processList.map((process, index) => (
          <Card
            key={process}
            className="flex justify-between items-center gap-8 w-full p-7"
          >
            <p className="font-medium text-[1.875rem]">0{index + 1}</p>
            <h4 className="flex-1 text-h4-mob font-medium">{process}</h4>
            <Image
              src="/plus.svg"
              alt=""
              height={30}
              width={30}
              className="w-7 h-7"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
