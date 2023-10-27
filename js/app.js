let con=document.querySelectorAll(".con");
let comouter=document.querySelectorAll(".comouter");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winMidal=document.querySelector(".win-midal");
let winner=document.querySelector(".winner")
console.log(comouter);
let play=document.querySelector(".play");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score=JSON.parse(localStorage.getItem("sc"));
let scoreElem=document.getElementById("score");
let rulBtn=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-modal");
let ruleimg=document.querySelector(".rule-img");
if(score){
    scoreElem.innerText=score;
}
let count=0;
con.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(() =>{
            machine.style.opacity="1";
            setTimeout(() => {
                comouter[random].style.display="block";
                comouter[random].classList.add("right");
            },1000);
            
        }, 500);
        setTimeout(() => {
            if(random==index){
                winMidal.style.display="grid";
                winner.innerText="YOU WIN";
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winMidal.style.display="grid";
                winner.innerText="MATCH DRAW";
                count=score;
                count++;
                scoreElem.innerText=count;
                localStorage.setItem("sc", JSON.stringify(count));
            }
            else{
                winMidal.style.display="grid";
                winner.innerText="YOU LOOSE";
            }
        },1500);
    })
});
play.addEventListener("click",()=>{
    window.location.reload();
});
rulBtn.addEventListener("click", ()=>{
    rulemodal.style.display="flex";
    setTimeout(() => {
        ruleimg.style.transform="translateY(0)";
    },500);
});
let close=document.querySelector(".close");
close.addEventListener("click", ()=>{
    ruleimg.style.transform="translateY(-200%)";
    setTimeout(() => {
        rulemodal.style.display="none";
    },500)
})