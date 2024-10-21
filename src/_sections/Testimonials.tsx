import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";

type slideSelectorProps = {
  className?: string;
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

function SlideSelector({ className }: slideSelectorProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-3.5 ${className}`}
    >
      <path
        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
        fill="white"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="container mt-16 lg:mt-24">
      <div className="lg:flex lg:gap-10 text-center lg:text-start">
        <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
          Testimonials
        </h2>
        <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden lg:inline" />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <Card className="py-7 lg:pt-20 px-0 mt-10 lg:mt-20 bg-p-dark text-white overflow-hidden">
        <div className="px-7 lg:px-12">
          <div className="grid auto-cols-[100%] lg:auto-cols-[50%] grid-flow-col gap-7 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="relative border border-p-green p-7 lg:p-12 rounded-[2.8125rem] leading-6 lg:leading-normal lg:text-lg after:absolute after:left-12 after:bottom-0 after:translate-y-1/2 after:rotate-45 after:w-9 after:h-9 after:border-b after:border-r after:border-p-green after:bg-p-dark">
                  {testimonial.testimonial}
                </p>
                <div className="ml-16 mt-10">
                  <p className="font-medium text-p-green text-lg lg:text-h4">
                    {testimonial.author}
                  </p>
                  <p className="lg:text-lg">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center lg:max-w-[35.25rem] px-7 mt-14 mx-auto lg:mt-28 mb-7 lg:mb-10">
          <button>
            <Arrow className="w-5 rotate-180" />
          </button>
          <div className="flex gap-5">
            <button>
              <SlideSelector />
            </button>
            <button>
              <SlideSelector />
            </button>
            <button>
              <SlideSelector />
            </button>
            <button>
              <SlideSelector />
            </button>
            <button>
              <SlideSelector />
            </button>
          </div>
          <button>
            <Arrow className="w-5" />
          </button>
        </div>
      </Card>
    </section>
  );
}
