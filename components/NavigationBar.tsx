
import {
  FaWhatsapp,
  FaRegFolder,
  
} from "react-icons/fa";
import { styles } from "../config/styles";
export default function Navbar() {
  return (
     <nav className={`flex w-8xl items-center justify-between px-6 py-4 md:px-12 relative z-50 ${styles.navBarColor}`}>
        <div className="mb-1 flex items-center gap-3">
          <p className=" text-2xl font-bold uppercase text-white">
            Portofolio | 
          </p>

          <a
            href="https://wa.me/6282223331149"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-lime-700 transition hover:text-white"
          >
            <FaRegFolder size={30} />
          </a>

          
        </div>

        <ul className="hidden items-center gap-10 text-l font-popins md:flex">

          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#home">Home</a></li>
          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#myjourney">MyJourney</a></li>
          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#myskill">Skill</a></li>
          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#about">About</a></li>
          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#projects">Projects</a></li>
          <li className={`${styles.navBarMenuFont} ${styles.navBarMenuOnHover}`}><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
  );
}