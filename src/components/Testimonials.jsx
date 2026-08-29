import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialTestimonials = [
  {
    text: "Una experiencia culinaria sublime. El ravioli de gallina y el pato con sauco demuestran una maestría técnica envidiable. El ambiente es íntimo, refinado y el servicio atento en cada detalle.",
    name: "Valeria Santillana",
    role: "Crítica Gastronómica Independiente",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    text: "Celebramos nuestro aniversario aquí y fue inolvidable. La recomendación de maridaje del sumiller fue perfecta. Se siente la pasión por los ingredientes locales en un nivel europeo.",
    name: "Alejandro & Camila De La Torre",
    role: "Comensales Habituales",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    text: "La pesca del día con costra de quinua es sencillamente una obra de arte. La mejor propuesta de cocina fusión en el centro de la ciudad. 100% recomendado.",
    name: "Diego Arismendi",
    role: "Guía Culinaria",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials({ showToast }) {
  const [list, setList] = useState(initialTestimonials);
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  const handleGoTo = (index) => {
    setCurrent(index);
  };

  const openReviewModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeReviewModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  const handleStarClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace("rev-", "");
    setNewReview((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const submitted = {
      text: newReview.comment,
      name: newReview.name,
      role: "Comensal Verificado",
      rating: newReview.rating,
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    };

    setList((prev) => [submitted, ...prev]);
    setCurrent(0);
    closeReviewModal();
    showToast(
      "¡Muchas Gracias!",
      "Tu reseña ha sido publicada y valorada por nuestro equipo.",
      "success",
    );
  };

  const activeTestimonial = list[current];

  return (
    <>
      <section className="py-24 px-4 md:px-12 bg-[#FFFEF7] relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-bold">
              Opiniones de Nuestros Clientes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-black mt-2">
              Voces de la Mesa
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
          </div>

          {/* Badges de Plataformas */}
          <div className="flex justify-center items-center gap-6 mb-12 reveal">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <i className="fa-brands fa-google text-red-500 text-lg"></i>
              <span className="text-xs font-bold">
                4.9 / 5.0 en Google Reviews
              </span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <i className="fa-solid fa-award text-emerald-600 text-lg"></i>
              <span className="text-xs font-bold">Travellers' Choice 2025</span>
            </div>
          </div>

          {/* Carousel Interactivo de Reseñas */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-14 border border-neutral-200/80 shadow-xl reveal">
            <div className="min-h-[190px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="flex items-center space-x-1 mb-4">
                      {Array.from({ length: activeTestimonial.rating }).map(
                        (_, i) => (
                          <i
                            key={i}
                            className="fa-solid fa-star text-brand-gold text-xs"
                          ></i>
                        ),
                      )}
                    </div>
                    <p className="text-neutral-800 font-serif italic text-lg sm:text-xl leading-relaxed">
                      "{activeTestimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-6">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-brand-black text-sm">
                        {activeTestimonial.name}
                      </h4>
                      <span className="text-xs text-neutral-500">
                        {activeTestimonial.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles del Carousel */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-100">
              <div className="flex space-x-2" id="carousel-dots">
                {list.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleGoTo(i)}
                    aria-label={`Ir a testimonio ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-brand-gold w-6" : "bg-neutral-300"
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  aria-label="Testimonio anterior"
                  className="w-10 h-10 rounded-full border border-neutral-300 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Testimonio siguiente"
                  className="w-10 h-10 rounded-full border border-neutral-300 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center transition-colors"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 reveal">
            <button
              onClick={openReviewModal}
              className="text-xs uppercase tracking-widest text-neutral-700 hover:text-brand-gold font-bold underline transition-colors"
            >
              ¿Nos visitaste recientemente? Déjanos tu reseña
            </button>
          </div>
        </div>
      </section>

      {/* Modal Reseña */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#FFFEF7] rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-brand-gold/30"
            >
              <button
                onClick={closeReviewModal}
                aria-label="Cerrar modal"
                className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800 text-xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="text-center mb-6">
                <h3 className="font-serif font-bold text-2xl text-brand-black">
                  Comparte tu Experiencia
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Tu opinión nos ayuda a perfeccionar cada plato y detalle de
                  servicio.
                </p>
              </div>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    id="rev-name"
                    required
                    value={newReview.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:border-brand-gold outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Calificación
                  </label>
                  <div
                    className="flex space-x-2 text-2xl text-brand-gold cursor-pointer"
                    id="star-rating"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`${
                          star <= newReview.rating ? "fa-solid" : "fa-regular"
                        } fa-star`}
                        onClick={() => handleStarClick(star)}
                      ></i>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">
                    Comentario
                  </label>
                  <textarea
                    id="rev-comment"
                    rows="3"
                    required
                    value={newReview.comment}
                    onChange={handleFormChange}
                    placeholder="¿Qué fue lo que más disfrutaste de tu visita?"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:border-brand-gold outline-none bg-white resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-brand-gold text-brand-black font-bold uppercase text-xs tracking-wider hover:bg-brand-goldHover transition-colors"
                >
                  Publicar Reseña
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
