import Button from "@/_components/Button";
import Card from "@/_components/Card";

export default function Proposal() {
  return (
    <section className="mt-16 px-5">
      <Card className="bg-p-grey" border={false}>
        <h3 className="font-medium text-h3-mob">Let’s make things happen</h3>
        <p className="mt-[1.25rem] leading-6">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="mt-[1.25rem]">Get your proposal</Button>
      </Card>
    </section>
  );
}
