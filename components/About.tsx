export default function About() {
  return (
    <section className="relative overflow-hidden px-6 pb-8 pt-28 sm:pt-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#8ecbff]/5 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-[#8ecbff]/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-widest">
          <span className="text-[#8ecbff]">01</span>
          <span className="text-gray-700">/</span>
          <span className="text-gray-500">ABOUT</span>
        </div>


        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* LEFT */}
          <div className="animate-fade-up">

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">

              More than just

              <br />

              <span className="text-[#8ecbff]">
                writing code.
              </span>

            </h1>


            <div className="mt-9 max-w-2xl space-y-6 text-base leading-8 sm:text-lg">

              <p className="text-gray-300">
                I'm{" "}
                <span className="font-semibold text-white">
                  Sadat Shahriar Arko
                </span>
                , a Computer Science graduate interested in building
                practical software, secure systems, and intelligent
                applications.
              </p>

              <p className="text-gray-500">
                I enjoy going beyond the surface of a technology —
                understanding how systems work, finding better ways
                to solve problems, and turning ideas into working
                products.
              </p>

            </div>


            {/* Interests */}
            <div className="mt-10">

              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                Areas I explore
              </p>

              <div className="flex flex-wrap gap-3">

                <span className="rounded-lg border border-[#8ecbff]/20 bg-[#8ecbff]/5 px-4 py-2.5 text-sm text-[#8ecbff]">
                  Software Development
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400">
                  Cybersecurity
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400">
                  Artificial Intelligence
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400">
                  Intelligent Systems
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="animate-fade-up lg:pl-8">

            <div className="relative">

              {/* Glow behind card */}
              <div className="absolute inset-6 rounded-3xl bg-[#8ecbff]/10 blur-3xl" />


              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10161c]/90 shadow-2xl backdrop-blur-xl">

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  </div>

                  <span className="font-mono text-[11px] text-gray-600">
                    profile.config
                  </span>

                </div>


                {/* Card body */}
                <div className="p-7 sm:p-8">

                  {/* Small intro */}
                  <div className="mb-8">

                    <p className="font-mono text-xs text-[#8ecbff]">
                      $ whoami
                    </p>

                    <p className="mt-3 text-2xl font-bold text-white">
                      Developer
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Building software and exploring how technology
                      can solve real-world problems.
                    </p>

                  </div>


                  {/* Information */}
                  <div className="space-y-5">

                    <InfoRow
                      label="FIELD"
                      value="Computer Science"
                    />

                    <InfoRow
                      label="FOCUS"
                      value="Software & Intelligent Systems"
                    />

                    <InfoRow
                      label="INTERESTS"
                      value="Security · AI · Systems"
                    />

                  </div>


                  {/* Status */}
                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ecbff] shadow-[0_0_10px_#8ecbff]" />

                    <span className="font-mono text-xs text-gray-500">
                      currently building & learning
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom capability strip */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

          <Capability
            number="01"
            title="BUILD"
            text="Turning concepts into functional software."
          />

          <Capability
            number="02"
            title="SECURE"
            text="Thinking about reliability and security from the start."
          />

          <Capability
            number="03"
            title="LEARN"
            text="Exploring new technologies through experimentation."
          />

        </div>

      </div>

    </section>
  );
}


/* -------------------------------- */
/* Information row */
/* -------------------------------- */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l border-[#8ecbff]/20 pl-4">

      <p className="font-mono text-[10px] tracking-[0.2em] text-gray-600">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-medium text-gray-300">
        {value}
      </p>

    </div>
  );
}


/* -------------------------------- */
/* Capability card */
/* -------------------------------- */

function Capability({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group bg-[#10151a] p-6 transition duration-300 hover:bg-[#151d24]">

      <div className="flex items-center justify-between">

        <span className="font-mono text-xs text-[#8ecbff]">
          {number}
        </span>

        <span className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8ecbff]/40" />

      </div>

      <h3 className="mt-7 text-sm font-bold tracking-widest text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
        {text}
      </p>

    </div>
  );
}