import Image from "next/image";
import Card from "@/_components/Card";
import Button from "@/_components/Button";
import LinkedInIcon from "@/_components/LinkedInIcon";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    image: "john-smith.png",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    image: "jane-doe.png",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    image: "michael-brown.png",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    image: "emily-johnson.png",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    image: "brian-williams.png",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    image: "sarah-kim.png",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export default function Team() {
  return (
    <section className="container mt-16 lg:mt-36">
      <div className="lg:flex lg:gap-10 text-center lg:text-start">
        <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
          Teams
        </h2>
        <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid xl:grid-cols-3 gap-7 mt-10 lg:mt-20">
        {teamMembers.map((teamMember, index) => (
          <Card
            key={teamMember.name}
            className={`py-10 px-12 xl:px-9 ${index >= 4 && "hidden xl:block"}`}
          >
            <div className="flex items-end gap-5 relative pb-5 xl:pb-7">
              <Image
                src={`/${teamMember.image}`}
                alt={teamMember.name}
                width={105}
                height={102}
                className="w-[6.5625rem] h-auto"
              />
              <Link href="#" className="absolute top-0 right-0">
                <LinkedInIcon
                  color1="fill-black"
                  color2="fill-p-green"
                  className="h-10 w-10"
                />
              </Link>
              <div className="flex-1">
                <h4 className="text-h4-mob xl:text-h4 font-medium">
                  {teamMember.name}
                </h4>
                <p className="leading-6 xl:leading-normal xl:text-lg">
                  {teamMember.title}
                </p>
              </div>
            </div>
            <p className="leading-6 xl:leading-normal xl:text-lg pt-5 xl:pt-7 border-t border-black">
              {teamMember.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="block xl:flex xl:justify-end">
        <Button href="#" className="xl:w-auto mt-9 xl:mt-10 xl:px-20">
          See all team
        </Button>
      </div>
    </section>
  );
}
