// =========================================================================
    // 1. CONFIGURACIÓN LIMPIA (Estructura base de datos)
    // =========================================================================
    const CONFIG = {
        metaTitle: "Título de la Página",
        brandInitials: "DF",
        brandLogoUrl: "../assets/brand/Brand.svg",
        copyrightYear: 2026,

        // Sección Principal (Hero)
        hero: {
            badge: "Colaboración",
            title: "Selección y participación",
            description: "La forma en que buscamos y seleccionamos a DJs y selectores(as) para formar parte de nuestras experiencias."
        },

        // Lista de Secciones dinámicas
        // Agrega, quita o edita objetos en este arreglo según tus necesidades:
        sections: [
            // --- EJEMPLO DE SECCIÓN DE TEXTO ---
            {
                tipo: "texto",
                tituloSeccion: "Valor Intrinseco",
                texto: "Para Dynamic Floor, el criterio de selección de DJs y selectores(as) parte de la música.\
                La calidad, la profundidad y el valor de una propuesta musical tienen mayor peso que la técnica de DJing."
            },
            {
                tipo: "texto",
                tituloSeccion: "Calidad",
                texto: "Buscamos música de alta calidad, proveniente de sellos y propuestas poco comunes,\
                con un criterio de selección afinado y una clara distancia de las tendencias de consumo."
            },
            {
                tipo: "texto",
                tituloSeccion: "Otro Enfoque",
                texto: "Dynamic Floor busca alejarse de las fórmulas y conceptos convencionales de la escena,\
                replanteando formas como el lineup, el warm-up, el headliner o el press kit para dar lugar a\
                propuestas construidas desde la música y el contexto de cada experiencia."
            },
            {
                tipo: "texto",
                tituloSeccion: "Identidad y Criterio",
                texto: "No buscamos propuestas construidas desde el open format, las tendencias de consumo o\
                fórmulas pensadas para complacer al público más amplio mediante propuestas consolidadas y repetitivas.\
                Valoramos la identidad de cada DJ y selector(a), así como un criterio de selección definido y afinado. No estamos cerrados\
                a ninguna trayectoria o forma de trabajo; sin embargo, formar parte de Dynamic Floor implica comprender y respetar \
                nuestro concepto, adaptándose a él sin perder la identidad propia."
            },

            {
                tipo: "texto",
                tituloSeccion: "El desarrollo de una propuesta",
                texto: 
                "Nuestro desarrollo se construye a partir de tres componentes: Arranque, Propuestas Invitadas y Propuestas Estelares.\
                Cada uno responde a un momento distinto dentro de la construcción de una experiencia y de nuestra relación con quienes\
                participan en ella."
            },
            {
                tipo: "texto",
                tituloSeccion: "Arranque",
                texto: 
                "Es el punto de partida de la experiencia. Al no utilizar conceptos como warm up,\
                proponemos una selección dirigida por Dynamic Floor, que posteriormente es mezclada y desarrollada\
                por los participantes junto con el equipo de soporte de Dynamic Floor. El objetivo no es establecer jerarquías,\
                sino construir desde el primer momento una continuidad musical compartida y coherente con la experiencia."
            },
            {
                tipo: "texto",
                tituloSeccion: "Propuestas Invitadas",
                texto: 
                "Representan el primer acercamiento de una propuesta a Dynamic Floor. Más que una participación aislada,\
                buscamos que cada encuentro permita conocer, desarrollar y contrastar una visión musical.\
                Es un espacio para trabajar sin ego ni prejuicios, con apertura suficiente para encontrar aquello que puede construirse en conjunto.\
                La intención es que cada propuesta invitada pueda evolucionar hacia nuevas posibilidades dentro del proyecto,\
                a partir de la relación que se construya durante el proceso."
            },
            {
                tipo: "texto",
                tituloSeccion: "Propuestas Estelares",
                texto: 
                "Son propuestas que parten de un acuerdo previo y representan una etapa de mayor consolidación dentro del desarrollo.\
                No significan un punto final, sino la posibilidad de profundizar en una relación ya construida y generar nuevas propuestas\
                en el futuro.\ De esta manera, cada participación forma parte de un proceso continuo: comenzar, conocer, desarrollar y consolidar. \
                Nuestro interés no está únicamente en presentar propuestas musicales, sino en construir relaciones y experiencias que permitan que el proyecto continúe desarrollándose con cada encuentro."
            },
             {
                tipo: "texto",
                tituloSeccion: "Evaluación",
                texto: "Dynamic Floor evalúa el criterio musical de cada selector(a) o DJ a partir de una selección de tracks\
                que represente su propuesta,\nacompañada de los sellos discográficos de referencia.\n\nNo buscamos únicamente géneros,\
                tendencias o reconocimiento,\nsino conocer qué referencias elige y qué criterio existe detrás de su\
                selección.<br>Ejemplo:<br>Sello: Ajudadeep · Colorize · All Day I Dream<br>Tracks: [Lista de tracks seleccionados]"
               
            },
            {
                tipo: "texto",
                tituloSeccion: "Consideraciones sobre la colaboración",
                texto: "Dynamic Floor no cuenta con financiamiento ni ingresos fijos. Por ello, cada participación forma parte de una\
                colaboración orientada al desarrollo de cada experiencia y al crecimiento del proyecto.<br><br>Los accesos que se generan\
                en cada experiencia se destinan al desarrollo, producción y mantenimiento de Dynamic Floor, así como a la continuidad de las\
                 actividades que construimos junto con nuestra comunidad.<br><br>De igual manera, procuramos que los espacios donde se desarrollan\
                las experiencias puedan ofrecer a los artistas algún incentivo en especie y, cuando las condiciones lo permiten,\
                un pequeño incentivo económico de carácter simbólico. Estos incentivos no están garantizados en todas las experiencias,\
                pero forman parte de nuestro objetivo de reconocer y acompañar la participación de quienes colaboran con el proyecto.\
                <br><br>Es importante considerar que Dynamic Floor es un proyecto sin fines de lucro. Los accesos no representan una finalidad\
                comercial, sino una contribución destinada a hacer posible el desarrollo y mantenimiento del proyecto,\
                sus experiencias y la comunidad que se construye alrededor de ellas."
            },
            {
                tipo: "texto",
                tituloSeccion: "Más Allá de la Música",
                texto: "Dynamic Floor convoca a artistas de todas las disciplinas para fusionar la música, el arte y el patrimonio."
            }
            /* 
               --- PLANTILLAS DE SECCIONES PARA COPIAR Y PEGAR EN FUTUROS EVENTOS ---

               1. Tarjetas Informativas:
               {
                   tipo: "info_cards",
                   tituloSeccion: "Información General",
                   destacada: {
                       titulo: "Aviso Destacado",
                       color: "yellow", // yellow, purple, orange, pink, cyan
                       texto: "Texto en la tarjeta principal superior"
                   },
                   cards: [
                       { titulo: "Dato 1", color: "purple", texto: "Detalle" },
                       { titulo: "Dato 2", color: "orange", texto: "Detalle" }
                   ]
               },

               2. Texto / Vidrio:
               {
                   tipo: "texto",
                   tituloSeccion: "Título",
                   texto: "Contenido..."
               },

               3. Video Embed (YouTube):
               {
                   tipo: "video",
                   id: "video-sec",
                   tituloSeccion: "Video",
                   videoUrl: "https://www.youtube.com/embed/XXXXXX"
               },

               4. Cronograma / Programa:
               {
                   tipo: "programa",
                   tituloSeccion: "Programa",
                   horarios: [
                       { hora: "12:00", actividad: "Apertura" },
                       { hora: "13:00", actividad: "Inicio" }
                   ]
               },

               5. Ubicación:
               {
                   tipo: "ubicacion",
                   id: "ubicacion",
                   tituloSeccion: "Ubicación",
                   direccion: ["Línea 1", "Línea 2", "Ciudad, Estado"],
                   lugar: "Nombre del recinto",
                   mapsUrl: "https://maps.app.goo.gl/...",
                   embedUrl: "https://www.google.com/maps/embed?pb=..."
               },

               6. Imagen:
               {
                   tipo: "imagen",
                   tituloSeccion: "Referencia Visual",
                   imagenUrl: "ruta/a/tu/imagen.png"
               },

               7. Lista de Recomendaciones:
               {
                   tipo: "recomendaciones",
                   tituloSeccion: "Recomendaciones",
                   lista: [
                       "Punto uno",
                       "Punto dos"
                   ]
               }
            */
        ]
    };


    // =========================================================================
    // 2. MOTOR DE RENDERIZADO EXTENSIBLE Y MODULAR
    // =========================================================================

    // Diccionario de funciones de renderizado por tipo de sección.
    // Si creas un nuevo tipo de sección en el futuro, solo agregas su función aquí.
    const renderers = {
        info_cards: (sec) => {
            const cardDestacadaHtml = sec.destacada ? `
                <div class="info-card">
                    <div class="info-title ${sec.destacada.color || ''}">${sec.destacada.titulo}</div>
                    <div class="info-content">${sec.destacada.texto}</div>
                </div>` : '';

            const cardsGridHtml = sec.cards && sec.cards.length > 0 ? `
                <div class="info-grid">
                    ${sec.cards.map(c => `
                        <div class="info-card">
                            <div class="info-title ${c.color || ''}">${c.titulo}</div>
                            <div class="info-content">${c.texto}</div>
                        </div>
                    `).join('')}
                </div>` : '';

            return `
                <section>
                    <h2 class="section-title">${sec.tituloSeccion}</h2>
                    ${cardDestacadaHtml}
                    ${cardsGridHtml}
                </section>`;
        },

        texto: (sec) => `
            <section class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <div class="glass-card">
                    <p>${sec.texto}</p>
                </div>
            </section>`,

        video: (sec) => `
            <section id="${sec.id || ''}" class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <div class="video-card">
                    <iframe width="560" height="560" src="${sec.videoUrl}" 
                    title="Player Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>`,

        programa: (sec) => `
            <section class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <div class="timeline">
                    ${(sec.horarios || []).map(h => `
                        <div class="timeline-item">
                            <div class="timeline-hour">${h.hora}</div>
                            <div class="timeline-text">${h.actividad}</div>
                        </div>
                    `).join('')}
                </div>
            </section>`,

        ubicacion: (sec) => `
            <section id="${sec.id || ''}" class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <div class="location-card">
                    <div class="location-info">
                        <div class="location-address">
                            ${(sec.direccion || []).map(l => `${l}<br>`).join('')}
                            <br>
                            <span>${sec.lugar || ''}</span>
                        </div>
                        <a href="${sec.mapsUrl}" target="_blank" class="action-btn">
                            Abrir en Google Maps
                        </a>
                    </div>
                    <div class="map-container">
                        <iframe src="${sec.embedUrl}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>`,

        imagen: (sec) => `
            <section class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <img src="${sec.imagenUrl}" alt="${sec.tituloSeccion}" class="responsive-img">
            </section>`,

        recomendaciones: (sec) => `
            <section class="content-section">
                <h2 class="section-title">${sec.tituloSeccion}</h2>
                <div class="notice-card">
                    <div class="notice-text">
                        ${(sec.lista || []).map(item => `• ${item}`).join('<br><br>')}
                    </div>
                </div>
            </section>`
    };

    // Función principal que orquesta la inserción en el DOM
    function renderApp(config) {
        // Datos de cabecera y hero
        document.title = config.metaTitle;
        document.getElementById('bg-logo-text').innerText = config.brandInitials;
        document.getElementById('hero-badge').innerText = config.hero.badge;
        document.getElementById('hero-title').innerText = config.hero.title;
        document.getElementById('hero-description').innerText = config.hero.description;
        document.getElementById('hero-logo').src = config.brandLogoUrl;
        document.getElementById('footer-text').innerText = `Dynamic Floor © ${config.copyrightYear}`;

        // Renderizado dinámico según el tipo definido en la sección
        const container = document.getElementById('dynamic-content-container');
        
        container.innerHTML = config.sections.map(sec => {
            const renderer = renderers[sec.tipo];
            if (renderer) {
                return renderer(sec);
            }
            console.warn(`Tipo de sección desconocido: "${sec.tipo}"`);
            return '';
        }).join('');
    }

    // Inicializar al cargar el DOM
    document.addEventListener('DOMContentLoaded', () => {
        renderApp(CONFIG);
    });