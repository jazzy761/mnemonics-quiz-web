const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:[
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false},
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers:[
            {text: "William Shakespeare", correct: true},
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
        ]
    },
    {
        question: "What is the square root of 64?",
        answers:[
            {text: "6", correct: false},
            {text: "7", correct: false},
            {text: "8", correct: true},
            {text: "9", correct: false},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers:[
            {text: "Amazon River", correct: false},
            {text: "Nile River", correct: true},
            {text: "Yangtze River", correct: false},
            {text: "Mississippi River", correct: false},
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answers:[
            {text: "Mount Everest", correct: true},
            {text: "K2", correct: false},
            {text: "Kangchenjunga", correct: false},
            {text: "Lhotse", correct: false},
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answers:[
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: true},
            {text: "8", correct: false},
        ]
    },
    {
        question: "Who discovered gravity?",
        answers:[
            {text: "Albert Einstein", correct: false},
            {text: "Isaac Newton", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text: "Nikola Tesla", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers:[
            {text: "Oxygen", correct: false},
            {text: "Carbon Dioxide", correct: true},
            {text: "Nitrogen", correct: false},
            {text: "Hydrogen", correct: false},
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers:[
            {text: "Cheetah", correct: true},
            {text: "Lion", correct: false},
            {text: "Horse", correct: false},
            {text: "Gazelle", correct: false},
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers:[
            {text: "Oxygen", correct: true},
            {text: "Osmium", correct: false},
            {text: "Gold", correct: false},
            {text: "Silver", correct: false},
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answers:[
            {text: "Spanish", correct: false},
            {text: "Portuguese", correct: true},
            {text: "English", correct: false},
            {text: "French", correct: false},
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers:[
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestions();
}


function showQuestions(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click" , selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
} 

function showScore(){
    
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }

});

startQuiz();

