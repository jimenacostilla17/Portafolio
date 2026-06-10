import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const techs = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    desc: "Estructura web",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    desc: "Diseño visual",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "Interactividad",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "Interfaces dinámicas",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
    desc: "Estilos rápidos",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Automatización y lógica",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    desc: "Bases de datos",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    desc: "Control de versiones",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    desc: "Repositorios",
  },
  {
    icon: <FaFigma />,
    title: "Figma",
    desc: "UI / UX",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      relative
      bg-[#f5f5f5]
      py-24
      px-6
      md:px-12
      lg:px-24
      overflow-hidden
      "
    >

       <p className="uppercase tracking-[6px] text-gray-400 text-sm">
        Herramientas
      </p>

      <h2
        className="
        text-center
        font-light
        leading-[0.9]
        mt-4
        text-[3rem]
        sm:text-[4rem]
        lg:text-[6rem]
        "
      >
        Herramientas
        <br />
        que uso para crear
      </h2>

      <div
        className="
        mt-20
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-5
        relative
        z-10
        "
      >

        {techs.map((tech, index) => (

          <div
            key={tech.title}
            className={`
            group
            border
            border-gray-300
            bg-[#f5f5f5]
            p-6
            min-h-[220px]
            flex
            flex-col
            justify-between
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            hover:-translate-y-2
            `}
          >
            <div
              className="
              text-5xl
              transition
              duration-300
              group-hover:scale-110
              "
            >
              {tech.icon}
            </div>
            <div>

              <h3 className="text-xl md:text-2xl font-light mb-2">
                {tech.title}
              </h3>

              <p className="text-sm opacity-70">
                {tech.desc}
              </p>

            </div>


          </div>
          

        ))}

      </div>
      <p
  className="
  text-center
  text-gray-500
  mt-16
  max-w-2xl
  mx-auto
  text-lg
  leading-8
  "
>
  Siempre aprendiendo y explorando nuevas tecnologías para crear
  soluciones innovadoras y eficientes.
</p>

    </section>
  );
}