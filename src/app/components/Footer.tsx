"use client";

import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "About", to: "about" },
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Logo & About */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt={personalData.name}
                width={90}
                height={90}
                priority
              />
            </Link>

            <p className="text-gray-400 leading-7 text-sm">
              Passionate Full Stack MERN & Next.js Developer focused on building
              scalable web applications, intuitive user experiences, and modern
              digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.25em] text-sm mb-6">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-[0.25em] text-sm mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <Link
                href={`mailto:${personalData.email}`}
                className="block hover:text-red-500 transition-colors"
              >
                {personalData.email}
              </Link>

              <Link
                href={`tel:${personalData.phone}`}
                className="block hover:text-red-500 transition-colors"
              >
                {personalData.phone}
              </Link>

              <p>{personalData.address}</p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Link
                href={personalData.github}
                target="_blank"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href={personalData.Instagram}
                target="_blank"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} <strong>{personalData.name}</strong>. All
            Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <span className="text-red-500">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;