import Image from "next/image";
import { Fragment } from "react";

const logoGroup1 = ["amazon", "dribbble", "hubspot"];
const logoGroup2 = ["netflix", "notion", "zoom"];

export default function LogoTicker() {
  return (
    <section className="flex flex-col gap-5 mt-16 overflow-hidden">
      <div className="flex gap-9 ">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {logoGroup1.map((logo) => (
              <Image
                src={`/${logo}.svg`}
                alt={logo}
                key={logo}
                width={124}
                height={48}
                className="w-[124px] h-12 grayscale"
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div className="flex gap-9 ">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {logoGroup2.map((logo) => (
              <Image
                src={`/${logo}.svg`}
                alt={logo}
                key={logo}
                width={124}
                height={48}
                className="w-[124px] h-12 grayscale"
              />
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
