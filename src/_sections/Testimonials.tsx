import Arrow from "@/_components/Arrow";
import Card from "@/_components/Card";

type slideSelectorProps = {
  className?: string;
};

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
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-1.5 text-h2-mob font-medium bg-p-green inline rounded-md">
          Testimonials
        </h2>
        <p className="mt-7 leading-6">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <Card className="p-7 mt-10 bg-p-dark text-white">
        <p className="relative border border-p-green p-7 rounded-[2.8125rem] after:absolute after:left-12 after:bottom-0 after:translate-y-1/2 after:rotate-45 after:w-9 after:h-9 after:border-b after:border-r after:border-p-green after:bg-p-dark">
          &quot;We have been working with Positivus for the past year and have
          seen a significant increase in website traffic and leads as a result
          of their efforts. The team is professional, responsive, and truly
          cares about the success of our business. We highly recommend Positivus
          to any company looking to grow their online presence.&quot;
        </p>
        <div className="ml-16 mt-10">
          <p className="font-medium text-p-green text-lg">John Smith</p>
          <p>Marketing Directory at XYZ Corp</p>
        </div>
        <div className="flex justify-between items-center mt-14 mb-7">
          <Arrow className="w-5 rotate-180" />
          <div className="flex gap-5">
            <SlideSelector />
            <SlideSelector />
            <SlideSelector />
            <SlideSelector />
            <SlideSelector />
          </div>
          <Arrow className="w-5" />
        </div>
      </Card>
    </section>
  );
}
