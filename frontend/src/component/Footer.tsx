

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Home,
  // Droplet,
  // ClipboardList,
  Info,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[url('https://img.freepik.com/free-photo/blurred-lab-background_23-2149305109.jpg')] bg-cover bg-centeroverflow-hidden text-white">
      {/* Curved Top Shape */}


<a href="https://www.vecteezy.com/png/26497734-businessman-on-isolated">businessman-on-isolated PNGs by Vecteezy</a>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 " />
      {/* <svg
        className="absolute -top-25 left-0 w-full translate-y-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(255,255,255)"
          d="M0,100 C480,250 860,0 1440,110 L1440,180 L0,180 Z"
          transform="scale(1,-1) translate(0,-150)"
        ></path>
      </svg> */}

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-14 pt-23">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Logo & About */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-sky-400">test</span> Program
              <span className="text-sky-400">code</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
                <Home size={16} /> Home
              </li>
              <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
                <Info size={16} /> About Us
              </li>
              <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
                {/* <Droplet size={16} /> Blood Tests */}
              </li>
              <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
                {/* <ClipboardList size={16} /> Health Packages */}
              </li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-sky-400" />
                {/* Shop 40, Ground floor, Serenity Space, opp. VISHWAS CITY-9, Gota, Ahmedabad */}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-sky-400" /> +91 95107 66011
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-sky-400" /> test@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-sky-400" /> Mon to Sun 08:00 AM - 08:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* <p>Copyrights 2025. All Rights are Reserved by SkyPathology Lab</p> */}
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-sky-400">
              Term of Condition
            </a>
            <a href="#" className="hover:text-sky-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
