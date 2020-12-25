
const hour = document.querySelector('.ho');
const minute = document.querySelector('.mi');
const second = document.querySelector('.sec');


function rotate() {

  const currentDay = new Date();


  const hourR = currentDay.getHours();
  const minuteR = currentDay.getMinutes();
  const secondR = currentDay.getSeconds();


  let secHand = secondR / 60;
  let minHand = (secHand+ minuteR) / 60;
  let hourHand = (minHand+ hourR) / 12;


  let secRotate = secHand * 360;
  let minRotate = minHand * 360;
  let hourRotate = hourHand  * 360;



  second.style.transform = `rotate(${secRotate}deg)`;
  minute.style.transform = `rotate(${minRotate}deg)`;
  hour.style.transform = `rotate(${hourRotate}deg)`;


}


setInterval(rotate, 1000);