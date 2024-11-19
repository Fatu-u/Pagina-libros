import data from "./data/books.js";

window.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener('load', function(event){
        const featuredBooks = document.getElementById('featured-books');
        const featuredBooksList = data.filter(book => book.sold_quantity >= 1000);
        featuredBooks.innerHTML = getHtmlForMultipleBooks(featuredBooksList);
    });
});

function getHtmlForMultipleBooks(listBooks){
    var booksListHtml = "";
    listBooks.forEach(book => {

        var bookOptionHtml = `
        <div class="book-option" key=${book.id}>
            <img src="${book.image}" alt="${book.name}">
            <p class="book-title">${book.name}</p>
            <p class="book-author">${book.author}</p>
            <p class="book-price">${book.price} <i class="currency-symbol">$</i> </p>
            <button onclick="handleViewProduct(${book.id})">Ver producto</button>
        </div>
        `

        booksListHtml = booksListHtml + bookOptionHtml
    });

    return booksListHtml;
}

