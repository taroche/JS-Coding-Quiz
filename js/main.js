const timeRemainingEl = document.querySelector('#time');
const questionEl = document.querySelector("#question");
const optionsEl = document.querySelectorAll("#option");
const mainEl = document.querySelector("#main");
const initialsEl = document.querySelector("#inputInitials")

let timeRemaining = 60;
let currentQ;
let QnA = [
    {
        question:"Q1: JavaScript is a ___ -side programming language.",
        options:['Client', 'Server', 'Both', 'None'],
        correctOptn: 'Both'
    },
    {
        question:"Q2: Which of the following will write the message “Hello DataFlair!” in an alert box?",
        options:['alertBox(“Hello DataFlair!”);', 'alert(Hello DataFlair!);', 'msgAlert(“Hello DataFlair!”);', 'alert(“Hello DataFlair!”);'],
        correctOptn: 'alert(“Hello DataFlair!”);'
    },
    {
        question:"Q3: How do you find the minimum of x and y using JavaScript?",
        options:['min(x,y);', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy);'],
        correctOptn: 'Math.min(x,y)'
    },
    {
        question:"Q4: Which JavaScript label catches all the values, except for the ones specified?",
        options:['catch', 'label', 'try', 'default'],
        correctOptn: 'default'
    },
    {
        question:'Q5: Which are the correct "if" statements to execute certain code if “x” is equal to 2?',
        options:['if(x 2)', 'if(x = 2)', 'f(x === 2)', 'if(x != 2 )'],
        correctOptn: 'f(x === 2)'
    },
]

function timerEl() {
    let prevA = this.textContent;
    let gameInterval = setInterval(function() {
        timeRemaining--;
        timeRemainingEl.textContent = timeRemaining;
        
        if(timeRemaining<=0){
            clearInterval(gameInterval)
            mainEl.setAttribute("class", "hidden");
            initialsEl.setAttribute("class", "container");
        }
    }, 1000)
};

function itterate(){
    questionEl.textContent = QnA[currentQ].question;
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].textContent= QnA[currentQ].options[i];
    }
    currentQ++;
};

function checkAndItterate(){
    // console.log(this);
    let prevA = this.textContent;
    if(prevA == QnA[currentQ-1].correctOptn){
        console.log("nice correct")
    }else {
        console.log("YOU'RE WRONG")
    }

    itterate();
}
