let questions = [
    {
        'question' : 'Ricola... Wer hats erfunden?',
        'answer_1' : 'Die Deutschen',
        'answer_2' : 'Die Schweizer',
        'answer_3' : 'Die Österreicher',
        'answer_4' : 'Die Belgier',
        'right_answer' : 2
    },
    {
        'question' : 'Wie viele Weihnachtsbäume werden in Deutschland pro Jahr verkauft?',
        'answer_1' : '1.000.000',
        'answer_2' : '7.500.000',
        'answer_3' : '20.000.000',
        'answer_4' : '30.000.000',
        'right_answer' : 4
    },
    {
        'question' : 'Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?',
        'answer_1' : '100 Liter ',
        'answer_2' : '150 Liter',
        'answer_3' : '200 Liter',
        'answer_4' : '250 Liter',
        'right_answer' : 1
    },
    {
        'question' : 'In welchem Jahr wurde die Firma Microsoft gegründet?',
        'answer_1' : '1973',
        'answer_2' : '1975',
        'answer_3' : '1979',
        'answer_4' : '1981',
        'right_answer' : 2
    },
    {
        'question' : 'Wie oft kann man 1 von 20 abziehen?',
        'answer_1' : '1 Mal',
        'answer_2' : '2 Mal',
        'answer_3' : '19 Mal',
        'answer_4' : '20 Mal',
        'right_answer' : 1
    },
    {
        'question' : 'Was ist 8 ÷ 2 (2 + 2)?',
        'answer_1' : '1',
        'answer_2' : '2',
        'answer_3' : '8',
        'answer_4' : '16',
        'right_answer' : 4
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('sounds/Success.mp3');
let AUDIO_FAIL = new Audio('sounds/Failure.mp3');

function getById(id){
    return document.getElementById(id);
}

function init(){
    getById('all-questions').innerHTML = questions.length;
    showQuestion();
}
function showQuestion (){
    if (currentQuestion + 1 <= questions.length) {
        updateNextQuestion(); 
        updateProgress();              
    }else{
        showEndscreen();
    }
}
function updateNextQuestion(){
    let question = questions[currentQuestion];
        getById('current-question').innerHTML = currentQuestion + 1;
        getById('questiontext').innerHTML = question['question'];
        getById('answer_1').innerHTML = question['answer_1'];
        getById('answer_2').innerHTML = question['answer_2'];
        getById('answer_3').innerHTML = question['answer_3'];
        getById('answer_4').innerHTML = question['answer_4'];
}
function answer(selected){   
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selected.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if ( selectedQuestionNumber == question['right_answer']){
        rightAnswer(selected)
    }else {
        getById(selected).parentNode.classList.add('bg-danger');
        getById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    getById('next-btn').disabled = false;
}
function rightAnswer(selected){
    getById(selected).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightQuestions++
}
function nextQuestion(){
    resetAnswerButtons();
    currentQuestion++;
    showQuestion();    
}
function resetAnswerButtons(){
    getById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('next-btn').disabled = true;
}
function showEndscreen(){
    getById('end-card').style = ''; 
    getById('question-card').style = 'display:none;';
    getById('number-of-right-answers').innerHTML = `
    Du hast <b>${rightQuestions}</b> von <b>${questions.length}</b> Fragen richtig beantwortet.
    `;
}
function updateProgress(){
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100); 
    getById('progress-bar').innerHTML = `${percent} % `;
    getById('progress-bar').style = `width: ${percent}% `;      
}
