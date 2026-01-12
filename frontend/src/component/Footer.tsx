import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Home,
  Info,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091215367-59ab6b8f1b7c')] bg-cover bg-center opacity-10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              <span className="text-sky-400">Test</span> Program
              <span className="text-sky-400">Code</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Trusted diagnostic services with accurate results, modern
              technology, and professional healthcare support.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-white/10 hover:bg-sky-500 hover:scale-110 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-sky-400/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 hover:text-sky-400 cursor-pointer transition">
                <Home size={16} /> Home
              </li>
              <li className="flex items-center gap-3 hover:text-sky-400 cursor-pointer transition">
                <Info size={16} /> About Us
              </li>
              <li className="flex items-center gap-3 hover:text-sky-400 cursor-pointer transition">
                <Phone size={16} /> Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-sky-400/40 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin className="text-sky-400 min-w-[18px]" size={18} />
                Shop 40, Ground floor, Serenity Space, opp. VISHWAS CITY-9, Gota, Ahmedabad, Gujarat 382481
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-sky-400 min-w-[18px]" size={18} />
                +91 95107 66011
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-sky-400 min-w-[18px]" size={18} />
                skypathology025@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <Clock className="text-sky-400 min-w-[18px]" size={18} />
                Mon to Sun 24 Hours - 24×7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Test Program Code. All Rights Reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-sky-400 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;