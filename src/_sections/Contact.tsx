import Button from "@/_components/Button";
import Card from "@/_components/Card";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="container mt-16 lg:mt-24">
      <div className="text-center lg:flex lg:gap-10 lg:text-start">
        <h2 className="inline rounded-md bg-p-green px-1.5 text-h2-mob font-medium lg:self-start xl:text-h2">
          Contact Us
        </h2>
        <p className="mt-7 leading-6 lg:mt-0 lg:max-w-xl xl:text-lg">
          Connect with Us: Let&apos;s Discuss Your{" "}
          <br className="hidden lg:inline" /> Digital Marketing Needs
        </p>
      </div>

      <form action="">
        <Card
          border={false}
          className="relative mt-10 overflow-hidden bg-p-grey px-7 py-10 lg:mt-20 lg:px-24 lg:py-14"
        >
          <div className="lg:max-w-[34.75rem]">
            <div className="flex items-center justify-between px-5 pb-10 sm:justify-normal sm:gap-9 sm:px-0">
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="hi"
                  name="contact"
                  className="relative h-7 w-7 shrink-0 cursor-pointer appearance-none rounded-full border border-black outline-none before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full checked:before:bg-p-green focus:ring-2 focus:ring-p-dark focus:before:bg-p-green"
                  defaultChecked
                />
                <label htmlFor="hi" className="cursor-pointer xl:text-lg">
                  Say Hi
                </label>
              </div>
              <div className="flex items-center gap-3.5">
                <input
                  type="radio"
                  id="quote"
                  name="contact"
                  className="relative h-7 w-7 shrink-0 cursor-pointer appearance-none rounded-full border border-black outline-none before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full checked:before:bg-p-green focus:ring-2 focus:ring-p-dark focus:before:bg-p-green"
                />
                <label htmlFor="quote" className="cursor-pointer xl:text-lg">
                  Get a Quote
                </label>
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
                  className="mt-2.5 block w-full rounded-xl border border-black px-5 py-4 outline-p-dark"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2.5 block w-full rounded-xl border border-black px-5 py-4 outline-p-dark"
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
                  className="mt-2.5 block w-full rounded-xl border border-black px-5 py-4 outline-p-dark"
                  required
                />
              </div>
              <Button className="mt-5 hover:border hover:border-black hover:bg-p-green hover:!text-black">
                Send Message
              </Button>
            </div>
          </div>
          <Image
            src="/contact-illustration.svg"
            alt=""
            width={690}
            height={600}
            className="absolute -right-0 top-1/2 hidden w-auto -translate-y-1/2 translate-x-1/2 lg:block lg:h-[25rem] xl:h-[37.5rem]"
          />
        </Card>
      </form>
    </section>
  );
}
