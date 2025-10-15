# Zavatte Test - Progetto di Valutazione

## 🚀 Caratteristiche

- **Test Logico-Matematici**: 10 domande per valutare le capacità logiche e matematiche
- **Test di Pensiero Computazionale**: 10 domande sulla cultura informatica e il pensiero algoritmico
- **Colloquio Motivazionale**: Valutazione testuale della motivazione personale

## 🎮 Utilizzo

**È semplicissimo!** Basta aprire il file `index.html` nel tuo browser. Non serve installare nulla!

1. Apri `index.html` in qualsiasi browser moderno
2. Scegli un test dalla home page
3. Rispondi alle domande
4. Visualizza i risultati dettagliati

## 📁 Struttura del Progetto

```
windsurf-project-2/
├── index.html          # File principale - APRI QUESTO!
├── app-data.js              # Dati dei test e domande
├── app-logic.js             # Logica dell'applicazione
├── README.md                # Questo file
└── README-SIMPLE.md         # Istruzioni dettagliate
```

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura
- **JavaScript (Vanilla)** - Logica applicativa
- **Tailwind CSS (CDN)** - Styling moderno
- **SVG** - Icone integrate

## 🎨 Personalizzazione

### Modificare i Test

I test sono definiti in `app-data.js`. Puoi aggiungere, modificare o rimuovere domande seguendo la struttura esistente:

```javascript
{
  id: "unique_id",
  type: "radio" | "textarea",
  question: "La tua domanda",
  options: ["Opzione 1", "Opzione 2"], // Solo per tipo radio
  correct_answer: "Risposta corretta"  // Solo per test con punteggio
}
```

### Modificare i Criteri di Valutazione

I criteri di valutazione sono definiti nella proprietà `result` di ogni test:

- **Test con punteggio**: Definisci range di punteggi e relativi feedback
- **Analisi testuale**: Definisci parole chiave e regole di analisi



Buon testing! 🎉
