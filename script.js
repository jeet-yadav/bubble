let time = 60;
let score = 0;
let hit = 0;

function createBubbles(){
    let bubbles = "";
    for(let i=0; i<=53; i++){
        let num = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${num}</div>`
    }
    document.querySelector("#pbtm").innerHTML = bubbles;
}
let timerint = setInterval(function(){
    if(time > 0){
        time--;
        document.querySelector("#time").innerText = time;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = "";
    }
},1000);
function randHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerText = hit;
}
function increaseScore(){
    score += 1;
    document.querySelector("#score").innerText = score;
}

createBubbles();
randHit();

let tap = document.querySelector("#pbtm");

tap.addEventListener("click",function(dets){
    let target = (dets.target.innerText);
    if(target == hit){
        increaseScore();
        randHit();
        createBubbles();
    }
});