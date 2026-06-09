import {
  FiMail,
  FiSend,
} from "react-icons/fi";

import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "✨ Mensaje enviado correctamente. Me pondré en contacto contigo pronto."
    );
  };

  return (
    <section
      id="contacto"
      className="
      bg-[#f5f5f5]
      py-24
      px-6
      md:px-12
      lg:px-24
      "
    >
      <div
        className="
        grid
        lg:grid-cols-2
        gap-20
        items-start
        "
      >

        <div>
          <p className="uppercase tracking-[6px] text-gray-400 text-sm">
            Contacto
          </p>

          <h2
            className="
            text-[3.5rem]
            sm:text-[5rem]
            lg:text-[6.5rem]
            leading-[0.9]
            font-light
            mt-4
            "
          >
            Trabajemos
            <br />
            <span className="font-medium">
              juntos
            </span>
          </h2>

          <p
            className="
            text-gray-500
            text-xl
            leading-10
            mt-10
            max-w-lg
            "
          >
            ¿Tienes una idea, emprendimiento o proyecto?

            <br />
            <br />

            Puedo ayudarte desde el branding y diseño visual
            hasta el desarrollo de una experiencia web moderna,
            funcional y alineada con tu marca.
          </p>

          <div
            className="
            flex
            items-center
            gap-4
            mt-14
            text-gray-500
            "
          >
            <FiMail size={22} />

            <a
              href="mailto:jimena.costillaa@gmail.com"
              className="
              text-lg
              hover:text-black
              transition
              "
            >
              jimena.costillaa@gmail.com
            </a>
          </div>


<div className="flex items-center gap-6 mt-12">

  <a
    href="https://www.instagram.com/jimenacostillaa?igsh=bTZ2NTFlb2p6bTA="
    target="_blank"
    rel="noreferrer"
    className="
    text-gray-500
    hover:text-black
    transition
    "
  >
    <FaInstagram size={24} />
  </a>


  <a
    href="https://github.com/jimenacostilla17"
    target="_blank"
    rel="noreferrer"
    className="
    text-gray-500
    hover:text-black
    transition
    "
  >
    <FaGithub size={24} />
  </a>

  <a
    href="https://wa.me/qr/VC6B76E3ZYUQA1"
    target="_blank"
    rel="noreferrer"
    className="
    text-gray-500
    hover:text-black
    transition
    "
  >
    <FaWhatsapp size={24} />
  </a>

</div>

          <div
            className="
            mt-14
            border
            border-gray-300
            p-8
            "
          >
            <p className="uppercase tracking-[4px] text-sm mb-6">
              Disponible para proyectos
            </p>

            <div className="space-y-4 text-gray-600">

              <p>✦ Branding</p>

              <p>✦ Diseño UI / UX</p>

              <p>✦ Landing Pages</p>

              <p>✦ Desarrollo Frontend</p>

              <p>✦ Gestión de Redes Sociales</p>

            </div>

            <div
              className="
              mt-8
              pt-6
              border-t
              border-gray-200
              text-gray-400
              text-sm
              "
            >
              Respuesta promedio: 24 horas
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          border
          border-gray-300
          p-8
          md:p-12
          "
        >
          <div className="mb-8">

            <label className="block mb-3 font-medium">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              required
              className="
              w-full
              border
              border-gray-300
              px-6
              py-5
              outline-none
              focus:border-black
              transition
              "
            />
          </div>

          <div className="mb-8">

            <label className="block mb-3 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="tu@email.com"
              required
              className="
              w-full
              border
              border-gray-300
              px-6
              py-5
              outline-none
              focus:border-black
              transition
              "
            />
          </div>

          <div className="mb-10">

            <label className="block mb-3 font-medium">
              Mensaje
            </label>

            <textarea
              rows="7"
              placeholder="Cuéntame sobre tu proyecto..."
              required
              className="
              w-full
              border
              border-gray-300
              px-6
              py-5
              resize-none
              outline-none
              focus:border-black
              transition
              "
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            bg-black
            text-white
            py-6
            uppercase
            tracking-[4px]
            flex
            items-center
            justify-center
            gap-3
            hover:opacity-90
            transition
            "
          >
            Enviar mensaje

            <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}