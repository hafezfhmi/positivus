import Card from "@/_components/Card";
import Plus from "@/_components/Plus";

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
    <section className="container mt-16 lg:mt-36">
      <div className="text-center lg:flex lg:gap-10 lg:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
          Our Working Process
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
          Step-by-Step Guide to Achieving <br className="hidden lg:inline" />
          Your Business Goals
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-7 lg:mt-20">
        {processList.map((process, index) => (
          <Card
            key={process}
            className="flex w-full items-center justify-between gap-7 p-7 hover:cursor-pointer lg:px-14 lg:py-10"
          >
            <p className="text-3xl font-medium xl:text-6xl">0{index + 1}</p>
            <h4 className="flex-1 text-h4-mob font-medium xl:text-3xl">
              {process}
            </h4>
            <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-black lg:h-14 lg:w-14">
              <Plus />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
