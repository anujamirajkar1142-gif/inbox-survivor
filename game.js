let score = 0;
let chaos = 0;

const emails = [
{ text:"Your bank account locked. Send OTP.", type:"spam"},
{ text:"Meeting at 4PM regarding project.", type:"real"},
{ text:"Prince offers you $5 million inheritance", type:"spam"},
{ text:"Mom: buy vegetables while coming home", type:"real"},
{ text:"Alien embassy offering internship", type:"spam"}
];

function newEmail(){
    current = emails[Math.floor(Math.random()*emails.length)];
    document.getElementById("emailBox").innerText=current.text;
}

function choose(answer){
    if(answer===current.type){
        score++;
    }else{
        chaos+=10;
    }

    document.getElementById("score").innerText="Score: "+score;
    document.getElementById("chaos").innerText="Chaos: "+chaos+"%";

    if(chaos>=100){
        alert("INTERNET COLLAPSED");
        location.reload();
    }

    newEmail();
}

newEmail();
