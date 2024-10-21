import Image from "next/image";
import { Fragment } from "react";
import * as motion from "framer-motion/client";

const logoGroup1 = ["amazon", "dribbble", "hubspot"];
const logoGroup2 = ["netflix", "notion", "zoom"];
const logoGroupCombined = [...logoGroup1, ...logoGroup2];

export default function LogoTicker() {
  return (
    <section className="mt-16 flex flex-col gap-5 overflow-hidden lg:mt-24">
      {/* Mobile ticker start */}
      <div className="flex">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="flex flex-none -translate-x-1/2 items-center gap-9 pr-9 md:hidden"
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {logoGroup1.map((logo) => (
                <Image
                  src={`/${logo}.svg`}
                  alt={logo}
                  key={logo}
                  width={124}
                  height={48}
                  className="h-12 w-auto grayscale"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
      <div className="flex">
        <motion.div
          initial={{ translateX: "0%" }}
          animate={{ translateX: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="flex flex-none items-center gap-9 pr-9 md:hidden"
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {logoGroup2.map((logo) => (
                <Image
                  src={`/${logo}.svg`}
                  alt={logo}
                  key={logo}
                  width={124}
                  height={48}
                  className="h-12 w-auto grayscale"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
      {/* Mobile ticker end */}
      {/* Dekstop ticker start */}
      <div className="flex">
        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="hidden flex-none items-center gap-24 pr-24 md:flex"
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {logoGroupCombined.map((logo) => (
                <Image
                  src={`/${logo}.svg`}
                  alt={logo}
                  key={logo}
                  width={124}
                  height={48}
                  className="h-12 w-auto grayscale"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
