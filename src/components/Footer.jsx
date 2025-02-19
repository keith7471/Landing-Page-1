import React from "react";
import { FOOTER_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-10 text-gray-300">
      <div className="border-t border-gray-600 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {FOOTER_CONTENT.sections.map((section, index) => (
            <motion.div
              key={index}
              className="mt-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-white font-small mb-1">{section.title}</h3>
              <ul className="gap-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    className="font-light hover:underline"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <a href={link.url}>{link.text}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-600 flex flex-row justify-between items-center py-3 mt-5">
          <div className="text-xs">
            <p>{FOOTER_CONTENT.platformsText}</p>
          </div>
          <div className="text-xs">
            <p>{FOOTER_CONTENT.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
