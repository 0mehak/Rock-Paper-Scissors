let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
//rock, paper, scissors
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];

}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw,Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin, userchoice,compChoice)=>{
if(userwin) 
    {   
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lost! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
     }
    const playGame=(userchoice)=>
    {
    console.log("user choice=",userchoice);
    //Generate Comp choice-> Modular
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice); 

    if(userchoice===compChoice)
        {//Draw Game
            drawGame();
        }
else{
    let userwin=true;
    if(userchoice==="rock")
        {//paper,scissors
            userwin=compChoice==="paper"?false : true;

        }
    
    else if(userchoice==="paper")
    {//rock, scissors
      userwin=compChoice==="scissors"? false:true ; 
    }
    else{
        // rock,paper
       userwin= compChoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compChoice);
}
    };

choices.forEach((choice) => {
    //console.log(choice);
        choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice); 
        });
    });

























