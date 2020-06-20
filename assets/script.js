// variables to grab items from page
var timerEl = document.getElementById("countdown");
var beginButton = document.querySelector("#start")
var scores = document.getElementById("scores");
var main = document.querySelector("#main");
var submit = document.getElementById("submit");
var itemIdCounter = 0;


var highScores = [];

// question list
var questions = [
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
    options: ["Settings", "Development Extension","Functions","Development Tools"],
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


// Page Load function to display initial screen
startUp = function() {

    var initialContainerEl = document.createElement("div");
    initialContainerEl.className = "container";
    initialContainerEl.setAttribute("content-id" , itemIdCounter);
    initialContainerEl.innerHTML = "<h2 class='title'>" + "Coding Knowledge Quiz" + "</h2>" + "<p>" + "Your goal is to answer the following code-related questions within the time limit. Incorrect answers will penalize you ten seconds/points!" + "</p>" + "<button id='start' class='btn' type='button'>" + "Start Quiz!" + "</button>";
    main.appendChild(initialContainerEl);
    
}

getQuestions = function() {
    var currentTitle = questions[questionIndex]
    var displayTitle = document.getElementById("question")
    var displayOptions = document.getElementById("options")
    displayTitle.textContent = currentTitle.title
    //displayOptions.textContent = currentTitle.options
    currentTitle.options.forEach(function(option, i){
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "option")
        choiceEl.setAttribute("value", option)
        choiceEl.textContent = option
        questionsSection.appendChild(choiceEl)
    })
}


//quiz function to display questions
quiz = function() {
    var itemId = initialContainerEl.getAttribute("content-id");
    var contentSelected = document.querySelector(".container[content-id='" + itemId + "']");
    contentSelected.remove();

    changeQuestions();
    
}

function changeQuestions() {
    questionsIndex++;
    getQuestions();

}

//countdown function
function countdown() {
    var timeLeft = 60;

    //time loop 
    var timer = setInterval(function(){
        timeLeft = timeLeft-1;
        timerEl.textContent = "Time: " + timeLeft;
        var points = timeLeft
        if (timeLeft <= 0) {
            score();
            return points
        }
    },1000)
}

score = function() {
    var finalContainerEl = document.createElement("div");
    finalContainerEl.className = "container";
    finalContainerEl.innerHTML = "<h2 class='title'>" + "Finished!" + "</h2>" + "<p>" + "Your final score is " + points + "!" + "</p>" + "<form id='score-form'>" + "<div class='form-group'>" + "<input type='text' name='player-score' class='text-input' placeholder='Your Initials' />" + "<button id='submit' class='btn' type='submit'>" + "Submit Score!" + "</button>" + "</div>";
    main.appendChild(finalContainerEl);
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
beginButton.onclick = quiz(),countdown();
// submit.onclick = checkScore();

