document.getElementById("period").textContent=0

let periodz=document.getElementById("period")

let quaterz=0
function quaters(){
    quaterz+=1
    periodz.textContent= quaterz
  
}
/*.................end of quaters......................*/
document.getElementById("score").innerText=0
let scores=document.getElementById("score")

let scorez=0
function threez(){
    scorez+=3
    scores.textContent=scorez

}

function twoz(){
    scorez+=2
    scores.textContent=scorez

}

function onez(){
    scorez+=1
    scores.textContent=scorez

}
/*..............................end Bucks..................*/

document.getElementById("scoreG").textContent=0
let scoreGuest=document.getElementById("scoreG")

let guestScore=0

function threes(){
    guestScore+=3
    scoreGuest.textContent=guestScore
}

function twos(){
    guestScore+=2
    scoreGuest.textContent=guestScore
}

function ones(){
    guestScore+=1
    scoreGuest.textContent=guestScore
}

/*.............end of score board........*/

document.getElementById("timeLeft").textContent=13

let timeToPlay=document.getElementById("timeLeft")

let playTime=13
function play(){
    playTime-=1
    timeToPlay.textContent=playTime+ ":00 " + "Min"

}
