//calc.js
//saan kätte input väljad, siis kui leht on laetud

window.onload = function(){

  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  //lisan nuppudele kuulajad
  document.getElementById('to_inch').addEventListener('click',converToInch);
  document.getElementById('to_cm').addEventListener('click',converToCm);


};

function converToInch(){
  //arvutan ümber tollideks
  inch.value = cm.value/2.54;
}

function converToCm(){
  cm.value = inch.value*2.54;
}
