// Project Data
const projectData = {
    title: "Progetto di Valutazione - Test in Italiano",
    description: "Una serie di test per valutare abilità logico-matematiche, pensiero computazionale e motivazione personale.",
    tests: [
        {
            id: "logico_matematiche",
            title: "Test di Abilità Logico-Matematiche",
            description: "Rispondi alle seguenti domande di logica e matematica. Ogni risposta corretta vale 1 punto.",
            questions: [
                {
                    id: "q1",
                    type: "radio",
                    question: "Se 5x + 3 = 18, qual è il valore di x?",
                    options: ["2", "3", "4", "5"],
                    correct_answer: "3"
                },
                {
                    id: "q2",
                    type: "radio",
                    question: "Quale numero completa la sequenza: 2, 4, 8, 16, ... ?",
                    options: ["20", "24", "30", "32"],
                    correct_answer: "32"
                },
                {
                    id: "q3",
                    type: "radio",
                    question: "Se tutti i gatti sono animali e alcuni animali sono neri, possiamo dire che:",
                    options: [
                        "Tutti i gatti sono neri",
                        "Alcuni gatti potrebbero essere neri",
                        "Nessun gatto è nero"
                    ],
                    correct_answer: "Alcuni gatti potrebbero essere neri"
                },
                {
                    id: "q4",
                    type: "radio",
                    question: "Qual è il risultato di 15% di 200?",
                    options: ["20", "25", "30", "35"],
                    correct_answer: "30"
                },
                {
                    id: "q5",
                    type: "radio",
                    question: "Se un treno parte alle 14:30 e arriva alle 17:15, quanto dura il viaggio?",
                    options: ["2 ore e 15 minuti", "2 ore e 45 minuti", "3 ore", "3 ore e 15 minuti"],
                    correct_answer: "2 ore e 45 minuti"
                },
                {
                    id: "q6",
                    type: "radio",
                    question: "Quale numero è il prossimo nella sequenza: 1, 1, 2, 3, 5, 8, ... ?",
                    options: ["11", "12", "13", "14"],
                    correct_answer: "13"
                },
                {
                    id: "q7",
                    type: "radio",
                    question: "Se A > B e B > C, quale affermazione è vera?",
                    options: ["C > A", "A > C", "A = C", "Non si può determinare"],
                    correct_answer: "A > C"
                },
                {
                    id: "q8",
                    type: "radio",
                    question: "Quanti lati ha un ottagono?",
                    options: ["6", "7", "8", "9"],
                    correct_answer: "8"
                },
                {
                    id: "q9",
                    type: "radio",
                    question: "Se 3 mele costano 6 euro, quanto costano 7 mele?",
                    options: ["12 euro", "14 euro", "16 euro", "18 euro"],
                    correct_answer: "14 euro"
                },
                {
                    id: "q10",
                    type: "radio",
                    question: "Quale numero manca: 5, 10, 20, 40, ... , 160?",
                    options: ["60", "70", "80", "90"],
                    correct_answer: "80"
                }
            ],
            result: {
                type: "score",
                output: {
                    "0-3": "Da migliorare",
                    "4-6": "Sufficiente",
                    "7-8": "Buono",
                    "9-10": "Eccellente"
                },
                template: "Hai ottenuto {score} su {total} punti – {result}"
            }
        },
        {
            id: "pensiero_computazionale",
            title: "Test di Pensiero Computazionale e Cultura Informatica",
            description: "Valuta le tue conoscenze di base sull'informatica e il pensiero computazionale.",
            questions: [
                {
                    id: "q1",
                    type: "radio",
                    question: "Cos'è un algoritmo?",
                    options: [
                        "Una sequenza di istruzioni per risolvere un problema",
                        "Un errore del computer",
                        "Un linguaggio di programmazione"
                    ],
                    correct_answer: "Una sequenza di istruzioni per risolvere un problema"
                },
                {
                    id: "q2",
                    type: "radio",
                    question: "Quale delle seguenti è una struttura condizionale?",
                    options: ["if–else", "while", "for"],
                    correct_answer: "if–else"
                },
                {
                    id: "q3",
                    type: "radio",
                    question: "Qual è la differenza tra hardware e software?",
                    options: [
                        "L'hardware è la parte fisica, il software quella logica",
                        "Sono la stessa cosa",
                        "Il software è più costoso"
                    ],
                    correct_answer: "L'hardware è la parte fisica, il software quella logica"
                },
                {
                    id: "q4",
                    type: "radio",
                    question: "Cosa significa CPU?",
                    options: [
                        "Central Processing Unit",
                        "Computer Personal Unit",
                        "Central Program Utility",
                        "Control Processing Unit"
                    ],
                    correct_answer: "Central Processing Unit"
                },
                {
                    id: "q5",
                    type: "radio",
                    question: "Quale di questi è un linguaggio di programmazione?",
                    options: ["HTML", "CSS", "Python", "HTTP"],
                    correct_answer: "Python"
                },
                {
                    id: "q6",
                    type: "radio",
                    question: "Cosa fa un ciclo 'for' in programmazione?",
                    options: [
                        "Ripete un blocco di codice un numero specifico di volte",
                        "Controlla una condizione",
                        "Definisce una funzione",
                        "Crea una variabile"
                    ],
                    correct_answer: "Ripete un blocco di codice un numero specifico di volte"
                },
                {
                    id: "q7",
                    type: "radio",
                    question: "Cos'è un bug in informatica?",
                    options: [
                        "Un virus",
                        "Un errore nel codice",
                        "Un tipo di hardware",
                        "Un sistema operativo"
                    ],
                    correct_answer: "Un errore nel codice"
                },
                {
                    id: "q8",
                    type: "radio",
                    question: "Quale unità misura la memoria del computer?",
                    options: ["Watt", "Hertz", "Byte", "Pixel"],
                    correct_answer: "Byte"
                },
                {
                    id: "q9",
                    type: "radio",
                    question: "Cos'è il debugging?",
                    options: [
                        "Scrivere nuovo codice",
                        "Trovare e correggere errori nel codice",
                        "Cancellare un programma",
                        "Installare software"
                    ],
                    correct_answer: "Trovare e correggere errori nel codice"
                },
                {
                    id: "q10",
                    type: "radio",
                    question: "Quale di questi è un sistema operativo?",
                    options: ["Microsoft Word", "Google Chrome", "Windows", "Photoshop"],
                    correct_answer: "Windows"
                }
            ],
            result: {
                type: "score",
                output: {
                    "0-3": "Da approfondire",
                    "4-6": "Sufficiente",
                    "7-8": "Buono",
                    "9-10": "Ottimo"
                },
                template: "Punteggio: {score} su {total} – {result}"
            }
        },
        {
            id: "colloquio_motivazionale",
            title: "Colloquio Individuale / Motivazionale",
            description: "Scrivi brevemente perché vuoi partecipare al corso e quali sono i tuoi obiettivi (max 200 parole).",
            questions: [
                {
                    id: "motivo",
                    type: "textarea",
                    question: "Perché vuoi partecipare al corso e quali obiettivi desideri raggiungere?"
                }
            ],
            result: {
                type: "text_analysis",
                keywords_positive: ["imparare", "sviluppare", "passione", "motivazione", "obiettivi"],
                analysis_rules: [
                    {
                        condition: "risposta contiene 2 o più parole chiave",
                        result: "Buona motivazione e chiarezza negli obiettivi"
                    },
                    {
                        condition: "risposta contiene meno di 20 parole",
                        result: "Risposta troppo breve, approfondisci la tua motivazione"
                    },
                    {
                        condition: "altrimenti",
                        result: "Motivazione adeguata ma può essere più specifica"
                    }
                ],
                template: "Valutazione motivazionale: {result}"
            }
        }
    ]
};
