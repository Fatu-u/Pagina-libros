import data from "./data/books.js";

window.addEventListener('DOMContentLoaded', function(event){
    window.addEventListener('load', function(event) {
        const categoryNavigator = document.getElementById('category-navigator');
        const booksGenreContainer = document.getElementById('book-genre-container');
        var generesList = getGeneres(data);
        categoryNavigator.innerHTML = getCategoryNavigatorHtml(generesList);
        booksGenreContainer.innerHTML = getHtmlForMultipleGenres(generesList, data);
        /*
        //Get list of books and generes
        fetchGetAllBooks()
        .then((allBooksList) => {
            console.log(allBooksList);
            var generesList = getGeneres(allBooksList);
            categoryNavigator.innerHTML = getCategoryNavigatorHtml(generesList);
            booksGenreContainer.innerHTML = getHtmlForMultipleGenres(generesList, allBooksList);
        });
        //Get editorial options to post a book
        fetchGetEditorials()
        .then((editroialsList) => {
            editorialsCombobox.innerHTML = getHtmlOptionsForEditorials(editroialsList);
        });
        //For creating a new book
        createBookForm.addEventListener('submit',fetchPostFormBook);
        */   
    });
});


function getGeneres(bookList){
    var generes = new Set();
    bookList.forEach(book => {
        generes.add(book.genre);
    });

    return Array.from(generes);
}

function getCategoryNavigatorHtml(categoryList){
    var allCategoriesHtml = "";
    categoryList.forEach(category => {
        var categoryHtml = `
            <a href="#${category.replace(' ','-').toLowerCase()}">${category}</a>
        `
        allCategoriesHtml = allCategoriesHtml + categoryHtml;
    });
    return allCategoriesHtml;
}


function getHtmlForMultipleGenres(listGeneres, bookList) {
    var generesListWithBooksHtml = "";
    listGeneres.forEach(genre => {
        var genereWithBooksHtml = `
        <h2 class="sub-title" id="${genre.replace(' ','-').toLowerCase()}">${genre}</h2>
        <div class="books-container">
            ${getHtmlForMultipleBooks(bookList.filter(book => book.genre == genre))}
        </div>
        `
        generesListWithBooksHtml = generesListWithBooksHtml + genereWithBooksHtml;
    });
    return generesListWithBooksHtml;
}


function getHtmlForMultipleBooks(listBooks){
    var booksListHtml = "";
    listBooks.forEach(book => {
        const imageUrl = book.imagePath? `${baseRawUrl}/${book.imagePath}` : "";

        var bookOptionHtml = `
        <div class="book-option">
            <img src="${book.image}">
            <p class="book-title">${book.name}</p>
            <p class="book-author">${book.author}</p>
            <p class="book-price">${book.price} <i class="currency-symbol">$</i> </p>
            <button onclick="document.location='product.html?bookId=${book.id}'">Ver producto</button>
        </div>
        `

        booksListHtml = booksListHtml + bookOptionHtml
    });

    return booksListHtml;
}

function getHtmlOptionsForEditorials(editorialsList){
    var editorialsOptionsHtml = "";
    editorialsList.forEach(editorial => {
       
        var editorialOption = `
            <option value="${editorial.id}">${editorial.name}</option>
        `

        editorialsOptionsHtml = editorialsOptionsHtml + editorialOption;
    });

    return editorialsOptionsHtml;
}