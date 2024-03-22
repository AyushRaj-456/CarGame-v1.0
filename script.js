

function moveLeft(){ let left = parseInt(window.getComputedStyle(charector).getPropertyValue("left"));

left -= 50;
if(left >= 0){
charector.style.left = left + "px";
} 
}

function moveRight(){ let left= parseInt(window.getComputedStyle(charector).getPropertyValue("left"));

left += 50;
if(left<200){
charector.style.left = left + "px";
}
}


document.addEventListener("keydown", event =>{
if (event.key==="ArrowLeft"){moveLeft();}
if (event.key==="ArrowRight"){moveRight();}

});


var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', ()=>{ 
var random = Math.floor(Math.random() * 4);
left = random * 50;
block.style.left = left + "px";
counter++; 
}); 


setInterval(function(){
var charectorLeft = parseInt(window.getComputedStyle(charector).getPropertyValue("left"));

var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

if(charectorLeft == blockLeft && blockTop<600 && blockTop>400){ 
alert("Game Over. Your Score :" +counter);
block.style.animation= "none"; 
}


}, 1);




document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart",moveRight); 

