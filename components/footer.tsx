import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Solutions: [
    "Photo Editor",
    "Background Remover",
    "AI Art Generator",
    "Batch Editor",
  ],
  Resources: ["Blog", "Tutorials", "Help Center", "Documentation"],
  Legal: ["Terms", "Privacy", "Cookies", "Licenses"],
};

const socialIcons = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Youtube size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0a1520] text-gray-300"
    >
      <div className="container mx-auto px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-16"
        >
          {/* Logo and Description */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                PicEdit<span className="text-purple-400">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Unleash your creativity with PicEdit.ai's powerful AI-driven photo
              editing tools. Create stunning visuals in minutes.
            </p>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            variants={containerVariants}
            className="col-span-2 md:col-span-3 lg:col-span-3 grid grid-cols-3 gap-8 justify-between"
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-6">
            {socialIcons.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PicEdit.ai. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
