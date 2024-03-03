import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact mb-40" id="contact">
      <div className="contact-heading mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mx-auto w-fit"
        >
          Get <span className="text-purple-700">In Touch</span>
        </motion.div>
      </div>
      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
