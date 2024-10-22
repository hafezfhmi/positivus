"use client";

import { useState } from "react";
import Card from "@/_components/Card";
import Plus from "@/_components/Plus";

const processList = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description:
      "Our team conducts detailed market research to identify opportunities and challenges in your industry. Based on this, we develop a customized digital marketing strategy designed to achieve your specific goals.",
  },
  {
    title: "Implementation",
    description:
      "Once the strategy is set, our specialists execute the plan across all relevant marketing channels. We ensure that each step is aligned with your business objectives for optimal results.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "We track the performance of your campaigns using advanced analytics tools. Continuous optimization ensures that your marketing efforts remain effective and competitive.",
  },
  {
    title: "Reporting and Communication",
    description:
      "We provide clear, regular reports detailing the progress of your campaigns. Our team is always available to discuss updates and adjust strategies as needed.",
  },
  {
    title: "Continual Improvement",
    description:
      "As we gather insights from campaign data, we make ongoing improvements to enhance performance. This iterative approach helps us ensure long-term success for your business.",
  },
];

type accordionItemProps = {
  process: (typeof processList)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
};

function AccordionItem({
  process,
  index,
  isActive = false,
  onClick,
}: accordionItemProps) {
  return (
    <Card
      className={`cursor-pointer p-0 px-7 lg:px-14 ${isActive && "bg-p-green"}`}
    >
      <button
        className="flex w-full items-center justify-between gap-7 py-7 lg:py-10"
        onClick={onClick}
      >
        <span className="text-3xl font-medium xl:text-6xl">0{index + 1}</span>
        <h4 className="flex-1 text-start text-h4-mob font-medium xl:text-3xl">
          {process.title}
        </h4>
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-black bg-white lg:h-14 lg:w-14">
          <Plus isActive={isActive} />
        </div>
      </button>
      <div
        className={`max-h-0 overflow-hidden border-t border-p-dark transition-all ${isActive && "max-h-96 py-7 lg:py-10"}`}
      >
        <p>{process.description}</p>
      </div>
    </Card>
  );
}

export default function WorkingProcess() {
  const [activeAccordionIndex, setactiveAccordionIndex] = useState<
    null | number
  >(null);

  const handleToggleAccordion = (index: number) => {
    if (index === activeAccordionIndex) {
      setactiveAccordionIndex(null);
    } else {
      setactiveAccordionIndex(index);
    }
  };

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
          <AccordionItem
            key={process.title}
            onClick={() => {
              handleToggleAccordion(index);
            }}
            process={process}
            index={index}
            isActive={activeAccordionIndex === index}
          />
        ))}
      </div>
    </section>
  );
}
