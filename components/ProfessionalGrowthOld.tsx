
const growthStages = [
  {
    number: "2005",
    period: "Graduated From High School",
    title: "Industrial Experience",
    description:
      "Building a strong understanding of industrial processes, quality standards, and manufacturing needs.",
    status: "Experience",
  },
  {
    number: "2007",
    period: "Sampling Inspector",
    title: "Industrial Software",
    description:
      "Developing and integrating software solutions for ATS workflows and production inspection systems.",
    status: "Experience",
  },
  {
    number: "2009",
    period: "Sampling Inspection Administration",
    title: "AI Vision Integration",
    description:
      "Working with computer vision, visual inspection, and AI performance monitoring for industrial applications.",
    status: "Focus",
  },
  {
    number: "2012",
    period: "Sampling Inspection Team Leader",
    title: "Continuous Growth",
    description:
      "Advancing technical expertise, pursuing further education, and preparing for broader career opportunities.",
    status: "Future Goal",
  },
  {
    number: "2016",
    period: "Quality Project Staff",
    title: "Continuous Growth",
    description:
      "Advancing technical expertise, pursuing further education, and preparing for broader career opportunities.",
    status: "Future Goal",
  },
  {
    number: "2022 - Now",
    period: "Quality System Engineer",
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
          <div className="absolute left-0 right-0 top-12 hidden h-1 -translate-y-7 -rotate-[12deg] bg-lime-200 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {growthStages.map((stage, index) => (
              <article
                key={stage.number}
                className={`relative ${
                  index === 0
                    ? "md:translate-y-60"
                    : index === 1
                      ? "md:translate-y-48"
                      : index === 2
                        ? "md:translate-y-36"
                        : index === 3
                          ? "md:-translate-y-24"
                          : index === 4
                            ? "md:-translate-y-12"
                            : index === 5
                              ? "md:-translate-y-0"
                              : ""
                }`}
              >
                {/* Timeline Marker */}
                <div className="relative z-10 mb-7 flex items-center gap-4 md:block">
                  <div
                    className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-sm ${
                      index === 3
                        ? "bg-gray-200 text-gray-500"
                        : "bg-lime-700 text-white"
                    }`}
                  >
                    {stage.number}
                  </div>

                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400 md:mt-5 md:block">
                    {stage.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="h-full rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-white hover:shadow-lg">
                  <span
                    className={`mb-4 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      index === 3
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
