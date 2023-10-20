import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer"
        variants={variants}
      >
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
      >
        <div className="title">
          <img
            src="./people.webp"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unquie</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ex maiores, dolor voluptatum itaque harum nisi non quisquam assumenda distinctio debitis dicta unde, ad sunt saepe enim nostrum praesentium eveniet!</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ex maiores, dolor voluptatum itaque harum nisi non quisquam assumenda distinctio debitis dicta unde, ad sunt saepe enim nostrum praesentium eveniet!</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ex maiores, dolor voluptatum itaque harum nisi non quisquam assumenda distinctio debitis dicta unde, ad sunt saepe enim nostrum praesentium eveniet!</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ex maiores, dolor voluptatum itaque harum nisi non quisquam assumenda distinctio debitis dicta unde, ad sunt saepe enim nostrum praesentium eveniet!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
