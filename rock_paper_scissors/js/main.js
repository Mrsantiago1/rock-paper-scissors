alert("Winners Win!");
var botScore=0,
	playerScore=0,
	playersChoice= "",
	botsChoice="";

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var playersWeapon = "rock";
 			playersChoice = "::Player's Weapon: " + playersWeapon;
	var botsWeapon= getRandomWeapon();//getRandomWeapon();
			botsChoice= "::Bot's Weapon: " + botsWeapon;//
	checkWhoWon(botsWeapon,playersWeapon);
	if(botsWeapon === "paper"){
		return "paper wins";
	}
	else{
		return "rock wins";
	}
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var playersWeapon="scissors";
			playersChoice = "::Player's Weapon: " + playersWeapon;
	var botsWeapon = getRandomWeapon();
			botsChoice= "::Bot's Weapon: " + botsWeapon;
	checkWhoWon(botsWeapon,playersWeapon);
	if(botsWeapon === "rock"){
		return "rock wins";
	}
	else if(botsWeapon==="spock") {
		return "spock wins";
	}
	else{
		return "scissors wins";
	}
}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var playersWeapon="paper";
			playersChoice = "::Player's Weapon: " + playersWeapon;
	var botsWeapon = getRandomWeapon();
			botsChoice= "::Bot's Weapon: " + botsWeapon;
	checkWhoWon(botsWeapon,playersWeapon);
	if(botsWeapon === "rock"){
		return "paper wins";
	}
	else if (botsWeapon==="lizard") {
		return "lizard wins";
	}
	else{
		return "rock wins";
	}
}
document.getElementById("lizard").onclick=playerThrowsLizard;
function playerThrowsLizard(){
	var playersWeapon ="lizard";
			playersChoice = "::Player's Weapon: " + playersWeapon;
	var botsWeapon = getRandomWeapon();
			botsChoice= "::Bot's Weapon: " + botsWeapon;
	checkWhoWon(botsWeapon,playersWeapon);
	if(botsWeapon === "spock"){
		return "lizard wins";
	}
	else if (botsWeapon === "rock"){
		return "rock wins";
	}
	else if (botsWeapon === "scissors") {
		return "scissors win"
	}
	else {
		return "lizard wins";
	}
	}
document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsSpock(){
	var playersWeapon = "spock";
			playersChoice = "::Player's Weapon: " + playersWeapon;
	var botsWeapon = getRandomWeapon();
			botsChoice= "::Bot's Weapon: " + botsWeapon;
	checkWhoWon(botsWeapon,playersWeapon);
	if(botsWeapon==="lizard"){
		return "lizard wins";
	}
	else if (botsWeapon==="rock") {
		return "rock wins";
	}
	else {
		return "spock wins";
	}
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.2222){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4444){
		botsWeapon="paper";
	}
	else if (randomNumber<.6666) {
		botsWeapon="lizard";
	}
	else if (randomNumber<.888) {
		botsWeapon="spock"
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie :P ");
		displayChoiceOfWeapon( playersChoice + ""+ botsChoice);

	}
	else if(
		(botsWeapon=="scissors" && playersWeapon =="paper") ||
		(botsWeapon=="scissors" && playersWeapon == "lizard")||
		(botsWeapon=="paper" && playersWeapon == "rock") ||
		(botsWeapon=="rock" && playersWeapon == "scissors") ||
		(botsWeapon=="spock" && playersWeapon == "scissors") ||
		(botsWeapon=="lizard" && playersWeapon == "spock") ||
		(botsWeapon =="lizard" && playersWeapon=="paper")||
		(botsWeapon=="rock" && playersWeapon == "lizard")||
		(botsWeapon == "rock" && playersWeapon == "spock")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("You Lose, Try Again. -.- ");
	displayChoiceOfWeapon( playersChoice + "\n"+ botsChoice);
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("playerScore").innerHTML=playerScore;
	displayCompleteMessage("You WIN!! :D ");
	displayChoiceOfWeapon( playersChoice + "\n"+ botsChoice);
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
function displayChoiceOfWeapon(msg){
	document.getElementById("weaponsUsed").innerHTML=msg;
}
