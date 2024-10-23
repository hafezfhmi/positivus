"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";

type slideSelectorProps = {
  className?: string;
  color1?: string;
};

const SlideContainer = styled.div<{ $activeSlideIndex: number }>`
  display: grid;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  gap: 1.75rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transform: translateX(
    calc((-100% - 1.75rem) * ${(props) => props.$activeSlideIndex})
  );

  @media (min-width: 1024px) {
    grid-auto-columns: calc(50% - 1.5rem);
    gap: 3rem /* 48px */;
    transform: translateX(
      calc((-50% - 1.5rem) * ${(props) => props.$activeSlideIndex})
    );
  }
`;

const testimonials = [
  {
    testimonial:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: "John Smith",
    title: "Marketing Directory at XYZ Corp",
  },
  {
    testimonial:
      '"Positivus transformed our social media strategy, helping us engage with our audience more effectively and increasing our followers by 150%. Their insights and dedication to our brand’s growth have been invaluable. We couldn\'t be happier with the results."',
    author: "Sarah Lee",
    title: "Marketing Manager at Urban Threads",
  },
  {
    testimonial:
      '"Working with Positivus has been a game-changer for our business. Their expertise in SEO and PPC led to a 60% increase in qualified leads within just a few months. The team is knowledgeable, attentive, and goes above and beyond to meet our goals."',
    author: "Michael Brown",
    title: "CEO at Tech Innovators",
  },
];

function SlideSelector({
  className,
  color1 = "fill-white",
}: slideSelectorProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-3.5 ${className}`}
    >
      <path
        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
        className={color1}
      />
    </svg>
  );
}

export default function Testimonials() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => {
      if (
        window.innerWidth >= 1024 &&
        activeSlideIndex === testimonials.length - 1
      ) {
        setActiveSlideIndex(testimonials.length - 2);
      }
    };

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [activeSlideIndex]);

  const handleClickSelectorButton = (index: number) => {
    setActiveSlideIndex(index);
  };

  const handleClickSlideLeft = () => {
    if (activeSlideIndex === 0) {
      return;
    }
    setActiveSlideIndex((prev) => prev - 1);
  };

  const handleClickSlideRight = () => {
    if (
      activeSlideIndex === testimonials.length - 1 ||
      (window.innerWidth >= 1024 &&
        activeSlideIndex === testimonials.length - 2)
    ) {
      return;
    }
    setActiveSlideIndex((prev) => prev + 1);
  };

  return (
    <section className="container mt-16">
      <div className="text-center lg:flex lg:gap-10 xl:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
          Testimonials
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden lg:inline" />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <Card className="mt-10 overflow-hidden bg-p-dark px-0 py-7 text-white lg:mt-20 lg:pt-20">
        <div className="px-7 lg:px-12">
          <SlideContainer $activeSlideIndex={activeSlideIndex}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col">
                <p className="relative flex-grow rounded-[2.8125rem] border border-p-green p-7 leading-6 after:absolute after:bottom-0 after:left-12 after:h-9 after:w-9 after:translate-y-1/2 after:rotate-45 after:border-b after:border-r after:border-p-green after:bg-p-dark lg:p-12 lg:leading-normal xl:text-lg">
                  {testimonial.testimonial}
                </p>
                <div className="ml-16 mt-10">
                  <p className="text-lg font-medium text-p-green xl:text-h4">
                    {testimonial.author}
                  </p>
                  <p className="xl:text-lg">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </SlideContainer>
        </div>
        <div className="mx-auto mb-7 mt-14 flex items-center justify-between px-7 lg:mb-10 lg:mt-28 lg:max-w-[35.25rem]">
          <button onClick={handleClickSlideLeft}>
            <Arrow
              className="group w-5 rotate-180"
              color1="fill-white group-hover:fill-p-green"
            />
          </button>
          <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                className={`${index === testimonials.length - 1 && "lg:hidden"}`}
                onClick={() => {
                  handleClickSelectorButton(index);
                }}
              >
                <SlideSelector
                  className="group"
                  color1={`fill-white group-hover:fill-p-green ${activeSlideIndex === index && "!fill-p-green"}`}
                />
              </button>
            ))}
          </div>
          <button onClick={handleClickSlideRight}>
            <Arrow
              className="group w-5"
              color1="fill-white group-hover:fill-p-green"
            />
          </button>
        </div>
      </Card>
    </section>
  );
}
