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

const growthStages = [
  {
    Period: "2005",
    position: "Graduated From High School",
    jobrole: "Fresh Graduated",
    description:
      "Graduated from high school with a strong foundation in mathematics, science, and problem-solving skills.",
    keyproject: [
      "Science and Mathematics Studies",
      "School Academic Projects",
      "Team-Based Learning Activities",
      "Personal Skill Development"
    ],
      achievement: [
      "Successfully completed high school education at boarding school",
      "Built strong analytical and logical thinking skills",
      "Demonstrated discipline and learning consistency",
      "Prepared for entry into the multi-industry"
      ],
  },
  {
    Period: "2007",
    position: "Sampling Inspector",
    jobrole: "Industrial Experience",
    description:
      "Performed dimensional and functional sampling inspections on production units, ensuring compliance with quality standards and inspection requirements.",

    keyproject: [
      "Tightening Torque Verification",
      "Force Measurement Inspection",
      "Liquid Level Quality Check",
      "Dimensional Sampling Inspection",
      "Inspection Data Recording",
      "Quality Defect Identification"
    ],

    achievement: [
      "Supported Best-Selling Model Launch",
      "Supported Japan Export Models",
      "Ensured New Model Quality Compliance",
      "Contributed to Quality Assurance Programs"
    ],
    },
  {
    Period: "2009",
    position: "Sampling Inspection Administration",
    jobrole: "Quality Data Management",

    description:
      "Managed quality inspection data, reporting activities, and digitalized manual inspection records using VBA-based automation.",

    keyproject: [
      "Inspection Data Management",
      "Daily Quality Reporting",
      "Weekly & Monthly Reports",
      "VBA Report Automation",
      "Inspection Data Digitalization"
    ],

    achievement: [
      "Paperless Inspection Records",
      "VBA Reporting Automation",
      "Improved Data Accuracy",
      "Faster Report Preparation"
    ],
    },
  {
    Period: "2012",
    position: "Sampling Inspection Team Leader",
    jobrole: "Process Improvement & Team Leadership",

    description:
      "Led inspection team activities, standardized quality processes, and developed cost-effective digital solutions to improve reporting, documentation, and process control.",

    keyproject: [
      "Team Process Standardization",
      "Quality Documentation System",
      "Tightening Torque Management System",
      "Wave Scan Automation",
      "VBA-Based Reporting Tools"
    ],

    achievement: [
      "Developed Torque Management System",
      "Automated Wave Scan Reporting",
      "Improved Documentation Efficiency",
      "Reduced Manual Data Entry"
    ],
  },
  {
    Period: "2016",
    position: "Quality Project Staff",
    jobrole: "New Model & Quality Development",

    description:
      "Supported new model development activities, production readiness, and quality issue resolution to ensure smooth project launches and manufacturing quality compliance.",

    keyproject: [
      "New Model Development",
      "Production Readiness Preparation",
      "Quality Defect Investigation",
      "Project Quality Assurance",
      "Specification Check Digitalization"
    ],

    achievement: [
      "Digitized Specification Inspection Process",
      "Replaced Manual Checksheet with Web Application",
      "Improved Inspection Traceability",
      "Enhanced Quality Data Accessibility"
    ],
  },
  {
     Period: "2022",
    position: "Quality Digital Solutions Engineer",
    jobrole: "Digital Transformation & Solution Engineering",

    description:
      "Designed and implemented digital quality solutions, optimizing ATS Inspect workflows, user experience, and system integration to support manufacturing quality operations.",

    keyproject: [
      "ATS Inspect Implementation",
      "Quality Workflow Optimization",
      "Quality System UI/UX Design",
      "Backend Process Configuration",
      "Manufacturing Digitalization"
    ],

    achievement: [
      "ATS Go-Live in 6 Months",
      "Zero Production Downtime",
      "Standardized User Interface Design",
      "Accelerated Plant-Wide Adoption"
    ],
  },
  {
    Period: "Now",
    position: "Quality Digital Solutions Engineer",
    jobrole: "AI-Driven Quality Innovation",

    description:
      "Driving the integration of AI-powered inspection solutions with manufacturing quality systems to improve inspection efficiency, reduce implementation costs, and accelerate digital transformation.",

    keyproject: [
      "ATS & AI Integration",
      "SpecVision Inspect Development",
      "SpecVision Configurator Development",
      "AI-Based Quality Inspection",
      "Low-Cost Vision System Deployment"
    ],

    achievement: [
      "Reduced AI Implementation Cost",
      "No-Code AI Training Platform",
      "Integrated ATS with AI Inspection",
      "Accelerated AI Adoption in Quality"
    ],
  },
];

export default function ProfessionalGrowth() {
  const [activeStage, setActiveStage] = useState(growthStages.length - 1);
  const selectedStage = growthStages[activeStage];
    
  return (
    <>
      <section
        id="myjourney"
        className="grid min-h-[100px] items-center gap-10 px-6 py-0 md:grid-cols-2 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
            <div className="mb-16 max-w-2xl">
              <p className="mb-3 font-mono text-xs tracking-[0.3em] text-lime-700">
                CAREER DEVELOPMENT
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
                Educations &{" "}
                <span className="text-lime-700">Career Journey.</span>
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
                src="/book.webp"
                alt="Yudhi C Andres"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-contain relative x-2 y-20 z-10"
                priority
              />
      
        </div>
      </section>    
      <section
        id="growth"
        className="grid min-h-[100px] items-center gap-10 px-6 py-3 md:grid-cols-1 md:px-12"
      > 

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-12 hidden h-1 -translate-y-0 -rotate-[0deg] bg-lime-200 md:block" />
            {/* Separation Line */}
            <div className="absolute left-45 right-0 top-12 hidden w-1 h-40 -translate-y-0 -rotate-[0deg] bg-gray-200 md:block" />
            <div className="absolute left-200 right-0 top-12 hidden w-1 h-40 -translate-y-0 -rotate-[0deg] bg-gray-200 md:block" />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-7 md:gap-6">
              {growthStages.map((stage, index) => (
                <article
                  key={stage.Period}
                  onMouseEnter={() => setActiveStage(index)}
                  
                  className="relative cursor-pointer"
                >
                  {/* Timeline Marker */}
                  <div className="relative z-10 mb-7 flex items-center gap-4 md:block">
                    <div
                      className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-xl font-bold shadow-sm hover:bg-lime-300 hover:text-black ${
                        index === 5 || index === 6
                          ? "bg-gray-200 text-gray-500"
                          : "bg-lime-700 text-white"
                      }`}
                    >
                      {stage.Period}
                    </div>

                    <span
                      className={`mt-2 block max-w-[140px] font-mono text-xs uppercase tracking-widest md:mt-4 md:max-w-[200px]
                      ${
                        activeStage === index
                          ? "text-lime-600 font-bold"
                          : "text-gray-400"
                      }`}
                    >
                      {stage.position}
                    </span>

                  </div>

                </article>
              ))}
            </div>
          </div>
        
      </section>
      {selectedStage && (
        <section
          id="growth-description"
          className="grid min-h-[100px] items-center gap-10 px-6 py-0 md:grid-cols-1 md:px-12 animate-in fade-in"
        >
          {/* Horizontal Timeline */}
          <div className="relative bg-lime-600 rounded-xl p-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2">
              
                  {/* Item 1 */}
                  <div className="flex gap-2">
                    <div className="flex h-40 w-40 items-center justify-center rounded-xl ">
                      <Clipboard className="h-25 w-25 text-white [stroke-width:1]" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Job Role
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {selectedStage.description}
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="flex h-40 w-40 items-center justify-center rounded-xl ">
                      <Rocket className="h-25 w-25 text-white [stroke-width:1]" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Key Projects
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        <ol className="list-decimal pl-5 text-black space-y-1">
                          {selectedStage.keyproject.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ol>
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="flex h-40 w-40 items-center justify-center rounded-xl ">
                      <Medal className="h-25 w-25 text-white [stroke-width:1]" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Achievements
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        <ol className="list-decimal pl-5 text-black space-y-1">
                          {selectedStage.achievement.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ol>
                      </p>
                    </div>
                  </div>
                
            </div>
          </div>
        
      </section>
      )}
    </>
  );
}
