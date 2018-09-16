var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = randomizer();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
colorDisplay.textContent = pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	
	newGame("easy");
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	
    newGame("hard");
})

resetButton.addEventListener("click",function(){
	resetButton.textContent="New Game";
	
	newGame("reset");
})

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="Correct,Bitch";
			colorChange(pickedColor);
			h1.style.background=pickedColor;
			resetButton.textContent="Play Again?";
		} else {
			messageDisplay.textContent="Wrong,Bitch";
			this.style.background="#232323";
		}
	});
}

function colorChange(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function randomizer(){
	var r=Math.floor(Math.random()*colors.length);
	return colors[r];
}

function generateColors(num){
	randomcolors=[];
	for(var i=0;i<num;i++)
	{
		randomcolors.push(randomColor());
	}
	return randomcolors;
}

function randomColor()
{
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function newGame(mode)
{
	h1.style.background="steelblue";
	messageDisplay.textContent="";
	if(mode==="easy"){
		
		resetButton.textContent="New Game";
	    colors=generateColors(3);
	    pickedColor=randomizer();
	    colorDisplay.textContent=pickedColor;
	    for(var i = 0; i < squares.length; i++){
	        if(colors[i])
	        {
	        	squares[i].style.background=colors[i];
	        }
	        else
	        {
	        	squares[i].style.display="none";
	        }
	    }
	    
	}
	if(mode==="hard"){
		
		resetButton.textContent="New Game";
	    colors=generateColors(6);
	    pickedColor=randomizer();
	    colorDisplay.textContent=pickedColor;
	    for(var i = 0; i < squares.length; i++){
	        squares[i].style.background=colors[i];
	        squares[i].style.display="block";
	    }
	    
	}
	if(mode==="reset"){
		
		resetButton.textContent="New Game";
	    colors=generateColors(6);
	    pickedColor=randomizer();
	    colorDisplay.textContent=pickedColor;
	    for(var i = 0; i < squares.length; i++){
	        squares[i].style.background=colors[i];
	        squares[i].style.display="block";
	    }
	    
	}
}