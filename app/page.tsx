export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0c1f2c" }}>

      {/* ========== NAVBAR ========== */}
      <nav style={{ backgroundColor: "#0c1f2c", borderBottom: "1px solid #d4af3730" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo imagen */}
          <img src="/logo.png" alt="Visual Elyon" className="h-24 w-auto" />

          {/* Links de navegación */}
          <div className="hidden md:flex items-center gap-8"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "13px", letterSpacing: "0.05em" }}>
            <a href="#servicios" style={{ color: "#f4f4f2" }}
              className="hover:opacity-70 transition-opacity uppercase tracking-widest">
              Servicios
            </a>
            <a href="#portafolio" style={{ color: "#f4f4f2" }}
              className="hover:opacity-70 transition-opacity uppercase tracking-widest">
              Portafolio
            </a>
            <a href="#nosotros" style={{ color: "#f4f4f2" }}
              className="hover:opacity-70 transition-opacity uppercase tracking-widest">
              Nosotros
            </a>
            <a href="#contacto"
              style={{ backgroundColor: "#d4af37", color: "#0c1f2c", fontFamily: "var(--font-montserrat)" }}
              className="px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity uppercase tracking-widest text-xs">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Etiqueta superior */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-6">
            Diseño · Branding · Tecnología
          </p>

          {/* Título principal */}
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Impulsamos tu marca<br />
            con{" "}
            <span style={{ color: "#d4af37" }}>diseño, creatividad</span><br />
            y tecnología.
          </h1>

          {/* Subtítulo */}
          <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
            className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            En Visual Elyon ayudamos a emprendedores, negocios y organizaciones
            a destacar mediante branding, diseño gráfico, marketing digital
            y soluciones web profesionales.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicios"
              style={{ backgroundColor: "#d4af37", color: "#0c1f2c", fontFamily: "var(--font-montserrat)" }}
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity text-center">
              Ver Servicios
            </a>
            <a href="#contacto"
              style={{ border: "1px solid #d4af37", color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-70 transition-opacity text-center">
              Solicitar Cotización
            </a>
          </div>

        </div>
      </section>

      {/* ========== SERVICIOS ========== */}
      <section id="servicios" className="py-24 px-6"
        style={{ backgroundColor: "#0a1a25" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado de sección */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Lo que hacemos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            Nuestros Servicios
          </h2>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✦", titulo: "Diseño Gráfico", desc: "Flyers, banners, material publicitario y diseño visual corporativo que impacta." },
              { icon: "◈", titulo: "Branding e Identidad", desc: "Logos, identidad corporativa, paletas de colores y manual básico de marca." },
              { icon: "◉", titulo: "Redes Sociales", desc: "Publicaciones, historias, portadas y contenido visual para tu comunidad." },
              { icon: "◫", titulo: "Catálogos Digitales", desc: "Catálogos interactivos y presentación profesional de productos y servicios." },
              { icon: "◻", titulo: "Desarrollo Web", desc: "Landing pages, sitios corporativos y portafolios digitales de alto impacto." },
              { icon: "◆", titulo: "Marketing Digital", desc: "Facebook Ads, Instagram Ads y campañas publicitarias que generan resultados." },
            ].map((servicio, i) => (
              <div key={i}
                style={{ backgroundColor: "#0c1f2c", border: "1px solid #d4af3730" }}
                className="p-8 rounded-2xl hover:border-[#d4af37] transition-all duration-300 group">
                <span style={{ color: "#d4af37" }} className="text-3xl mb-4 block">
                  {servicio.icon}
                </span>
                <h3 style={{ fontFamily: "var(--font-montserrat)", color: "#f4f4f2" }}
                  className="text-lg font-semibold mb-3">
                  {servicio.titulo}
                </h3>
                <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm leading-relaxed">
                  {servicio.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========== NOSOTROS ========== */}
      <section id="nosotros" className="py-24 px-6" style={{ backgroundColor: "#0c1f2c" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Quiénes somos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-6">
            Sobre Nosotros
          </h2>
          <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
            className="text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed">
            Somos una marca especializada en soluciones visuales y digitales,
            orientadas a fortalecer la imagen, presencia y crecimiento de
            emprendedores, negocios, organizaciones y profesionales.
          </p>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            <div className="p-8 rounded-2xl"
              style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730" }}>
              <span style={{ color: "#d4af37" }} className="text-3xl mb-4 block">◈</span>
              <h3 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
                className="text-2xl font-bold mb-4">
                Nuestra Misión
              </h3>
              <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                className="leading-relaxed">
                Ayudar a emprendedores, negocios y organizaciones a destacar
                en el entorno digital mediante diseño, creatividad y tecnología,
                transformando su visión en una identidad visual poderosa.
              </p>
            </div>

            <div className="p-8 rounded-2xl"
              style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730" }}>
              <span style={{ color: "#d4af37" }} className="text-3xl mb-4 block">◉</span>
              <h3 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
                className="text-2xl font-bold mb-4">
                Nuestra Visión
              </h3>
              <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                className="leading-relaxed">
                Ser la agencia de diseño y soluciones digitales de referencia
                para emprendedores y negocios en crecimiento, reconocida por
                nuestra calidad, creatividad y compromiso con cada cliente.
              </p>
            </div>

          </div>

          {/* Valores */}
          <h3 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-2xl font-bold text-center mb-10">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icono: "✦", valor: "Creatividad" },
              { icono: "◆", valor: "Excelencia" },
              { icono: "◉", valor: "Compromiso" },
              { icono: "◈", valor: "Confianza" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730" }}>
                <span style={{ color: "#d4af37" }} className="text-2xl mb-3 block">
                  {item.icono}
                </span>
                <p style={{ fontFamily: "var(--font-montserrat)", color: "#f4f4f2" }}
                  className="text-sm font-semibold uppercase tracking-widest">
                  {item.valor}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
            {/* ========== PROCESO DE TRABAJO ========== */}
      <section id="proceso" className="py-24 px-6" style={{ backgroundColor: "#0a1a25" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Cómo trabajamos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-20">
            Nuestro Proceso
          </h2>

          {/* Pasos */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { numero: "01", titulo: "Escuchamos", desc: "Entendemos tu idea, tu marca y tus objetivos." },
              { numero: "02", titulo: "Analizamos", desc: "Estudiamos tus necesidades y definimos la estrategia." },
              { numero: "03", titulo: "Diseñamos", desc: "Creamos la solución visual perfecta para tu marca." },
              { numero: "04", titulo: "Ejecutamos", desc: "Desarrollamos el proyecto con calidad y precisión." },
              { numero: "05", titulo: "Entregamos", desc: "Presentamos resultados que superan tus expectativas." },
            ].map((paso, i) => (
              <div key={i} className="text-center p-6 rounded-2xl relative"
                style={{ backgroundColor: "#0c1f2c", border: "1px solid #d4af3730" }}>
                <span style={{ color: "#d4af37", fontFamily: "var(--font-playfair)" }}
                  className="text-4xl font-bold mb-4 block">
                  {paso.numero}
                </span>
                <h3 style={{ fontFamily: "var(--font-montserrat)", color: "#f4f4f2" }}
                  className="text-sm font-bold uppercase tracking-widest mb-3">
                  {paso.titulo}
                </h3>
                <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-xs leading-relaxed">
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
            {/* ========== PORTAFOLIO ========== */}
      <section id="portafolio" className="py-24 px-6" style={{ backgroundColor: "#0c1f2c" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Nuestro trabajo
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-6">
            Portafolio
          </h2>
          <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
            className="text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Una muestra de nuestros proyectos más destacados en diseño,
            branding y soluciones digitales.
          </p>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { categoria: "Branding", titulo: "Identidad Visual", desc: "Creación de logo e identidad corporativa completa." },
              { categoria: "Diseño Web", titulo: "Sitio Corporativo", desc: "Desarrollo de sitio web profesional y responsive." },
              { categoria: "Redes Sociales", titulo: "Contenido Digital", desc: "Pack completo de publicaciones para Instagram y Facebook." },
              { categoria: "Catálogo", titulo: "Catálogo Digital", desc: "Catálogo interactivo de productos con diseño premium." },
              { categoria: "Diseño Gráfico", titulo: "Material Publicitario", desc: "Flyers, banners y material para campaña publicitaria." },
              { categoria: "Marketing", titulo: "Campaña Digital", desc: "Gestión y diseño de campaña en Facebook e Instagram Ads." },
            ].map((proyecto, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{ border: "1px solid #d4af3730" }}>

                {/* Imagen placeholder */}
                <div className="h-52 flex items-center justify-center relative"
                  style={{ backgroundColor: "#0a1a25" }}>
                  <span style={{ color: "#d4af3750", fontFamily: "var(--font-playfair)" }}
                    className="text-5xl font-bold">
                    VE
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#d4af3715" }}>
                    <span style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
                      className="text-xs uppercase tracking-widest font-semibold">
                      Ver proyecto
                    </span>
                  </div>
                </div>

                {/* Info del proyecto */}
                <div className="p-6" style={{ backgroundColor: "#0c1f2c" }}>
                  <span style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
                    className="text-xs uppercase tracking-widest font-semibold">
                    {proyecto.categoria}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
                    className="text-lg font-bold mt-1 mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                    className="text-sm leading-relaxed">
                    {proyecto.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Botón ver más */}
          <div className="text-center mt-12">
            <a href="#contacto"
              style={{ border: "1px solid #d4af37", color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
              className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              Solicitar Proyecto
            </a>
          </div>

        </div>
      </section>
            {/* ========== TESTIMONIOS ========== */}
      <section id="testimonios" className="py-24 px-6" style={{ backgroundColor: "#0a1a25" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Lo que dicen de nosotros
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-16">
            Testimonios
          </h2>

          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                nombre: "María García",
                rol: "Emprendedora",
                comentario: "Visual Elyon transformó completamente la imagen de mi negocio. El diseño superó todas mis expectativas.",
                iniciales: "MG"
              },
              {
                nombre: "Carlos Mendoza",
                rol: "Dueño de negocio local",
                comentario: "Profesionales de verdad. Entendieron exactamente lo que necesitaba y entregaron resultados increíbles.",
                iniciales: "CM"
              },
              {
                nombre: "Ana Torres",
                rol: "Profesional independiente",
                comentario: "Mi marca ahora transmite exactamente lo que soy. El equipo de Visual Elyon es excepcional.",
                iniciales: "AT"
              },
            ].map((testimonio, i) => (
              <div key={i} className="p-8 rounded-2xl"
                style={{ backgroundColor: "#0c1f2c", border: "1px solid #d4af3730" }}>

                {/* Comillas */}
                <span style={{ color: "#d4af37" }}
                  className="text-5xl font-bold leading-none block mb-4">
                  "
                </span>

                {/* Comentario */}
                <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm leading-relaxed mb-8">
                  {testimonio.comentario}
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#d4af3720", border: "1px solid #d4af3750" }}>
                    <span style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
                      className="text-xs font-bold">
                      {testimonio.iniciales}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat)", color: "#f4f4f2" }}
                      className="text-sm font-semibold">
                      {testimonio.nombre}
                    </p>
                    <p style={{ color: "#d4af37", fontFamily: "var(--font-inter)" }}
                      className="text-xs">
                      {testimonio.rol}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
            {/* ========== CONTACTO ========== */}
      <section id="contacto" className="py-24 px-6" style={{ backgroundColor: "#0c1f2c" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <p style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Hablemos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#f4f4f2" }}
            className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contáctanos
          </h2>
          <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
            className="text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            ¿Listo para llevar tu marca al siguiente nivel? 
            Escríbenos y con gusto te ayudamos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Formulario */}
            <div>
              <div className="flex flex-col gap-4">
                <div>
                  <label style={{ color: "#c4b7cb", fontFamily: "var(--font-montserrat)" }}
                    className="text-xs uppercase tracking-widest mb-2 block">
                    Nombre completo
                  </label>
                  <input type="text" placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730", color: "#f4f4f2", fontFamily: "var(--font-inter)" }} />
                </div>
                <div>
                  <label style={{ color: "#c4b7cb", fontFamily: "var(--font-montserrat)" }}
                    className="text-xs uppercase tracking-widest mb-2 block">
                    Correo electrónico
                  </label>
                  <input type="email" placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730", color: "#f4f4f2", fontFamily: "var(--font-inter)" }} />
                </div>
                <div>
                  <label style={{ color: "#c4b7cb", fontFamily: "var(--font-montserrat)" }}
                    className="text-xs uppercase tracking-widest mb-2 block">
                    Servicio de interés
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730", color: "#f4f4f2", fontFamily: "var(--font-inter)" }}>
                    <option value="">Selecciona un servicio</option>
                    <option>Diseño Gráfico</option>
                    <option>Branding e Identidad Visual</option>
                    <option>Diseño para Redes Sociales</option>
                    <option>Catálogos Digitales</option>
                    <option>Desarrollo Web</option>
                    <option>Marketing Digital</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#c4b7cb", fontFamily: "var(--font-montserrat)" }}
                    className="text-xs uppercase tracking-widest mb-2 block">
                    Mensaje
                  </label>
                  <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730", color: "#f4f4f2", fontFamily: "var(--font-inter)" }} />
                </div>
                <button
                  style={{ backgroundColor: "#d4af37", color: "#0c1f2c", fontFamily: "var(--font-montserrat)" }}
                  className="w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Enviar Mensaje
                </button>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col gap-6 justify-center">
              {[
                {
                  icono: "✆",
                  titulo: "WhatsApp",
                  valor: "+51 999 999 999",
                  link: "https://wa.me/51999999999"
                },
                {
                  icono: "✉",
                  titulo: "Correo",
                  valor: "contacto@visualelyon.com",
                  link: "mailto:contacto@visualelyon.com"
                },
                {
                  icono: "f",
                  titulo: "Facebook",
                  valor: "@VisualElyon",
                  link: "https://facebook.com/visualelyon"
                },
                {
                  icono: "◉",
                  titulo: "Instagram",
                  valor: "@visualelyon",
                  link: "https://instagram.com/visualelyon"
                },
              ].map((contacto, i) => (
                <a key={i} href={contacto.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl hover:border-[#d4af37] transition-all duration-300"
                  style={{ backgroundColor: "#0a1a25", border: "1px solid #d4af3730" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#d4af3720", border: "1px solid #d4af3750" }}>
                    <span style={{ color: "#d4af37" }} className="text-lg font-bold">
                      {contacto.icono}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-montserrat)", color: "#c4b7cb" }}
                      className="text-xs uppercase tracking-widest mb-1">
                      {contacto.titulo}
                    </p>
                    <p style={{ fontFamily: "var(--font-inter)", color: "#f4f4f2" }}
                      className="text-sm font-medium">
                      {contacto.valor}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>
            {/* ========== FOOTER ========== */}
      <footer className="py-16 px-6" style={{ backgroundColor: "#020d14", borderTop: "1px solid #d4af3730" }}>
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Logo y descripción */}
            <div>
              <img src="/logo.png" alt="Visual Elyon" className="h-16 w-auto mb-4" />
              <p style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                className="text-sm leading-relaxed">
                Soluciones visuales y digitales para emprendedores,
                negocios y organizaciones que quieren destacar.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
                className="text-xs uppercase tracking-widest font-semibold mb-6">
                Navegación
              </h4>
              <div className="flex flex-col gap-3">
                {["Inicio", "Servicios", "Portafolio", "Nosotros", "Contacto"].map((link, i) => (
                  <a key={i} href={`#${link.toLowerCase()}`}
                    style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                    className="text-sm hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 style={{ color: "#d4af37", fontFamily: "var(--font-montserrat)" }}
                className="text-xs uppercase tracking-widest font-semibold mb-6">
                Contacto
              </h4>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/51999999999"
                  style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm hover:opacity-70 transition-opacity">
                  WhatsApp: +51 999 999 999
                </a>
                <a href="mailto:contacto@visualelyon.com"
                  style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm hover:opacity-70 transition-opacity">
                  contacto@visualelyon.com
                </a>
                <a href="https://instagram.com/visualelyon"
                  style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm hover:opacity-70 transition-opacity">
                  Instagram: @visualelyon
                </a>
                <a href="https://facebook.com/visualelyon"
                  style={{ color: "#c4b7cb", fontFamily: "var(--font-inter)" }}
                  className="text-sm hover:opacity-70 transition-opacity">
                  Facebook: @VisualElyon
                </a>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div style={{ borderTop: "1px solid #d4af3720" }} className="pt-8 text-center">
            <p style={{ color: "#c4b7cb", fontFamily: "var(--font-montserrat)" }}
              className="text-xs uppercase tracking-widest">
              © 2025 Visual Elyon · Todos los derechos reservados
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}