const textarea  = document.querySelector('textarea');
const grabspan = document.querySelector('#ref');


function countCharacter(){
    var text = textarea.value;
    var arena = text.length;
    var danger = document.getElementById('fer');
    grabspan.innerText = `${arena}`;
    


    if(arena>200){
        document.getElementById("ref").style.color = "red";
       
        danger.innerHTML = "Limit Exceeded";
    }
}