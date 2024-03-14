import { Fragment } from "react";
import Herosection from "./Herosection";
import { motion } from "framer-motion";
import BaseText from "./BaseText";


const Index = () => {
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/posting-29a04.appspot.com/o/coverimage3.png?alt=media&token=bd9c6206-fb3c-42da-a75d-2a23c9eb7b19",
        "https://firebasestorage.googleapis.com/v0/b/jeevanthamportfolio.appspot.com/o/1.png?alt=media&token=cd66a078-1fa7-4306-8784-87f410cd0448",
        "https://firebasestorage.googleapis.com/v0/b/posting-29a04.appspot.com/o/coverimage.png?alt=media&token=0fd608df-7bcd-40c8-a245-070ddeaa8ca2",
      ];
  return (
    <Fragment>
    <div className="relative h-[40rem]">
       <Herosection className="h-[40rem]" images={images}>
       <motion.div className="absolute uppercase z-50 top-5 left-10 text-[50px] text-[white]"> Rabtoies</motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
       <BaseText/>
      </motion.div>
    </Herosection>
    </div>
   </Fragment>
  )
}

export default Index