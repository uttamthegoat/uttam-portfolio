import axios from "axios";
import { useState } from "react";
import { socialsData } from "../../data/socialsData";
import { FiPhone, FiAtSign } from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { contactsData } from "../../data/contactsData";
import { motion } from "framer-motion";
import { UpFadeWithDelay } from "../../utils/ScrollReveal";

const url = "http://localhost:5000";
// const url = "https://uttamthegoat.vercel.app";

const ContactForm = () => {
  const [visitor, setVisitor] = useState({ name: "", email: "", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const res = await axios.post(`${url}/send-email`, visitor);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-y-20 md:gap-y-20">
      <div className="md:w-1/2">
        <form className="w-11/12 sm:w-9/12 mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-8">
            <motion.label
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              htmlFor="visitorName"
              className="contact-form-label"
            >
              Name
            </motion.label>
            <motion.input
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              type="text"
              value={visitor.name}
              onChange={(e) => setVisitor({ ...visitor, name: e.target.value })}
              name="visitorName"
              placeholder="Ex: John Doe"
              id="visitorName"
              className="contact-form-input"
              required
            />
          </div>

          <div className="flex flex-col mb-8">
            <motion.label
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              htmlFor="visitorMail"
              className="contact-form-label"
            >
              Email
            </motion.label>
            <motion.input
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              type="email"
              value={visitor.email}
              onChange={(e) =>
                setVisitor({ ...visitor, email: e.target.value })
              }
              name="visitorMail"
              placeholder="Ex: johndoe@mail.com"
              id="visitorMail"
              className="contact-form-input"
              required
            />
          </div>
          <div className="flex flex-col mb-8">
            <motion.label
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              htmlFor="visitorMessage"
              className="contact-form-label"
            >
              Message
            </motion.label>
            <motion.textarea
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              name="visitorMessage"
              id="visitorMessage"
              cols="30"
              rows="7"
              value={visitor.message}
              onChange={(e) =>
                setVisitor({ ...visitor, message: e.target.value })
              }
              placeholder="Type your message..."
              className="contact-form-input-msg"
              required
            ></motion.textarea>
          </div>
          <div>
            <motion.button
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              viewport={{ once: true }}
              type="submit"
              className="contact-form-btn w-full text-2xl font-semibold py-3 rounded-xl bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-900"
            >
              <motion.p
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
                viewport={{ once: true }}
                className="text-white text-center"
              >
                Send Message
              </motion.p>
            </motion.button>
          </div>
        </form>
      </div>

      <div className="md:w-1/2">
        <div className="w-11/12 md:w-9/12 mx-auto">
          <div className="flex gap-6 mb-10">
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              href={`mailto:${contactsData.email}`}
              className="detailsleft rounded-full bg-purple-600 w-12 h-12 flex justify-center items-center"
            >
              <FiAtSign className="text-2xl" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              href={`mailto:${contactsData.email}`}
              className="detailsright text-black text-2xl font-semibold pt-2"
            >
              {contactsData.email}
            </motion.a>
          </div>
          <div className="flex gap-6 mb-10">
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              href={`tel:${contactsData.phone}`}
              className="detailsleft rounded-full bg-purple-600 w-12 h-12 flex justify-center items-center"
            >
              <FiPhone className="text-2xl" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              href={`tel:${contactsData.phone}`}
              className="detailsright text-black text-2xl font-semibold pt-2"
            >
              {contactsData.phone}
            </motion.a>
          </div>
          <div className="flex gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="detailsleft rounded-full bg-purple-600 w-[8rem] sm:w-16 h-12 flex justify-center items-center cursor-default"
            >
              <HiOutlineLocationMarker className="text-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              className="detailsright text-black text-2xl font-semibold pt-2"
            >
              {contactsData.address}
            </motion.div>
          </div>
          <div className="contact-socials flex justify-center gap-3 md:gap-0 md:justify-between mt-20 sm:mt-32 flex-wrap">
            <UpFadeWithDelay id={1}>
              <a
                href={socialsData.twitter}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaTwitter aria-label="Twitter" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={2}>
              <a
                href={socialsData.github}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaGithub aria-label="GitHub" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={3}>
              <a
                href={socialsData.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaLinkedinIn aria-label="LinkedIn" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={4}>
              <a
                href={socialsData.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaInstagram aria-label="Instagram" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={5}>
              <a
                href={socialsData.blogger}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaBloggerB aria-label="Blogger" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={6}>
              <a
                href={socialsData.youtube}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaYoutube aria-label="YouTube" />
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={7}>
              <a
                href={socialsData.reddit}
                target="_blank"
                rel="noreferrer"
                className="contact--social"
              >
                <FaRedditAlien aria-label="Reddit" />
              </a>
            </UpFadeWithDelay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
