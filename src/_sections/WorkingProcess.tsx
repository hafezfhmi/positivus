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
      <div className="lg:flex lg:gap-10 text-center lg:text-start">
        <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
          Our Working Process
        </h2>
        <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-7 mt-7 lg:mt-20">
        {processList.map((process, index) => (
          <Card
            key={process}
            className="flex justify-between items-center gap-7 w-full p-7 lg:py-10 lg:px-14"
          >
            <p className="font-medium text-3xl lg:text-6xl">0{index + 1}</p>
            <h4 className="flex-1 text-h4-mob lg:text-3xl font-medium">
              {process}
            </h4>
            <div className="flex justify-center items-center w-7 h-7 lg:w-14 lg:h-14 border border-black rounded-full cursor-pointer">
              <Plus />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
