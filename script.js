breakval = document.getElementById('breakval');
sessionval = document.getElementById('sessionval');
pause = document.getElementById("loading");
filler = document.getElementById("fill");
timeDisp = document.getElementById("timeDisp");
timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
state=Number(sessionval.innerHTML)*60;

/*pause.addEventListener("click",function(){
	move()
},false);*/

move(Number(sessionval.innerHTML)*60);

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

function move(length)
{
	setTimeout("move()",1000);
	
	if(state==0)
	{	
		clearTimeout(setTimeout("move()",50));
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
		breakval.innerHTML=(Number(breakval.innerHTML)-1).toString();
	}	
}
function breakvalplus(){
	if(Number(breakval.innerHTML)<60)
	{
		breakval.innerHTML=(Number(breakval.innerHTML)+1).toString();
	}	
}
function sessionvalminus(){
	if(Number(sessionval.innerHTML)>1)
	{
		sessionval.innerHTML=(Number(sessionval.innerHTML)-1).toString();
	}
	timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
	
}
function sessionvalplus(){
	if(Number(sessionval.innerHTML)<60)
	{
		sessionval.innerHTML=(Number(sessionval.innerHTML)+1).toString();
	}
	timeDisp.innerHTML = timer(Number(sessionval.innerHTML)*60);
}

