let gameSeq=[];
let userSeq=[];
let colors=['red','blue','yellow','green'];
let body=document.querySelector('body');
let h2=document.querySelector('h2');
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        LevelUp();
    }
})
function LevelUp(){
    ++level;
    userSeq=[];
    h2.innerText=`Level is ${level}`;
    let randomColor=colors[Math.floor(Math.random()*4)];
    gameSeq.push(randomColor);
    let randomclass=document.querySelector(`.${randomColor}`);

    gameFlash(randomclass);
}
function gameFlash(btn){
    btn.classList.add('gameflash');
    setTimeout(()=>{
        btn.classList.remove('gameflash');
    },500);
}
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>{
        btn.classList.remove('userflash');
    },500);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}
function btnPress(){
    let btn=this;
    let color=btn.getAttribute('id');
    userSeq.push(color);
    userFlash(btn);
    checkans(userSeq.length-1);
}
function checkans(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(LevelUp,1000);
        }
    }
    else{
        turnred();
        h2.innerHTML=`Game Over! your score is <b>${level}</b><br> press any key to start`;
        reset();
    }
}
function turnred(){
    body.classList.add('turnred');
    setTimeout(function(){
        body.classList.remove('turnred');
    },500)
}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}