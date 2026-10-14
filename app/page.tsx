import {
  ArrowUpRight,
  Camera,
  Code2,
  Cpu,
  Download,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2eb] text-[#171816]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between border-b border-black/10 px-6 py-5 md:px-12 relative z-50">
        <div className="mb-1 flex items-center gap-3">
          <p className="text-base font-bold uppercase tracking-[0.15em] text-gray-500">
            Curriculum Vitae | 
          </p>

          <a
            href="https://wa.me/6282223331149"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-600 transition hover:text-lime-700"
          >
            <FaWhatsapp size={24} />
          </a>

          
        </div>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid min-h-[650px] items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-12"
      >
        <div>
          <h3 className="text-xl font-bold text-lime-800">Hallo, kenalkan saya</h3>
          

          <h2 className="text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
            Yudhi C{" "} 
            
            <span className="text-lime-700">
               Andres
            </span>
          </h2>

          <p className="mb-8 font-mono text-xs tracking-[0.25em] text-lime-700">
            QUALITY CONTROL / INDUSTRIAL SOLUTIONS ENGINEER
          </p>

          <p className="mt-9 max-w-lg leading-8 text-gray-600">
            Berpengalaman lebih dari 19 tahun di dunia manufaktur otomotif,
            dengan 5 tahun terakhir fokus pengembangan solusi teknologi yang
            menjawab kebutuhan nyata. Saya tertarik pada
            pengembangan aplikasi, computer vision, integrasi
            sistem, serta peningkatan efisiensi proses industri.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-lime-700"
            >
              Download CV <Download size={18} />
            </a>

          </div>

          <div className="mt-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Follow me on social media
          </p>

          <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/username/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 transition hover:-translate-y-1 hover:text-lime-700"
              >
                <FaLinkedinIn size={24} />
              </a>

              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 transition hover:-translate-y-1 hover:text-lime-700"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.instagram.com/username/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 transition hover:-translate-y-1 hover:text-lime-700"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
        </div>

      

        {/* VISUAL */}
       
      <div className="relative w-[600px] h-[800px] mx-auto">

        <div className="absolute inset-0 flex items-center justify-center z-0">

          

          {/* Rectangle lime depan */}
          <div className="absolute w-100 h-800 bg-lime-700 rotate-0 opacity-90 z-10 pointer-events-none" />

        </div>

        {/* Foto profil */}
        <Image
          src="/photo_profile4.png"
          alt="Yudhi C Andres"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-contain relative x-2 y-20 z-10"
          priority
        />

      </div>
        
      </section>

     <ProfessionalGrowth />

      {/* HERO */}
      <section
        id="home"
        className="grid min-h-[650px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12"
      >
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.25em] text-lime-700">
            INDUSTRIAL SOFTWARE / AI VISION
          </p>

          <h2 className="text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
            Making machines
            <br />
            <span className="italic text-lime-700">
              see smarter.
            </span>
          </h2>

          <p className="mt-7 max-w-lg leading-8 text-gray-600">
            Saya mengembangkan solusi software dan Artificial
            Intelligence untuk kebutuhan industri, mulai dari
            computer vision, inspeksi visual, hingga monitoring
            performa AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#171816] px-6 py-4 text-sm font-bold text-white transition hover:bg-lime-700"
            >
              Lihat Project <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="border border-black/20 px-6 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative min-h-[350px] overflow-hidden bg-[#20231f] text-lime-300 md:min-h-[450px]">
          <Image
            src="/obj_det.gif"
            alt="Yudhi C Andres"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

          <span className="absolute left-5 top-5 font-mono text-xs">
            COMPUTER VISION
          </span>

          <span className="absolute bottom-5 right-5 font-mono text-xs">
            SYSTEM ONLINE
          </span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 md:px-12">
        <p className="font-mono text-xs tracking-widest text-lime-700">
          01 / ABOUT ME
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
            Engineering mindset.
            <br />
            Practical solutions.
          </h2>

          <p className="max-w-xl leading-8 text-gray-600">
            Berpengalaman lebih dari 19 tahun di dunia manufaktur otomotif,
            dengan 5 tahun terakhir fokus pengembangan solusi teknologi yang
            menjawab kebutuhan nyata. Saya tertarik pada
            pengembangan aplikasi, computer vision, integrasi
            sistem, serta peningkatan efisiensi proses industri.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#20231f] px-6 py-20 text-white md:px-12">
        <p className="font-mono text-xs tracking-widest text-lime-300">
          02 / SELECTED PROJECTS
        </p>

        <h2 className="mt-5 text-4xl font-black tracking-tighter md:text-6xl">
          Work that matters.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="border border-white/15 p-7 transition hover:border-lime-300">
            <Camera className="mb-6 text-lime-300" size={32} />
            <h3 className="text-xl font-bold">SpecVision Inspect</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Sistem inspeksi visual berbasis kamera dan AI
              untuk kebutuhan manufaktur.
            </p>
          </div>

          <div className="border border-white/15 p-7 transition hover:border-lime-300">
            <Code2 className="mb-6 text-lime-300" size={32} />
            <h3 className="text-xl font-bold">SpecVision Configurator</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Aplikasi desktop untuk mengelola konfigurasi
              produk, kamera, template, dan model AI.
            </p>
          </div>

          <div className="border border-white/15 p-7 transition hover:border-lime-300">
            <Cpu className="mb-6 text-lime-300" size={32} />
            <h3 className="text-xl font-bold">AI Performance</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Monitoring akurasi deteksi, utilisasi kamera,
              tren inspeksi, dan kesalahan hasil pemeriksaan.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 md:px-12">
        <p className="font-mono text-xs tracking-widest text-lime-700">
          03 / TECHNOLOGY
        </p>

        <h2 className="mt-5 text-4xl font-black tracking-tighter md:text-5xl">
          Tools I work with.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Python",
            "PyQt5",
            "OpenCV",
            "YOLO",
            "ONNX",
            "SQLite",
            "Next.js",
            "REST API",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-black/15 px-5 py-3 font-mono text-sm transition hover:bg-lime-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#d7ff4f] px-6 py-20 text-center">
        <p className="font-mono text-xs tracking-widest">
          04 / CONTACT
        </p>

        <h2 className="mt-5 text-4xl font-black tracking-tighter md:text-6xl">
          Let&apos;s build something
          <br />
          meaningful.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-gray-700">
          Terbuka untuk diskusi seputar industrial AI,
          computer vision, software engineering, dan peluang
          kolaborasi.
        </p>

        <a
          href="mailto:emailanda@example.com"
          className="mt-8 inline-flex items-center gap-3 bg-[#171816] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
        >
          Hubungi Saya <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="px-6 py-7 text-center text-sm text-gray-500">
        © 2026 AA. Built with Next.js.
      </footer>
    </main>
  );
}