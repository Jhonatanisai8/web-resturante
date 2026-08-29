export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 px-4 md:px-12 bg-brand-cream relative bg-texture"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Historia y Filosofía */}
          <div className="lg:col-span-6 reveal">
            <div className="inline-block border-b-2 border-brand-gold pb-1 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-bold">
                Nuestra Esencia
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
              El Encuentro entre Dos Mundos Culinarios
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-5 text-justify">
              Nacido en el corazón vibrante de la ciudad,{" "}
              <strong className="text-brand-black">Oro del Mar</strong> es el
              resultado de un viaje gastronómico que cruza océanos. Fusionamos
              la rigurosa precisión de las escuelas clásicas europeas —francesa,
              italiana y vasca— con la exhuberante biodiversidad de nuestras
              raíces locales.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8 text-justify">
              Nuestra filosofía se basa en el respeto absoluto al producto de
              temporada, seleccionando pescados frescos de costa artesanal,
              tubérculos nativos y hierbas recolectadas a diario. Cada plato es
              un lienzo donde la memoria gustativa dialoga con la innovación
              contemporánea.
            </p>

            {/* Card del Chef Ejecutivo */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop"
                alt="Chef Ejecutivo Mateo Rossi"
                className="w-20 h-20 rounded-full object-cover border-2 border-brand-gold shadow-sm flex-shrink-0"
              />
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-brand-black">
                    Chef Mateo Rossi
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-olive/15 text-brand-olive">
                    Chef Ejecutivo
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Formado en París y San Sebastián con más de 14 años liderando
                  cocinas galardonadas con estrella Michelin. Amante apasionado
                  del producto autóctono.
                </p>
                <div className="mt-2 text-brand-gold italic font-serif text-sm">
                  "Cocinar es transformar recuerdos en sensaciones
                  inolvidables."
                </div>
              </div>
            </div>

            {/* Estadísticas Destacadas */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
              <div className="text-center sm:text-left">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-gold">
                  12+
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Años de Pasión
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-olive">
                  18
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Premios y Menciones
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-black">
                  98k
                </span>
                <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  Comensales Felices
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Composición de Imágenes */}
          <div className="lg:col-span-6 reveal">
            <div className="relative">
              {/* Imagen Principal */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Ambiente elegante restaurante Oro del Mar"
                  className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Imagen Secundaria Flotante */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop"
                  alt="Preparación artesanal en cocina"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Insignia de Calidad */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-black text-brand-gold p-3 flex flex-col items-center justify-center text-center shadow-2xl border-2 border-brand-gold animate-float">
                <i className="fa-solid fa-crown text-sm mb-1"></i>
                <span className="text-[9px] font-bold tracking-widest uppercase">
                  Excelencia
                </span>
                <span className="font-serif text-xs font-bold">
                  2024 - 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
