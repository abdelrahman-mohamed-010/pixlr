import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Download", "Updates"],
  Solutions: [
    "Photo Editor",
    "Background Remover",
    "AI Art Generator",
    "Batch Editor",
  ],
  Resources: ["Blog", "Tutorials", "Help Center", "Documentation"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Terms", "Privacy", "Cookies", "Licenses"],
};

const socialIcons = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Youtube size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1520] text-gray-300">
      <div className="container mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                PicEdit<span className="text-purple-400">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Unleash your creativity with PicEdit.ai's powerful AI-driven photo
              editing tools. Create stunning visuals in minutes.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
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
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
}
