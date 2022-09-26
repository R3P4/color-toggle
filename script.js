const klick = function() {
    const white = document.querySelector('.white-background');
    body.classList.toggle('.white-background');
    const red = document.querySelector('.red-background');
    body.classList.toggle('.red-background');
    const orange = document.querySelector('.orange-background');
    body.classList.toggle('.orange-background');
    const purple = document.querySelector('.purple-background');
    body.classList.toggle('.purple-background');
    const green = document.querySelector('.green-background');
    body.classList.toggle('.green-background');
    console.log();
};
const body = document.querySelectorAll('.white-background' , '.red-background' , '.orange-background' , '.purple-background' , '.green-background');
radio.addEventListener('click', klick);



/*
const click = function(){
    const button = document.querySelector('#mybutton');
 click = window.alert( "button clicked" );
};
const button = document.querySelector('#mybutton');
button.addEventListener('click', click);
 
const clickfun = function(){
    console.log();
    const body = document.querySelector('.blue-background');
    body.classList.toggle('red-background');
    
};
const body = document.querySelector('.blue-background');
button1.addEventListener('click', clickfun);
*/