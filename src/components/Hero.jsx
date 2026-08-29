import { useState } from "react";

export default function Hero() {
  const [bgSrc, setBgSrc] = useState(
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
  );

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImgError = () => {
    setBgSrc(
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    );
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-brand-black"
      >
        {/* Fondo Hero con Imagen de Alta Calidad */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgSrc}
            alt="Plato Signature Sabor Urbano"
            onError={handleImgError}
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          />
          {/* Overlay oscuro sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-4xl mx-auto pt-20">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-cream font-bold leading-tight tracking-tight mb-6">
            Donde la Tradición <br />
            <span className="italic font-light text-brand-gold">
              se Reinventa
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Cocina de autor con alma local. Técnicas culinarias europeas de
            vanguardia unidas a los ingredientes más nobles de nuestra tierra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#reservas"
              onClick={(e) => handleScrollTo(e, "#reservas")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-brand-black font-semibold tracking-wider uppercase text-xs sm:text-sm hover:bg-brand-goldHover hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Reserva tu mesa
            </a>
            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, "#menu")}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-cream/80 text-brand-cream font-semibold tracking-wider uppercase text-xs sm:text-sm hover:bg-brand-cream hover:text-brand-black backdrop-blur-sm transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Ver menú degustación
            </a>
          </div>

          {/* Indicador de Scroll Animado */}
          <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center animate-float">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2">
              Desliza para explorar
            </span>
            <a
              href="#nosotros"
              onClick={(e) => handleScrollTo(e, "#nosotros")}
              className="w-6 h-10 rounded-full border-2 border-brand-gold/60 flex items-start justify-center p-1"
            >
              <div className="w-1.5 h-2.5 bg-brand-gold rounded-full animate-bounce"></div>
            </a>
          </div>
        </div>

        {/* Badge flotante inferior */}
        <div className="absolute bottom-6 left-6 hidden xl:flex items-center space-x-3 text-xs text-neutral-400">
          <i className="fa-solid fa-location-dot text-brand-gold"></i>
          <span>Centro Histórico, Calle Mayor 128</span>
        </div>
        <div className="absolute bottom-6 right-6 hidden xl:flex items-center space-x-3 text-xs text-neutral-400">
          <i className="fa-solid fa-clock text-brand-gold"></i>
          <span>Mar - Dom: 13:00 - 23:30</span>
        </div>
      </section>

      {/* BARRA DE VALORES DESTACADOS */}
      <section className="bg-brand-dark border-y border-brand-gold/15 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-leaf text-brand-olive text-2xl mb-2"></i>
            <span className="text-brand-cream font-serif text-lg">
              100% Ingredientes Locales
            </span>
            <span className="text-xs text-neutral-400">
              Directo de productores artesanos
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-award text-brand-gold text-2xl mb-2"></i>
            <span className="text-brand-cream font-serif text-lg">
              Técnicas Europeas
            </span>
            <span className="text-xs text-neutral-400">
              Cocina francesa & mediterránea
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-wine-glass text-brand-gold text-2xl mb-2"></i>
            <span className="text-brand-cream font-serif text-lg">
              Cava & Maridaje
            </span>
            <span className="text-xs text-neutral-400">
              +120 etiquetas seleccionadas
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-fire-burner text-brand-olive text-2xl mb-2"></i>
            <span className="text-brand-cream font-serif text-lg">
              Cocina a la Vista
            </span>
            <span className="text-xs text-neutral-400">
              Experiencia sensorial total
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
