//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

//Instatiate an Object
const book1 = new Book('Book One', 'john doe', '2013');
const book2 = new Book('Book Two', 'john doe', '2016');

console.log(book2);
