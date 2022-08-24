 var startButton = document.getElementById('start-butn')
 var questionMainboxElement = document.getElementById('question-box')
 var questionElement = document.getElementById('question')
 var answerButtonsElement = document.getElementById('ans-butn')
 
 startButton.addEventListener('click', startGame)

 let shuffledQuestions, currentQuestionIndex

 function startGame() {
    console.log('Started')
    startButton.classList.add('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionMainboxElement.classList.remove('hidden')
    setNextQuestion()
 }

 function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
    questionElement.innerText = question.question
    
 }

 function selectAnswer() {

 }

 var questions = [
    {
        question: 'what is my name', 
        answers: [
            { text: 'Grant', correct: true },
            { text: 'tommy', correct: false }
        ]
    }
    
 ]