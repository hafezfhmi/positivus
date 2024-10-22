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
      <div className="text-center lg:flex lg:gap-10 lg:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
          Teams
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
          Meet the skilled and experienced team behind our{" "}
          <br className="hidden lg:inline" />
          successful digital marketing strategies
        </p>
      </div>
      <div className="mt-10 grid gap-7 lg:mt-20 xl:grid-cols-3">
        {teamMembers.map((teamMember, index) => (
          <Card
            key={teamMember.name}
            className={`px-12 py-10 hover:-translate-y-2 hover:shadow-[0px_0.75rem_#191A23] xl:px-9 ${index >= 4 && "hidden xl:block"}`}
          >
            <div className="relative flex items-end gap-5 pb-5 xl:pb-7">
              <Image
                src={`/${teamMember.image}`}
                alt={teamMember.name}
                width={105}
                height={102}
                className="h-auto w-[6.5625rem]"
              />
              <Link href="#" className="absolute right-0 top-0">
                <LinkedInIcon
                  color1="fill-black"
                  color2="fill-p-green"
                  className="h-10 w-10"
                />
              </Link>
              <div className="flex-1">
                <h4 className="text-h4-mob font-medium xl:text-h4">
                  {teamMember.name}
                </h4>
                <p className="leading-6 xl:text-lg xl:leading-normal">
                  {teamMember.title}
                </p>
              </div>
            </div>
            <p className="border-t border-black pt-5 leading-6 xl:pt-7 xl:text-lg xl:leading-normal">
              {teamMember.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="block xl:flex xl:justify-end">
        <Button
          href="#"
          className="mt-9 hover:border hover:border-black hover:bg-p-green hover:!text-black xl:mt-10 xl:w-auto xl:px-20"
        >
          See all team
        </Button>
      </div>
    </section>
  );
}
