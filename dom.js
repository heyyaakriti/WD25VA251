function result(){
let inputValue=document.getElementById('inputData').value;

console.log(inputValue);

let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="red";

//change color of body element

document.getElementsByTagName('body')[0].style.backgroundColor="green";

//addEventListener method

let parabkg=document.getElementById('para');

function colorChange(){
    parabkg.style.backgroundColor="#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}
parabkg.addEventListener('mouseout',colorChange);
}