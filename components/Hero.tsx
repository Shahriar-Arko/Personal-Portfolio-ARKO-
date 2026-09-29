export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 animate-glow rounded-full bg-[#8ecbff]/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="animate-fade-up">

          {/* Status badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            
            <span className="h-2 w-2 rounded-full bg-[#8ecbff] shadow-[0_0_10px_#8ecbff]" />

            Currently building secure intelligent systems

          </div>


          {/* Main heading */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

            Building
            <br />

            <span className="text-[#8ecbff]">
              Digital Systems.
            </span>

            <br />

            Turning Ideas
            <br />

            Into Reality.

          </h1>


          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            I'm{" "}

            <span className="font-semibold text-[#8ecbff]">
              Sadat Shahriar Arko
            </span>

            , a Computer Science Graduate passionate about software
            development, cybersecurity, artificial intelligence, and
            building real-world systems.

          </p>


          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-xl bg-[#8ecbff] px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(142,203,255,0.25)]"
            >
              Explore Projects →
            </a>


            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="animate-fade-up delay-300">
          <Terminal />
        </div>

      </div>

    </section>
  );
}


function Terminal() {
  return (
    <div className="animate-float relative mx-auto w-full max-w-xl">

      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#8ecbff]/10 blur-3xl" />


      {/* Terminal */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11161c]/95 shadow-2xl backdrop-blur-xl">

        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

          <span className="h-3 w-3 rounded-full bg-red-400" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-3 text-xs text-gray-500">
            guest@portfolio:~
          </span>

        </div>


        {/* Terminal content */}
        <div className="min-h-[330px] p-6 font-mono text-sm">

          <p className="text-gray-400">

            Type{" "}

            <span className="text-[#8ecbff]">
              'help'
            </span>{" "}

            to explore.

          </p>


          {/* whoami */}
          <div className="mt-7">

            <p>
              <span className="text-green-400">
                guest@portfolio
              </span>

              <span className="text-gray-500">
                :~$
              </span>
            </p>


            <p className="mt-3 text-gray-300">
              whoami
            </p>


            <p className="mt-3 text-gray-500">
              Computer Science Graduate
            </p>

            <p className="text-gray-500">
              Developer
            </p>

            <p className="text-gray-500">
              Security Enthusiast
            </p>

            <p className="text-gray-500">
              Researcher
            </p>

          </div>


          {/* status */}
          <div className="mt-7">

            <p>
              <span className="text-green-400">
                guest@portfolio
              </span>

              <span className="text-gray-500">
                :~$
              </span>
            </p>


            <p className="mt-3 text-gray-300">
              status
            </p>


            <p className="mt-3">

              <span className="text-green-400">
                ●
              </span>{" "}

              <span className="text-gray-400">
                Building something meaningful
              </span>

            </p>

          </div>


          {/* Cursor */}
          <div className="mt-7 flex items-center gap-2">

            <span className="text-green-400">
              guest@portfolio:~$
            </span>

            <span className="h-4 w-2 animate-pulse bg-[#8ecbff]" />

          </div>

        </div>

      </div>

    </div>
  );
}