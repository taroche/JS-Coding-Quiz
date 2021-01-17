const timeRemainingEl = document.querySelector('#time');
const questionEl = document.querySelector("#question");
const optionsEl = document.querySelectorAll("#option");
const mainEl = document.querySelector("#main");
const initialsEl = document.querySelector("#inputInitials");
const intialsEl = document.querySelector(".initials");
const scoreEl = document.querySelector('.score');

let scoreArr = [];
    if(localStorage.getItem("scoreArr")){
        scoreArr = JSON.parse(localStorage.getItem('scoreArr'))
    }

const quiz = function(){
    let timeRemaining = 60;
    let currentQ = 0;
    let gameInterval;
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
            gameInterval = setInterval(function() {
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
        if(currentQ <= 4) {
            questionEl.textContent = QnA[currentQ].question;
            for (let i = 0; i < optionsEl.length; i++) {
                optionsEl[i].textContent= QnA[currentQ].options[i];
            }
        }
        else {
            mainEl.setAttribute("class", "hidden");
            initialsEl.setAttribute("class", "container");
            clearTimeout(gameInterval);
        }
        currentQ++;
    };

    function checkAndItterate(){
        let prevA = this.textContent;
        if(prevA === QnA[currentQ-1].correctOptn){
            console.log("nice correct")
        }else {
            console.log("YOU'RE WRONG")
            timeRemaining-= 10;
            timeRemainingEl.textContent = timeRemaining;
        }
            
        itterate();
    };

    function init () {
        timerEl()
        itterate()
    };

    init();
    for (let j = 0; j < optionsEl.length; j++) {
        optionsEl[j].addEventListener("click", checkAndItterate);
    };


    
    function saveScore() {
        let input = timeRemaining +" - "+ intialsEl.value.toUpperCase()
        console.log(parseInt(input))
        scoreArr.push(input)
        localStorage.setItem("scoreArr", JSON.stringify(scoreArr))
    };
    
    document.querySelector(".savebtn").addEventListener("click", saveScore)
}
