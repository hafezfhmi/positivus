import Button from "@/_components/Button";
import Card from "@/_components/Card";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="container mt-16 lg:mt-24">
      <div className="lg:flex lg:gap-10 text-center lg:text-start">
        <h2 className="px-1.5 text-h2-mob lg:text-h2 lg:self-start font-medium bg-p-green inline rounded-md">
          Contact Us
        </h2>
        <p className="mt-7 lg:mt-0 leading-6 lg:text-lg lg:max-w-xl">
          Connect with Us: Let&apos;s Discuss Your{" "}
          <br className="hidden lg:inline" /> Digital Marketing Needs
        </p>
      </div>

      <form action="">
        <Card
          border={false}
          className="relative bg-p-grey py-10 lg:py-14 px-7 lg:px-24 mt-10 lg:mt-20 overflow-hidden"
        >
          <div className="lg:max-w-[34.75rem]">
            <div className="flex justify-between sm:justify-normal sm:gap-9 items-center pb-10 px-5 sm:px-0">
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="hi"
                  name="contact"
                  className="relative appearance-none w-7 h-7 border border-black rounded-full shrink-0 outline-none focus:ring-2 focus:ring-p-dark before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 checked:before:bg-p-green focus:before:bg-p-green"
                  defaultChecked
                />
                <label htmlFor="hi">Say Hi</label>
              </div>
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="quote"
                  name="contact"
                  className="relative appearance-none w-7 h-7 border border-black rounded-full shrink-0 outline-none focus:ring-2 focus:ring-p-dark before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 checked:before:bg-p-green focus:before:bg-p-green"
                />
                <label htmlFor="quote">Get a Quote</label>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full py-4 px-5 mt-2.5 rounded-xl block border border-black outline-p-dark"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="w-full py-4 px-5 mt-2.5 rounded-xl block border border-black outline-p-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full py-4 px-5 mt-2.5 rounded-xl block border border-black outline-p-dark"
                  required
                />
              </div>
              <Button className="mt-5">Send Message</Button>
            </div>
          </div>
          <Image
            src="/contact-illustration.svg"
            alt=""
            width={690}
            height={600}
            className="hidden lg:block lg:h-[25rem] xl:h-[37.5rem] w-auto absolute top-1/2 -right-0 translate-x-1/2 -translate-y-1/2"
          />
        </Card>
      </form>
    </section>
  );
}
