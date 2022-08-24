 var startButton = document.getElementById('start-butn')
 var questionMainboxElement = document.getElementById('question-box')
 var questionElement = document.getElementById('question')
 var answerButtonsElement = document.getElementById('ans-butn')
 var nextButton = document.getElementById('next-butn')
 
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
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('butn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
 }

 function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

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