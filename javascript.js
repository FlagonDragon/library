const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('You must use the "new" operator to call the constructor')
    };

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function() {
        if (this.read == 'yes') {
            return `${this.title} by ${this.author}, ${this.pages} pages, already read.`
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
        };
    };
};

wayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', '1258', 'no')

myLibrary.push(wayOfKings);

function addBookToLibrary(title, author, pages, read) {

    newBook = new Book(title, author, pages, read) 

    myLibrary.push(newBook);

}

addBookToLibrary('The Dragonbone Chair', 'Tad Williams', '672', 'no');

addBookToLibrary('The Winter King', 'Bernard Cornwell', '434', 'no');

function displayBooks() {

    for (i = 0; i < 10; i++) {

        console.log('potato'+[i]);

    };

};

displayBooks();

