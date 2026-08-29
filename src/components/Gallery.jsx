import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const galleryImages = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    title: "Salón Principal & Cava",
    category: "Ambiente",
    caption: "Salón Principal con Iluminación Íntima",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    title: "Precisión en Cada Detalle",
    category: "Proceso",
    caption: "Técnica Culinaria en Vivo",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1200&auto=format&fit=crop",
    title: "Barra de Coctelería Fusión",
    category: "Mixología",
    caption: "Cócteles de Autor con Botánicos Locales",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    title: "Materia Prima Noble",
    category: "Origen",
    caption: "Ingredientes Frescos y Orgánicos",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    title: "Mesa Privada del Chef",
    category: "Exclusividad",
    caption: "Mesa del Chef para Eventos Privados",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    title: "Repostería de Alta Escuela",
    category: "Dulce Final",
    caption: "Repostería de Vanguardia con Cacao Autóctono",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  const openLightbox = (photo) => {
    setActivePhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActivePhoto(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="galeria"
        className="py-24 bg-brand-dark px-4 md:px-12 border-t border-brand-gold/15"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Experiencia Visual
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream mt-2">
              Nuestra Atmósfera & Creaciones
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
            <p className="text-neutral-400 mt-4 text-sm sm:text-base">
              Un vistazo a los detalles, el ambiente íntimo y la dedicación que
              vive en cada rincón.
            </p>
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((photo, i) => (
              <div
                key={photo.title}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-72 reveal"
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold">
                    {photo.category}
                  </span>
                  <h4 className="text-brand-cream font-serif text-lg font-bold">
                    {photo.title}
                  </h4>
                  <span className="text-brand-gold text-sm mt-2">
                    <i className="fa-solid fa-expand mr-1.5"></i> Ampliar
                    fotografía
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox Galería */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
              className="absolute top-6 right-6 text-brand-cream hover:text-brand-gold text-3xl focus:outline-none z-10 transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div
              className="max-w-5xl w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={activePhoto.full}
                alt={activePhoto.title}
                className="max-h-[80vh] mx-auto rounded-xl shadow-2xl object-contain border border-brand-gold/30"
              />
              <p className="text-brand-cream font-serif text-lg mt-4 tracking-wide">
                {activePhoto.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
