/**
 * 자동차 주행에 필요한 js
 */

function SuperCar(){
	this.brand = "Ferrari";
	this.color = "red";
	this.price = 15000;
}
 
function activeEnter(){
	if(window.event.keyCode ==13){
		//시동 켜기
		SuperCar.engineStart();
	}
}
var flag = false;
var text = document.getElementById("text");
var img = document.getElementById("img");
var input = document.getElementById("input");
var onBtn = document.getElementById("onBtn");
var offBtn = document.getElementById("offBtn");
var reset = document.getElementById("reset");

SuperCar.prototype.pw = prompt("자동차 초기 비밀번호 입력");

SuperCar.showInput = function(){
	if(!flag){
		//시동이 켤수 있는 상태
		input.style.visibility="visible";
	}else{
		//시동이 이미 켜져있는 상태
		input.style.visibility="hidden";
		text.innerHTML = "이미 켜져 있습니다.";
	}
}

//프로토 타입의 메소드 사용방법
//SuperCar.engineStart();
var i = 1;
SuperCar.engineStart = function(){
	//비밀번호 검사(SuperCar.prototype.pw:초기 비밀번호)
	//연속 3회 오류시 경찰 출동
	if(SuperCar.prototype.pw.toString() == input.value){
		text.innerHTML = "시동 켜짐";
		img.src = "on.gif";
		input.style.visibility="hidden";
		flag = true;
	}else{
		text.innerHTML = "비밀번호 오류: " + i + "회";
		input.value = "";
		if(i == 3){
			text.innerHTML = "경찰 출동중";
			img.src = "police.png";
			flag=false;
			//버튼 없애기
			onBtn.style.display = "none";
			offBtn.style.display = "none";
			input.style.visibility="hidden";
		}//end if
		i++;
	}//end else
	
}
SuperCar.engineStop = function(){
	//시동을 끌수 있는 상태
	//시동이 이미 꺼져있는 상태
	if(flag){
		text.innerHTML = "시동 꺼짐";
		img.src = "off.gif";
		flag = false;
	}//end if
	else{
		text.innerHTML = "이미 꺼져 있습니다.";
	}//end else
}

function clickReset(){
	onBtn.style.display = "inline";
	offBtn.style.display = "inline";
	i = 1;
	img.src = "car.png";
	text.innerHTML = "현재 상태 표시";
	input.value = "";
	flag = false;
	SuperCar.prototype.pw = prompt("자동차 초기 비밀번호 입력");
}//end reset





