import perfil from "../img/perfil.jpeg";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-[#f5f5f5] flex items-center px-6 md:px-12 lg:px-24 relative">

      <div className="max-w-7xl mx-auto w-full">

        <span
          className="
          uppercase
          tracking-[6px]
          text-gray-500
          text-xs
          md:text-sm
          "
        >
          Mi Portafolio
        </span>

        <div className="mt-8">

          <div className="flex flex-wrap items-center gap-6 md:gap-10">

            <h1
              className="
              text-[4rem]
              sm:text-[5rem]
              md:text-[7rem]
              lg:text-[10rem]
              leading-[0.85]
              font-light
              "
            >
              Jimena
            </h1>

            <div
              className="
              w-[120px]
              h-[120px]
              md:w-[160px]
              md:h-[160px]
              overflow-hidden
              rounded-full
              border
              border-gray-300
              "
            >
              <img
                src={perfil}
                alt="Jimena Costilla"
                className="
                w-full
                h-full
                object-cover
                "
              />
            </div>

          </div>

          <h1
            className="
            text-[4rem]
            sm:text-[5rem]
            md:text-[7rem]
            lg:text-[10rem]
            leading-[0.85]
            font-light
            "
          >
            Costilla
          </h1>

        </div>

        <div className="flex items-center gap-4 mt-10">

          <div className="w-12 md:w-20 h-[2px] bg-black"></div>

          <p
            className="
            text-gray-500
            text-sm
            md:text-lg
            uppercase
            tracking-[2px]
            "
          >
            Frontend Developer • Branding Designer
          </p>

        </div>

        <p
          className="mt-8 max-w-xl text-gray-500 text-base  md:text-lg"
        >
          Diseño marcas y experiencias digitales que combinan
          creatividad, estrategia y desarrollo para construir
          proyectos visualmente atractivos y funcionales.
        </p>

        <button
          className="
          mt-12
          uppercase
          tracking-[4px]
          text-sm
          flex
          items-center
          gap-3
          hover:translate-x-2
          transition
          "
        >
          Ver proyectos →
        </button>

      </div>
    </section>
  );
}