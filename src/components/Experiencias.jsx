import { Calendar } from "lucide-react";

const experiences = [
  {
    year: "2024 - Presente",
    title: "Estudiante de Desarrollo de Software",
    company: "Formación Académica",
    desc: "Comencé mi formación profesional en desarrollo de software, adquiriendo conocimientos en programación, bases de datos, desarrollo web y metodologías de trabajo.",
    achievements: [
      "Fundamentos sólidos de programación",
      "Desarrollo de aplicaciones web",
      "Bases de datos y análisis de sistemas",
    ],
  },

  {
    year: "2025 - Presente",
    title: "Diseño UI/UX & Branding",
    company: "Formación Autodidacta",
    desc: "Descubrí mi interés por el diseño digital, enfocándome en la creación de interfaces modernas, experiencia de usuario e identidad visual.",
    achievements: [
      "Diseño de interfaces en Figma",
      "Creación de sistemas visuales coherentes",
      "Aplicación de principios UX/UI",
    ],
  },

  {
    year: "2025 - Presente",
    title: "Fundadora de Aira Studio",
    company: "Branding & Diseño Digital",
    desc: "Creación de un espacio orientado al branding, diseño visual y experiencias digitales para marcas y emprendedores.",
    achievements: [
      "Diseño de identidades visuales",
      "Branding estratégico para marcas",
      "Desarrollo de presencia digital",
    ],
  },

  {
    year: "2025 - Presente",
    title: "Frontend Developer",
    company: "Proyectos Académicos y Personales",
    desc: "Desarrollo de proyectos web combinando diseño, programación y experiencia de usuario para crear productos funcionales y atractivos.",
    achievements: [
      "Sistema de gestión para Centro Médico",
      "Landing page para Ruddy's",
      "Proyectos UI inspirados en marcas deportivas",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="bg-[#f5f5f5] py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[6px] text-gray-400 text-sm mb-6">
          04 / Trayectoria
        </p>

        <h2
          className="
          font-light
          leading-[0.9]
          text-[3rem]
          sm:text-[4rem]
          lg:text-[6rem]
          mb-20
          "
        >
          Mi evolución
          <br />
          profesional
        </h2>

        <div className="relative">
          {/* línea timeline */}
          <div className="hidden md:block absolute left-5 top-0 w-px h-full bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-8 items-start"
              >
                {/* punto timeline */}
                <div className="hidden md:flex relative z-10">
                  <div className="w-10 h-10 rounded-full bg-black"></div>
                </div>

                {/* card */}
                <div
                  className="
                  flex-1
                  border
                  border-gray-300
                  bg-[#f5f5f5]
                  p-8
                  lg:p-10
                  hover:bg-black
                  hover:text-white
                  transition-all
                  duration-500
                  group
                  "
                >
                  <div className="flex items-center gap-3 text-gray-500 group-hover:text-gray-300 mb-4">
                    <Calendar size={18} />
                    <span>{exp.year}</span>
                  </div>

                  <h3 className="text-2xl lg:text-4xl font-light mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-lg text-gray-500 group-hover:text-gray-300 mb-6">
                    {exp.company}
                  </p>

                  <p className="leading-8 text-gray-600 group-hover:text-gray-200 mb-8">
                    {exp.desc}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="
                        flex
                        items-center
                        gap-3
                        text-gray-600
                        group-hover:text-gray-200
                        "
                      >
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 mt-16 max-w-2xl mx-auto">
          Mi camino combina desarrollo de software, diseño UI/UX y branding,
          buscando crear experiencias digitales que sean funcionales,
          atractivas y memorables.
        </p>
      </div>
    </section>
  );
}