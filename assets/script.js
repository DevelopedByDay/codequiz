// variables to grab items from page
var timerEl = document.getElementById("countdown");
var begin = document.getElementById("start");
var scores = document.getElementById("scores");
var main = document.querySelector("#main");
var submit = document.getElementById("submit");
var itemIdCounter = 0;


var highScores = [];

// question list
var questions = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]

// Page Load function to display initial screen
startUp = function() {

    var initialContainerEl = document.createElement("div");
    initialContainerEl.className = "container";
    initialContainerEl.setAttribute("content-id" , itemIdCounter);
    initialContainerEl.innerHTML = "<h2 class='title'>" + "Coding Knowledge Quiz" + "</h2>" + "<p>" + "Your goal is to answer the following code-related questions within the time limit. Incorrect answers will penalize you ten seconds/points!" + "</p>" + "<button id='start' class='btn' type='button'>" + "Start Quiz!" + "</button>";
    main.appendChild(initialContainerEl);
    
}



//quiz function to display questions
quiz = function() {
    var itemId = initialContainerEl.getAttribute("content-id");
    var contentSelected = document.querySelector(".container[content-id='" + itemId + "']");
    contentSelected.remove();
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
// begin.onclick = countdown,quiz();
// submit.onclick = checkScore();

