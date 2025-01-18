//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}; 

//Magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}

//Inherite Prototype
Magazine.prototype = Object.create(Book.prototype);

//Intantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018','Jan');

//use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);