breakval = document.getElementById('breakval');
sessionval = document.getElementById('sessionval');
pause = document.getElementById("loading");
filler = document.getElementById("fill");
state = 0;

pause.addEventListener("click",function(){

},false);

function move()
{	
	setTimeout("move()",50);
	
	if(state>100)
	{
		clearTimeout(setTimeout("move()",50));
	}
	else
	{
		state+=0.5;
		document.getElementById("fill").style.left = "-"+(100-state)+"%";
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
	if(Number(sessionval.innerHTML)>5)
	{
		sessionval.innerHTML=(Number(sessionval.innerHTML)-1).toString();
	}
	
}
function sessionvalplus(){
	if(Number(sessionval.innerHTML)<60)
	{
		sessionval.innerHTML=(Number(sessionval.innerHTML)+1).toString();
	}	
}

