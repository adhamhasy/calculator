const screen = document.getElementById("screen");
function dissplay(input){
screeen.value += input;

}
function clearDisplay(){
screeen.value= "";
}
function calculate(){
try{

screeen.value= eval(screeen.value);
}
catch(error){
    screeen.value= "errer"
}
}