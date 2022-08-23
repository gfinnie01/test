var startEm = document.querySelector("#start");
var quizEm = document.querySelector("#quiz");
var endEm = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var submitScoreBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz title");
var questionEm = document.querySelector("#questions");
var questions = ("First");
var questions = ("second");
var questions = ("third");
var questions = ("fourth");
var state = ("start");
var state = ("quiz");
var state = ("end");


function displayState() {
    if( state == 'start' ) {
        startEm.style.display = 'block';
        quizEm.style.display = 'none';
        endEm.style.display = 'none';
    }
}

function displayState() {
    if( state == 'quiz' ) {
        startEm.style.display = 'block';
        quizEm.style.display = 'none';
        endEm.style.display = 'none';
    }
}

function displayState() {
    if( state == 'end' ) {
        startEm.style.display = 'block';
        quizEm.style.display = 'none';
        endEm.style.display = 'none';
    }
}