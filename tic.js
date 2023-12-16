let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let success=document.querySelector(".success");
let s=document.querySelector(".s");
let current="true";

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
     if(current=="true"){
        current="false";
      box.innerText="X";}
    else{
        current="true";
        box.innerText="O";}
        Winner();
    });});
    const disable=()=>{
        for(let box of boxes )
        box.disabled=true;
    }
    const enable=()=>{
        for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
       }
    }
    const showWinner=(pos1)=>{
        s.innerText=` congratulations! ${pos1} won the game 
        press reset button to restart`;
        success.classList.remove("hide");
        disable();
    }
    const Winner=()=>{
        for(let a of win)
        {
          let pos1=boxes[a[0]].innerText;
          let pos2=boxes[a[1]].innerText;
          let pos3=boxes[a[2]].innerText;
          if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3)
            showWinner(pos1);
          }
        }
    }
    const resets=()=>{
        current="true";
        enable();
        success.classList.add("hide");
    }
    reset.addEventListener("click",resets);