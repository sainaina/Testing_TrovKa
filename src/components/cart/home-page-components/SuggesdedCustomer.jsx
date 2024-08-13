import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SuggestedCustomer() {
  const { t } = useTranslation();

  // Variants for animations
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // Custom hook to use Intersection Observer
  const useScrollAnimation = (threshold = 0.1) => {
    const [ref, inView] = useInView({ threshold });
    return [ref, inView];
  };

  // Using custom hook for each section
  const [section1Ref, section1InView] = useScrollAnimation();
  const [section2Ref, section2InView] = useScrollAnimation();
  const [section3Ref, section3InView] = useScrollAnimation();
  const [section4Ref, section4InView] = useScrollAnimation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex gap-5 mr-[100px] ml-[20px] my-[90px] max-md:flex-col max-md:gap-0"
    >
      <motion.div
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={fadeInLeft}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="ml-20 flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
      >
        <div className="flex flex-col self-stretch px-5 my-auto text-xl text-black max-md:mt-10 max-md:max-w-full">
          <div className="text-5xl font-extrabold text-[#98caf9] max-md:max-w-full max-md:text-4xl">
            {t('Comment1')}
          </div>
          <span className="mt-[10px] font-extrabold text-5xl text-[#FFB600] ">
            {t('Comment2')}
          </span>
          <div className="mt-[20px] max-md:max-w-full dark:text-white ">
            {t('Comment')}
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={fadeInRight}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
      >
        <motion.div
          ref={section3Ref}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          className="ml-20 w-[500px] rounded-xl dark:bg-gray-700 bg-gray-100 flex flex-col grow items-end max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex gap-5 justify-between dark:bg-gray-700 px-5 py-5 rounded-3xl bg-neutral-100 max-md:flex-wrap">
            <a href="#">
              <img
                loading="lazy"
                srcSet="/image/image1/borey.jpg"
                className="shrink-0 max-w-full aspect-square w-[108px] rounded-full"
                alt="Customer 1"
              />
            </a>
            <div className="flex flex-col my-auto text-black">
              <div className="text-xl font-medium">
                <a href="#" className="hover:opacity-50 dark:text-gray-300">
                  BoBo Rey
                </a>
              </div>
              <div className="mt-2 text-base dark:text-gray-300">
                Very nice website, I have never seen any websites that are this good
              </div>
            </div>
            <div className="font-mono self-start mt-5 text-5xl font-extrabold text-zinc-400 max-md:text-4xl">
              ”
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={section4Ref}
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
          variants={fadeInRight}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          className="w-[500px] self-stretch rounded-xl px-6 dark:bg-gray-700 py-2.5 mt-8 bg-neutral-100 max-md:px-5 max-md:max-w-full"
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
              <a href="#">
                <img
                  loading="lazy"
                  srcSet="/image/image1/meta.jpg"
                  className="shrink-0 max-w-full mt-[10px] aspect-square w-[108px] max-md:mt-8 rounded-full"
                  alt="Customer 2"
                />
              </a>
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10">
                <div className="text-xl font-medium">
                  <a href="#" className="hover:opacity-50 dark:text-gray-300">
                    NaSaina Na
                  </a>
                </div>
                <div className="mt-2 text-base dark:text-gray-300">
                  Very nice website, I have never seen any websites that are this good
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
              <div className="font-mono mt-5 text-5xl font-extrabold text-zinc-400 max-md:mt-10 max-md:text-4xl">
                ”
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={section4Ref}
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
          className="rounded-xl flex gap-5 justify-between px-5 py-5 mt-8 dark:bg-gray-700 bg-neutral-100 max-md:flex-wrap w-[500px] max-md:max-w-full ml-20"
        >
          <a href="#">
            <img
              loading="lazy"
              srcSet="/image/image1/chiminh.jpg"
              className="shrink-0 max-w-full aspect-square w-[108px] rounded-full"
              alt="Customer 3"
            />
          </a>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10">
              <div className="text-xl font-medium">
                <a href="#" className="hover:opacity-50 dark:text-gray-300">
                  ChiMinh
                </a>
              </div>
              <div className="mt-2 text-base dark:text-gray-300 flex-wrap">
                Very nice website, I have never seen any websites that are this good
              </div>
            </div>
            <div className="font-mono mt-5 text-5xl font-extrabold text-zinc-400 max-md:mt-10 max-md:text-4xl">
              ”
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SuggestedCustomer;
