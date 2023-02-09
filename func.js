function getRandomNumeber(){
    return Math.floor(99*Math.random());
}
let chances=0;
let number=getRandomNumeber();
let myValue=0;
const easy=document.querySelector(".btn1");
const hard=document.querySelector(".btn2");
const homeScreen=document.querySelector(".homeScreen");
const gameScreen=document.querySelector(".gameScreen");
const userValue=document.querySelector(".user-input");
easy.addEventListener("click",()=>{
    chances=10;
    homeScreen.style.display="none";
    gameScreen.style.display="flex";
});
hard.addEventListener("click",()=>{
    chances=5;
    homeScreen.style.display="none";
    gameScreen.style.display="flex";
});
userValue.addEventListener("onChange",()=>{
    myValue=userValue.value;
    console.log(myValue);
});