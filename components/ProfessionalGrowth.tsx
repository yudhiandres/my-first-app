
const growthStages = [
  {
    Period: "2005",
    position: "Graduated From High School",
    title: "Industrial Experience",
    description:
      "Building a strong understanding of industrial processes, quality standards, and manufacturing needs.",
    status: "Experience",
  },
  {
    Period: "2007",
    position: "Sampling Inspector",
    title: "Industrial Software",
    description:
      "Developing and integrating software solutions for ATS workflows and production inspection systems.",
    status: "Experience",
  },
  {
    Period: "2009",
    position: "Sampling Inspection Administration",
    title: "AI Vision Integration",
    description:
      "Working with computer vision, visual inspection, and AI performance monitoring for industrial applications.",
    status: "Focus",
  },
  {
    Period: "2012",
    position: "Sampling Inspection Team Leader",
    title: "Continuous Growth",
    description:
      "Advancing technical expertise, pursuing further education, and preparing for broader career opportunities.",
    status: "Future Goal",
  },
  {
    Period: "2016",
    position: "Quality Project Staff",
    title: "Continuous Growth",
    description:
      "Advancing technical expertise, pursuing further education, and preparing for broader career opportunities.",
    status: "Future Goal",
  },
  {
    Period: "2022 - Now",
    position: "Quality System Engineer",
    title: "Continuous Growth",
    description:
      "Advancing technical expertise, pursuing further education, and preparing for broader career opportunities.",
    status: "Future Goal",
  },
];

export default function ProfessionalGrowth() {
  return (
    <section
      id="growth"
      className="grid min-h-[650px] items-center gap-10 px-6 py-10 md:grid-cols-1 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-lime-700">
            CAREER DEVELOPMENT
          </p>

          <h2 className="text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
            Educations &{" "}
            <span className="text-lime-700">Carrer Journey.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            A continuous journey of learning, engineering, and
            building impactful technology solutions for industry.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 -translate-y-0 -rotate-[0deg] bg-lime-200 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-6">
            {growthStages.map((stage, index) => (
              <article
                key={stage.Period}
                className={`relative "md:-translate-y-0"}`}
              >
                {/* Timeline Marker */}
                <div className="relative z-10 mb-7 flex items-center gap-4 md:block">
                  <div
                    className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ${
                      index === 5
                        ? "bg-gray-200 text-gray-500"
                        : "bg-lime-700 text-white"
                    }`}
                  >
                    {stage.Period}
                  </div>

                  <span className="mt-2 block max-w-[140px] font-mono text-xs uppercase tracking-widest text-gray-400">
                    {stage.position}
                  </span>
                </div>

                {/* Content Card */}
                <div className="h-full rounded-xl bg-gray-0 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-white hover:shadow-lg">
                  <span
                    className={`mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      index === 5
                        ? "bg-gray-200 text-gray-600"
                        : "bg-lime-100 text-lime-800"
                    }`}
                  >
                    {stage.status}
                  </span>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {stage.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
