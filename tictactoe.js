let restart = document.querySelector("#restart");
let boxes = document.querySelectorAll(".box");
let win = document.querySelector("#win");
let nbtn = document.querySelector(".nw");
let ng = document.querySelector(".ngame");
let msg = document.querySelector(".msg")
//box
let playerO = true; 
let winpattern = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]]
const newbtn = () =>{
for(let box of boxes){
    box.innerText = "";
    box.disabled = false;
    playerO = true;
    msg.classList.add("msg");
}
}
ng.addEventListener("click",newbtn);
nbtn.addEventListener("click",newbtn);
restart.addEventListener("click",newbtn);
boxes.forEach((box) =>{
    box.addEventListener( "click", () => {
        if(playerO){
            box.innerText = "O";
            playerO = false;
        }
        else{
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        winner();
    });
});
const showWinner = (p1) => {
    win.innerText = `Cogratulation , winner is ${p1}`;
    msg.classList.remove("msg");
}
const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const winner = () => {
    for(let ptn of winpattern){
    p1 = boxes[ptn[0]].innerText;
    p2 = boxes[ptn[1]].innerText;
    p3 = boxes[ptn[2]].innerText;
    /*
    console.log(ptn[1],ptn[2],ptn[3]);
    console.log(p1 = boxes[ptn[0]].innerText,
        p2 = boxes[ptn[1]].innerText,
        p3 = boxes[ptn[2]].innerText);*/
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                //console.log("winner");
                disabledbox();
                showWinner(p1);
            }
        }
    }
};