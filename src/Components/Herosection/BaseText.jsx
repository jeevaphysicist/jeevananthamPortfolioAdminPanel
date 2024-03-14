import React, { Fragment } from 'react';
import { TypewriterEffectSmooth ,TypewriterEffect } from "./TypeWriterEffect";

const BaseText = () => {
    const words = [
        {
          text: "Build",          
          className: "text-[white] dark:text-[white] text-[15px] md:text-[30px] lg:text-[45px]",
        },
        {
          text: "awesome",          
          className: "text-[white] dark:text-[white] text-[15px] md:text-[30px] lg:text-[45px]",
        },
        {
          text: "apps",          
          className: "text-[white] dark:text-[white] text-[15px] md:text-[30px] lg:text-[45px]",
        },
        {
          text: "with",          
          className: "text-[white] dark:text-[white] text-[15px] md:text-[30px] lg:text-[45px]",
        },
        {
          text: "JEEVANANTHAM.",
          className: "text-blue-500 dark:text-blue-500 text-[15px] md:text-[30px] lg:text-[45px]",
        },
      ];
  return (
  <Fragment>
       
      <p className="text-neutral-100 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      {/* <TypewriterEffect words={words} /> */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact now
        </button>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>

  </Fragment>
  )
}

export default BaseText