const digi = document.querySelector('.digit');
const incre = document.querySelector('.increment');
const decre = document.querySelector('.decrement');


let count = 0 ;


function addNumber(){
    count++;
    if(count>0){
        digi.innerHTML = count;
        digi.style.color = 'white';
    }
    else if(count === 0){
        digi.innerHTML = count;
        digi.style.color = 'black';
    }
    else if(count <0){
        digi.innerHTML = count;
        digi.style.color = 'red';
    }
}



function subNumber(){
    count--;
    if(count>0){
        digi.innerHTML = count;
        digi.style.color = 'white';
    }
    else if(count === 0){
        digi.innerHTML = count;
        digi.style.color = 'black';
    }
    else if(count <0){
        digi.innerHTML = count;
        digi.style.color = 'red';
    }
}