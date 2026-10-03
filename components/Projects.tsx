const projects = [
  {
    title: "Secure Portfolio Management System",
    description:
      "A secure personal portfolio platform implementing encryption, authentication, role-based access control, two-factor authentication, and digital signatures.",
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "MySQL",
      "RSA",
      "ECC",
      "HMAC",
    ],
    category: "Web Security",
    image: "",
    github: "https://github.com/Ramisa-21/Secure-Portfolio-Management-System.git",
    demo: "#",
  },

  {
    title: "UniGo — University Community Platform",
    description:
      "A comprehensive university platform that integrates cafeteria ordering, club events and tour management, marketplace services, and student payment management with role-based dashboards for students, vendors, and administrators",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Supabase",
      "PostgreSQL",
      "MVC Architecture",
    ],
    category: "Web Application",
    image: "projects/unigo.png",
    github: "https://github.com/ags-arnab/CSE470-UniGo.git",
    demo: "#",
  },

  {
    title: "ScholarMatch",
    description:
      "An AI-powered academic platform helping students discover global scholarships, connect with university professors, and streamline applications with document review tools.",
    technologies: [
      "Flask",
      "Python",
      "MongoDB",
      "Tailwind CSS",
      "Alpine.js",
      "Groq API",
      "SSLCommerz",
    ],
    category: "Web Application",
    image: "/projects/scholarship.png",
    github: "https://github.com/Shahriar-Arko/cse471-project-scholarship.git",
    demo: "https://cse471-project-scholarship.vercel.app/",
  },

  {
    title: "CineMed — Online Medicine Store",
    description:
      "An online medicine store and pharmacy management system that enables users to browse medicines by category, manage shopping carts, place and track orders, and maintain personal profiles, while providing separate Admin and Staff dashboards for medicine inventory, categories, orders, stock monitoring, and store operations.",
    technologies: [
    "Python",
    "Flask",
    "Flask-SQLAlchemy",
    "Jinja2",
    "HTML5",
    "CSS3",
    "Flask-Migrate",
    "Flask-WTF",
    "Role-Based Access Control"
    ],
    category: "Web Application",
    image: "",
    github: "#",
    demo: "#",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-32"
    >

      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 animate-fade-up">

          <div className="flex items-center gap-4">

            <div className="h-10 w-1 rounded-full bg-[#8ecbff]" />

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Engineered Systems
            </h2>

          </div>


          <p className="mt-5 max-w-2xl text-gray-500">
            A collection of systems, applications, and research
            projects I've designed and developed.
          </p>

        </div>


        {/* Project grid */}
        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => (

            <article
              key={project.title}
              className={`group animate-fade-up overflow-hidden rounded-2xl border border-white/10 bg-[#303438] transition-all duration-500 hover:-translate-y-2 hover:border-[#8ecbff]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-200"
                  : index === 2
                  ? "delay-300"
                  : "delay-400"
              }`}
            >

              {/* Project image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1f24]">

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                ) : (

                  <div className="relative flex h-full items-center justify-center overflow-hidden">

                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#17232c] via-[#263c4b] to-[#10161c] transition duration-700 group-hover:scale-110" />


                    {/* Decorative glow */}
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ecbff]/10 blur-3xl transition duration-700 group-hover:bg-[#8ecbff]/20" />


                    {/* Fake project preview */}
                    <div className="relative w-[75%] rounded-xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur transition duration-500 group-hover:-translate-y-2">

                      {/* Browser dots */}
                      <div className="mb-4 flex gap-2">

                        <span className="h-2 w-2 rounded-full bg-red-400" />

                        <span className="h-2 w-2 rounded-full bg-yellow-400" />

                        <span className="h-2 w-2 rounded-full bg-green-400" />

                      </div>


                      {/* Fake interface */}
                      <div className="space-y-3">

                        <div className="h-3 w-3/4 rounded bg-white/20" />

                        <div className="h-3 w-1/2 rounded bg-white/10" />

                        <div className="h-16 rounded-lg bg-white/5" />

                        <div className="grid grid-cols-3 gap-2">

                          <div className="h-7 rounded bg-white/5" />

                          <div className="h-7 rounded bg-white/5" />

                          <div className="h-7 rounded bg-white/5" />

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </div>


              {/* Project information */}
              <div className="p-7">

                {/* Category */}
                <p className="mb-3 text-sm font-medium text-[#8ecbff]">
                  {project.category}
                </p>


                {/* Title */}
                <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-[#8ecbff]">
                  {project.title}
                </h3>


                {/* Description */}
                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-md bg-[#1b2229] px-3 py-1.5 text-xs font-semibold text-[#a8d8ff] transition duration-200 hover:bg-[#8ecbff]/10"
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* Links */}
                <div className="mt-8 flex items-center gap-7">

                  <a
                    href={project.github}
                    className="font-semibold text-[#8ecbff] transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    View Repository →
                  </a>


                  <a
                    href={project.demo}
                    className="font-semibold text-emerald-400 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}