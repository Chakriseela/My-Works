//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);



// var itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

// childnodes
// console.log(itemList.children);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow' ;

//nextsibling
//console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green';

//create element

//create a div



//var newDiv = document.createElement('div');

//add class
// newDiv.className= 'hello';

//add id
// newDiv.id = 'hello1';

//add attr
// newDiv.setAttribute('title','hello div');

//create text node
// var newDivText = document.createTextNode('hello WORLD');

//add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv, h1)

var button = document.getElementById('button').addEventListener('click', buttonClick);



// document.getElementById('header-title').textContent = 'changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
function buttonClick(e){


     //console.log('button Click');


    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);

}














    






 