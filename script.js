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

session = true;
breakmode = false;

pause.addEventListener("click",function(){
	if(!moving)
	{
		if(reset)
		{
			if(session)
			{
				state=Number(sessionval.innerHTML)*60;
				a = Number(sessionval.innerHTML)*60;
				move();
				reset = false;
			}
			else if(breakmode)
			{
				state=Number(breakval.innerHTML)*60;
				a = Number(breakval.innerHTML)*60;
				moveinv();
				reset = false;
			}
			
		}
		else
		{
			if(session)
			{
				move();
			}
			else if(breakmode)
			{
				moveinv();
			}
			
		}
		
		moving = true;
	}
	else
	{
		if(session)
		{
			a = timerinv(timeDisp.innerHTML.toString());
			clearTimeout(myTime);
			moving  = false;
		}
		else if(breakmode)
		{
			a = timerinv(timeDisp.innerHTML.toString());
			clearTimeout(myBreakTime);
			moving  = false;
		}
		
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
		document.getElementById("fill").style.backgroundColor = "rgba(255, 60, 60, 0.69)";
		clearTimeout(myTime);
		state=Number(breakval.innerHTML)*60;
		a = Number(breakval.innerHTML)*60;
		session = false;
		breakmode = true;
		moveinv();
	}
	else
	{
		state -= 1;
		timeDisp.innerHTML = timer(state);
		document.getElementById("fill").style.left = "-"+(100-(state/(Number(sessionval.innerHTML)*60))*100)+"%";
	}
}

function moveinv()
{
	myBreakTime=setTimeout("moveinv()",1000);
	
	if(state==0)
	{	
		document.getElementById("fill").style.backgroundColor = "rgba(180, 255, 0, 0.5)";
		clearTimeout(myBreakTime);
		state=Number(sessionval.innerHTML)*60;
		a = Number(sessionval.innerHTML)*60;
		session = true;
		breakmode = false;
		move();
		
	}
	else
	{
		state -= 1;
		timeDisp.innerHTML = timer(state);
		document.getElementById("fill").style.left = "-"+(100-(state/(Number(breakval.innerHTML)*60))*100)+"%";
	}
}

function breakvalminus(){
	if(Number(breakval.innerHTML)>1)
	{
		if(!moving)
		{
			breakval.innerHTML=(Number(breakval.innerHTML)-1).toString();
			reset = true;
		}
	}	
}
function breakvalplus(){
	if(Number(breakval.innerHTML)<60)
	{
		if(!moving)
		{
			breakval.innerHTML=(Number(breakval.innerHTML)+1).toString();
			reset = true;
		}
	}	
}
function sessionvalminus(){
	if(Number(sessionval.innerHTML)>1)
	{
		if(!moving)
		{
			if(!breakmode)
			{
				sessionval.innerHTML=(Number(sessionval.innerHTML)-1).toString();
				timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
				reset = true;
			}
			
		}
		
	}	
}
function sessionvalplus(){
	if(Number(sessionval.innerHTML)<60)
	{
		if(!moving)
		{
			if(!breakmode)
			{
				sessionval.innerHTML=(Number(sessionval.innerHTML)+1).toString();
				timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
				reset = true;
			}
			
		}
	}
	
}

