
let AllChoice =document.querySelectorAll(".choice")
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#ur-score");
let compScore=document.querySelector("#comp-score");
let genCompChoice=()=>{
    let index=Math.floor(Math.random()*3);
    let compChoice=AllChoice[index].getAttribute("id");
    return compChoice;
};

const youWon=()=>{
   msg.innerText="You Won";
}

const draw=()=>{
    msg.innerText="Draw";
}

const youLost=()=>{
    msg.innerText="You Lost";
}
let comCount=0;
let userCount=0;

const updatelog=(comCount,userCount)=>{
    userScore.innerText=userCount;
    compScore.innerText=comCount;
}
let playgame =(userChoice)=>{
    let compChoice=genCompChoice();
    
    if(userChoice===compChoice){
        console.log("draw" ,userChoice,compChoice);
        draw();
    }
    else{
        console.log("user lost" ,userChoice,compChoice);
        if(userChoice == "Rock"){
            if(compChoice == "paper"){
                console.log("comp win");
                youLost();
                comCount++;
            }
            else{
                console.log("you win");
                youWon();
                userCount++;
            }
        }
        else if(userChoice == "paper"){
            if(compChoice == "scissors"){
                console.log("comp win");
                youLost();
                comCount++;
            }
            else{
                console.log("you win");
                youWon();
                userCount++
            }
        }
        else{
            if(compChoice == "Rock"){
                console.log("comp win");
                youLost();
                comCount++;
            }
            else{
                console.log("you win");
                youWon();
                userCount++;
            }
        }
    }

    console.log(comCount,userCount);
    updatelog(comCount,userCount);
}
AllChoice.forEach((choice)=>{
    console.log("clicked");
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        console.log("choice are clicked",userChoice); 
        playgame(userChoice);
    })
})