/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const ScrollRevealUpFade = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      // style={{width:"100%", margin:"auto"}}
    >
      {children}
    </motion.div>
  );
};

export const UpFadeWithDelay = ({ children, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 * id }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const UpFadeWithDelayProjects = ({ children, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 * id }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealZoomIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealImage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
