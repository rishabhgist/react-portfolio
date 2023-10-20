import "./hero.scss";
import { motion } from "framer-motion";

const textVarients = {
  inital: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVarients = {
  inital: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVarients}
          initial="inital"
          animate="animate"
        >
          <motion.h2 variants={textVarients}>Rishabh Gist</motion.h2>
          <motion.h1 variants={textVarients}>Web developer and UI designer</motion.h1>
          <motion.div
            className="buttons"
            variants={textVarients}
          >
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVarients}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        initial="intial"
        variants={sliderVarients}
        animate="animate"
      >
        Developer Designer Creator Influencer
      </motion.div>
      <div className="imgContainer">
        <img
          src="/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
