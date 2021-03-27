let myLibrary = [
    {
        title: Hyperion,
        author: Dan Simmons,
        pages: 482
    }
];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

const library = document.querySelector('[data-library]')
const newBookButton = document.querySelector('[data-new-book-btn]')
const titleInput = document.querySelector('[data-title]')
const authorInput = document.querySelector('[data-author]')
const pagesInput = document.querySelector('[data-pages]')
const inputForm = document.querySelector('[data-input-form]')

function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div')
        book.classList.add('book')
    }
}

newBookButton.addEventListener('click', () => {
    inputForm.style.visibility = 'visible'
})