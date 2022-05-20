let books = [];
const addBook = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let book = {
        title: document.getElementById('title').value,
        writer: document.getElementById('writer').value,
        year: document.getElementById('year').value,
    }
    
    books.push(book);
    document.forms[0].reset();

    // console.warn('addBook', {books});
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = JSON.stringify(books);

    //saving to localStorage
    localStorage.setItem('userBookInfo', JSON.stringify(books));
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submit').addEventListener('click', addBook);
});