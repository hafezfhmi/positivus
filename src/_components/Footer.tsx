import Link from "next/link";
import Button from "@/_components/Button";
import Card from "@/_components/Card";
import FacebookIcon from "@/_components/FacebookIcon";
import LinkedInIcon from "@/_components/LinkedInIcon";
import PositivusLogo from "@/_components/PositivusLogo";
import TwitterIcon from "@/_components/TwitterIcon";

export default function Footer() {
  return (
    <footer className="mt-[5.625rem] bg-p-dark lg:container lg:mt-36 lg:bg-transparent">
      <div className="lg:rounded-t-[2.8125rem] lg:bg-p-dark lg:p-14">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="pt-12 lg:pt-0">
            <Link href="#">
              <PositivusLogo
                color1="fill-white"
                className="mx-auto h-6 w-auto cursor-pointer lg:h-7"
              />
            </Link>
          </div>
          <ul className="my-9 flex flex-col items-center gap-3 text-white lg:my-0 lg:flex-row lg:gap-10 xl:text-lg">
            <Link href="#" className="hover:text-p-green">
              <li>About us</li>
            </Link>
            <Link href="#" className="hover:text-p-green">
              <li>Services</li>
            </Link>
            <Link href="#" className="hover:text-p-green">
              <li>Use Cases</li>
            </Link>
            <Link href="#" className="hover:text-p-green">
              <li>Pricing</li>
            </Link>
          </ul>
          <ul className="my-9 hidden justify-center gap-5 lg:my-0 lg:flex">
            <li>
              <Link href="#">
                <LinkedInIcon
                  className="group w-7 cursor-pointer"
                  color1="fill-white group-hover:fill-p-green"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FacebookIcon
                  className="group w-7 cursor-pointer"
                  color1="fill-white group-hover:fill-p-green"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <TwitterIcon
                  className="group w-7 cursor-pointer"
                  color1="fill-white group-hover:fill-p-green"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:mb-12 lg:mt-16 lg:flex lg:items-center lg:justify-between">
          <div>
            <div className="text-center lg:text-start">
              <h4 className="inline-block rounded-lg bg-p-green px-1.5 text-h4-mob font-medium xl:text-h4">
                Contact us:
              </h4>
            </div>
            <div className="mt-9 flex flex-col gap-3.5 text-center text-white lg:mt-7 lg:gap-5 lg:text-start xl:text-lg">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>
          <Card
            border={false}
            className="mt-9 rounded-xl bg-[#292A32] p-7 lg:mt-0 xl:px-10 xl:py-14"
          >
            <form
              action=""
              className="flex flex-col gap-5 xl:flex-row xl:items-center"
            >
              <input
                type="text"
                placeholder="Email"
                className="block w-full rounded-xl border border-white bg-[#292A32] px-5 py-4 text-white outline-white xl:text-lg"
                required
              />
              <Button className="border-p-green bg-p-green !text-black hover:border-p-dark hover:bg-p-dark hover:!text-white xl:text-xl">
                Subscribe to News
              </Button>
            </form>
          </Card>
        </div>
        <ul className="my-9 flex justify-center gap-5 lg:hidden">
          <li>
            <Link href="#">
              <LinkedInIcon
                className="group w-7 cursor-pointer"
                color1="fill-white group-hover:fill-p-green"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FacebookIcon
                className="group w-7 cursor-pointer"
                color1="fill-white group-hover:fill-p-green"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <TwitterIcon
                className="group w-7 cursor-pointer"
                color1="fill-white group-hover:fill-p-green"
              />
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-3.5 border-t border-white pb-7 pt-9 text-center text-white lg:flex-row lg:gap-10 lg:p-0 lg:pt-12 xl:text-lg">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#">
            <p className="hover:text-p-green">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
