// Application State
let state = {
    currentView: 'home',
    currentTestIndex: null,
    currentQuestionIndex: 0,
    allAnswers: [],
    currentTestAnswers: [],
    randomizedQuestions: []
};

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuestions(questions) {
    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions.map(question => {
        if (question.type === 'radio' && question.options) {
            return {
                ...question,
                options: shuffleArray(question.options)
            };
        }
        return question;
    });
}

// Icons
const icon = (name) => {
    const icons = {
        bookOpen: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
        checkCircle: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        circle: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle></svg>',
        play: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        eye: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>',
        arrowLeft: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>',
        arrowRight: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',
        trophy: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>',
        home: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
        rotateCcw: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>',
        xCircle: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    };
    return icons[name] || '';
};

// Action Handlers
function startTest(index) {
    state.currentTestIndex = index;
    state.currentQuestionIndex = 0;
    state.currentTestAnswers = [];
    state.randomizedQuestions = shuffleQuestions(projectData.tests[index].questions);
    state.currentView = 'test';
    render();
}

function backToHome() {
    state.currentView = 'home';
    state.currentTestIndex = null;
    render();
}

function viewResults() {
    state.currentView = 'results';
    render();
}

function handleAnswer(answer) {
    const currentQuestion = state.randomizedQuestions[state.currentQuestionIndex];
    state.currentTestAnswers = state.currentTestAnswers.filter(a => a.questionId !== currentQuestion.id);
    state.currentTestAnswers.push({ questionId: currentQuestion.id, answer });
    render();
}

function handleTextareaAnswer(value) {
    const currentQuestion = state.randomizedQuestions[state.currentQuestionIndex];
    state.currentTestAnswers = state.currentTestAnswers.filter(a => a.questionId !== currentQuestion.id);
    state.currentTestAnswers.push({ questionId: currentQuestion.id, answer: value });
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.randomizedQuestions.length - 1) {
        state.currentQuestionIndex++;
        render();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        render();
    }
}

function goToQuestion(index) {
    state.currentQuestionIndex = index;
    render();
}

function completeTest() {
    const test = projectData.tests[state.currentTestIndex];
    state.allAnswers = state.allAnswers.filter(a => a.testId !== test.id);
    state.allAnswers.push({
        testId: test.id,
        answers: state.currentTestAnswers
    });
    state.currentView = 'results';
    render();
}

function restartAll() {
    state.allAnswers = [];
    state.currentView = 'home';
    render();
}

// Calculate Results
function calculateScore(test, testAnswers) {
    if (!testAnswers) return null;

    if (test.result.type === 'score') {
        let score = 0;
        testAnswers.answers.forEach(answer => {
            const question = test.questions.find(q => q.id === answer.questionId);
            if (question?.correct_answer === answer.answer) {
                score++;
            }
        });

        const total = test.questions.length;
        let resultText = '';

        if (test.result.output) {
            for (const [range, text] of Object.entries(test.result.output)) {
                if (range.includes('-')) {
                    const [min, max] = range.split('-').map(Number);
                    if (score >= min && score <= max) {
                        resultText = text;
                        break;
                    }
                }
            }
        }

        return {
            score,
            total,
            resultText,
            message: test.result.template
                .replace('{score}', score)
                .replace('{total}', total)
                .replace('{result}', resultText)
        };
    }

    if (test.result.type === 'text_analysis') {
        const answer = testAnswers.answers[0]?.answer || '';
        const words = answer.toLowerCase().split(/\s+/);
        const wordCount = words.filter(w => w.length > 0).length;

        let keywordCount = 0;
        if (test.result.keywords_positive) {
            test.result.keywords_positive.forEach(keyword => {
                if (answer.toLowerCase().includes(keyword.toLowerCase())) {
                    keywordCount++;
                }
            });
        }

        let resultText = '';
        if (test.result.analysis_rules) {
            if (keywordCount >= 2) {
                resultText = test.result.analysis_rules[0].result;
            } else if (wordCount < 20) {
                resultText = test.result.analysis_rules[1].result;
            } else {
                resultText = test.result.analysis_rules[2].result;
            }
        }

        return {
            wordCount,
            keywordCount,
            resultText,
            message: test.result.template.replace('{result}', resultText)
        };
    }

    return null;
}

// Render Functions
function renderHome() {
    const completedTestIds = state.allAnswers.map(a => a.testId);
    const allCompleted = completedTestIds.length === projectData.tests.length;

    return `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="container mx-auto px-4 py-8">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="flex justify-center mb-4">
                            <div class="bg-indigo-600 p-4 rounded-full text-white">
                                ${icon('bookOpen')}
                            </div>
                        </div>
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">${projectData.title}</h1>
                        <p class="text-lg text-gray-600">${projectData.description}</p>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-2xl font-semibold text-gray-900">Scegli un test da completare</h2>
                                ${completedTestIds.length > 0 ? `
                                    <button onclick="viewResults()" class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                        ${icon('eye')}
                                        Visualizza Risultati
                                    </button>
                                ` : ''}
                            </div>
                            <p class="text-gray-600 mb-6">Completa tutti i test per ricevere la tua valutazione completa.</p>

                            <div class="space-y-4">
                                ${projectData.tests.map((test, index) => {
                                    const isCompleted = completedTestIds.includes(test.id);
                                    return `
                                        <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div class="flex items-start justify-between">
                                                <div class="flex-1">
                                                    <div class="flex items-center gap-3 mb-2">
                                                        <span class="${isCompleted ? 'text-green-500' : 'text-gray-400'}">
                                                            ${isCompleted ? icon('checkCircle') : icon('circle')}
                                                        </span>
                                                        <h3 class="text-xl font-semibold text-gray-900">${test.title}</h3>
                                                    </div>
                                                    <p class="text-gray-600 ml-9">${test.description}</p>
                                                    <p class="text-sm text-gray-500 ml-9 mt-2">
                                                        ${test.questions.length} ${test.questions.length === 1 ? 'domanda' : 'domande'}
                                                    </p>
                                                </div>
                                                <button onclick="startTest(${index})" class="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                                                    ${icon('play')}
                                                    ${isCompleted ? 'Ripeti' : 'Inizia'}
                                                </button>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        ${allCompleted ? `
                            <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <div class="text-green-500 flex justify-center mb-3">${icon('checkCircle').replace('w-6 h-6', 'w-12 h-12')}</div>
                                <h3 class="text-xl font-semibold text-green-900 mb-2">Complimenti! Hai completato tutti i test</h3>
                                <p class="text-green-700">Clicca su "Ripeti" per rivedere un test o visualizza i tuoi risultati.</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderTest() {
    const test = projectData.tests[state.currentTestIndex];
    const currentQuestion = state.randomizedQuestions[state.currentQuestionIndex];
    const currentAnswer = state.currentTestAnswers.find(a => a.questionId === currentQuestion.id);
    const isAnswered = !!currentAnswer;
    const allAnswered = state.randomizedQuestions.every(q => 
        state.currentTestAnswers.some(a => a.questionId === q.id && a.answer.trim() !== '')
    );
    const isLastQuestion = state.currentQuestionIndex === state.randomizedQuestions.length - 1;

    return `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="container mx-auto px-4 py-8">
                <div class="max-w-3xl mx-auto">
                    <div class="mb-6">
                        <button onclick="backToHome()" class="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4">
                            ${icon('arrowLeft')}
                            Torna alla home
                        </button>
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-sm font-medium text-indigo-600">
                                    Test ${state.currentTestIndex + 1} di ${projectData.tests.length}
                                </span>
                                <span class="text-sm text-gray-500">
                                    Domanda ${state.currentQuestionIndex + 1} di ${state.randomizedQuestions.length}
                                </span>
                            </div>
                            <h1 class="text-2xl font-bold text-gray-900 mb-2">${test.title}</h1>
                            <p class="text-gray-600">${test.description}</p>
                        </div>
                    </div>

                    <div class="mb-6">
                        <div class="bg-gray-200 rounded-full h-2">
                            <div class="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                                style="width: ${((state.currentQuestionIndex + 1) / state.randomizedQuestions.length) * 100}%"></div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">${currentQuestion.question}</h2>

                        ${currentQuestion.type === 'radio' ? `
                            <div class="space-y-3">
                                ${currentQuestion.options.map(option => `
                                    <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                                        <input type="radio" name="question" value="${option}" 
                                            ${currentAnswer?.answer === option ? 'checked' : ''}
                                            onchange="handleAnswer('${option.replace(/'/g, "\\'")}')">
                                        <span class="ml-3 text-gray-900">${option}</span>
                                    </label>
                                `).join('')}
                            </div>
                        ` : `
                            <div>
                                <textarea id="textarea-answer" 
                                    oninput="handleTextareaAnswer(this.value)"
                                    placeholder="Scrivi qui la tua risposta..." 
                                    class="w-full h-48 p-4 border-2 border-gray-200 rounded-lg focus:border-indigo-500 resize-none" 
                                    maxlength="1000">${currentAnswer?.answer || ''}</textarea>
                                <p class="text-sm text-gray-500 mt-2">${currentAnswer?.answer?.length || 0} / 1000 caratteri</p>
                            </div>
                        `}
                    </div>

                    <div class="flex items-center justify-between">
                        <button onclick="previousQuestion()" 
                            ${state.currentQuestionIndex === 0 ? 'disabled' : ''}
                            class="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            ${icon('arrowLeft')}
                            Precedente
                        </button>

                        <div class="flex gap-2">
                            ${state.randomizedQuestions.map((_, index) => {
                                const answered = state.currentTestAnswers.some(a => a.questionId === state.randomizedQuestions[index].id);
                                return `
                                    <button onclick="goToQuestion(${index})" 
                                        class="w-3 h-3 rounded-full transition-colors ${
                                            index === state.currentQuestionIndex ? 'bg-indigo-600' :
                                            answered ? 'bg-green-500' : 'bg-gray-300'
                                        }">
                                    </button>
                                `;
                            }).join('')}
                        </div>

                        ${isLastQuestion ? `
                            <button onclick="completeTest()" 
                                ${!allAnswered ? 'disabled' : ''}
                                class="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                ${icon('checkCircle').replace('w-6 h-6', 'w-4 h-4')}
                                Completa Test
                            </button>
                        ` : `
                            <button onclick="nextQuestion()" 
                                ${!isAnswered ? 'disabled' : ''}
                                class="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                Successiva
                                ${icon('arrowRight')}
                            </button>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderResults() {
    return `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="container mx-auto px-4 py-8">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <div class="flex justify-center mb-4">
                            <div class="bg-yellow-500 p-4 rounded-full text-white">
                                ${icon('trophy')}
                            </div>
                        </div>
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">I Tuoi Risultati</h1>
                        <p class="text-lg text-gray-600">Ecco come hai performato nei test</p>
                    </div>

                    <div class="space-y-6 mb-8">
                        ${projectData.tests.map(test => {
                            const testAnswers = state.allAnswers.find(a => a.testId === test.id);
                            const result = calculateScore(test, testAnswers);

                            if (!result) {
                                return `
                                    <div class="bg-white rounded-lg shadow-lg p-6">
                                        <h2 class="text-xl font-semibold text-gray-900 mb-2">${test.title}</h2>
                                        <p class="text-gray-500">Test non completato</p>
                                    </div>
                                `;
                            }

                            if (test.result.type === 'score') {
                                const percentage = (result.score / result.total) * 100;
                                const colorClass = percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600';
                                const bgClass = percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500';

                                return `
                                    <div class="bg-white rounded-lg shadow-lg p-6">
                                        <h2 class="text-xl font-semibold text-gray-900 mb-4">${test.title}</h2>
                                        <div class="flex items-center gap-4 mb-4">
                                            <div class="text-4xl font-bold ${colorClass}">${result.score} / ${result.total}</div>
                                            <div class="flex-1">
                                                <div class="bg-gray-200 rounded-full h-3">
                                                    <div class="${bgClass} h-3 rounded-full transition-all" style="width: ${percentage}%"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="space-y-3 mb-4">
                                            ${test.questions.map((question, index) => {
                                                const answer = testAnswers?.answers.find(a => a.questionId === question.id);
                                                const isCorrect = answer?.answer === question.correct_answer;
                                                return `
                                                    <div class="border border-gray-200 rounded-lg p-4">
                                                        <div class="flex items-start gap-3">
                                                            <span class="${isCorrect ? 'text-green-500' : 'text-red-500'}">
                                                                ${isCorrect ? icon('checkCircle') : icon('xCircle')}
                                                            </span>
                                                            <div class="flex-1">
                                                                <p class="text-sm font-medium text-gray-900 mb-1">
                                                                    Domanda ${index + 1}: ${question.question}
                                                                </p>
                                                                <p class="text-sm text-gray-600">
                                                                    La tua risposta: <span class="${isCorrect ? 'text-green-600' : 'text-red-600'}">
                                                                        ${answer?.answer || 'Nessuna risposta'}
                                                                    </span>
                                                                </p>
                                                                ${!isCorrect && question.correct_answer ? `
                                                                    <p class="text-sm text-green-600">
                                                                        Risposta corretta: ${question.correct_answer}
                                                                    </p>
                                                                ` : ''}
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>

                                        <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                            <p class="text-indigo-900 font-medium">${result.message}</p>
                                        </div>
                                    </div>
                                `;
                            }

                            if (test.result.type === 'text_analysis') {
                                return `
                                    <div class="bg-white rounded-lg shadow-lg p-6">
                                        <h2 class="text-xl font-semibold text-gray-900 mb-4">${test.title}</h2>
                                        <div class="mb-4">
                                            <p class="text-gray-600 mb-2"><strong>Parole scritte:</strong> ${result.wordCount}</p>
                                            <p class="text-gray-600 mb-2"><strong>Parole chiave trovate:</strong> ${result.keywordCount}</p>
                                        </div>
                                        <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                            <p class="text-indigo-900 font-medium">${result.message}</p>
                                        </div>
                                    </div>
                                `;
                            }
                        }).join('')}
                    </div>

                    <div class="flex gap-4 justify-center">
                        <button onclick="backToHome()" class="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            ${icon('home')}
                            Torna alla Home
                        </button>
                        <button onclick="restartAll()" class="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                            ${icon('rotateCcw')}
                            Ricomincia
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Main Render Function
function render() {
    const app = document.getElementById('app');
    if (state.currentView === 'home') {
        app.innerHTML = renderHome();
    } else if (state.currentView === 'test') {
        app.innerHTML = renderTest();
    } else if (state.currentView === 'results') {
        app.innerHTML = renderResults();
    }
}

// Initialize
render();
