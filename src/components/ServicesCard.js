import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const ServicesCard = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div>
        <Card className="cardItem mt-3 mb-3">
          <Card.Body>
            <Card.Img
              className="img-icon mb-3"
              variant="top"
              src={props.image}
            />
            <Card.Title className="mb-2">{props.title}</Card.Title>
            <Card.Subtitle className="card-subTitle">
              {props.subTitle}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
