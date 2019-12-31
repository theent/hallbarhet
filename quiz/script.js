const startButton = document.getElementById('start-btn')
const backButton = document.getElementById('back-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var räknare=0;
let shuffledQuestions, currentQuestionIndex

backButton.addEventListener('click',endGame)
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})
function endGame(){
  location.href = 'index.html'
}
function startGame(){
startButton.classList.add('hide')
backButton.classList.add('hide')
shuffledQuestions=questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //om vald knapp är korrekt ökas räknaren med 1
    if (selectedButton.dataset.correct){
        räknare++
    }
    if (shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    } else {
        var answerspercent = 100*räknare/7
        startButton.innerText = Math.round(answerspercent)+'% rätt'+'\n' +'Restart'
        startButton.classList.remove('hide')
        backButton.classList.remove('hide')
        backButton.innerText = "Tillbaks till startsidan"
        räknare=0
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Vad är Grön tillväxt?',
        answers: [
            { text: 'Tillväxt inom den ekonomiska sektorn som handlar om hållbar teknologi', correct: false },
            { text: 'Hållbar ekonomisk tillväxt som inte “bryr sig om” social och ekologisk hållbarhet', correct: true},
            { text: 'Ekonomisk tillväxt som inte gör det värre för social och ekologisk hållbarhet', correct: false }
        ]
    },{
        question: 'Vad är problemet med e-handel i Sverige?',
        answers: [
          { text: 'Det finns för många chauförer som tävlar om att få anställning av e-handelsföretagen', correct: false },
          { text: 'Det finns för få chaufförer och det finns en risk att varorna inte kommer ut i tid', correct: true },
          { text: 'Det är för mycket trafik på vägarna och lasterna kommer inte fram', correct: false }
        ]
      },{
        question: 'Hur många procent av de globala investeringarna i transportsektorn är riktade till “Developing Countries"?',
        answers: [
          { text: '20%', correct: false },
          { text: '40%', correct: true },
          { text: '80%', correct: false }
        ]
      },{
        question: 'Vilka tre dimensioner vägs samman och observeras i HDI?',
        answers: [
          { text: 'Uppskattad Konsumtion, hälsa och utsläpp', correct: false },
          { text: 'Förväntad livslängd, förväntad utbildningslängd och välfärd', correct: true},
          { text: 'Livskvalitet, hälsa och jämställdhet', correct: false}
        ]
      },{
        question: 'Varför är dagens transportsektor inte socialt hållbar?',
        answers: [
          { text: 'I och med att sektorn växer ohållbart som skapar enorma buller och hälsorelaterade problem för samhället', correct: false },
          { text: 'På grund av att transporterna är alldeles för långa som bidrar till ohälsosamma miljöer', correct: false},
          { text: 'Eftersom den är beroende av oljan som negativt påverkar hälsan och den är inte jämställd eftersom vissa personer kan påverka andras möjligheter', correct: true}
        ]
      },{
        question: 'Hur många planeter skulle behövas om alla skulle ha samma standard som svenskarna enligt WWF?',
        answers: [
          { text: 'Cirka 4 planeter', correct: true },
          { text: '3 planeter', correct: false},
          { text: 'Drygt 5 planeter', correct: false}
        ]
      },{
        question: 'Transportsektorn är ett av de områden där sverige har störst möjlighet att utvecklas, varför?',
        answers: [
          { text: 'Svergie har det sämsta transportsystemet i hela Europa', correct: false },
          { text: 'I Svergie står transportsektorn för 13 procent av växthusgasutsläppen', correct: false },
          { text: 'I Svergie står Transportsektorn för 33 procent av växthusgasutsläppen', correct: true }
        ]
      }
]