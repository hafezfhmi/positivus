import Button from "@/_components/Button";
import Card from "@/_components/Card";

export default function Contact() {
  return (
    <section className="mt-16 px-5 pb-20">
      <div className="text-center">
        <h2 className="px-[0.43rem] text-h2-mob font-medium bg-p-green inline rounded-md">
          Contact Us
        </h2>
        <p className="mt-7 leading-6">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <form action="">
        <Card border={false} className="bg-p-grey p-10 mt-10">
          <div className="flex justify-between items-center pb-10 px-5">
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
          <div className="flex flex-col gap-5 mb-2.5">
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
              />
            </div>
          </div>
        </Card>
        <Button className="mt-7">Send Message</Button>
      </form>
    </section>
  );
}
