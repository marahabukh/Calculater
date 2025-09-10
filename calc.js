const display= document.getElementById("display");


function appendTodisplay(input){
  display.value+=input ;
}

function cleardisplay(){
  display.value="";
}

function Calulate()
{
  display.value = eval(display.value)
}