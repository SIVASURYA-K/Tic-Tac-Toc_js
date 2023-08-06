const boxes=document.querySelectorAll('.box')
const statustxt=document.querySelectorAll('#statuse')
const btnrestart=document.querySelector('.restart')



//create var as img
let x="<img src='/images/x.png'>"
let o="<img src='/images/04.png'>"

//wining possiblity in array
const wins=[
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
];


let options=["","","","","","","","",""];
console.log(options)
let currentplayer =x;
let playerer="X";
let running=false;
first();



function first(){
boxes.forEach(box=>box.addEventListener('click',boxclick));
btnrestart.addEventListener('click',restartgame);
statustxt.textContent=`${playerer} Your Turn`;
running=true;
}
 
function boxclick(){
  const index= this.dataset.index;
  // 1.if img is there,  boxclick function is not work 
  // 2.running=flase 
  if(options[index]!='' || !running){
    return;  //if all box are filled if condition will end....
  }
  
  updatebox(this,index);
  winner();

}


//to inster image when click by index and to chage player name
function updatebox(box,index){
    options[index]=playerer;
    box.innerHTML=currentplayer;

 
}

//to change player
function changeplayer(){

    playerer=(playerer=="X") ? "O" : "X";
    currentplayer=(currentplayer==x) ? o : x;

    statustxt.textContent=`${playerer} Your Turn`;
}


// to cheack the winner
function winner(){
    let iswon=false;
    for(let i=0;i<wins.length;i++){
     const condition=wins[i];
     const box1=options[condition[0]];
     const box2=options[condition[1]];
     const box3=options[condition[2]];
     if(box1=="" || box2=="" || box3==""){
        continue;
     }
//win animation
     if(box1==box2 && box2==box3){
        iswon=true;
        boxes[condition[0]].classList.add('win');
        boxes[condition[1]].classList.add('win');
        boxes[condition[2]].classList.add('win');

     }
 
    }

    if(iswon){
        statustxt.textContent=`${playerer} WON..`
        running=false;

    }
    else if (!options.includes("")){
        statustxt.textContent=`GAME OVER...!`
        running=false;
    }else{
        changeplayer();
    }

}

//to restart
function restartgame(){

   options=["","","","","","","","",""];
   console.log(options)
   currentplayer =x;
   playerer="X";
   running=true;
   
   statustxt.textContent=`${playerer} Your Turn`;
// to remove img and animation for restart
   boxes.forEach(box=>{
     box.innerHTML="";
     box.classList.remove('win')
   })
}

