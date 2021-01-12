const countNeeded = new Date('jan 18 , 2021,  00:00:00');


function start(){
    var sub ;
    var current = new Date();
    
    sub = countNeeded - current;


    let second = 1000;
    let minute = second*60;
    let hour  = minute*60;
    let day = hour*24;


    var day1 = Math.floor(sub/day);
    var hour1 = Math.floor((sub%(day))/ hour);
    var minute1 = Math.floor((sub%(hour))/ minute);
    var second1 = Math.floor((sub%(minute))/ second);


    document.getElementById('day').innerHTML = day1;
    document.getElementById('hour').innerHTML = hour1;
    document.getElementById('minute').innerHTML = minute1;
    document.getElementById('second').innerHTML = second1;
   
}


setInterval(start, 1000);