const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "The languages I use to build and solve problems.",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript"],
    accent: "from-[#8ecbff]/20 via-[#8ecbff]/5 to-transparent",
  },
  {
    number: "02",
    title: "Web & Frameworks",
    description: "Frameworks and tools for building modern applications.",
    skills: ["Next.js", "React", "Laravel", "Flask", "Tailwind CSS"],
    accent: "from-[#8ecbff]/15 via-[#8ecbff]/5 to-transparent",
  },
  {
    number: "03",
    title: "Databases",
    description: "Technologies I've used for storing and managing data.",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    accent: "from-[#8ecbff]/20 via-[#8ecbff]/5 to-transparent",
  },
  {
    number: "04",
    title: "Tools & OS",
    description: "Tools that support development, networking, and workflow.",
    skills: ["Git", "GitHub", "Cisco Packet Tracer", "Linux", "Windows"],
    accent: "from-[#8ecbff]/15 via-[#8ecbff]/5 to-transparent",
  },
];


export default function Skills() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-24"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 h-80 w-80 rounded-full bg-[#8ecbff]/5 blur-[130px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 animate-fade-up">

          <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-widest">

            <span className="text-[#8ecbff]">
              02
            </span>

            <span className="text-gray-700">
              /
            </span>

            <span className="text-gray-500">
              TECHNOLOGIES
            </span>

          </div>


          <h1 className="max-w-4xl text-5xl font-black leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

            Technologies{" "}

            <span className="text-[#8ecbff]">
              I work with.
            </span>

          </h1>


          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            A collection of languages, frameworks, databases, and
            tools I've worked with across academic and personal
            projects.
          </p>

        </div>


        {/* Skill cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {skillGroups.map((group, index) => (

            <div
              key={group.title}
              className={`group relative animate-fade-up overflow-hidden rounded-2xl border border-white/10 bg-[#10161c] transition-all duration-500 hover:-translate-y-1 hover:border-[#8ecbff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-200"
                  : index === 2
                  ? "delay-300"
                  : "delay-400"
              }`}
            >

              {/* Accent gradient */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${group.accent} opacity-70 transition duration-500 group-hover:opacity-100`}
              />


              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#8ecbff]/5 blur-3xl transition duration-500 group-hover:bg-[#8ecbff]/10" />


              {/* Card content */}
              <div className="relative p-7 sm:p-8">

                {/* Top row */}
                <div className="flex items-start justify-between">

                  <div>

                    <div className="mb-4 flex items-center gap-3">

                      <span className="font-mono text-xs text-[#8ecbff]">
                        {group.number}
                      </span>

                      <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#8ecbff]/40" />

                    </div>


                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {group.title}
                    </h2>

                  </div>


                  {/* Count */}
                  <div className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 px-2 font-mono text-xs text-gray-500 transition group-hover:border-[#8ecbff]/20 group-hover:text-[#8ecbff]">
                    {String(group.skills.length).padStart(2, "0")}
                  </div>

                </div>


                {/* Description */}
                <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                  {group.description}
                </p>


                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2.5">

                  {group.skills.map((skill) => (

                    <div
                      key={skill}
                      className="group/skill relative overflow-hidden rounded-lg border border-white/10 bg-[#0b1015] px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ecbff]/40 hover:bg-[#8ecbff]/10 hover:text-[#8ecbff]"
                    >

                      {/* Small shine */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-500 group-hover/skill:translate-x-full" />

                      <span className="relative">
                        {skill}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Bottom line */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-700">
                    technology stack
                  </span>

                  <span className="text-xs text-gray-700 transition duration-300 group-hover:text-[#8ecbff]">
                    →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}