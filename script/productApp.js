import data from "./data/books.js"

window.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener('load', function(event){
        //load the page and basic elements
        const bookDescriptor = document.getElementById('book-presentator');
        const bookPrice = document.getElementById('book-price-per-unit');
        const buyProductForm = document.getElementById('payment-form');
        var queryParams = window.location.search.split('?');
        var bookId= queryParams[1].split('=')[1];
        var book = data.find(b => b.id == bookId);
        bookDescriptor.innerHTML = getBookDescriptorHtml(book);
        bookPrice.textContent = book.price  + "$";
        buyProductForm.addEventListener('submit',function(event) {
            event.preventDefault()
        });

    });
});





function getBookDescriptorHtml(book){
    const imageUrl = book.imagePath? `${baseRawUrl}/${book.imagePath}` : "";
    
    var bookDescriptor = `
    <h2 class="sub-title">${book.author} - ${book.name}</h2>
    <div class="book-descriptor">
        <img src="${book.image}">
        <h4 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 2em;">Description</h2>
        <p>
           ${book.description}
        </p>
    </div>
    `;

    return bookDescriptor;
}