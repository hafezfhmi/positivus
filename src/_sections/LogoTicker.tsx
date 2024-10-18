import Image from "next/image";
import { Fragment } from "react";
import * as motion from "framer-motion/client";

const logoGroup1 = ["amazon", "dribbble", "hubspot"];
const logoGroup2 = ["netflix", "notion", "zoom"];
const logoGroupCombined = [...logoGroup1, ...logoGroup2];

export default function LogoTicker() {
  return (
    <section className="flex flex-col gap-5 mt-16 overflow-hidden">
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
          className="flex flex-none md:hidden items-center gap-9 pr-9 -translate-x-1/2"
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
                  className="w-auto h-12 grayscale"
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
          className="flex flex-none md:hidden items-center gap-9 pr-9"
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
                  className="w-auto h-12 grayscale"
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
          className="hidden flex-none md:flex items-center gap-24 pr-24"
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
                  className="w-auto h-12 grayscale"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
