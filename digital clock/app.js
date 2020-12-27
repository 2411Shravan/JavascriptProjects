

setInterval(displayTime, 1000)
function displayTime(){
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    var toggle = "";

   if(hour>12){
       hour = hour-12;
       toggle = "PM";
   }

   if(hour < 12){
       toggle = "AM";
   }

   let targetTime = hour + ":" + minute + ":" + second + " " + toggle;
   document.getElementById("clock").innerHTML = targetTime; 

}

displayTime();