const body = document.querySelector("body");

const whiteRadioButton = document.querySelector('#white');
whiteRadioButton.addEventListener('click', ()=>{body.style.background="white"});

const redRadioButton = document.querySelector('#red');
redRadioButton.addEventListener('click', ()=>{body.style.background="red"});

const orangeRadioButton = document.querySelector('#orange');
orangeRadioButton.addEventListener('click', ()=>{body.style.background="orange"});

const purpleRadioButton = document.querySelector('#purple');
purpleRadioButton.addEventListener('click', ()=>{body.style.background="purple"});

const greenRadioButton = document.querySelector('#green');
greenRadioButton.addEventListener('click', ()=>{body.style.background="green"});

console.log();
 

const radioButtons = document.querySelectorAll('input[name="bgcolor"]');
const ul = document.querySelector("ul");
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
            ul.addEventListener('click', ()=>{ul.style.opacity= 0 } , ()=> {ul.style.transitionDuration= "700ms" });
        }        
        
        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                document.querySelector('#id').innerText = `You selected ${this.value}`;
                
            }
        };
   

