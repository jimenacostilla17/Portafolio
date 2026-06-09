export default function About() {
  return (
    <section
      id="sobre-mi"
      className="
      relative
      bg-[#f5f5f5]
      px-6
      md:px-12
      lg:px-24
      py-20
      overflow-hidden
      "
    >
      <div className="hidden lg:block absolute left-12 top-0 h-full w-px bg-gray-200">
      </div>

      <span className="uppercase tracking-[5px] text-xs text-gray-400">
        Sobre mí
      </span>

      <div className="grid lg:grid-cols-2 gap-16 mt-10">

        <div>

          <h2
            className="
            text-[3rem]
            sm:text-[4rem]
            lg:text-[6rem]
            leading-[0.9]
            font-light
            "
          >
            Diseño
            <br />
            experiencias
            <br />
            digitales.
          </h2>

          <div className="flex items-center gap-4 mt-8">

            <div className="w-10 h-[2px] bg-black"></div>

            <p className="uppercase tracking-[4px] text-xs text-gray-500">
              Frontend • UI • Branding
            </p>

          </div>

          <p
            className="
            mt-12
            text-xl
            md:text-2xl
            text-gray-700
            leading-relaxed
            max-w-xl
            "
          >
            Me gusta crear experiencias donde la estética y la
            funcionalidad trabajan juntas para comunicar mejor.
          </p>

          <div className="flex gap-10 mt-14 flex-wrap">

            <div>
              <h3 className="text-4xl font-light">+20</h3>
              <p className="text-xs tracking-[3px] uppercase text-gray-500">
                proyectos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-light">3+</h3>
              <p className="text-xs tracking-[3px] uppercase text-gray-500">
                años
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-light">∞</h3>
              <p className="text-xs tracking-[3px] uppercase text-gray-500">
                ideas
              </p>
            </div>

          </div>

        </div>

        <div>

          <p className="text-lg text-gray-700 leading-9 mb-12">
            Disfruto combinar creatividad y tecnología para
            construir interfaces modernas, limpias y funcionales.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">

            {[
              {
                title: "Diseño UI",
                text: "Interfaces limpias y modernas."
              },
              {
                title: "Frontend",
                text: "React y experiencias interactivas."
              },
              {
                title: "Branding",
                text: "Identidad visual coherente."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="
                border
                border-gray-300
                p-6
                hover:bg-black
                hover:text-white
                transition
                duration-300
                "
              >

                <p className="text-3xl mb-4">✦</p>

                <h3 className="uppercase tracking-[4px] text-sm mb-3">
                  {item.title}
                </h3>

                <p className="text-sm opacity-80">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}