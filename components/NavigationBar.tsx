
import {
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  return (
     <nav className="flex items-center justify-between border-b border-black/10  px-6 py-5 md:px-12 relative z-50">
        <div className="mb-1 flex items-center gap-3">
          <p className="text-base font-bold uppercase tracking-[0.15em] text-white">
            Curriculum Vitae | 
          </p>

          <a
            href="https://wa.me/6282223331149"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white transition hover:text-lime-700"
          >
            <FaWhatsapp size={24} />
          </a>

          
        </div>

        <ul className="hidden items-center gap-10 text-l font-medium md:flex">
          <li className="text-white hover:text-lime-700"><a href="#home">Home</a></li>
          <li className="text-white hover:text-lime-700"><a href="#myjourney">MyJourney</a></li>
          <li className="text-white hover:text-lime-700"><a href="#myskill">Skill</a></li>
          <li className="text-white hover:text-lime-700"><a href="#about">About</a></li>
          <li className="text-white hover:text-lime-700"><a href="#projects">Projects</a></li>
          <li className="text-white hover:text-lime-700"><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
  );
}