const cchoose=["paper","rock","scissors"]

const handoption={
   "paper":"p.png",
   "rock":"r.png",
   "scissors":"s.png"
}
const coloroption={
   "paper":"16px solid #FFA943",
   "rock":"16px solid #0074B6",
   "scissors":"16px solid #BD00FF"
}
const boxshow="-1px 1px 11px 0px #00000059,3px 0px 21px 1px #00000033 inset,0 0 0 40px #42990da6,0px 1px 62px 0px #00000021,0 0 0 70px #1DA82BC9,0 0 0 100px #2E9A2563,0px 1px 62px 0px #00000021"



let container2=document.querySelector(".container2")
let contast=document.querySelector(".contast")
//userscore & computer score show 
let comscore=document.getElementById("compara")
let user=document.getElementById("userpara")
let userscore=(localStorage.getItem("userscore"))|| 0;
let pcscore=(localStorage.getItem("pcscore"))|| 0;
comscore.innerText=pcscore
user.innerText=userscore


function result(userchoice){
  //block & display userchoice and computerchose 
container2.style.display="none"
contast.style.display="flex"


//computer & userimage change
let computerchoose= cchoose[Math.floor(Math.random()*3)]
document.getElementById("compicimage").src=handoption[computerchoose]
document.querySelector(".computerchoose").style.border=coloroption[computerchoose]
document.getElementById("userpicimage").src=handoption[userchoice]
document.querySelector(".handimagecontainer").style.border=coloroption[userchoice]
document.getElementById("againstpc").innerText="AGAINST PC"
document.getElementById("winstatus").innerText="YOU WIN"
document.querySelector("#button2").style.display="block"
document.querySelector(".handimagecontainer").style.boxShadow="none"
document.querySelector(".computerchoose").style.boxShadow="none"
 if(userchoice==computerchoose){ 
    document.getElementById("winstatus").innerText="TIE UP"
    document.getElementById("againstpc").innerText="";
    document.querySelector("#button2").style.display="none"
    
 }
 else if(userchoice=="rock" & computerchoose=="scissors"){
 userscore++
    document.querySelector(".handimagecontainer").style.boxShadow=boxshow
     
 }
 else if(userchoice=="scissors" & computerchoose=="paper"){
   userscore++
    document.querySelector(".handimagecontainer").style.boxShadow=boxshow
    
 }
 else if(userchoice=="paper" & computerchoose=="rock"){
   userscore++
    document.querySelector(".handimagecontainer").style.boxShadow=boxshow
 }
 else{
   pcscore++

 document.getElementById("winstatus").innerText="YOU LOST"
 document.querySelector("#button2").style.display="none"
 document.querySelector(".computerchoose").style.boxShadow=boxshow

}
comscore.innerText=pcscore;
user.innerText=userscore;
localStorage.setItem("userscore",userscore)
localStorage.setItem("pcscore",pcscore)
comscore.innerText=pcscore
user.innerText=userscore

}
 //rules hide and show section
let cras=document.querySelector("#crass")
   let container3=document.querySelector(".container3")
function crass(){
   
     cras.style.display="none"
     container3.style.display="none"
} 
function show(){
    cras.style.display="block"
     container3.style.display="block"

} 
//play again funtion
function playagain(){
   contast.style.display="none"
   container2.style.display="flex"
   document.querySelector("#button2").style.display="none"
}
//nextfuntion
function nextfun(){
   contast.style.display="none"
   container2.style.display="none"
   document.querySelector("#button2").style.display="none"
   container2.style.display="none"
   document.querySelector(".hide").style.display="none"
   document.querySelector(".winningpage").style.display="block"
   document.querySelector("#playbutton").style.display="block"
}

function playagain2(){
   contast.style.display="none"
   container2.style.display="flex"
   document.querySelector("#button2").style.display="none"
   document.querySelector(".container1").style.display="flex"
   document.querySelector(".winningpage").style.display="none"
}  



