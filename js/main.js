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