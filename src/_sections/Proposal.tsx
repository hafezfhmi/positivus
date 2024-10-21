import Button from "@/_components/Button";
import Card from "@/_components/Card";
import Image from "next/image";

export default function Proposal() {
  return (
    <section className="container mt-16 lg:mt-36">
      <Card
        className="block bg-p-grey lg:grid lg:grid-cols-2 lg:gap-20 lg:p-14"
        border={false}
      >
        <div>
          <h3 className="text-h3-mob font-medium lg:text-h3">
            Let’s make things happen
          </h3>
          <p className="mt-5 leading-6 lg:mt-6 lg:text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button className="mt-5 lg:mt-6 lg:w-auto">Get your proposal</Button>
        </div>
        <div className="relative">
          <Image
            src="/proposal-illustration.svg"
            alt=""
            width={359}
            height={394}
            className="absolute -top-20 left-1/2 hidden h-[24.625rem] w-auto -translate-x-1/2 lg:block"
          />
        </div>
      </Card>
    </section>
  );
}
