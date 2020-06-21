// variables to grab items from page
var timerEl = document.getElementById("countdown")
var main = document.querySelector("#main");
var itemIdCounter = 0;
var timeLeft = 60;
var currentAnswer = ''
// var lastAnswer = '';
var incorrectMessage = document.getElementById("incorrect")
var scoreScreen = document.getElementById("player-score")
var leaderBoard = document.getElementById("high-scores")
var leader = document.querySelector("#scores")

var highScores = [];

// question list
var questionsArray = [
    {
        title: "The framework of a webpage is...",
        options: ["Javascript","HTML","Cascading Style Sheets","Index"],
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
var correctAnswer = ""
var displayTitle = ""
var choiceEl = ""
var displayOptions = ""
var initialContainerEl = ""


// Page Load function to display initial screen
startUp = function () {

    initialContainerEl = document.createElement("div");
    initialContainerEl.className = "container";
    initialContainerEl.setAttribute("content-id", itemIdCounter);
    initialContainerEl.innerHTML = "<h2 id='title'>" + "Coding Knowledge Quiz" + "</h2>" + "<p>" + "Your goal is to answer the following code-related questions within the time limit. Incorrect answers will penalize you ten seconds/points!" + "</p>" + "<button id='start' class='btn' type='button'>" + "Start Quiz!" + "</button>";
    currentPage = initialContainerEl;
    main.appendChild(currentPage);
    var beginButton = document.querySelector("#start")
    beginButton.onclick = function () {
        quiz();
    }
}

//quiz function to display questions
quiz = function () {
    currentPage.remove();
    countdown();
    getQuestion(questionsIndex)
}


//countdown function
var countdown = function() {
    var timer = setInterval(function( ){
        timeLeft = timeLeft - 1;
        timerEl.textContent = "Time: " + timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            timeLeft = 0;
            score();
        }
        else if (questionsIndex > 4) {
            
            clearInterval(timer);
        }
    }, 1000);
}  




// display question 
function getQuestion(questionsIndex) {
    if (questionsIndex <= 4) {
        console.log(questionsIndex);
        displayOptions.innerHTML = ""
        var currentQuestion = questionsArray[questionsIndex]
        displayTitle = document.getElementById("title")
        displayOptions = document.getElementById("options")
        displayOptions.addEventListener("click", handleQuestion);
        correctAnswer = currentQuestion.answer
        displayTitle.textContent = currentQuestion.title
        console.log(currentQuestion);
        console.log(questionsIndex);
        currentQuestion.options.forEach(function(option, questionsIndex){
            choiceEl = document.createElement("button")
            choiceEl.setAttribute("class", "questions")
            choiceEl.setAttribute("value", option)
            choiceEl.setAttribute("id", "choice")
            choiceEl.setAttribute("type", "submit")
            choiceEl.textContent = option
            currentPage = choiceEl
            displayOptions.appendChild(currentPage); 

        })

            

    }
    else {
        localStorage.setItem("score", JSON.stringify(timeLeft));
        displayOptions.innerHTML = ""
        displayTitle.innerHTML = ""
        score();
    }
        
    // score();
}

// function to determine what happens based on selected answer
function handleQuestion(e) {
    if(e) {
        incorrectMessage.style.display = "none"
        currentAnswer = e.target.value
        if (currentAnswer !== correctAnswer) {
            incorrectToggle();
            timeLeft = timeLeft -10;
            
            }
            currentAnswer = ""
            questionsIndex = questionsIndex + 1
            choiceEl.remove();
            getQuestion(questionsIndex);
    }
    
}  

// displays inccorect message
var incorrectToggle = function () {
    incorrectMessage.style.display = incorrectMessage.style.display === "block" ? "none" : "block"
}

// for displaying current score
score =  function() {
    scoreScreen.style.display = "block"
    var finalContainerEl = document.getElementById("p-score")
    finalContainerEl.innerHTML =  "Your final score is " + timeLeft + "!" 
    finalContainerEl = currentPage;
    var submitScore = document.querySelector("#submit");
    submitScore.onclick = function () {
        checkScore();
    }
    

}



// Need to create function to store scores
checkScore = function(e) {
    event.preventDefault();
    incorrectMessage.style.display = "none"
    highScores =  JSON.parse(localStorage.getItem("highScores"))
    var playerName = document.querySelector("input[name='player-score']").value;

    if (!highScores) {
        highScores = {}
        highScores[playerName] = timeLeft
        highScores = localStorage.setItem("highScores", JSON.stringify(scores))
    }
    else {
        highScores.push({playerName : timeLeft});

        // var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
        // scoresSorted = Object.keys(scores).sort(function(a,b){return scores[a]-scores[b]})
        // console.log(scoresSorted); 
        
        if(highScores.length > 3) {

        }
        
    }
    displayScore() 
}

var displayScore = function () {
    currentPage.remove();
    scoreScreen.style.display = "none"
    leaderBoard.style.display = "block"
    var leaderList = document.getElementById("score-list")
    leaderList.innerHTML = "1 " + highScores[0] + "<br>" + "2 " + highScores[1] + "<br>" + "3 " + highScores[2];
    
}
        

main.addEventListener("load", startUp());
leader.onclick = function() {
    displayScore();
}
