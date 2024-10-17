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
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-1.5 text-h2-mob font-medium bg-p-green inline rounded-md">
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
            className="flex justify-between items-center gap-7 w-full p-7"
          >
            <p className="font-medium text-3xl">0{index + 1}</p>
            <h4 className="flex-1 text-h4-mob font-medium">{process}</h4>
            <div className="flex justify-center items-center w-7 h-7 border border-black rounded-full cursor-pointer">
              <Plus />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
