import aira1 from "../img/aira1.jpeg";
import aira2 from "../img/aira2.jpeg";
import aira3 from "../img/aira3.jpeg";
import aira4 from "../img/aira4.jpeg";
import aira5 from "../img/aira5.jpeg";
import aira6 from "../img/aira6.jpeg";
import aira7 from "../img/aira7.jpeg";
import aira11 from "../img/aira11.jpeg";
import aira12 from "../img/aira12.jpeg";
import aira13 from "../img/aira13.jpeg";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const designs = [
  {
    image: aira1,
    title: "Identidad Visual",
    category: "Branding",
    tall: true,
  },
  {
    image: aira2,
    title: "Redes Sociales",
    category: "Social Media",
  },
  {
    image: aira3,
    title: "Logo Concept",
    category: "Branding",
  },
  {
    image: aira4,
    title: "Campaña Visual",
    category: "Marketing",
    tall: true,
  },
  {
    image: aira5,
    title: "Logo Concept",
    category: "Branding",
  },
  {
    image: aira11,
    title: "Moodboard",
    category: "Concepto",
  },
  {
    image: aira7,
    title: "Identidad Visual",
    category: "Branding",
  },
  {
    image: aira6,
    title: "Packaging",
    category: "Diseño",
  },
  {
    image: aira13,
    title: "Moodboard",
    category: "Concepto",
  },
  {
    image: aira12,
    title: "Identidad Visual",
    category: "Branding",
  },
];

export default function AiraStudio() {
  return (
    <section
      id="aira"
      className="bg-[#f5f5f5] py-16 px-6 md:px-12 lg:px-24"
    >
      <p className="uppercase tracking-[6px] text-gray-400 text-sm">
        05 / Aira Studio
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mt-6 mb-12">
        <div>
          <span className="uppercase tracking-[4px] text-gray-400 text-sm">
            Branding • UI/UX • Social Media
          </span>

          <h2
            className="
            text-[3rem]
            sm:text-[4rem]
            lg:text-[5.5rem]
            leading-[0.9]
            font-light
            mt-3
            "
          >
            Universo
            <br />
            visual de Aira
          </h2>
        </div>

        <div className="max-w-md">
  <p className="text-gray-500 leading-8">
    Una selección de proyectos donde exploro branding,
    identidad visual, contenido digital y diseño estratégico
    para construir experiencias memorables.
  </p>

  <div className="flex gap-6 mt-6">
    <a
      href="https://www.instagram.com/aira.stud?igsh=bzBzOWEzd2gwY2Mz"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-gray-500 hover:text-black transition"
    >
      <FaInstagram />
      Instagram
    </a>

    <a
      href="https://www.tiktok.com/@aira..studio?_r=1&_t=ZS-974NuVCydzp"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-gray-500 hover:text-black transition"
    >
      <FaTiktok />
      TikTok
    </a>
  </div>
</div>
      </div>

      <div
        className="
        columns-2
        md:columns-3
        xl:columns-4
        gap-4
        space-y-4
        "
      >
        {designs.map((item, index) => (
          <div
            key={index}
            className="
            relative
            overflow-hidden
            break-inside-avoid
            group
            cursor-pointer
            rounded-2xl
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className={`
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
                ${
                  item.tall
                    ? "h-[380px]"
                    : "h-[240px]"
                }
              `}
            />

            <div
              className="
              absolute
              inset-0
              bg-black/0
              group-hover:bg-black/40
              transition-all
              duration-500
              "
            />

            <div
              className="
              absolute
              bottom-0
              left-0
              p-5
              text-white
              opacity-0
              translate-y-6
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
              "
            >
              <p className="uppercase tracking-[3px] text-[10px] mb-1">
                {item.category}
              </p>

              <h3 className="text-lg font-light">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mt-14 leading-8">
        Aira Studio nace de la combinación entre estrategia,
        creatividad y diseño para transformar ideas en marcas
        con identidad propia y experiencias visuales memorables.
      </p>
    </section>
  );
}