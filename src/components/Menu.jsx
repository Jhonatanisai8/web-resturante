import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const signatureDishes = [
  {
    name: "Magret de Pato & Sauco Andino",
    price: "$32.00",
    tag: "Signature Dish",
    desc: "Técnica de cocción al vacío sous-vide, glaseado en reducción de sauco silvestre y cremoso de papa amarilla trufada.",
    pairing: "Pinot Noir Reserva",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ravioli Aperto di Gallina",
    price: "$26.50",
    tag: "Fusión Emblema",
    desc: "Pasta fresca artesanal rellena de guiso tradicional, emulsión de parmesano Reggiano 24 meses y nueces tostadas.",
    pairing: "Chardonnay con crianza",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Corvina en Costra de Quinua",
    price: "$29.00",
    tag: "Pesca Sostenible",
    desc: "Corvina salvaje sellada a la plancha, salsa beurré blanc con toque de ají amarillo y vegetales orgánicos glaseados.",
    pairing: "Sauvignon Blanc del Valle",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
  },
];

const menuDatabase = {
  entradas: [
    {
      name: "Tartar de Atún & Palta Ahumada",
      desc: "Atún fresco cortado a cuchillo, vinagreta de chalotas francesas, emulsión de palta fuerte y crocante de tapioca.",
      price: "$18.50",
      tags: ["gf"],
    },
    {
      name: "Carpaccio de Res Curada & Trufa",
      desc: "Láminas finas de lomo curado al romero, lascas de parmesano 24 meses, rúcula silvestre y aceite de trufa blanca.",
      price: "$19.00",
      tags: ["gf"],
    },
    {
      name: "Burrata Cremosa & Texturas de Tomate",
      desc: "Burrata artesanal fresca, tomates reliquia confitados, pesto de albahaca andina y focaccia crujiente al oliva virgen.",
      price: "$16.50",
      tags: ["v"],
    },
    {
      name: "Ceviche Tibio a la Brasa",
      desc: "Pesca del día al soplete con emulsión tibia de ají amarillo, choclo tierno caramelizado y chips de camote morado.",
      price: "$19.50",
      tags: ["spicy", "gf"],
    },
  ],
  fuertes: [
    {
      name: "Magret de Pato en Reducción de Sauco",
      desc: "Cocinado sous-vide con piel crocante, puré aterciopelado de papa amarilla trufada y glaseado de frutos silvestres.",
      price: "$32.00",
      tags: ["gf"],
    },
    {
      name: "Ravioli Aperto di Gallina",
      desc: "Pasta fresca artesanal hecha en casa rellena de ají de gallina meloso, espuma de queso parmesano y nueces tostadas.",
      price: "$26.50",
      tags: ["spicy"],
    },
    {
      name: "Corvina en Costra de Quinua Real",
      desc: "Pesca artesanal sellada, costra de tres quinuas, salsa beurré blanc perfumada y espárragos verdes glaseados.",
      price: "$29.00",
      tags: ["gf"],
    },
    {
      name: "Risotto de Hongos Silvestres & Chicha",
      desc: "Arroz Carnaroli cremoso, boletus recolectados en montaña, reducción de chicha de jora y queso de oveja curado.",
      price: "$25.00",
      tags: ["v", "gf"],
    },
    {
      name: "Lechón Confitado 24 Horas",
      desc: "Cochinillo crujiente a baja temperatura, milhojas de papa andina gratinada y compota tibia de manzana ácida.",
      price: "$34.00",
      tags: ["gf"],
    },
  ],
  postres: [
    {
      name: "Esfera de Cacao 70% & Frutos Nativos",
      desc: "Mousse de chocolate de origen, corazón líquido de maracuyá y crumble de avellanas tostadas con sal marina.",
      price: "$12.50",
      tags: ["v"],
    },
    {
      name: "Milhojas de Vainilla Bourbon & Lúcuma",
      desc: "Capas finas de hojaldre caramelizado francés, crema diplomática de vainilla natural y helado artesanal de lúcuma.",
      price: "$11.50",
      tags: ["v"],
    },
    {
      name: "Tarta Tatin Revisitada de Camote & Membrillo",
      desc: "Masa sablée quebradiza con camotes glaseados en mantequilla avellana y quenelle de helado de canela.",
      price: "$11.00",
      tags: ["v"],
    },
  ],
  bebidas: [
    {
      name: "Pisco Mule Andino",
      desc: "Pisco Acholado premium, cordial de muña fresca, ginger beer artesanal y gotas de lima kaffir.",
      price: "$12.00",
      tags: ["spicy"],
    },
    {
      name: "Gin Tonic del Bosque Húmedo",
      desc: "Gin botánico infusionado con bayas de enebro, tónica mediterránea, romero quemado y toronja deshidratada.",
      price: "$13.50",
      tags: [],
    },
    {
      name: "Negroni Ahumado en Barrica",
      desc: "Campari, vermouth rosso añejado en roble francés y ginebra destilada localmente con sutil toque de humo.",
      price: "$14.00",
      tags: [],
    },
    {
      name: "Limonada de Hierbaluisa & Maracuyá",
      desc: "Bebida sin alcohol refrescante con infusión fría de hierbas del huerto y pulpa fresca de maracuyá.",
      price: "$7.50",
      tags: ["v", "gf"],
    },
  ],
};

const categories = [
  { id: "entradas", name: "Entradas" },
  { id: "fuertes", name: "Platos Fuertes" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas & Cocteles" },
];

export default function Menu({ showToast }) {
  const [activeCategory, setActiveCategory] = useState("entradas");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const downloadSimulatedPDF = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    showToast(
      "Descargando Menú PDF",
      "El menú completo 2026 de Sabor Urbano se ha guardado en tu dispositivo.",
      "info",
    );
  };

  const openMenuModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenuModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* =========================================================================
           PLATOS DESTACADOS DEL CHEF
           ========================================================================= */}
      <section className="py-20 bg-brand-black text-brand-cream px-4 md:px-12 border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Selección de Autor
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 text-brand-cream">
              Creaciones del Chef
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
            <p className="text-neutral-400 text-sm sm:text-base mt-4">
              Nuestras obras maestras más aclamadas por los críticos
              gastronómicos y amantes del buen comer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <div
                key={dish.name}
                className="bg-brand-surface rounded-2xl overflow-hidden border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 group reveal"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md text-brand-gold px-3 py-1 rounded-full text-xs font-bold border border-brand-gold/40">
                    {dish.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-xl text-brand-cream group-hover:text-brand-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-xl font-bold text-brand-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm mb-4 leading-relaxed">
                    {dish.desc}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-neutral-400 border-t border-neutral-700/60 pt-3">
                    <span className="text-brand-gold">
                      <i className="fa-solid fa-wine-glass"></i>
                    </span>
                    <span>Maridaje sugerido: {dish.pairing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
           MENÚ INTERACTIVO COMPLETO
           ========================================================================= */}
      <section
        id="menu"
        className="py-24 md:py-32 px-4 md:px-12 bg-[#FFFEF7] relative"
      >
        <div className="max-w-6xl mx-auto">
          {/* Encabezado de Sección */}
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-bold">
              Carta Gastronómica
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-black mt-2">
              Nuestra Propuesta Culinaria
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
            <p className="text-neutral-600 mt-4 text-sm sm:text-base">
              Una carta viva que cambia al ritmo de las cosechas y la
              inspiración de nuestro equipo de cocina.
            </p>
          </div>

          {/* Leyenda de Alérgenos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-10 text-xs text-neutral-600 reveal">
            <div className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">
                <i className="fa-solid fa-leaf"></i>
              </span>
              <span>Vegetariano</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">
                <i className="fa-solid fa-wheat-awn-circle-exclamation"></i>
              </span>
              <span>Sin Gluten</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-[10px]">
                <i className="fa-solid fa-pepper-hot"></i>
              </span>
              <span>Toque Picante</span>
            </div>
          </div>

          {/* Tabs de Categorías */}
          <div className="flex justify-center mb-12 overflow-x-auto py-2 reveal">
            <div className="inline-flex p-1.5 rounded-full bg-neutral-200/80 border border-neutral-300">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-brand-black text-brand-gold shadow-md"
                      : "text-neutral-700 hover:text-brand-black"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contenedor del Menú (Items Dinámicos con Framer Motion) */}
          <div className="min-h-[380px]">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuDatabase[activeCategory].map((dish) => (
                <div
                  key={dish.name}
                  className="border-b border-neutral-200 pb-5 hover:border-brand-gold/60 transition-colors group"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-brand-black group-hover:text-brand-olive transition-colors">
                        {dish.name}
                      </h4>
                      <div className="flex space-x-1">
                        {dish.tags.includes("v") && (
                          <span
                            title="Vegetariano"
                            className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px]"
                          >
                            <i className="fa-solid fa-leaf"></i>
                          </span>
                        )}
                        {dish.tags.includes("gf") && (
                          <span
                            title="Sin Gluten"
                            className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px]"
                          >
                            <i className="fa-solid fa-wheat-awn-circle-exclamation"></i>
                          </span>
                        )}
                        {dish.tags.includes("spicy") && (
                          <span
                            title="Toque Picante"
                            className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px]"
                          >
                            <i className="fa-solid fa-pepper-hot"></i>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-3 hidden sm:block"></div>
                    <span className="font-serif font-bold text-lg text-brand-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Descargar Menú Completo PDF */}
          <div className="mt-16 text-center reveal">
            <button
              onClick={openMenuModal}
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full border-2 border-brand-black text-brand-black font-semibold uppercase text-xs tracking-widest hover:bg-brand-black hover:text-brand-gold hover:border-brand-black transition-all duration-300 shadow-sm"
            >
              <i className="fa-regular fa-file-pdf text-base"></i>
              <span>Ver Carta Completa (PDF)</span>
            </button>
            <p className="text-xs text-neutral-500 mt-3">
              Incluye carta de vinos de guarda y menú degustación de 7 tiempos.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Menú PDF Vista Previa */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-brand-black text-brand-cream rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl border border-brand-gold/40 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeMenuModal}
                aria-label="Cerrar modal de carta"
                className="absolute top-5 right-5 text-neutral-400 hover:text-brand-gold text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="text-center pb-6 border-b border-neutral-800">
                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  Carta Oficial 2026
                </span>
                <h3 className="font-serif font-bold text-3xl mt-1 text-brand-cream">
                  SABOR URBANO
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Cocina de autor con técnicas europeas e ingredientes locales
                </p>
              </div>

              <div className="py-6 space-y-6 text-sm">
                <div>
                  <h4 className="font-serif text-brand-gold text-base font-bold uppercase tracking-wider mb-2">
                    Menú Degustación 7 Tiempos ($85 USD)
                  </h4>
                  <p className="text-xs text-neutral-300">
                    Incluye snacks de bienvenida, 2 entradas frías, 2
                    principales de autor, pre-postre, postre y petit fours.
                    Maridaje de 5 copas disponible por $45 USD adicionales.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-brand-gold text-base font-bold uppercase tracking-wider mb-2">
                    Servicios Privados
                  </h4>
                  <p className="text-xs text-neutral-300">
                    Catering personalizado para eventos corporativos y bodas
                    íntimas en nuestra cava privada.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={downloadSimulatedPDF}
                  className="flex-1 py-3 rounded-full bg-brand-gold text-brand-black font-bold uppercase text-xs tracking-wider hover:bg-brand-goldHover transition-colors flex items-center justify-center space-x-2"
                >
                  <i className="fa-solid fa-download"></i>
                  <span>Descargar PDF Completo</span>
                </button>
                <button
                  onClick={closeMenuModal}
                  className="px-6 py-3 rounded-full border border-neutral-600 text-neutral-300 text-xs font-semibold uppercase hover:bg-neutral-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
