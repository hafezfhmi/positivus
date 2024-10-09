import Button from "@/_components/button";

export default function Proposal() {
  return (
    <section className="mt-16 px-5">
      <div className="p-12 rounded-[2.8125rem] bg-p-grey">
        <h3 className="font-medium text-h3-mob">Let’s make things happen</h3>
        <p className="mt-[1.25rem] leading-6">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button style="mt-[1.25rem]">Get your proposal</Button>
      </div>
    </section>
  );
}
