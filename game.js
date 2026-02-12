let score = 0;
let chaos = 0;
let combo = 0;
let time = 60;

let current;

// ---------- WORD DATABASE 
const subjects = [
"bank","mother","boss","teacher","government","alien embassy",
"tax department","delivery service","college office","future self",
"ex","unknown number","time traveler","HR department"
];

const actions = [
"needs verification","sent you money","wants OTP","scheduled meeting",
"is watching you","lost your parcel","approved loan","rejected exam",
"offers job","wants friendship","needs password","found your secret"
];

const endings = [
"immediately","within 5 minutes","before midnight","or consequences",
"or account deleted","urgent!!!","do not ignore","last warning",
"reward included","click fast","confidential"
];

// ----------- GENERATE RANDOM EMAIL
function generateEmail(){

    let real = Math.random() > 0.5;

    let text = subjects[Math.floor(Math.random()*subjects.length)] + " " +
               actions[Math.floor(Math.random()*actions.length)] + " " +
               endings[Math.floor(Math.random()*endings.length)];

    if(real){
        text = "Work Notice: " + text;
    }else{
        text = "⚠ ALERT: " + text + " send details now";
    }

    current = {
        text:text,
        type: real ? "real" : "spam"
    };

    document.getElementById("emailBox").innerText=current.text;
}

// ----------- TIMER
setInterval(()=>{
    time--;
    document.getElementById("time").innerText="Time: "+time;

    if(time<=0){
        alert("Shift Over! Final Score: "+score);
        location.reload();
    }
},1000);

// ----------- PLAYER CHOICE
function choose(answer){

    if(answer===current.type){
        score += 1 + combo;
        combo++;
        document.getElementById("correctSound").play();
    }else{
        chaos+=10;
        combo=0;
        document.getElementById("wrongSound").play();
    }

    document.getElementById("score").innerText="Score: "+score;
    document.getElementById("combo").innerText="Combo: "+combo;
    document.getElementById("chaos").innerText="Chaos: "+chaos+"%";

    if(chaos>=100){
        alert("Internet Collapsed 💀");
        location.reload();
    }

    generateEmail();
}

// START
generateEmail();
