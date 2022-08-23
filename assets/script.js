var startEm = document.querySelector("#start");
var quizEm = document.querySelector("#quiz");
var endEm = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var submitScoreBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var questionEm = document.querySelector("#questions");
var questions = ["#First", "#second", "#third", "#fourth"];
var state = 'start';
var cursor = 0;

function displayState() {
    if ( state === "start" ) {
        startEm.style.display = 'block';
        quizEm.style.display = 'none';
        endEm.style.display = 'none';
    }
    if ( state === "quiz" ) {
        startEm.style.display = 'none';
        quizEm.style.display = 'block';
        endEm.style.display = 'none';
        displayQuestion();
    }
    if ( state === "end" ) {
        startEm.style.display = 'none';
        quizEm.style.display = 'none';
        endEm.style.display = 'block';
    }
    debugger;
}
    function init() {
        displayState();
    }

    function reset() {
        state= 'start';
        cursor = 0;
        init();
    }
    
quizTitle.addEventListener("click", function
(event) {
    var element = event.target;
    if (element.matches("h2")) {
        var index = Array.from(element.parrentElement.children)
        .indexOf(element);
        console.log(index);
        cursor++;
    if (cursor >= questions.length) {
        state = "end"; 
        displayState();
    }   else {
        displayquestion();
    }}
    debugger;
});
