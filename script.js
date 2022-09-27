
 const toggle = function() {
   
    const radio = document.querySelectorAll(radio);
    body.classList.toggle('.white-background' ,'red-background' ,'orange-background' , 'purple-background' , 'green-background' );
    const body = document.querySelector(toggle);
    const white = document.querySelector(white);
    body.classList.toggle('.white-background');
    const red = document.querySelector(red);
    body.classList.toggle('.red-background');
    const orange = document.querySelector(orange);
    body.classList.toggle('.orange-background');
    const purple = document.querySelector(purple);
    body.classList.toggle('.purple-background');
    const green = document.querySelector(green);
    body.classList.toggle('.green-background');
   
    console.log();
}; 

const white = document.querySelector('.white-background');
radio.addEventListener('click', toggle);
const red = document.querySelector( '.red-background');
radio.addEventListener('click', toggle);
const orange = document.querySelector('.orange-background');
radio.addEventListener('click', toggle);
const purple = document.querySelector('.purple-background');
radio.addEventListener('click', toggle);
const green = document.querySelector('.green-background');
radio.addEventListener('click', toggle);

/*
const click = function(){
    const button = document.querySelector('#mybutton');
 click = window.alert( "button clicked" );
};
const button = document.querySelector('#mybutton');
button.addEventListener('click', click);

const clickfun = function(){
    console.log();
    const body = document.querySelector('.green-background');
    body.classList.toggle('red-background');
    
};
const body = document.querySelector('.green-background');
button1.addEventListener('click', clickfun);
 */