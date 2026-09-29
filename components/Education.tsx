const education = [
  {
    period: "Graduate",
    status: "UNIVERSITY",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BRAC University",
    result: "CGPA: 3.80 / 4.00",
    location: "Dhaka, Bangladesh",
    description:
      "Studied computer science and engineering with coursework and projects spanning software development, databases, networking, cybersecurity, artificial intelligence, and computer systems.",
  },

  {
    period: "2019 — 2021",
    status: "HIGHER SECONDARY",
    degree: "HSC — Higher Secondary Certificate",
    institution: "Birshreshtha Noor Mohammad Public College",
    result: "GPA: 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
    description:
      "Completed Higher Secondary education in the Science group with a strong foundation in mathematics, physics, chemistry, and computer-related studies.",
  },

  {
    period: "2017 — 2019",
    status: "SECONDARY",
    degree: "SSC — Secondary School Certificate",
    institution: "Rajshahi Cantonment Public School & College",
    result: "GPA: 5.00 / 5.00",
    location: "Rajshahi, Bangladesh",
    description:
      "Completed Secondary School education in the Science group, building the academic foundation for further studies in computer science and engineering.",
  },
];


export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 pb-24 pt-8 sm:pt-12"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-[#8ecbff]/5 blur-[130px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 animate-fade-up">

          <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-widest">

            <span className="text-[#8ecbff]">
              05
            </span>

            <span className="text-gray-700">
              /
            </span>

            <span className="text-gray-500">
              EDUCATION
            </span>

          </div>


          <h2 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">
            Education{" "}
            <span className="text-[#8ecbff]">
              & Learning.
            </span>
          </h2>


          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            The academic journey that shaped my foundation in
            computer science, engineering, and technology.
          </p>

        </div>


        {/* Education timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-gradient-to-b from-[#8ecbff]/40 via-white/10 to-transparent md:block" />


          <div className="space-y-6">

            {education.map((item, index) => (

              <article
                key={`${item.degree}-${item.period}`}
                className={`group relative animate-fade-up ${
                  index === 0
                    ? "delay-100"
                    : index === 1
                    ? "delay-200"
                    : "delay-300"
                }`}
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-9 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-[#8ecbff]/30 bg-[#090d11] md:flex">

                  <span className="h-2 w-2 rounded-full bg-[#8ecbff] shadow-[0_0_12px_rgba(142,203,255,0.5)] transition duration-300 group-hover:scale-150" />

                </div>


                {/* Card */}
                <div className="ml-0 overflow-hidden rounded-2xl border border-white/10 bg-[#10161c] transition-all duration-500 hover:-translate-y-1 hover:border-[#8ecbff]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:ml-10">

                  {/* Top accent */}
                  <div className="h-px w-0 bg-[#8ecbff] transition-all duration-500 group-hover:w-full" />


                  <div className="p-6 sm:p-8">

                    {/* Top information */}
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                      <div className="min-w-0">

                        {/* Status */}
                        <div className="mb-4 flex items-center gap-3">

                          <span className="rounded-full border border-[#8ecbff]/20 bg-[#8ecbff]/5 px-3 py-1 font-mono text-[10px] tracking-widest text-[#8ecbff]">
                            {item.status}
                          </span>

                        </div>


                        {/* Degree */}
                        <h3 className="text-2xl font-bold tracking-tight text-white transition duration-300 group-hover:text-[#8ecbff] sm:text-3xl">
                          {item.degree}
                        </h3>


                        {/* Institution */}
                        <p className="mt-2 text-lg font-medium text-[#8ecbff]">
                          {item.institution}
                        </p>

                      </div>


                      {/* Period */}
                      <div className="shrink-0 rounded-xl border border-white/10 bg-[#0b1015] px-4 py-2 font-mono text-xs text-gray-400 transition group-hover:border-[#8ecbff]/20 group-hover:text-[#8ecbff]">
                        {item.period}
                      </div>

                    </div>


                    {/* Divider */}
                    <div className="my-6 h-px bg-white/5" />


                    {/* Bottom information */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                      <div className="max-w-3xl">

                        <p className="text-sm leading-7 text-gray-500">
                          {item.description}
                        </p>

                      </div>


                      {/* Result + location */}
                      <div className="shrink-0 sm:text-right">

                        <p className="font-mono text-sm font-semibold text-gray-300">
                          {item.result}
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                          {item.location}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>


        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-3 font-mono text-xs text-gray-600">

          <span className="h-px w-8 bg-[#8ecbff]/30" />

          <span>
            continuous learning
          </span>

        </div>

      </div>

    </section>
  );
}