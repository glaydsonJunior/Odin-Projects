const myLibrary = [];
const referenceDisplay = document.querySelector(".books-container")

function Book(id, author, title, pages) {
    this.id = id
    this.author = author
    this.title = title
    this.pages = pages
    this.read = false
}

function addBookToLibrary() {
  let author = prompt("Author")
  while(author == '')author = prompt("Author")
  let title = prompt("Title")
  while(title == '')title = prompt("title")
  let pages = prompt("Pages")
  while(pages == '')pages = prompt("pages")
  const id = crypto.randomUUID()
  myLibrary.push(new Book(id, author, title, pages))
  referenceDisplay.appendChild(createBookDisplay(id, title, author, pages));
}

function removeBook(id){
  let i = 0
  myLibrary.forEach(bk => {
    if(bk.id == id){
      myLibrary.splice(i, 1)
    }
    i++
  });
}

function createBookDisplay(id, bookTitle, author, pages) {
  // Create the main div container
  const bookDisplay = document.createElement('div');
  bookDisplay.classList.add('book-display');
  
  // Create the remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'X'
  removeButton.classList.add('remove-book');
  
  // Create the book title
  const title = document.createElement('h2');
  title.textContent = bookTitle;
  
  // Create the author
  const authorElement = document.createElement('p');
  authorElement.textContent = author;
  
  // Create the number of pages
  const pagesElement = document.createElement('p');
  pagesElement.textContent = pages;
  
  // Append everything to the bookDisplay div
  bookDisplay.appendChild(removeButton);
  bookDisplay.appendChild(title);
  bookDisplay.appendChild(authorElement);
  bookDisplay.appendChild(pagesElement);

  removeButton.addEventListener("click", (obj) => {
    const btId = id
    removeBook(id)
    bookDisplay.remove()
  })


  // Return the created book display div
  return bookDisplay;
}





