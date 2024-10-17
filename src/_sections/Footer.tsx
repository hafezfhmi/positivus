import Button from "@/_components/Button";
import Card from "@/_components/Card";
import FacebookIcon from "@/_components/FacebookIcon";
import LinkedInIcon from "@/_components/LinkedInIcon";
import PositivusLogo from "@/_components/PositivusLogo";
import TwitterIcon from "@/_components/TwitterIcon";

export default function Footer() {
  return (
    <footer className="px-5 bg-p-dark">
      <div className="pt-12">
        <PositivusLogo color1="fill-white" className="mx-auto w-36 h-6" />
      </div>
      <ul className="flex flex-col items-center gap-3 my-9 text-white">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
      </ul>
      <div className="text-center">
        <h4 className="inline-block bg-p-green px-1.5 rounded-lg text-h4-mob font-medium">
          Contact us:
        </h4>
      </div>
      <div className="flex flex-col gap-3.5 mt-9 text-center text-white">
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St
          <br />
          Moonstone City, Stardust State 12345
        </p>
      </div>
      <Card border={false} className="p-7 mt-9 bg-[#292A32] rounded-xl">
        <form action="">
          <input
            type="text"
            placeholder="Email"
            className="w-full py-4 px-5 mt-2.5 rounded-xl block border border-white bg-[#292A32] text-white outline-white"
            required
          />
          <Button className="mt-5 bg-p-green !text-black">
            Subscribe to News
          </Button>
        </form>
      </Card>
      <ul className="flex justify-center gap-5 my-9">
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
      <div className="flex flex-col gap-3.5 pt-9 pb-7 border-t border-white text-center text-white">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}
