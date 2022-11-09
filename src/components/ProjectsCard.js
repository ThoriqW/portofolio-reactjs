import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 5 },
};

const ProjectsCard = (props) => {
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
      <div className="project-card">
        <img
          src={props.image}
          alt="project"
          className="projects-card-image"
        ></img>
        <div className="image-description mt-2">
          <h5>{props.title}</h5>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <FontAwesomeIcon icon={faGithub} className="icon-project" />
            <span>Source</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
