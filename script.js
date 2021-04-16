const library = document.querySelector('[data-library]')
const newBookButton = document.querySelector('[data-new-book-btn]')
const inputForm = document.querySelector('[data-input-form]')
const dimBackground = document.querySelector('[data-dim]')
const submitButton = document.querySelector('[data-submit]')
const cancelButton = document.querySelector('[data-cancel]')
const inputTitle = document.querySelector('[data-title]')
const inputAuthor = document.querySelector('[data-author]')
const inputPages = document.querySelector('[data-pages]')
const dataErrorTextElement = document.querySelector('[data-error]')
const readButton = document.querySelector('[data-read]')
const deleteButton = document.querySelector('[data-delete]')

let myLibrary = [
    {
        title: 'Hyperion',
        author: 'Dan Simmons',
        pages: 480,
        read: true,
        id: 120384,
    }
];

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = id
    }
}

function addBookToLibrary(title, author, pages, read, id) {
    title = inputTitle.value
    author = inputAuthor.value
    pages = inputPages.value
    read = readButton.checked
    id = Date.now()
    const newBook = new Book(title, author, pages, read, id)
    myLibrary.push(newBook)
    displayBook()
}

function displayBook() {
    library.querySelectorAll('.new-book').forEach(book => book.remove())
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div')
        book.classList.add('new-book')
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
        readBook.setAttribute('data-read', myLibrary[i].id)
        if (myLibrary[i].read === true) {
            readBook.textContent = 'Read'
        } else {
            readBook.textContent = 'Unread'
        }
        bookButtons.appendChild(readBook)

        const deleteBook = document.createElement('button')
        deleteBook.setAttribute('data-delete', '')
        deleteBook.classList.add('delete')
        deleteBook.textContent = 'Delete'
        bookButtons.appendChild(deleteBook)

        readBook.addEventListener('click', () => {
            if (myLibrary[i].read === true) {
                myLibrary[i].read = false
            } else {
                myLibrary[i].read = true
            }
            displayBook()
        })

        deleteBook.addEventListener('click', () => {
            myLibrary.splice(i,1)
            displayBook()
        })
    }
}
displayBook()



function hideForm() {
    inputForm.style.visibility = 'hidden'
    dimBackground.style.visibility = 'hidden'
}

function showForm() {
    inputForm.style.visibility = 'visible'
    dimBackground.style.visibility = 'visible'
}

function verifyInput() {
    if (inputTitle.value === '') {
        dataErrorTextElement.textContent = 'Please fill in the information'
    } else {
        hideForm()
        addBookToLibrary()
    }
}

function resetForm() {
    title = ''
    author = ''
    pages = ''
    inputTitle.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
}

newBookButton.addEventListener('click', () => {
    showForm()
})

submitButton.addEventListener('click', () => {
    verifyInput()
    resetForm()
})
cancelButton.addEventListener('click', () => {
    hideForm()
    resetForm()
})

