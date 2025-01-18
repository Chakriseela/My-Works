/* 

//string, number, boolean, null, undefined

const Name = 'chakri';
const age = 18;

//concatenation
console.log('My name is ' +Name+ ' and i am '+age);
//Template string
const hello = `My name is ${Name} and i am ${age}`;

console.log(hello)

//Arrays - Variables that hold multiple value

const fruit = ['apple' , 'oranges' , 'pears'];

fruit[3]='grapes';

fruit.push('mangos');

fruit.unshift('strawberries');

fruit.pop();

console.log(Array.isArray('hello'));

console.log(fruit.indexOf('oranges'));

console.log(fruit);

const person = {
    firstname: 'chakravarthi',
    lastname: 'seela',
    age: 18,
    hobbies: ['coding','chess','chess'],
    adsress:{
        street:'miriyala colony 1st street',
        city :'vizag',
        state: 'AP'
    }
}

console.log(person);

const{firstname,lastname,email,adsress:{city}}=person;

console.log(firstname,lastname)

person.email = 'chakriseela111@gmail.com'

const todos=[
    
    {
        id:1,
        text: 'Take out trash',
        iscompleted: true
    },

    {
        id:2,
        text: 'Meeting with boss',
        iscompleted: true
    },
    
    {
        id:3,
        text: 'Dentise appt',
        iscompleted: false
    }
];

const todoJSON = JSON.stringify(todos);

console.log(todos)

console.log(todoJSON)

/*

//for
for(let i=0;i<=10; i++){
    console.log(`For loop Number: ${i}`);
}

//while
let i = 0;
while(i<10){
    console.log(`While Loop number: ${i}`);
    i++;
}

*

//for
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

//foreach , map, filter
const todocompleted = todos.filter(function(todo){
    return todo.iscompleted ===true;
}).map(function(todo){
    return todo.iscompleted;
})

console.log(todocompleted);


const x = 9;

const color = 'chakri';

switch(color){
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


/* -----------------------------FUNCTION------------------------------*/
/*
function addNums(num1,num2){
   return num1+num2;
} 

console.log(addNums(3,5))


function addNums(num1) {
    return num1 + 5;
}

console.log(addNums(5))

*/
/*...........................................*//* */
/*
///////////////constructor function/////////////

function person (firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob=new Date(dob);
       
}

person.prototype.getBirthYear=function(){
    return this.dob.getfullYear();
}

person.prototype.getfullname=function(){
    return `${this.firstname}${this.lastname}`;
}

*/

/////////class
/*

class person {
constructor(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob=new Date(dob);
}

getBirthYear(){
    return this.dob.getFullYear();
}

getfullname(){
    return `${this.firstname}${this.lastname}`;
}



}


////////////Instantiate object///////////////
const person1 = new person('chakravarthi','seela', '04-29-2003');
const person2 = new person('sunitha','seela','03-10-1980');

console.log(person2.getBirthYear());
console.log(person2.getfullname());
console.log(person2)

*/


//single element 
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));


//multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

/*
const ul = document.querySelector('.items');

//ul.remove();
ul.lastElementChild.textContent='Hello';
ul.firstElementChild.innerHTML='<h1>HELLO</h1>';
ul.children[1].innerText='Brand';

const btn = document.querySelector('.btn');
btn.style.background ='red';

*/
/*

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').getElementsByClassName.background='#acc';
  
  document.querySelector('body').classList.add('bg-dark');
});

*/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userlist = document.querySelector('#users');


myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
}


