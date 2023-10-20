import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  { id: 1, title: "React Commerce", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officiis natus odio earum recusandae vel architecto quo qui obcaecati explicabo, est ea repudiandae dolor consectetur dignissimos tenetur, voluptatem ipsam accusamus.", image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 2, title: "Next.js Blog", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officiis natus odio earum recusandae vel architecto quo qui obcaecati explicabo, est ea repudiandae dolor consectetur dignissimos tenetur, voluptatem ipsam accusamus.", image: "https://images.pexels.com/photos/18672926/pexels-photo-18672926/free-photo-of-sculptures-of-dragon-and-elephant-decorating-building-wall.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 3, title: "Vanilla JS App", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officiis natus odio earum recusandae vel architecto quo qui obcaecati explicabo, est ea repudiandae dolor consectetur dignissimos tenetur, voluptatem ipsam accusamus.", image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 4, title: "Music App", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officiis natus odio earum recusandae vel architecto quo qui obcaecati explicabo, est ea repudiandae dolor consectetur dignissimos tenetur, voluptatem ipsam accusamus.", image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div
            className="imageContainer"
            ref={ref}
          >
            <img src={item.image} />
          </div>
          <motion.div
            className="textContainer"
            style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div
      className="portfolio"
      ref={ref}
    >
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Portfolio;
