// variables to grab items from page
var timerEl = document.getElementById("countdown");
var begin = document.getElementById("start");
var scores = document.getElementById("scores");
var main = document.querySelector("#main");
var submit = document.getElementById("submit");

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

//countdown function
function countdown() {
    var timeLeft = 60;

    //time loop 
    var timer = setInterval(function(){
        timeLeft = timeLeft-1;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            score();
            return timeLeft
        }
    },1000)
}

score = function() {
    var finalContainerEl = document.createElement("div");
    finalContainerEl.className = "container";
    finalContainerEl.innerHTML = "<h2 class='title'>" + "Finished!" + "</h2>" + "<p>" + "Your final score is " + timeLeft + "!" + "</p>" + "<form id='score-form'>" + "<div class='form-group'>" + "<input type='text' name='player-score' class='text-input' placeholder='Your Initials' />" + "<button id='submit' class='btn' type='submit'>" + "Submit Score!" + "</button>" + "</div>"
    main.appendChild(finalContainerEl);
}

checkScore()



begin.onclick = countdown,quiz();
submit.onclick = checkScore();

