function displayBotsWeapon(botsWeapon){
  if(botsWeapon == "rock"){
    displayCompleteMessage("bot played rock");
	}
	else if(
      (botsWeapon =="paper")
      displayCompleteMessage("bot played paper"); ||
      (botsWeapon =="scissors")
      displayCompleteMessage("bot played scissors")
    ){
		displayBotsWeapon();
  }
}



function displayBotsWeapon(){
	document.getElementById("weaponsUsed").innerHTML=botsWeapon;
	if(botsWeapon === "rock"){
		displayCompleteMessage("bot played rock");
		if(botsWeapon ==="paper"){
		displayCompleteMessage("bot played paper");
		if (botsWeapon ==="scissors") {
			displayCompleteMessage("bot played scissors");

			}
		}
	}
}
