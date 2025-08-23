const myLibrary = [];

function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error('You must use the "new" operator to call the constructor')
    };

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
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

    bookRows = document.querySelectorAll('.bookRow');
    
    for (let book of bookRows) {
    book.remove();
    }

    for (i = 0; i < array.length; i++) {

        row = document.createElement('tr');
        row.classList.add(`bookRow`);
        bookTable.appendChild(row);
        
        bookTitle = document.createElement('td');
        bookTitle.classList.add(`title${i}`);
        bookTitle.textContent = `${array[i].title}`;
        row.appendChild(bookTitle);
        
        bookAuthor = document.createElement('td');
        bookAuthor.classList.add(`author${i}`);
        bookAuthor.textContent = `${array[i].author}`;
        row.appendChild(bookAuthor);

        bookPages = document.createElement('td');
        bookPages.classList.add(`pages${i}`);
        bookPages.textContent = `${array[i].pages}`;
        row.appendChild(bookPages);

        bookRead = document.createElement('td');
        bookRead.classList.add(`read${i}`);
        bookRead.textContent = `${array[i].read}`;
        row.appendChild(bookRead);

        removeBtn = document.createElement('button');
        removeBtn.classList.add(`remove${i}`);
        removeBtn.textContent = `Remove`;
        row.appendChild(removeBtn);

        let num = i

        console.log(num);
        
        removeBtn.addEventListener('click', () => {

            console.log(num);

            
            myLibrary.splice(num,1);

            displayBooks(myLibrary);

        });

    };

};

displayBooks(myLibrary);

const showButton = document.getElementById("showDialog");
const myDialog = document.getElementById("myDialog");
const titleInput = myDialog.querySelector("#title");
const authorInput = myDialog.querySelector("#author");
const pagesInput = myDialog.querySelector("#pages");
const readInput = myDialog.querySelector("#read");
const confirmBtn = myDialog.querySelector("#confirmBtn");

showButton.addEventListener('click', () => {
    myDialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {

    event.preventDefault();

    myDialog.close();

    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

    displayBooks(myLibrary);

});

// removeBtn = document.querySelector('#removeBtn');

// removeBtn.addEventListener('click', () => {

//     rmvBook = prompt('Which book brother')

//     myLibrary.splice(rmvBook,1);

//     displayBooks(myLibrary);

// })
