var num1;
var num2;

var name1 = localStorage.getItem("player 1");
var name2 = localStorage.getItem("player 2");

var score1 = 0;
var score2 = 0;


document.getElementById("playername1").innerHTML=name1 + ": ";
document.getElementById("playername2").innerHTML=name2 + ": ";

document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;

document.getElementById("playerquestionturn").innerHTML="Question Turn - " + name1;
document.getElementById("playeranswerturn").innerHTML="Answer Turn - " + name2;

function sendword() {

    getn1 = document.getElementById("wordinput1").value;
    getn2 = document.getElementById("wordinput2").value;
    geteq = document.getElementById("equationdropdown").value;

    question = "<h4 id='qdisplay'> Q. " + getn1 + " " + geteq + " " + getn2 + "</h4>";
    inputbox  = "<br> <input type='number' placeholder='Answer' id='answertext'>";
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + inputbox + button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("wordinput").value="";

}