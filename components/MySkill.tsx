"use client";

import { useState } from "react";
import {
  Clipboard,
  Rocket,
  Medal
} from "lucide-react";
import {
 IconClipboard,
 IconRocket,
 IconMedal,
} from "@tabler/icons-react";
import Image from "next/image";


const language = [
  { name: "Indonesian", level: 90 },
  { name: "English", level: 85 },
];
const hardskills = [
  { name: "Excel", level: 95 },
  { name: "Power BI", level: 85 },
  { name: "Python", level: 80 },
  { name: "C#", level: 75 },
];
const softskills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 80 },
  { name: "Leadership", level: 75 },
];

export default function MySkill() {
  
    
  return (
    <>
      <section
        id="myskill"
        className="grid min-h-[100px] items-center gap-10 px-6 py-0 md:grid-cols-2 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.3em] text-lime-700">
                EXPERTISE
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
                Technical{" "}
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
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-contain relative x-2 y-20 z-10"
                priority
              />
      
        </div>
      </section>
      <section
        id="myjourney"
        className="grid min-h-[100px] items-center gap-10 px-6 py-0 md:grid-cols-3 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">

              <h2 className="text-2xl font-black leading-[1.05] tracking-tighter md:text-2xl">
              
                <span className="text-lime-700">Languages.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                A continuous journey of learning, engineering, and
                building impactful technology solutions for industry.
              </p>

              <div className="space-y-4 py-2">
                {language.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-4 w-full rounded-full bg-slate-200">
                      <div
                        className="h-4 rounded-full bg-lime-600"
                        style={{ width: `${skill.level}%` }}
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

              <h2 className="text-2xl font-black leading-[1.05] tracking-tighter md:text-2xl">
              
                <span className="text-lime-700">Hard Skills.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                A continuous journey of learning, engineering, and
                building impactful technology solutions for industry.
              </p>

              <div className="space-y-4 py-2">
                {hardskills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-4 w-full rounded-full bg-slate-200">
                      <div
                        className="h-4 rounded-full bg-lime-600"
                        style={{ width: `${skill.level}%` }}
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

              <h2 className="text-2xl font-black leading-[1.05] tracking-tighter md:text-2xl">
              
                <span className="text-lime-700">Soft Skills.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                A continuous journey of learning, engineering, and
                building impactful technology solutions for industry.
              </p>

              <div className="space-y-4 py-2">
                {softskills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-4 w-full rounded-full bg-slate-200">
                      <div
                        className="h-4 rounded-full bg-lime-600"
                        style={{ width: `${skill.level}%` }}
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
