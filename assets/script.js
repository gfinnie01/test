var startEm = document.querySelector("#start");
var quizEm = document.querySelector("#quiz");
var endEm = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var submitScoreBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz title");
var questionEm = document.querySelector("#questions");
var questions = ["First", "second", "third", "fourth"];
var state = ['start', 'quiz', 'end' ];
var cursor = 0;
var element = event.target;

function displayState() {
    if( state == 'start' ) {
        startEm.style.display = 'block';
        quizEm.style.display = 'none';
        endEm.style.display = 'none';
    }
}

function displayState() {
    if( state == 'quiz' ) {
        startEm.style.display = 'none';
        quizEm.style.display = 'block';
        endEm.style.display = 'none';
        displayQuestion();
    }
}

function displayState() {
    if( state == 'end' ) {
        startEm.style.display = 'none';
        quizEm.style.display = 'none';
        endEm.style.display = 'block';
    }
}

quizTitle.addEventListener("click", function
(event) {
    if (element.matches("h2")) {
        var index =array.from(element.parrentElement.children).indexOf(element);
        console.log(index);
        cursor ++ ;
    if (cursor >= questions.length) {
        state = "end"; 
        displayState();
    }   else {
        displayquestion();
    }}
});
