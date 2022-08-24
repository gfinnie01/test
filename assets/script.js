 var startButton = document.getElementById('start-butn')
 var questionMainboxElement = document.getElementById('question-box')
 var questionElement = document.getElementById('question')
 var answerButtonsElement = document.getElementById('ans-butn')
 var nextButton = document.getElementById('next-butn')
 
 let shuffledQuestions, currentQuestionIndex

 startButton.addEventListener('click', startGame)
 nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
 })

 function startGame() {
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
        var button = document.createElement('butn')
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
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

 } 

 function selectAnswer(happy) {
    var selectedButton = happy.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement).forEach( button => {
        setStatusClass(button ,button.dataset.correct)
    }) 
    if (shuffledQuestions.length > currentQuestionIndex + 1 )
    {
        nextButton.classList.remove('hidden')
    } 
 }

 
function setStatusClass(element, correct)  {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else  {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
 var questions = [
    {
        question: 'what is the file all you projects should have?', 
        answers: [
            { text: 'README.md', correct: true },
            { text: 'images', correct: false }
        ]
    },
    {
         question: 'what is the file ending that has your java Script', 
         answers: [
        { text: '.js', correct: true },
        { text: '.JS', correct: false }
  ] } ,
  {
    question: 'waht folder should your css file be in', 
    answers: [
   { text: 'style', correct: true },
   { text: 'index', correct: false }
] },  
 ]
