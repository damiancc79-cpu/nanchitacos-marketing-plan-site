import Image from "next/image";

const audiences = [
  {
    tag: "Primaria",
    title: "Foodies de barrio",
    age: "22–40 años",
    need: "Buscan una cena sabrosa, visual y compartible sin complicaciones.",
    trigger: "Video corto + recomendación local + especial de temporada.",
  },
  {
    tag: "Volumen",
    title: "Familias y parejas",
    age: "28–50 años",
    need: "Quieren resolver la cena con calidad y una experiencia cálida.",
    trigger: "Paquete para compartir + reseñas + ubicación clara.",
  },
  {
    tag: "Frecuencia",
    title: "Oficinas y estudiantes",
    age: "18–35 años",
    need: "Valoran rapidez, precio entendible y cercanía.",
    trigger: "Oferta entre semana + WhatsApp + Google Maps.",
  },
];

const pillars = [
  ["01", "Antojo", "Close-ups, vapor, tortilla y mordidas. El producto siempre es el héroe."],
  ["02", "Cocina", "Proceso, ingredientes y manos que cocinan. Construye confianza."],
  ["03", "Barrio", "Ubicación, rituales locales y colaboraciones con negocios vecinos."],
  ["04", "Comunidad", "Clientes, reseñas, reacciones y contenido generado por visitantes."],
  ["05", "Conversión", "Paquetes, especiales y llamados claros a WhatsApp o Maps."],
];

const roadmap = [
  {
    phase: "01",
    days: "Días 1–30",
    name: "Base que convierte",
    objective: "Ordenar la presencia digital y crear un banco de contenido reconocible.",
    actions: [
      "Optimizar Google Business: menú, horario, fotos y enlace a WhatsApp.",
      "Grabar 12 videos verticales en una sola jornada de producción.",
      "Crear códigos UTM y una promoción rastreable: NOCHE NANCHI.",
      "Pedir reseñas con QR en mesa, ticket y empaque.",
    ],
    target: "40 reseñas nuevas · 300 conversaciones o clics de intención",
  },
  {
    phase: "02",
    days: "Días 31–60",
    name: "Tracción local",
    objective: "Aumentar alcance útil dentro de una zona de 3–5 km y convertirlo en visitas.",
    actions: [
      "Activar anuncios geolocalizados con las dos mejores piezas orgánicas.",
      "Invitar a 4 microcreadores locales a una cena de degustación.",
      "Lanzar Martes Nanchi y un paquete Cena para Dos.",
      "Publicar una colaboración con un café, bar o comercio vecino.",
    ],
    target: "120 canjes de promoción · costo por conversación ≤ $25 MXN",
  },
  {
    phase: "03",
    days: "Días 61–90",
    name: "Recompra y comunidad",
    objective: "Convertir clientes nuevos en habituales y activar recomendación boca a boca.",
    actions: [
      "Lanzar Pasaporte Nanchi: 5 visitas, la sexta tiene recompensa.",
      "Segmentar WhatsApp entre clientes nuevos, frecuentes y eventos.",
      "Crear la campaña Tu Taco Nanchi con votación de sabor temporal.",
      "Ofrecer una bandeja para reuniones y medir demanda de catering.",
    ],
    target: "25% de recompra · 80 registros de lealtad · 15 solicitudes de eventos",
  },
];

const weeklyPlan = [
  ["Lunes", "Planear + grabar", "Story de preparación", "Google Business"],
  ["Martes", "Reel de oferta", "Martes Nanchi", "Anuncio local"],
  ["Miércoles", "Cocina abierta", "Ingrediente protagonista", "Responder reseñas"],
  ["Jueves", "Reel de antojo", "Encuesta de sabor", "WhatsApp"],
  ["Viernes", "Cena en acción", "UGC + ambiente", "Impulsar reserva"],
  ["Sábado", "Prueba social", "Clientes + reseñas", "Stories en vivo"],
  ["Domingo", "Recap semanal", "Paquete familiar", "Medir y aprender"],
];

const kpis = [
  ["Descubrimiento", "Alcance local, reproducciones de 3 s, búsquedas de marca", "Semanal"],
  ["Interés", "Guardados, compartidos, visitas al perfil, menú visto", "Semanal"],
  ["Conversión", "Clics a Maps/WhatsApp, canjes, pedidos atribuibles", "Semanal"],
  ["Lealtad", "Recompra, reseñas, registros y referidos", "Mensual"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de Nanchitacos">
          <span className="brand-dot" aria-hidden="true" />
          Nanchitacos
        </a>
        <nav aria-label="Navegación del plan">
          <a href="#estrategia">Estrategia</a>
          <a href="#ruta">90 días</a>
          <a href="#contenido">Contenido</a>
          <a href="#metricas">Métricas</a>
        </nav>
        <a className="button button-small" href="#checklist">Empezar</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span>Plan de marketing</span><span>90 días · 2026</span></div>
          <h1>Que el antojo<br />encuentre su <em>barrio.</em></h1>
          <p className="hero-lede">
            Una estrategia práctica para convertir la identidad de Nanchitacos en alcance local,
            cenas, reseñas y clientes que vuelven.
          </p>
          <div className="hero-actions">
            <a className="button" href="#ruta">Ver hoja de ruta</a>
            <a className="text-link" href="#resumen">Leer resumen <span>↘</span></a>
          </div>
          <div className="hero-metrics" aria-label="Metas principales de 90 días">
            <div><strong>3–5 km</strong><span>radio prioritario</span></div>
            <div><strong>25%</strong><span>meta de recompra</span></div>
            <div><strong>4.7★</strong><span>reputación objetivo</span></div>
          </div>
        </div>
        <div className="hero-media">
          <video autoPlay muted loop playsInline poster="/brand/risograph.png" aria-label="Logo animado de Nanchitacos">
            <source src="/brand/nanchitacos-loop.mp4" type="video/mp4" />
          </video>
          <div className="media-stamp"><span>Hecho para</span><strong>ANTOJAR</strong></div>
        </div>
      </section>

      <section className="summary-band" id="resumen">
        <p className="section-number">00</p>
        <div>
          <p className="kicker">La idea central</p>
          <h2>Nanchitacos no compite sólo por precio. Compite por ser <em>la cena más recordable del barrio.</em></h2>
        </div>
        <p className="summary-note">
          Este plan parte de una taquería independiente con servicio local. Las metas son referencias
          iniciales: deben recalibrarse después de las primeras dos semanas de datos reales.
        </p>
      </section>

      <section className="section strategy" id="estrategia">
        <div className="section-heading">
          <p className="section-number">01</p>
          <div><p className="kicker">Estrategia</p><h2>Posicionamiento y audiencias</h2></div>
        </div>

        <div className="position-grid">
          <div className="position-card primary-card">
            <p className="card-label">Promesa de marca</p>
            <h3>“Una cena con sabor de casa y energía de barrio.”</h3>
            <p>Sabrosa, cálida, visual y fácil de compartir. Cada punto de contacto debe provocar antojo y cercanía.</p>
            <div className="brand-words"><span>Generosa</span><span>Local</span><span>Honesta</span><span>Festiva</span></div>
          </div>
          <div className="funnel-card">
            <p className="card-label">Motor de crecimiento</p>
            <ol className="funnel">
              <li><span>01</span><div><strong>Descubrir</strong><small>Reels · TikTok · Maps</small></div></li>
              <li><span>02</span><div><strong>Desear</strong><small>Producto · prueba social</small></div></li>
              <li><span>03</span><div><strong>Visitar</strong><small>WhatsApp · oferta rastreable</small></div></li>
              <li><span>04</span><div><strong>Volver</strong><small>Lealtad · referidos</small></div></li>
            </ol>
          </div>
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <div className="card-top"><span>{audience.tag}</span><small>{audience.age}</small></div>
              <h3>{audience.title}</h3>
              <p>{audience.need}</p>
              <div className="trigger"><small>Detonador</small><strong>{audience.trigger}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-break">
        <Image src="/brand/night-photo.png" alt="Taco Nanchitacos en un ambiente nocturno" width={1254} height={1254} />
        <div className="visual-quote">
          <span>Territorio creativo</span>
          <blockquote>El taco llega caliente.<br />La historia empieza antes.</blockquote>
        </div>
      </section>

      <section className="section roadmap-section" id="ruta">
        <div className="section-heading">
          <p className="section-number">02</p>
          <div><p className="kicker">Ejecución</p><h2>Hoja de ruta de 90 días</h2></div>
        </div>
        <div className="roadmap">
          {roadmap.map((item, index) => (
            <article className="roadmap-card" key={item.phase}>
              <div className="phase-rail"><span>{item.phase}</span><i /><small>{item.days}</small></div>
              <div className="phase-body">
                <p className="phase-kicker">Fase {index + 1}</p>
                <h3>{item.name}</h3>
                <p className="phase-objective">{item.objective}</p>
                <ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                <div className="phase-target"><span>Señal de éxito</span><strong>{item.target}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-section" id="contenido">
        <div className="section-heading">
          <p className="section-number">03</p>
          <div><p className="kicker">Sistema de contenido</p><h2>Publicar con intención</h2></div>
        </div>

        <div className="content-intro">
          <div><strong>3</strong><span>Reels por semana</span></div>
          <div><strong>1</strong><span>Carrusel útil</span></div>
          <div><strong>2×</strong><span>Stories diarias</span></div>
          <div><strong>1</strong><span>Actualización en Maps</span></div>
        </div>

        <div className="pillars-grid">
          {pillars.map(([number, name, description]) => (
            <article key={number}>
              <span>{number}</span><h3>{name}</h3><p>{description}</p>
            </article>
          ))}
        </div>

        <div className="calendar-wrap">
          <div className="calendar-heading">
            <div><p className="kicker">Ritmo semanal</p><h3>Un sistema que cabe en la operación</h3></div>
            <p>La misma grabación alimenta varias plataformas. Crear una vez, adaptar con intención.</p>
          </div>
          <div className="calendar-table" role="table" aria-label="Calendario semanal de contenido">
            <div className="calendar-row calendar-header" role="row">
              <span>Día</span><span>Pieza central</span><span>Apoyo</span><span>Conversión</span>
            </div>
            {weeklyPlan.map((row) => (
              <div className="calendar-row" role="row" key={row[0]}>
                {row.map((cell) => <span role="cell" key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="campaigns">
        <div className="campaign-copy">
          <p className="kicker">Tres campañas listas para probar</p>
          <h2>Un antojo, tres razones para actuar.</h2>
          <p>Cada campaña tiene una oferta clara, una ventana de tiempo y un código distinto para medir resultados.</p>
        </div>
        <div className="campaign-list">
          <details open>
            <summary><span>01</span><strong>Noche Nanchi</strong><small>Lanzamiento</small></summary>
            <div><p>Video hero + paquete de cena + código <b>NANCHI90</b>.</p><p>Objetivo: visitas nuevas y conversaciones por WhatsApp.</p></div>
          </details>
          <details>
            <summary><span>02</span><strong>Martes Nanchi</strong><small>Frecuencia</small></summary>
            <div><p>Especial de entre semana comunicado de lunes a martes.</p><p>Objetivo: mover una noche de baja demanda sin descontar toda la marca.</p></div>
          </details>
          <details>
            <summary><span>03</span><strong>Tu Taco Nanchi</strong><small>Comunidad</small></summary>
            <div><p>Votación mensual entre dos sabores y contenido de clientes.</p><p>Objetivo: comentarios, UGC y un motivo recurrente para volver.</p></div>
          </details>
        </div>
      </section>

      <section className="section investment" id="presupuesto">
        <div className="section-heading">
          <p className="section-number">04</p>
          <div><p className="kicker">Inversión sugerida</p><h2>$12,000 MXN al mes</h2></div>
        </div>
        <div className="budget-grid">
          <div className="budget-chart" aria-label="Distribución del presupuesto mensual">
            <div className="donut"><div><strong>$12k</strong><span>mensuales</span></div></div>
          </div>
          <div className="budget-list">
            <div><i className="red" /><span><strong>42%</strong> Pauta local</span><b>$5,000</b></div>
            <div><i className="green" /><span><strong>25%</strong> Producción</span><b>$3,000</b></div>
            <div><i className="gold" /><span><strong>17%</strong> Microcreadores</span><b>$2,000</b></div>
            <div><i className="cream" /><span><strong>12%</strong> Lealtad e impresos</span><b>$1,500</b></div>
            <div><i className="brown" /><span><strong>4%</strong> Experimentos</span><b>$500</b></div>
          </div>
          <div className="budget-note">
            <span>Regla de reasignación</span>
            <p>Cada 14 días, mover 20% del presupuesto de la pieza menos eficiente hacia la que genere más conversaciones o canjes.</p>
          </div>
        </div>
      </section>

      <section className="section metrics" id="metricas">
        <div className="section-heading">
          <p className="section-number">05</p>
          <div><p className="kicker">Medición</p><h2>El tablero que importa</h2></div>
        </div>
        <div className="metrics-layout">
          <div className="metrics-table">
            {kpis.map(([stage, indicators, rhythm], index) => (
              <div className="metric-row" key={stage}>
                <span>0{index + 1}</span><strong>{stage}</strong><p>{indicators}</p><small>{rhythm}</small>
              </div>
            ))}
          </div>
          <aside className="decision-card">
            <p className="card-label">Reunión quincenal · 30 min</p>
            <h3>Tres preguntas, no veinte gráficas.</h3>
            <ol>
              <li>¿Qué contenido generó intención real?</li>
              <li>¿Qué oferta produjo visitas o pedidos?</li>
              <li>¿Qué vamos a repetir, mejorar o detener?</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="gallery" aria-label="Direcciones visuales de Nanchitacos">
        <Image src="/brand/risograph.png" alt="Póster risográfico de Nanchitacos" width={1254} height={1254} />
        <Image src="/brand/clay-paper.png" alt="Anuncio de Nanchitacos en estilo artesanal" width={1254} height={1254} />
      </section>

      <section className="checklist" id="checklist">
        <div className="checklist-title">
          <p className="kicker">Próximas 72 horas</p>
          <h2>Empezar pequeño.<br />Medir desde el día uno.</h2>
        </div>
        <div className="check-items">
          <label><input type="checkbox" /><span>Definir radio prioritario y horarios de mayor margen.</span></label>
          <label><input type="checkbox" /><span>Actualizar perfil, menú y enlace de WhatsApp en Google Maps.</span></label>
          <label><input type="checkbox" /><span>Elegir la oferta de Noche Nanchi y su código de canje.</span></label>
          <label><input type="checkbox" /><span>Agendar una jornada de foto y video de 2 horas.</span></label>
          <label><input type="checkbox" /><span>Crear el tablero semanal con las métricas de este plan.</span></label>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Nanchitacos</div>
        <p>Plan de marketing · 90 días</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
