import Button from "@/_components/Button";
import Card from "@/_components/Card";
import FacebookIcon from "@/_components/FacebookIcon";
import LinkedInIcon from "@/_components/LinkedInIcon";
import PositivusLogo from "@/_components/PositivusLogo";
import TwitterIcon from "@/_components/TwitterIcon";

export default function Footer() {
  return (
    <footer className="mt-[5.625rem] lg:mt-36 bg-p-dark lg:bg-transparent">
      <div className="container lg:p-14 lg:rounded-t-[2.8125rem] lg:bg-p-dark">
        <div className="lg:flex lg:justify-between lg:items-end">
          <div className="pt-12 lg:pt-0">
            <PositivusLogo
              color1="fill-white"
              className="mx-auto w-auto h-6 lg:h-7"
            />
          </div>
          <ul className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10 my-9 lg:my-0 text-white lg:text-lg">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
          </ul>
          <ul className="flex justify-center gap-5 my-9 lg:my-0">
            <li>
              <LinkedInIcon className="w-7" />
            </li>
            <li>
              <FacebookIcon className="w-7" />
            </li>
            <li>
              <TwitterIcon className="w-7" />
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center lg:mt-16 lg:mb-12">
          <div>
            <div className="text-center lg:text-start">
              <h4 className="inline-block bg-p-green px-1.5 rounded-lg text-h4-mob lg:text-h4 font-medium">
                Contact us:
              </h4>
            </div>
            <div className="flex flex-col gap-3.5 lg:gap-5 mt-9 lg:mt-7 text-center lg:text-start lg:text-lg text-white">
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
            className="p-7 xl:px-10 xl:py-14 mt-9 lg:mt-0 bg-[#292A32] rounded-xl"
          >
            <form
              action=""
              className="flex flex-col xl:flex-row xl:items-center gap-5"
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full py-4 px-5 rounded-xl block border border-white bg-[#292A32] text-white lg:text-lg outline-white"
                required
              />
              <Button className="bg-p-green !text-black lg:text-xl">
                Subscribe to News
              </Button>
            </form>
          </Card>
        </div>
        <ul className="flex lg:hidden justify-center gap-5 my-9">
          <li>
            <LinkedInIcon className="w-7" />
          </li>
          <li>
            <FacebookIcon className="w-7" />
          </li>
          <li>
            <TwitterIcon className="w-7" />
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-10 pt-9 lg:pt-12 pb-7 lg:p-0 border-t border-white text-center lg:text-lg text-white">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
