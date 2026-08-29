import { useState } from "react";

export default function Footer({ showToast }) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    showToast(
      "¡Bienvenido al Club Gastronómico!",
      `Hemos registrado a ${email}. Pronto recibirás nuestras novedades culinarias exclusivas.`,
      "success",
    );
    setEmail("");
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-black text-brand-cream pt-20 pb-10 px-4 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Columna 1: Logo & Propósito */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold">
                <i className="fa-solid fa-utensils text-sm"></i>
              </div>
              <span className="font-serif font-bold text-2xl tracking-[0.2em] text-brand-cream uppercase">
                Sabor <span className="text-brand-gold font-light">Urbano</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Técnica europea de vanguardia, memoria e ingredientes locales. Una
              experiencia gastronómica inmersiva creada para celebrar la vida en
              cada bocado.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-800 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-800 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a
                href="#"
                aria-label="TripAdvisor"
                className="w-9 h-9 rounded-full bg-neutral-800 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-solid fa-award text-sm"></i>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-neutral-800 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Links Rápidos */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-brand-gold text-sm uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleScrollTo(e, "#inicio")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => handleScrollTo(e, "#nosotros")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Sobre Nosotros & Chef
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleScrollTo(e, "#menu")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Menú Degustación
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  onClick={(e) => handleScrollTo(e, "#galeria")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Galería & Atmósfera
                </a>
              </li>
              <li>
                <a
                  href="#reservas"
                  onClick={(e) => handleScrollTo(e, "#reservas")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Reservas Online
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleScrollTo(e, "#contacto")}
                  className="hover:text-brand-cream transition-colors"
                >
                  Horarios y Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-brand-gold text-sm uppercase tracking-widest">
              Club Gastronómico
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Suscríbete a nuestro boletín para recibir invitaciones a catas de
              vino privadas, cambios de menú de temporada y promociones
              exclusivas.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Tu correo electrónico"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-l-xl bg-neutral-900 border border-neutral-700 text-xs text-brand-cream outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="bg-brand-gold text-brand-black px-5 rounded-r-xl text-xs font-bold uppercase tracking-wider hover:bg-brand-goldHover transition-colors flex-shrink-0"
                >
                  Unirme
                </button>
              </div>
              <span className="text-[10px] text-neutral-500 block">
                Respetamos tu privacidad. Cero spam garantizado.
              </span>
            </form>
          </div>
        </div>

        {/* Barra Inferior de Copyright y Métodos de Pago */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; <span>{new Date().getFullYear()}</span>{" "}
            <strong>SABOR URBANO RESTAURANTE</strong>. Todos los derechos
            reservados.
          </div>

          {/* Métodos de Pago Aceptados */}
          <div className="flex items-center space-x-3 text-lg text-neutral-400">
            <span className="text-[10px] uppercase text-neutral-500 tracking-wider mr-1">
              Pagos:
            </span>
            <i
              className="fa-brands fa-cc-visa hover:text-brand-gold transition-colors"
              title="Visa"
            ></i>
            <i
              className="fa-brands fa-cc-mastercard hover:text-brand-gold transition-colors"
              title="MasterCard"
            ></i>
            <i
              className="fa-brands fa-cc-amex hover:text-brand-gold transition-colors"
              title="American Express"
            ></i>
            <i
              className="fa-brands fa-cc-apple-pay hover:text-brand-gold transition-colors"
              title="Apple Pay"
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
