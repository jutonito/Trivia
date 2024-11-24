document.addEventListener('DOMContentLoaded', () => {
    const preguntas = [
        {
            id: 0,
            titulo: 'Pérez Carrero, C., Rodríguez Moreno, S. M., & Sánchez Mayorga, L. D. P. (2015). El cerebro tríadico y su relación con la curiosidad, el trabajo en equipo y la explicación de fenómenos para el desarrollo de actitud científica. Rastros Rostros, 17(31). <a href="https://doi.org/10.16925/ra.v17i31.1106" target="_blank">Enlace</a>',
            opcionA: "Artículo Científico Introducción, metodología, resultados, discusión y conclusiones.",
            opcionB: "Artículo de reflexión Más flexible, no sigue necesariamente la estructura formal de un artículo científico.",
            opcionC: "Editorial Generalmente breve, con un análisis conciso del tema y una postura clara.",
            opcionD: "Ensayo Libre, sin una estructura formal estricta. Introducción, desarrollo y conclusión son comunes, pero no obligatorios.",
            correcta: "a"
        },
        {
            id: 1,
            titulo: 'Téllez Fajardo, A. (2012). Editorial: Coordenadas hacia la educación de alta calidad. Rastros Rostros, 14(27). <a href="https://doi.org/10.16925/ra.v17i31.1106" target="_blank">Enlace</a>',
            opcionA: 'Reseña Breve descripción de la obra seguida de una crítica o valoración.',
            opcionB: 'Artículo de sistematización Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.',
            opcionC: 'Editorial Generalmente breve, con un análisis conciso del tema y una postura clara.',
            opcionD: 'Artículo Científico Introducción, metodología, resultados, discusión y conclusiones.',
            correcta: 'c'
        },
        {
            id: 2,
            titulo: 'Mosquera Mosquera, C. E., & Bustamante Zamudio, G. (2023). Condiciones de posibilidad en la formación del sujeto: una reflexión teórica más allá de lo educativo. Rastros Rostros, 26(1), 1-39. <a href="https://doi.org/10.16925/2382-4921.2024.01.13">Enlace</a>',
            opcionA: 'Artículo de sistematización Combina elementos teóricos con la práctica, detallando metodologías y lecciones aprendidas.',
            opcionB: 'Artículo de reflexión Más flexible, no sigue necesariamente la estructura formal de un artículo científico.',
            opcionC: 'Editorial Generalmente breve, con un análisis conciso del tema y una postura clara.',
            opcionD: 'Reseña Breve descripción de la obra seguida de una crítica o valoración.',
            correcta: 'b'
        },
        {
            id: 3,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 4,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 5,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 6,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 7,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 8,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        },
        {
            id: 9,
            titulo: 'pregunta',
            opcionA: 'a',
            opcionB: 'b',
            opcionC: 'c',
            opcionD: 'd',
            correcta: 'c'
        }
    ];

    const txtPuntaje = document.querySelector("#puntos");
    let numPreguntaActual = 0;
    let puntajeTotal = 0;

    function cargarSiguientePregunta(num) {
        if (num >= preguntas.length) {
            alert("Has completado todas las preguntas.");
            return;
        }

        const numPregunta = document.querySelector("#num-pregunta");
        const txtPregunta = document.querySelector("#txt-pregunta");
        const opcionA = document.querySelector("#a");
        const opcionB = document.querySelector("#b");
        const opcionC = document.querySelector("#c");
        const opcionD = document.querySelector("#d");

        numPregunta.innerHTML = num + 1;
        txtPregunta.innerHTML = preguntas[num].titulo;
        opcionA.innerHTML = preguntas[num].opcionA;
        opcionB.innerHTML = preguntas[num].opcionB;
        opcionC.innerHTML = preguntas[num].opcionC;
        opcionD.innerHTML = preguntas[num].opcionD;

        const botonesRespuesta = document.querySelectorAll(".opcion");

        botonesRespuesta.forEach(opcion => {
            opcion.removeEventListener("click", agregarEventListenerBoton);
            opcion.classList.remove("correcta", "incorrecta", "no-events");
        });

        botonesRespuesta.forEach(opcion => {
            opcion.addEventListener("click", agregarEventListenerBoton);
        });

        txtPuntaje.classList.remove("efecto");
    }

    function agregarEventListenerBoton(e) {
        if (e.currentTarget.id === preguntas[numPreguntaActual].correcta) {
            e.currentTarget.classList.add("correcta");
            puntajeTotal += 100;
            txtPuntaje.innerHTML = puntajeTotal;
            localStorage.setItem("puntaje-total", puntajeTotal);
            txtPuntaje.classList.add("efecto");
            actualizarPuntuacion(puntajeTotal);
        } else {
            e.currentTarget.classList.add("incorrecta");
            const correcta = document.querySelector("#" + preguntas[numPreguntaActual].correcta);
            correcta.classList.add("correcta");
        }

        const botonesRespuesta = document.querySelectorAll(".opcion");
        botonesRespuesta.forEach(opcion => {
            opcion.classList.add("no-events");
        });
    }

    function actualizarPuntuacion(puntaje) {
        const scoreItems = document.querySelectorAll("#score-list .list-group-item");
        scoreItems.forEach(item => {
            const itemScore = parseInt(item.getAttribute("data-score"));
            if (puntaje >= itemScore) {
                item.classList.add("gold");
            } else {
                item.classList.remove("gold");
            }
        });
    }

    cargarSiguientePregunta(numPreguntaActual);

    const btnSiguiente = document.querySelector("#siguiente");
    btnSiguiente.addEventListener("click", () => {
        numPreguntaActual++;
        cargarSiguientePregunta(numPreguntaActual);
    });
});




