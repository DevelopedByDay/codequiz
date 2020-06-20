// variables to grab items from page
var timerEl = document.getElementById("countdown");
var scores = document.getElementById("scores");
var main = document.querySelector("#main");
var itemIdCounter = 0;
var timeLeft = 60;
var currentAnswer = ''
var lastAnswer = '';


var highScores = [];

// question list
var questionsArray = [
    {
        title: "The framework of a webpage is...",
        options: ["Javascript", "Cascading Style Sheets", "HTML", "Index"],
        answer: "HTML"
    },
    {
        title: "Which of these is a true false statement?",
        options: ["Strings", "Booleans", "Integers", "Events"],
        answer: "Booleans"
    },
    {
        title: "A standard method of styling a website is NOT...",
        options: ["Javascript Functions", "Classes", "Cascading Style Sheets", "Elemnt IDs"],
        answer: "Javascript Functions"
    },
    {
        title: "Developers use this tool in a browser to check the functionality and bugs of their code...",
        options: ["Settings", "Development Extension", "Functions", "Development Tools"],
        answer: "Development Tools"
    },
    {
        title: "An industry standard for saving and tracking progress on a codebase...",
        options: ["Google Chrome", "Git", "Ubuntu", "Budgie"],
        answer: "Git"
    },
]

var questionDisplay = document.getElementById("questions");
var questionsIndex = 0;
var currentPage = null


// Page Load function to display initial screen
startUp = function () {

    var initialContainerEl = document.createElement("div");
    initialContainerEl.className = "container";
    initialContainerEl.setAttribute("content-id", itemIdCounter);
    initialContainerEl.innerHTML = "<h2 class='title'>" + "Coding Knowledge Quiz" + "</h2>" + "<p>" + "Your goal is to answer the following code-related questions within the time limit. Incorrect answers will penalize you ten seconds/points!" + "</p>" + "<button id='start' class='btn' type='button'>" + "Start Quiz!" + "</button>";
    currentPage = initialContainerEl;
    main.appendChild(currentPage);
    var beginButton = document.querySelector("#start")
    beginButton.onclick = function () {
        quiz();
    }
}

getQuestion = function () {
    var currentQuestion = questionsArray[questionIndex]
    var displayTitle = document.getElementById("question")
    var displayOptions = document.getElementById("options")
    displayTitle.textContent = currentQuestion.title
    displayOptions.textContent = currentQuestion.options
    currentQuestion.options.forEach(function (option, i) {
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "option")
        choiceEl.setAttribute("value", option)
        choiceEl.textContent = option
        main.appendChild(choiceEl)
        handleQuestion();
        //set onclick event which sets currentanswer to the text of the button that was clicked
    })
}


//quiz function to display questions
quiz = function () {
    countdown();
    currentPage.remove();
    questionsIndex++;
    for (i = 0; i < questionsArray.length; i++) {
        questionIndex = i;
        getQuestion();

    }

}

//countdown function
function countdown() {


    //time loop 
    var timer = setInterval(function( ){
        timeLeft = timeLeft - 1;
        timerEl.textContent = "Time: " + timeLeft;
        if(timeLeft <= 0) {
            score();
        }
    }, 1000);
}    

score = function () {
    var finalContainerEl = document.createElement("div");
    finalContainerEl.className = "container";
    finalContainerEl.innerHTML = "<h2 class='title'>" + "Finished!" + "</h2>" + "<p>" + "Your final score is " + timeLeft + "!" + "</p>" + "<form id='score-form'>" + "<div class='form-group'>" + "<input type='text' name='player-score' class='text-input' placeholder='Your Initials' />" + "<button id='submit' class='btn' type='submit'>" + "Submit Score!" + "</button>" + "</div>";
    main.appendChild(finalContainerEl);
    var submit = document.getElementById("submit");
    submit.onclick = checkScore();

}

function handleQuestion() {
    var correctAnswer = false;
    
    while (!correctAnswer) {
        if (currentAnswer = questionsArray[questionsIndex].answer) {
            lastAnswer = currentAnswer;
            correctAnswer = true; 
        } 
        else if(lastAnswer === currentAnswer) {
            lastAnswer = currentAnswer;
        }
        else if(currentAnswer === !questionsArray[questionsIndex].answer) {
            lastAnswer = currentAnswer;
            timeLeft = timeLeft -10;
        }
    }
}

// Need to create function to store scores
// checkScore = function() {
//     event.preventDefault();
//     var playerName = document.querySelector("input[name='player-score']").value;
//     for (var i= o; i<highScores.length; i++)
//         if (points > highScores[0]) {
//             localStorage.setItem("points", JSON.stringify(highScores[0]));
//             displayScore()
//         }
//         else 

// }

main.addEventListener("load", startUp());

