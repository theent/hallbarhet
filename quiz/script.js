const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)

function startGame(){
console.log('started')
startButton.classList.add('hide')
shuffledQuestions=questions.sort(()=> Math.random()- .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.ForEach(answer => {
    const buttton = document.createElement('button')
    buttton.innerText = answer.text
    buttton.classList.add('btn')
    if (answer.correct){
        buttton.dataset.correct = answer.correct
    }
    buttton.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(buttton)
})
}

function selectAnswer(){

}

const questions = [
    {
        question: 'vad är 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false}
        ]
    }
]