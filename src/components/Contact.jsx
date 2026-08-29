export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-brand-dark text-brand-cream px-4 md:px-12 border-t border-brand-gold/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Información y Horarios */}
          <div className="lg:col-span-6 reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Encuéntranos
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-6">
              Ubicación & Contacto
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed mb-8">
              Situados en una casona colonial restaurada en el centro histórico,
              a pasos de los principales teatros y galerías de arte.
            </p>

            <div className="space-y-6">
              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-cream text-base">
                    Dirección Física
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                    Calle Mayor 128, Centro Histórico, Ciudad Culinaria
                  </p>
                  <p className="text-xs text-brand-olive mt-1">
                    <i className="fa-solid fa-square-parking mr-1"></i> Servicio
                    de Valet Parking y Parking Privado a 50m.
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-cream text-base">
                    Teléfonos Directos
                  </h4>
                  <div className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                    <a
                      href="tel:+51987654321"
                      className="hover:text-brand-gold transition-colors"
                    >
                      +51 (1) 234-5678
                    </a>{" "}
                    /{" "}
                    <a
                      href="https://wa.me/51987654321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-gold transition-colors text-emerald-400 inline-flex items-center space-x-1 ml-1"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>WhatsApp Reservas</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-cream text-base">
                    Correo Electrónico
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                    <a
                      href="mailto:experiencia@saborurbano.com"
                      className="hover:text-brand-gold transition-colors"
                    >
                      experiencia@saborurbano.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start space-x-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div className="w-full">
                  <h4 className="font-serif font-bold text-brand-cream text-base mb-2">
                    Horarios de Servicio
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-brand-surface p-4 rounded-xl border border-neutral-800">
                    <div>
                      <span className="text-brand-gold font-bold block">
                        Martes a Domingo:
                      </span>
                      <span className="text-neutral-300">
                        Almuerzo: 13:00 - 16:30
                      </span>
                      <br />
                      <span className="text-neutral-300">
                        Cena: 20:00 - 23:30
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-400 font-bold block">
                        Lunes:
                      </span>
                      <span className="text-neutral-500">
                        Cerrado por descanso del equipo culinario
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Embebido */}
          <div className="lg:col-span-6 reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/30 h-[450px] relative">
              <iframe
                title="Mapa de Ubicación de Sabor Urbano"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.979339023153!2d-77.03450942417743!3d-12.04698884188737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5e9f82cf3%3A0x6b45e997f74fb066!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                className="w-full h-full border-0 filter grayscale-[25%] contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-brand-black/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs border border-brand-gold/30 text-brand-cream">
                <span className="font-bold text-brand-gold">SABOR URBANO</span>{" "}
                - Centro Histórico
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
