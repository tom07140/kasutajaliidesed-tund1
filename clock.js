//clock.js
window.onload = function(){
  var clock = document.getElementById('clock');
  window.setInterval(function(){
    writeDate();

  },1000);

};

function writeDate(){
  var today = new Date();

  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());

  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function setZeroBefore(number){
  if(number<10){
    number = '0' + number;
  }
  return number;
}
