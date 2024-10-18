import Image from "next/image";
import { Fragment } from "react";

const logoGroup1 = ["amazon", "dribbble", "hubspot"];
const logoGroup2 = ["netflix", "notion", "zoom"];
const logoGroupCombined = [...logoGroup1, ...logoGroup2];

export default function LogoTicker() {
  return (
    <section className="flex flex-col gap-5 mt-16 overflow-hidden">
      {/* Mobile ticker start */}
      <div className="flex md:hidden items-center gap-9">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {logoGroup1.map((logo) => (
              <Image
                src={`/${logo}.svg`}
                alt={logo}
                key={logo}
                width={124}
                height={48}
                className="h-12 grayscale"
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div className="flex md:hidden items-center gap-9">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {logoGroup2.map((logo) => (
              <Image
                src={`/${logo}.svg`}
                alt={logo}
                key={logo}
                width={124}
                height={48}
                className="h-12 grayscale"
              />
            ))}
          </Fragment>
        ))}
      </div>
      {/* Mobile ticker end */}
      {/* Dekstop ticker start */}
      <div className="hidden md:flex items-center gap-24">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {logoGroupCombined.map((logo) => (
              <Image
                src={`/${logo}.svg`}
                alt={logo}
                key={logo}
                width={124}
                height={48}
                className="h-12 grayscale"
              />
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
