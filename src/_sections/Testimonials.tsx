import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";

type slideSelectorProps = {
  className?: string;
  color1?: string;
};

const testimonials = [
  {
    testimonial:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: "John Smith",
    title: "Marketing Directory at XYZ Corp",
  },
  {
    testimonial:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: "John Smith",
    title: "Marketing Directory at XYZ Corp",
  },
  {
    testimonial:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    author: "John Smith",
    title: "Marketing Directory at XYZ Corp",
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
  return (
    <section className="container mt-16 lg:mt-24">
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
          <div className="grid auto-cols-[100%] grid-flow-col gap-7 lg:auto-cols-[50%] lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="relative rounded-[2.8125rem] border border-p-green p-7 leading-6 after:absolute after:bottom-0 after:left-12 after:h-9 after:w-9 after:translate-y-1/2 after:rotate-45 after:border-b after:border-r after:border-p-green after:bg-p-dark lg:p-12 lg:leading-normal xl:text-lg">
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
          </div>
        </div>
        <div className="mx-auto mb-7 mt-14 flex items-center justify-between px-7 lg:mb-10 lg:mt-28 lg:max-w-[35.25rem]">
          <button>
            <Arrow
              className="group w-5 rotate-180"
              color1="fill-white group-hover:fill-p-green"
            />
          </button>
          <div className="flex gap-5">
            <button>
              <SlideSelector
                className="group"
                color1="fill-white group-hover:fill-p-green"
              />
            </button>
            <button>
              <SlideSelector
                className="group"
                color1="fill-white group-hover:fill-p-green"
              />
            </button>
            <button>
              <SlideSelector
                className="group"
                color1="fill-white group-hover:fill-p-green"
              />
            </button>
            <button>
              <SlideSelector
                className="group"
                color1="fill-white group-hover:fill-p-green"
              />
            </button>
            <button>
              <SlideSelector
                className="group"
                color1="fill-white group-hover:fill-p-green"
              />
            </button>
          </div>
          <button>
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
