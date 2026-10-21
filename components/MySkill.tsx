"use client";


import {
  LanguagesIcon,
  Rocket,
  Medal,
  Plane
} from "lucide-react";
import {
 IconLanguage,
 IconTool,
 IconMan,
 IconMedal,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const language = [
  { name: "Indonesian", level: 90 },
  { name: "English", level: 50 },
];
const digitalskill = [
  { name: "Ms Office Advanced", level: 95 },
  { name: "Python", level: 80 },
  { name: "C#", level: 60 },
  { name: "HTML & CSS", level: 30 },
];

const manufactureskill = [
  { name: "Quality Control", level: 70 },
  { name: "Prod.Preparation", level: 60 },
  { name: "Continous Improvement", level: 70 },
  { name: "ATS Inspect System", level: 80 },
];
const softskills = [
  { name: "Communication", level: 80 },
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 80 },
  { name: "Time Management", level: 75 },
];

function SkillCounter({
    target,
    isInView,
  }: {
    target: number;
    isInView: boolean;
  }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      const controls = animate(0, target, {
        duration: 1.5,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });

      return () => controls.stop();
    }, [isInView, target]);

  return <span>{count}%</span>;
}

export default function MySkill() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });
    
  return (
    <>
      <section
        id="myskill"
        className="grid min-h-[100px] items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.3em] text-lime-700">
                03 | EXPERTISE
              </p>

              <h2 className="text-3xl font-black leading-[1.1] tracking-tighter md:text-6xl">
                Technical{" "} <br />
                <span className="text-lime-700">Expertise.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                A continuous journey of learning, engineering, and
                building impactful technology solutions for industry.
              </p>
            </div>
        </div>
        <div className="relative mx-auto max-w-7xl h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
      
              {/* Foto profil */}
              <Image
                src="/expertise2.png"
                alt="Yudhi C Andres"
                fill
                sizes="(max-width: 900px) 70vw, 35vw"
                className="object-contain relative x-2 y-30 z-10"
                priority
              />
      
        </div>
      </section>
      <section
        className="grid min-h-[100px] gap-10 px-6 py-0 md:grid-cols-3 md:px-12 -mt-10"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">
              <div className="mb-4 flex ">
                <IconLanguage
                  className="h-10 w-10 text-lime-700"
                  strokeWidth={2}
                />
                <h2 className="text-2xl font-black tracking-tighter">
                  <span className="text-black">Languages.</span>
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-500 py-0">
                Proficiency in Indonesian and English for workplace communication and continuous learning.
              </p>

              <div ref={ref}>
                {language.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-gray-500">{skill.name}</span>
                      <SkillCounter
                        target={skill.level}
                        isInView={isInView}
                      />
                    </div>

                    <div className="h-4 w-full rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-lime-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                     
                    </div>
                  </div>
                ))}
              </div>

            </div>
        </div>
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
           <div className="mb-16 max-w-2xl">
              <div className="mb-4 flex ">
                <IconTool
                  className="h-10 w-10 text-lime-700"
                  strokeWidth={2}
                />
                <h2 className="text-2xl font-black tracking-tighter">
                  <span className="text-black">Hardskill.</span>
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-500 py-0">
                Technical competencies in manufacturing processes, quality management, and 
                digital solution development to drive operational excellence.
              </p>
                
              <div className="grid grid-cols-2 gap-4">
                <div ref={ref}>
                  <p className="text-m font-semibold text-lime-700">Manufacture Skill</p>
                  {manufactureskill.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-gray-500">{skill.name}</span>
                        <SkillCounter
                          target={skill.level}
                          isInView={isInView}
                        />
                      </div>

                      <div className="h-4 w-full rounded-full bg-slate-200">
                        <motion.div
                          className="h-full rounded-full bg-lime-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div ref={ref}>
                  <p className="text-m font-semibold text-lime-700">Digital Skill</p>
                  {digitalskill.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-gray-500">{skill.name}</span>
                        <SkillCounter
                          target={skill.level}
                          isInView={isInView}
                        />
                      </div>

                      <div className="h-4 w-full rounded-full bg-slate-200">
                        <motion.div
                          className="h-full rounded-full bg-lime-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
        </div>
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">
              <div className="mb-4 flex ">
                <IconMan
                  className="h-10 w-10 text-lime-700"
                  strokeWidth={2}
                />
                <h2 className="text-2xl font-black tracking-tighter">
                  <span className="text-black">Soft Skills.</span>
                </h2>
              </div>

              <p className="mt-5 leading-7 text-gray-500 py-0">
                A continuous journey of learning, engineering, and
                building impactful technology solutions for industry.
              </p>

              <div ref={ref}>
                {softskills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-gray-500">{skill.name}</span>
                      <SkillCounter
                        target={skill.level}
                        isInView={isInView}
                      />
                    </div>

                    <div className="h-4 w-full rounded-full bg-slate-200">
                      <motion.div
                        className="h-full rounded-full bg-lime-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
        </div>
        
      </section>    
      
      
    </>
  );
}
