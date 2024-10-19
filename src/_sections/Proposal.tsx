import Button from "@/_components/Button";
import Card from "@/_components/Card";
import Image from "next/image";

export default function Proposal() {
  return (
    <section className="container mt-16 lg:mt-36">
      <Card
        className="block lg:grid lg:grid-cols-2 lg:gap-20 lg:p-14 bg-p-grey"
        border={false}
      >
        <div>
          <h3 className="font-medium text-h3-mob lg:text-h3">
            Let’s make things happen
          </h3>
          <p className="mt-5 lg:mt-6 lg:text-lg leading-6">
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
            className="w-auto h-[24.625rem] hidden lg:block absolute -top-20 left-1/2 -translate-x-1/2"
          />
        </div>
      </Card>
    </section>
  );
}
