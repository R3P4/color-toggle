const click = function() {
    const white = document.querySelector(body);
    body.classList.toggle('.white-background');
    const red = document.querySelector(body);
    body.classList.toggle('.red-background');
    const orange = document.querySelector(body);
    body.classList.toggle('.orange-background');
    const purple = document.querySelector(body);
    body.classList.toggle('.purple-background');
    const green = document.querySelector(body);
    body.classList.toggle('.green-background');
    console.log();
};
const white = document.querySelector('.white-background');
radio.addEventListener('click', ()=>{body.style.background="white"});
const red = document.querySelector( '.red-background');
radio.addEventListener('click', ()=>{body.style.background="red"});
const orange = document.querySelector('.orange-background');
radio.addEventListener('click', ()=>{body.style.background="orange"});
const purple = document.querySelector('.purple-background');
radio.addEventListener('click', ()=>{body.style.background="purple"});
const green = document.querySelector('.green-background');
radio.addEventListener('click', ()=>{body.style.background="green"});

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