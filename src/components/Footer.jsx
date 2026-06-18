import Logo from "@/assets/img/logo.svg";
import Favicon from "@/assets/img/favicon.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { SiX, SiSnapchat } from "react-icons/si";
import { Link } from "react-router";

const socials = [
  { icon: <Facebook size={16} />, href: "#" },
  { icon: <Instagram size={16} />, href: "#" },
  { icon: <SiX size={16} />, href: "#" },
  { icon: <Twitter size={16} />, href: "#" },
  { icon: <Linkedin size={16} />, href: "#" },
  { icon: <SiSnapchat size={16} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="footer-section pt-80">
      <div className="px-8 pb-25 md:px-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="RemoteRecruit" />
          </Link>
          <div className="relative flex items-center gap-x-5">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="
              flex h-8 w-8 items-center justify-center
              rounded-full
              bg-white/10
              text-white/80
              backdrop-blur-sm
              transition-all duration-300
              hover:bg-white/20
              hover:text-white
              hover:scale-110
            "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-slate-500" />
      <div className="text-center py-6">
        <img src={Favicon} className="mx-auto" alt="RemoteRecruit" />
      </div>
    </footer>
  );
};

export default Footer;
