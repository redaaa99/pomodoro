breakval = document.getElementById('breakval');
sessionval = document.getElementById('sessionval');
pause = document.getElementById("loading");
filler = document.getElementById("fill");
timeDisp = document.getElementById("timeDisp");
timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
state=Number(sessionval.innerHTML)*60;
a = Number(sessionval.innerHTML)*60;
var myTime;
moving =false;
reset = false;

pause.addEventListener("click",function(){
	if(!moving)
	{
		if(reset)
		{
			state=Number(sessionval.innerHTML)*60;
			a = Number(sessionval.innerHTML)*60;
			move();
			reset = false;
		}
		else
		{
			move();
		}
		
		moving = true;
	}
	else
	{
		a = timerinv(timeDisp.innerHTML.toString());
		clearTimeout(myTime);
		moving  = false;
	}
},false);


function timerinv(str)
{
	arr = str.split("");
	min = Number(arr[0])*10+Number(arr[1]);
	sec = Number(arr[3])*10+Number(arr[4]);
	return min*60+sec;
}

function timer(seconds)
{
	min = Math.floor(Math.floor(seconds) / 60);
	second = Math.floor(seconds)%60;
	if(min<10)
	{
		if(second<10)
		{
			return "0"+min+":0"+second;
		}
		else
		{
			return "0"+min+":"+second;
		}
	}
	else
	{
		if(second<10)
		{
			return min+":0"+second;
		}
		else
		{
			return min+":"+second;
		}
	}
		
}

function move()
{
	myTime=setTimeout("move()",1000);
	
	if(state==0)
	{	
		clearTimeout(myTime);
	}
	else
	{
		state -= 1;
		timeDisp.innerHTML = timer(state);
		document.getElementById("fill").style.left = "-"+(100-(state/(Number(sessionval.innerHTML)*60))*100)+"%";
	}
}

function breakvalminus(){
	if(Number(breakval.innerHTML)>1)
	{
		if(!moving)
		{
			breakval.innerHTML=(Number(breakval.innerHTML)-1).toString();
		}
	}	
}
function breakvalplus(){
	if(Number(breakval.innerHTML)<60)
	{
		if(!moving)
		{
			breakval.innerHTML=(Number(breakval.innerHTML)+1).toString();
		}
	}	
}
function sessionvalminus(){
	if(Number(sessionval.innerHTML)>1)
	{
		if(!moving)
		{
			sessionval.innerHTML=(Number(sessionval.innerHTML)-1).toString();
			timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
			reset = true;
		}
		
	}	
}
function sessionvalplus(){
	if(Number(sessionval.innerHTML)<60)
	{
		if(!moving)
		{
			sessionval.innerHTML=(Number(sessionval.innerHTML)+1).toString();
			timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
			reset = true;
		}
	}
	
}

