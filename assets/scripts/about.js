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
            badge: "● Badge / Etiqueta",
            title: "Título Principal",
            description: "Descripción breve del evento, marca o sitio web."
        },

        // Lista de Secciones dinámicas
        // Agrega, quita o edita objetos en este arreglo según tus necesidades:
        sections: [
            // --- EJEMPLO DE SECCIÓN DE TEXTO ---
            {
                tipo: "texto",
                tituloSeccion: "Sección de bienvenida",
                texto: "Este es un texto de prueba. Puedes modificar esta sección o eliminarla y agregar cualquier otro tipo de contenido compatible."
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