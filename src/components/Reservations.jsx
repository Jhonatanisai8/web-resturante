import { useState, useEffect } from "react";

export default function Reservations({ showToast }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set min date to today
    const todayStr = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: todayStr }));
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map id to state key (e.g. res-date -> date)
    const key = id.replace("res-", "");
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast(
        "¡Reservación Confirmada!",
        `Gracias ${formData.name}, hemos reservado mesa para ${
          formData.guests === "7+" ? "más de 6" : formData.guests
        } personas el día ${formData.date} a las ${formData.time} hrs. Te enviamos los detalles por correo.`,
        "success",
      );
      // Reset form
      setFormData({
        date: new Date().toISOString().split("T")[0],
        time: "",
        guests: "2",
        name: "",
        phone: "",
        email: "",
        notes: "",
      });
    }, 1200);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reservas"
      className="py-24 md:py-32 px-4 md:px-12 relative bg-brand-black overflow-hidden"
    >
      {/* Fondo Atmosférico */}
      <div className="absolute inset-0 opacity-25 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
          alt="Atmósfera restaurante Oro del Mar"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">
            Reserva Exclusiva
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream mt-2">
            Asegura tu Mesa
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-neutral-300 mt-3 text-sm">
            Para garantizar una experiencia impecable, recomendamos reservar con
            al menos 24 horas de antelación.
          </p>
        </div>

        {/* Tarjeta de Formulario de Reservas */}
        <div className="bg-brand-cream rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-brand-gold/30 reveal">
          <form
            id="reservation-form"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Fecha */}
              <div>
                <label
                  htmlFor="res-date"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-regular fa-calendar text-brand-gold mr-1"></i>{" "}
                  Fecha
                </label>
                <input
                  type="date"
                  id="res-date"
                  required
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                />
              </div>

              {/* Hora */}
              <div>
                <label
                  htmlFor="res-time"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-regular fa-clock text-brand-gold mr-1"></i>{" "}
                  Turno / Hora
                </label>
                <select
                  id="res-time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                >
                  <option value="" disabled>
                    Selecciona horario
                  </option>
                  <optgroup label="Almuerzo">
                    <option value="13:00">13:00 hrs</option>
                    <option value="13:30">13:30 hrs</option>
                    <option value="14:00">14:00 hrs</option>
                    <option value="14:30">14:30 hrs</option>
                    <option value="15:00">15:00 hrs</option>
                  </optgroup>
                  <optgroup label="Cena">
                    <option value="20:00">20:00 hrs</option>
                    <option value="20:30">20:30 hrs</option>
                    <option value="21:00">21:00 hrs</option>
                    <option value="21:30">21:30 hrs</option>
                    <option value="22:00">22:00 hrs</option>
                  </optgroup>
                </select>
              </div>

              {/* Comensales */}
              <div>
                <label
                  htmlFor="res-guests"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-solid fa-users text-brand-gold mr-1"></i>{" "}
                  Comensales
                </label>
                <select
                  id="res-guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                >
                  <option value="1">1 Persona (Barra del Chef)</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                  <option value="6">6 Personas</option>
                  <option value="7+">Más de 6 (Evento Privado)</option>
                </select>
              </div>
            </div>

            {/* Datos Personales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div>
                <label
                  htmlFor="res-name"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-regular fa-user text-brand-gold mr-1"></i>{" "}
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="res-name"
                  placeholder="Ej. Sofía Mendoza"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="res-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-solid fa-phone text-brand-gold mr-1"></i>{" "}
                  Teléfono Móvil
                </label>
                <input
                  type="tel"
                  id="res-phone"
                  placeholder="+51 987 654 321"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="res-email"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
                >
                  <i className="fa-regular fa-envelope text-brand-gold mr-1"></i>{" "}
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="res-email"
                  placeholder="sofia@ejemplo.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white"
                />
              </div>
            </div>

            {/* Comentarios Especiales */}
            <div>
              <label
                htmlFor="res-notes"
                className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2"
              >
                <i className="fa-regular fa-comment-dots text-brand-gold mr-1"></i>{" "}
                Peticiones Especiales o Alergias (Opcional)
              </label>
              <textarea
                id="res-notes"
                rows="3"
                placeholder="Indícanos si celebras algún aniversario, preferencias de ubicación o alergias alimentarias..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-sm transition-all bg-white resize-none"
              ></textarea>
            </div>

            {/* Botones y Acciones */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
              <a
                href="tel:+51987654321"
                className="text-xs text-neutral-600 hover:text-brand-black flex items-center space-x-2 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>
                  ¿Prefieres llamar? <strong>+51 (1) 234-5678</strong>
                </span>
              </a>

              <button
                type="submit"
                id="submit-res-btn"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-goldHover hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>{" "}
                    Procesando...
                  </>
                ) : (
                  "Confirmar Reservación"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
