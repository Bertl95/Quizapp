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
function getById(id){
    return document.getElementById(id);
}

let currentQuestion = 0;

function init(){
    getById('all-questions').innerHTML = questions.length;
    showQuestion();
}
function showQuestion (){
    if (currentQuestion + 1 <= questions.length) {
        let question = questions[currentQuestion];
        getById('current-question').innerHTML = currentQuestion + 1;
        getById('questiontext').innerHTML = question['question'];
        getById('answer_1').innerHTML = question['answer_1'];
        getById('answer_2').innerHTML = question['answer_2'];
        getById('answer_3').innerHTML = question['answer_3'];
        getById('answer_4').innerHTML = question['answer_4'];               
    }else{
        alert('Das Quiz ist vorbei. Bitte die Seite neu laden um neu zu Starten!')
    }
}
function answer(selected){  // 
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selected);
    let selectedQuestionNumber = selected.slice(-1);
    console.log('Selected Questionnumber is ', selectedQuestionNumber);
    console.log('Right answer is', question ['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if ( selectedQuestionNumber == question['right_answer']){
        getById(selected).parentNode.classList.add('bg-success');
    }else {
        getById(selected).parentNode.classList.add('bg-danger');
        getById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    getById('next-btn').disabled = false;
}
function nextQuestion(){
    resetAnswerButtons();
    currentQuestion++;
    showQuestion();
    if (currentQuestion + 1 <= questions.length) {
        getById('current-question').innerHTML = currentQuestion + 1;
        let question = questions[currentQuestion];
        getById('questiontext').innerHTML = question['question'];
        getById('answer_1').innerHTML = question['answer_1'];
        getById('answer_2').innerHTML = question['answer_2'];
        getById('answer_3').innerHTML = question['answer_3'];
        getById('answer_4').innerHTML = question['answer_4'];
    }else{
        alert('Das Quiz ist vorbei. Bitte die Seite neu laden um neu zu Starten!')
    }
}
function resetAnswerButtons(){
    getById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success');
    getById('next-btn').disabled = true;
}