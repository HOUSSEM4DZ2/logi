# Zavatte Test - Progetto di Valutazione

Una piattaforma di test interattiva per valutare abilità logico-matematiche, pensiero computazionale e motivazione personale.

## 🚀 Caratteristiche

- **Test Logico-Matematici**: 10 domande per valutare le capacità logiche e matematiche
- **Test di Pensiero Computazionale**: 10 domande sulla cultura informatica e il pensiero algoritmico
- **Colloquio Motivazionale**: Valutazione testuale della motivazione personale
- **Randomizzazione**: Domande e opzioni mescolate casualmente per ogni sessione
- **Interfaccia Moderna**: Design responsive con Tailwind CSS
- **Feedback Dettagliato**: Risultati completi con risposte corrette e sbagliate
- **Nessun Server Richiesto**: Funziona aprendo semplicemente il file HTML

## 🎮 Utilizzo

**È semplicissimo!** Basta aprire il file `simple-app.html` nel tuo browser. Non serve installare nulla!

1. Apri `simple-app.html` in qualsiasi browser moderno
2. Scegli un test dalla home page
3. Rispondi alle domande
4. Visualizza i risultati dettagliati

## 📁 Struttura del Progetto

```
windsurf-project-2/
├── simple-app.html          # File principale - APRI QUESTO!
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

## 📱 Compatibilità Browser

L'applicazione funziona su tutti i browser moderni:
- ✅ Chrome/Edge (ultima versione)
- ✅ Firefox (ultima versione)
- ✅ Safari (ultima versione)
- ✅ Opera (ultima versione)

## 💡 Vantaggi di Questa Versione

- ✅ **Zero dipendenze** da installare
- ✅ **Nessun server** necessario
- ✅ **Nessun build process**
- ✅ **Funziona offline** (dopo il primo caricamento)
- ✅ **Facile da distribuire** (basta copiare i 3 file)
- ✅ **Facile da modificare** (solo JavaScript vanilla)

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT.

## 👥 Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue o pull request.

---

Buon testing! 🎉
