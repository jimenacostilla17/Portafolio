import medico from "../img/medico.jpg";
import ruddys from "../img/ruddys.jpg";
import boca from "../img/boca.jpg";

const projects = [
  {
    title: "Centro Médico",
    category: "Sistema Web",
    desc: "Sistema orientado a la gestión de pacientes, turnos y administración médica.",
    image: medico,
    link: "https://centro-medico-portfolio.vercel.app/",
  },

  {
    title: "Ruddy's",
    category: "Landing Page",
    desc: "Sitio institucional enfocado en identidad visual y experiencia del usuario.",
    image: ruddys,
    link: "https://ruddysportafolio-o7rp.vercel.app",
  },

  {
    title: "Boca Juniors",
    category: "UI Concept",
    desc: "Proyecto visual centrado en interfaz, interacción y diseño deportivo.",
    image: boca,
    link: "https://bocajuniors.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="
      bg-[#f5f5f5]
      py-24
      px-6
      md:px-12
      lg:px-24
      overflow-hidden
      "
    >
      <p className="uppercase tracking-[6px] text-gray-400 text-sm">
        Proyectos
      </p>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-5 gap-8">

        <h2
          className="
          font-light
          leading-[0.9]
          text-[3rem]
          sm:text-[4rem]
          lg:text-[6rem]
          "
        >
          Algunos trabajos
          <br />
          destacados
        </h2>

        <p className="max-w-md text-gray-500 leading-8">
          Una selección de proyectos donde combiné diseño,
          desarrollo y experiencia de usuario.
        </p>

      </div>

      <div
        className="
        flex
        gap-8
        overflow-x-auto
        snap-x
        snap-mandatory
        mt-20
        pb-8
        scrollbar-hide
        "
      >

        {projects.map((project) => (

          <div
            key={project.title}
            className="
            min-w-[320px]
            md:min-w-[500px]
            lg:min-w-[620px]
            snap-center
            border
            border-gray-300
            bg-[#f5f5f5]
            flex-shrink-0
            group
            "
          >

            <div className="overflow-hidden h-[250px] md:h-[350px]">

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-full
                object-cover
                grayscale
                group-hover:grayscale-0
                group-hover:scale-105
                duration-500
                transition
                "
              />

            </div>
            <div className="p-8">

              <p className="uppercase tracking-[4px] text-xs text-gray-400 mb-4">
                {project.category}
              </p>

              <h3 className="text-3xl font-light mb-5">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-8">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex
                items-center
                gap-3
                uppercase
                tracking-[4px]
                text-sm
                hover:translate-x-2
                transition
                "
              >
                Ver proyecto →
              </a>

            </div>

          </div>

        ))}

      </div>

      <p className="text-center text-gray-500 mt-10 max-w-2xl mx-auto">
        Cada proyecto representa una combinación entre diseño,
        funcionalidad y aprendizaje continuo.
      </p>

    </section>
  );
}