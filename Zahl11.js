const gameArea=document.querySelector(".game");
const button=document.querySelector(".button");


let gamePlay=false;

document.querySelector(".button").addEventListener('click',()=>{
    if(!gamePlay){
        gamePlay=true;
        gameArea.innerHTML="";
        score=0;
        h1.innerHTML="Wählen Sie!!! eine Zahl zwischen 0-9 und klicken auf dem Knopf";
        button.innerHTML="Checken";
        maker(3);
        

    }else{
        const numbers=document.querySelectorAll(".number");score++;
        h1.innerHTML="Vermutung"+score;
        let winCondition=0;


        for(let i=0;i<numbers.length;i++){
            
            if(numbers[i].value==numbers[i].correct){
                numbers[i].style.backgroundColor="green";
                winCondition++;
            }else{
                let color= numbers[i]=(numbers[i].value<numbers[i].correct)?"yellow":"red";
                numbers[i].style.backgroundColor = color;
                
            }if(winCondition==numbers.length){
                gameEnd()
            }
        }
    }
})
function gameEnd(){
    h1.innerHTML="Fertig"+score+"vermutung";
    gamePlay=false;
    button.innerHTML="Neu starten"
}







function maker(num){
    for (let x = 0; x< num; x++){
    let el=document.createElement("input");
    el.setAttribute("type","Number");
    el.max=9;
    el.min=0;
    el.correct=Math.floor(Math.random()*10);
    el.value=0;
    el.style.width="70px";
    el.classList.add("number");
    el.order=1;
    console.log(el);
    gameArea.appendChild(el);
}

}