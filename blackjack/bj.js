
let message=" "


let cardS=[]

let sum=0

let realCrad=false

let cardTrip=false


let messageEl=document.getElementById("message-el")

//let sumEl=document.getElementById("sum-el")

let sumEl=document.querySelector("#sum-el")

let cardEl=document.querySelector("#card-el")

let player = {
    name :"aleu",
    chips: 145
}



let playerEL=document.querySelector("#player-el")
playerEL.textContent=player.name+"$"+""+player.chips


function startGame(){

    cardTrip=true

    let   fristCard=getRandom()
    let secondCard=getRandom()

    sum=fristCard+secondCard
    cardS=[fristCard, secondCard]

    renderGame()
}
function renderGame(){
sumEl.textContent= "Sum: " +sum

cardEl.textContent="Cards: " + cardS[0] +"    " + "    " + cardS[1]

    if(sum <=20){
        message=("you need to add more")
    }
    else if(sum === 21){
        message=("you have hit the BJ")
        realCrad=true
    }
    else{
        message=("you are out of the game")
        cardTrip=false
    }
    
    messageEl.textContent=message
}

function newCard(){

    if(realCrad===true && cardTrip===false){

        let card=getRandom()
        sum += card
    
        cardS.push(card)
    
        console.log(cardS)
        renderGame()
    }


}

function getRandom(){

let rendi=Math.floor(Math.random() * 13)+1

if (rendi >10){
    return 10
} else if( rendi ===1){
    return 11
} else {
    return rendi
}
    
}

//.......................


for(let count=1; count <11; count +=2){
    console.log(count)
}

for (cont=10; cont<100; cont +=10){
    console.log(cont)
}

let personalData=["Frontend Developer", "ForexTrader", "Cryptoanalist"]
//console.log(personalData[1])
//console.log(personalData[2])
//console.log(personalData[0])

for (k=0; k<4; k +=1){
    console.log(personalData[k])
}

console.log(personalData.length)

let me=["Aleu", "25", "true"]

let tit=[7,4]
tit.push(6)
console.log(tit)

let mee=[
    "Good morning",
    "how was your night",
    "where are you"
]
for (k=0; k<4; k +=1){
    console.log(mee[k])
}

let newMee="I want to visit you"
mee.push(newMee)
for (k=0; mee.length; k +=1){
    console.log(mee[k])
}

mee.pop()
for (k=0; mee.length; k +=1){
    console.log(mee[k])
}

mee.pop()
for (k=0; mee.length; k +=1){
    console.log(mee[k])
}
//..........................................

let messG=["my ", "name", "is","Aleu"]

let getMessg=document.querySelector("#greening-el")

for (i=0; i<3; i++){
    getMessg.textContent=messG
}

//...............................

let ty=40
let jd=22

function totalN(){
    return ty+jd
    console.log(mm)
}

let hh=totalN()
console.log(hh)


//000000000000000000000000000000000000


//Dices

let randNum= Math.random()

console.log(randNum)

let randNumt= Math.random()*6

console.log(randNumt)

function rollDic(){
    let mmy=Math.floor(Math.random()*6)+1

   return mmy
}
// logical

let gyu=true
let jjj=true

if (gyu===true  && jjj === true){
   // if(jjj===true){
    //    giveHime()
    //}
}

function giveHime(){
    console.log("hhhhhh")
}

let gy=false
let jj=false

if (gy===false  && jj === fasle){
   // if(jjj===true){
    //    giveHime()
    //}
}

function giveHimte(){
    console.log("hhhhhh")
}


//-----------------------------------------------------------------

let teamD=["Chelsae" , "Man City", "Man United", "Arsenal", "Newcastel United", "Brighton Albions", "Tottenham Hot Spurs"]

function teamv(){
    
}