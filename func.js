function getRandomNumeber(){
    return Math.floor(100*Math.random());
}
let chances=0;
let number=getRandomNumeber();
let myValue=0;
let usedChances=0;
let won=false;
const userGiven=[];
const easy=document.querySelector(".btn1");
const hard=document.querySelector(".btn2");
const homeScreen=document.querySelector(".homeScreen");
const gameScreen=document.querySelector(".gameScreen");
const userValue=document.querySelector(".user-input");
const newGame=document.querySelector("#myBtn");
const userAlert=document.querySelector("#gt1");
const attemptValue=document.querySelector(".attempt-value");
const allAttempts=document.querySelector(".attempts");
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
userValue.addEventListener("keydown",(event)=>{
    // console.log(number);
    if(chances!=0 && won==false){
        if(event.keyCode === 13){
            myValue=userValue.value;
            // console.log(won);
            if(0<=myValue && myValue<=100) {
                if(myValue==number){
                    userValue[usedChances]=myValue;
                    newGame.style.display="block";
                    userAlert.textContent="You Guessed Correct 👍";
                    chances-=1;
                    usedChances+=1;
                    attemptValue.textContent=(usedChances);
                    userValue.value="";
                    allAttempts.textContent+=userValue[usedChances-1]+" ";
                    won=true;
                }
                else if(myValue<number){
                    userValue[usedChances]=myValue;
                    userAlert.textContent="Too Low 👎";
                    chances-=1;
                    usedChances+=1;
                    attemptValue.textContent=(usedChances);
                    userValue.value="";
                    allAttempts.textContent+=userValue[usedChances-1]+" ";
                }
                else if(myValue>number){
                    userValue[usedChances]=myValue;
                    userAlert.textContent="Too High 👎";
                    chances-=1;
                    usedChances+=1;
                    attemptValue.textContent=(usedChances);
                    userValue.value="";
                    allAttempts.textContent+=userValue[usedChances-1]+" ";
                }
                if(chances==0 && !won){
                    newGame.style.display="block";
                    userAlert.textContent="You lost the Game 👎";
                }
            }
            else{
                userAlert.textContent="Invalid input";
                userValue.value="";
            }
            
        }
    }
});
newGame.addEventListener("click",()=>{
    homeScreen.style.display="flex";
    gameScreen.style.display="none";
    newGame.style.display="none";
    userAlert.textContent="Your Guess";
    allAttempts.textContent="";
    attemptValue.textContent=0;
    chances=0;
    usedChances=0;
    userValue.value="";
    won=false;
    number=getRandomNumeber();
})