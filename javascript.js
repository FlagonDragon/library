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

wayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', '1258', 'No')

myLibrary.push(wayOfKings);

function addBookToLibrary(title, author, pages, read) {

    newBook = new Book(title, author, pages, read) 

    myLibrary.push(newBook);

}

addBookToLibrary('The Dragonbone Chair', 'Tad Williams', '672', 'No');

addBookToLibrary('The Winter King', 'Bernard Cornwell', '434', 'No');

bookTable = document.querySelector('.bookTable'); 

function displayBooks(array) {

    for (i = 0; i < array.length; i++) {

        row = document.createElement('tr');
        bookTable.appendChild(row)
        
        bookTitle = document.createElement('td');
        bookTitle.classList.add(`title${i}`);
        bookTitle.textContent = `${array[i].title}`;
        row.appendChild(bookTitle);
        
        bookAuthor = document.createElement('td');
        bookAuthor.classList.add(`author${[i]}`);
        bookAuthor.textContent = `${array[i].author}`;
        row.appendChild(bookAuthor);

        bookPages = document.createElement('td');
        bookPages.classList.add(`pages${[i]}`);
        bookPages.textContent = `${array[i].pages}`;
        row.appendChild(bookPages);

        bookRead = document.createElement('td');
        bookRead.classList.add(`read${[i]}`);
        bookRead.textContent = `${array[i].read}`;
        row.appendChild(bookRead);

    };

};

displayBooks(myLibrary);

//test below

// book1 = document.querySelector('.book1');

// book1.textContent = wayOfKings.title;

// test above

