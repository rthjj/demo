var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');

var tques=questions.length;//pour passer a l'autre quetion
var score=0;
var quesindex=0;
function quit()
{         
	      quiz.style.display='none';//show or hide
          result.style.display='';
          var f=score/tques;//score en %
          result.textContent="SCORE ="+f*100 +"%"; //resultat en %
          q.style.display="none";
}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	 return;// afficher les quetion et le opts
};
give_ques(0);//pour affichier la 1ere
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("Choisissez une réponse");return;}//alerte d'une opt

	if(selected_ans.value==questions[quesindex][5])
		{score=score+1;}//pour calculer
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)//la fin
	     	nextbutton.textContent="Finish";
	     var f=score/tques;
	     if(quesindex==tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';
          result.style.display='';
		  document.getElementById("replaybtn").style.display = '';// pour le replay
          result.textContent="SCORED:"+(f*100).toFixed(2)+"%";// le score en %
            return;
	     }
        give_ques(quesindex);

}

function replay() { //pour le boutton replay
	document.getElementById("replaybtn").style.display = 'none';
	quesindex = 0
	give_ques(quesindex);
	q.style.display='none';
    quiz.style.display='';
    result.style.display='none';
}