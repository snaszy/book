let myLibrary = [
    {
        title: 'Hyperion',
        author: 'Dan Simmons',
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
        const book = document.createElement('div')
        book.classList.add('book')
        library.appendChild(book)

        const bookTitle = document.createElement('h2')
        bookTitle.textContent = myLibrary[i].title
        book.appendChild(bookTitle)

        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = myLibrary[i].author
        book.appendChild(bookAuthor)
        
        const bookPages = document.createElement('p')
        bookPages.textContent = myLibrary[i].pages + ' pages'
        book.appendChild(bookPages)

        const bookButtons = document.createElement('div')
        bookButtons.classList.add('book-btns')
        book.appendChild(bookButtons)

        const readBook = document.createElement('button')
        readBook.classList.add('read')
        readBook.textContent = 'Read'
        bookButtons.appendChild(readBook)

        const deleteBook = document.createElement('button')
        deleteBook.classList.add('delete')
        deleteBook.textContent = 'Delete'
        bookButtons.appendChild(deleteBook)
    }
}
addBookToLibrary()

newBookButton.addEventListener('click', () => {
    inputForm.style.visibility = 'visible'
})