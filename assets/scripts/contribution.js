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
            title: "Contribución y Participación",
            description: "La forma en que buscamos y seleccionamos a DJs y selectores(as) para formar parte de nuestras experiencias."
        },

        // Lista de Secciones dinámicas
        // Agrega, quita o edita objetos en este arreglo según tus necesidades:
        sections: [
            // --- EJEMPLO DE SECCIÓN DE TEXTO ---
            { 
                tipo: "texto", 
                tituloSeccion: "Valor Intrínseco", 
                texto: "En Dynamic Floor, la música es el punto de partida para valorar una propuesta.<br><br>\
                La profundidad, la calidad y el criterio de selección tienen mayor peso que la técnica de DJing, el reconocimiento o la trayectoria." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Calidad", 
                texto: "Buscamos propuestas musicales con identidad y criterio, acompañadas de referencias poco comunes y una selección cuidadosamente construida.<br><br>\
                Nos interesa aquello que se distancia de las tendencias de consumo y propone una perspectiva propia." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Otro Enfoque", 
                texto: "Dynamic Floor replantea algunas de las fórmulas convencionales de la escena electrónica.<br><br>\
                Conceptos como lineup, warm-up, headliner o press kit no determinan nuestra forma de construir una experiencia. \
                Preferimos desarrollar cada participación desde la música, el contexto y la relación entre las propuestas." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Identidad y Criterio", 
                texto: "No buscamos propuestas construidas para complacer al público más amplio ni basadas en fórmulas repetitivas, open format o tendencias de consumo.<br><br>\
                Valoramos la identidad de cada DJ y selector(a), así como la claridad y consistencia de su criterio musical.<br><br>\
                No estamos cerrados a una trayectoria, género o forma de trabajo determinada. Sin embargo, participar en Dynamic Floor implica comprender nuestro concepto y encontrar una forma de integrarse a él sin perder la identidad propia." 
            }, 
            
            { 
                tipo: "texto", 
                tituloSeccion: "Desarrollo", 
                texto: "Nuestro desarrollo se construye a partir de tres componentes: <b>Arranque, Propuestas Invitadas y Propuestas Estelares</b>.<br><br>\
                Cada uno representa una etapa distinta en la construcción de una experiencia y en la relación que desarrollamos con quienes participan en ella." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Arranque", 
                texto: "Es el punto de partida de la experiencia.<br><br>\
                Al no utilizar conceptos como warm-up, Dynamic Floor propone una selección musical que posteriormente es mezclada y desarrollada por los participantes junto con nuestro equipo de soporte.<br><br>\
                El objetivo es establecer desde el inicio una continuidad musical compartida, sin jerarquías y en coherencia con el carácter de la experiencia." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Invitados", 
                texto: "Las propuestas invitadas representan el primer acercamiento entre un artista y Dynamic Floor.<br><br>\
                Más que una participación aislada, buscamos conocer y contrastar una visión musical para descubrir qué puede desarrollarse en conjunto.<br><br>\
                Es un espacio de apertura, sin ego ni prejuicios, donde la relación y el intercambio pueden dar lugar a nuevas posibilidades dentro del proyecto." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Estelares", 
                texto: "Las propuestas estelares surgen de una relación previamente desarrollada y representan una etapa de mayor consolidación.<br><br>\
                No constituyen un punto final, sino una oportunidad para profundizar en una visión compartida y continuar desarrollando nuevas propuestas.<br><br>\
                Así, cada participación forma parte de un proceso continuo: <b>comenzar, conocer, desarrollar y consolidar</b>.<br><br>\
                Nuestro interés no es únicamente presentar música, sino construir relaciones y experiencias que permitan al proyecto evolucionar con cada encuentro." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Evaluación", 
                texto: "Dynamic Floor evalúa el criterio musical de cada selector(a) o DJ a partir de una selección de tracks que represente su propuesta, acompañada de sus sellos discográficos de referencia.<br><br>\
                No buscamos únicamente identificar géneros, tendencias o reconocimiento. Nos interesa conocer <b>qué música elige, qué referencias la acompañan y qué criterio existe detrás de esa selección</b>.<br><br>\
                <b>Ejemplo:</b><br>\
                Sello: Ajudadeep · Colorize · All Day I Dream<br>\
                Tracks: [Lista de tracks seleccionados]" 
                            
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Consideraciones de colaboración", 
                texto: "Dynamic Floor no cuenta con financiamiento ni ingresos fijos. Por ello, cada participación forma parte de una colaboración orientada al desarrollo de cada experiencia y al crecimiento del proyecto.<br><br>\
                Los accesos generados en cada experiencia se destinan a su desarrollo, producción y mantenimiento, así como a dar continuidad a las actividades que construimos junto con nuestra comunidad.<br><br>\
                Procuramos también que los espacios donde se desarrollan las experiencias puedan ofrecer a los artistas algún incentivo en especie y, cuando las condiciones lo permiten, un pequeño incentivo económico de carácter simbólico.<br><br>\
                Estos incentivos no están garantizados en todas las experiencias, pero forman parte de nuestro objetivo de reconocer y acompañar la participación de quienes colaboran con el proyecto.<br><br>\
                <b>Dynamic Floor es un proyecto sin fines de lucro.</b> Los accesos no representan una finalidad comercial, sino una contribución destinada a hacer posible el desarrollo y mantenimiento del proyecto, sus experiencias y la comunidad que se construye alrededor de ellas." 
            }, 
            { 
                tipo: "texto", 
                tituloSeccion: "Más Allá de la Música", 
                texto: "Dynamic Floor convoca a artistas de distintas disciplinas para establecer un diálogo entre música, arte y patrimonio, ampliando cada experiencia más allá de lo estrictamente musical." 
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