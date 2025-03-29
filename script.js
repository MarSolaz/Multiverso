let currentSituation = 0;
const situations = [
    {
        context: "La economía está en recesión y el desempleo es alto. ¿Qué medidas tomarías?",
        options: [
            "Aumentar el gasto público en infraestructura.",
            "Reducir impuestos a las empresas.",
            "Iniciar un programa de asistencia social.",
            "No intervenir en el mercado."
        ],
        impact: [
            { economia: 10, bienestar: 10, ambiente: 0 },
            { economia: 5, bienestar: 0, ambiente: 0 },
            { economia: -5, bienestar: 10, ambiente: 0 },
            { economia: -10, bienestar: -5, ambiente: 0 }
        ]
    },
    {
        context: "Hay un problema de contaminación en ríos y lagos. ¿Cuál es tu enfoque?",
        options: [
            "Imponer regulaciones estrictas a las empresas contaminantes.",
            "Incentivar a las empresas a usar tecnologías limpias.",
            "Crear campañas de concienciación ciudadana.",
            "Dejar que el mercado solucione el problema."
        ],
        impact: [
            { economia: -5, bienestar: 0, ambiente: 15 },
            { economia: 5, bienestar: 5, ambiente: 10 },
            { economia: 0, bienestar: 5, ambiente: 5 },
            { economia: 10, bienestar: -5, ambiente: -10 }
        ]
    },
    {
        context: "El sistema de salud está colapsado. ¿Qué propones?",
        options: [
            "Aumentar el presupuesto para hospitales y clínicas.",
            "Privatizar el sistema de salud.",
            "Implementar un sistema de salud universal.",
            "Reducir el gasto en salud."
        ],
        impact: [
            { economia: -10, bienestar: 10, ambiente: 0 },
            { economia: 15, bienestar: -10, ambiente: 0 },
            { economia: -5, bienestar: 15, ambiente: 0 },
            { economia: 5, bienestar: -5, ambiente: 0 }
        ]
    },
    {
        context: "Los precios de los alimentos están por las nubes. ¿Qué haces?",
        options: [
            "Implementar controles de precios.",
            "Aumentar subsidios a productores agrícolas.",
            "Promover la competencia en el mercado.",
            "No intervenir en el mercado."
        ],
        impact: [
            { economia: -15, bienestar: 10, ambiente: 0 },
            { economia: -5, bienestar: 10, ambiente: 5 },
            { economia: 10, bienestar: 0, ambiente: 0 },
            { economia: 15, bienestar: -5, ambiente: -5 }
        ]
    },
    {
        context: "La crisis educativa es alarmante. ¿Cuál es tu solución?",
        options: [
            "Incremetar la inversión en educación pública.",
            "Fomentar la educación privada.",
            "Crear programas de capacitación para docentes.",
            "Eliminar la educación obligatoria."
        ],
        impact: [
            { economia: -10, bienestar: 10, ambiente: 0 },
            { economia: 10, bienestar: -10, ambiente: 0 },
            { economia: -5, bienestar: 15, ambiente: 0 },
            { economia: 20, bienestar: -20, ambiente: -5 }
        ]
    },
    {
        context: "Los ciudadanos piden mayor participación en las decisiones. ¿Qué haces?",
        options: [
            "Implementar referendos sobre decisiones clave.",
            "Crear espacios de participación ciudadana.",
            "No hacer cambios en el sistema.",
            "Fortalecer el liderazgo del gobierno."
        ],
        impact: [
            { economia: -5, bienestar: 15, ambiente: 0 },
            { economia: 0, bienestar: 10, ambiente: 0 },
            { economia: 10, bienestar: -5, ambiente: -5 },
            { economia: 15, bienestar: -10, ambiente: -10 }
        ]
    },
    {
        context: "El desempleo juvenil es alarmante. ¿Cuál es tu enfoque?",
        options: [
            "Crear programas de formación y empleo.",
            "Reducir la edad de jubilación para liberar puestos.",
            "Incentivar a empresas para que contraten jóvenes.",
            "No intervenir, el mercado se ajustará."
        ],
        impact: [
            { economia: -5, bienestar: 15, ambiente: 0 },
            { economia: 10, bienestar: 0, ambiente: 0 },
            { economia: -5, bienestar: 10, ambiente: 0 },
            { economia: 15, bienestar: -10, ambiente: -5 }
        ]
    },
    {
        context: "La deuda externa es cada vez mayor. ¿Qué medidas tomas?",
        options: [
            "Reestructurar la deuda con organismos internacionales.",
            "Aumentar las exportaciones y reducir importaciones.",
            "No hacer nada, la situación se resolverá sola.",
            "Buscar ayuda financiera externa."
        ],
        impact: [
            { economia: 10, bienestar: 0, ambiente: 0 },
            { economia: 5, bienestar: -5, ambiente: 0 },
            { economia: -10, bienestar: -10, ambiente: 0 },
            { economia: -5, bienestar: 5, ambiente: 0 }
        ]
    },
    {
        context: "Se requiere modernizar la infraestructura del país. ¿Qué decides?",
        options: [
            "Invertir en infraestructura pública masivamente.",
            "Privatizar la infraestructura existente.",
            "Promover asociaciones público-privadas.",
            "No realizar cambios significativos."
        ],
        impact: [
            { economia: -20, bienestar: 5, ambiente: 5 },
            { economia: 15, bienestar: -10, ambiente: -5 },
            { economia: -5, bienestar: 10, ambiente: 0 },
            { economia: 10, bienestar: -5, ambiente: -5 }
        ]
    },
    {
        context: "La población está envejeciendo y hay escasez de mano de obra. ¿Cuál es tu estrategia?",
        options: [
            "Aumentar la inmigración laboral.",
            "Incentivar a las empresas a contratar personas mayores.",
            "No intervenir en el mercado laboral.",
            "Fomentar el retiro anticipado."
        ],
        impact: [
            { economia: 15, bienestar: 5, ambiente: 0 },
            { economia: -5, bienestar: 0, ambiente: 0 },
            { economia: 10, bienestar: -10, ambiente: 0 },
            { economia: -10, bienestar: -5, ambiente: -5 }
        ]
    }
];

let totalImpact = { economia: 0, bienestar: 0, ambiente: 0 };

document.getElementById('start-button').onclick = startGame; // Asigna la función al botón "COMENZAR"

function startGame() {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('stats').classList.remove('hidden'); // Mostrar las estadísticas al comenzar
    showSituation();
}

function showSituation() {
    const situation = situations[currentSituation];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2>${situation.context}</h2>`;
    
    situation.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => chooseOption(index);
        questionContainer.appendChild(button);
    });
}

function chooseOption(optionIndex) {
    const impact = situations[currentSituation].impact[optionIndex];
    
    totalImpact.economia += impact.economia;
    totalImpact.bienestar += impact.bienestar;
    totalImpact.ambiente += impact.ambiente;

    // Actualizar las estadísticas en la interfaz
    document.getElementById('economy-score').innerText = totalImpact.economia;
    document.getElementById('wellbeing-score').innerText = totalImpact.bienestar;
    document.getElementById('environment-score').innerText = totalImpact.ambiente;

    currentSituation++;

    if (currentSituation < situations.length) {
        showSituation();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    const finalResults = document.getElementById('final-results');
    finalResults.innerHTML = `
        <h2>Resultados Finales</h2>
        <p>Impacto en la economía: ${totalImpact.economia}</p>
        <p>Impacto en el bienestar: ${totalImpact.bienestar}</p>
        <p>Impacto en el medio ambiente: ${totalImpact.ambiente}</p>
    `;
}

function restartGame() {
    totalImpact = { economia: 0, bienestar: 0, ambiente: 0 };
    currentSituation = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('start-container').classList.remove('hidden');
    document.getElementById('stats').classList.add('hidden'); // Ocultar estadísticas al reiniciar
}
