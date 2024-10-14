import Image from "next/image";
import Card from "@/_components/Card";
import Button from "@/_components/Button";

const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    image: "john-smith.svg",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    image: "jane-doe.svg",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    image: "michael-brown.svg",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    image: "emily-johnson.svg",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
];

export default function Team() {
  return (
    <section className="mt-16 px-5">
      <div className="text-center">
        <h2 className="px-[0.43rem] text-h2-mob font-medium bg-p-green inline rounded-md">
          Team
        </h2>
        <p className="mt-7 leading-6">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid gap-7 mt-10">
        {teamMembers.map((teamMember) => (
          <Card key={teamMember.name}>
            <div className="flex gap-5 pb-5">
              <Image
                src={`/${teamMember.image}`}
                alt={teamMember.name}
                width={105}
                height={102}
              />
              <div className="flex-1 flex flex-col justify-between">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={34}
                  height={34}
                  className="ml-auto self-start"
                />
                <div>
                  <h4 className="text-h4-mob font-medium">{teamMember.name}</h4>
                  <p className="leading-6">{teamMember.title}</p>
                </div>
              </div>
            </div>
            <p className="leading-6 pt-5 border-t-[1px] border-black">
              {teamMember.description}
            </p>
          </Card>
        ))}
      </div>
      <Button className="mt-9">See all team</Button>
    </section>
  );
}
