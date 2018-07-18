//variables

let book1 = {
    name: "Coders-at-Work",
    displayName: "Coders at Work",
    price: 20,
    Category: "Book",
    listOfSellingPoints: ["reason 1", "reason 2", "reason 3", "reason 4"],
    pictureUrl: "images/Coders-at-Work-200x300.jpg",
    id: "book1"
}

let book2 = {
    name: "Cracking-the-Coding-Interview",
    displayName: "Cracking the Coding Interview",
    price: 15,
    Category: "Book",
    listOfSellingPoints: ["reason 1", "reason 2", "reason 3", "reason 4"],
    pictureUrl: "images/Cracking-the-Coding-Interview-200x300.jpg",
    id: "book2"
}

let album1 = {
    name: "Hyprid-theory",
    displayName: "Hyprid theory",
    price: 5,
    Category: "album",
    listOfSellingPoints: ["reason 1", "reason 2", "reason 3", "reason 4"],
    pictureUrl: "images/linkinpark-hyprid-theory.jpg",
    id: "album1"
}

let album2 = {
    name: "Meteora",
    displayName: "Meteora",
    price: 7,
    Category: "album",
    listOfSellingPoints: ["reason 1", "reason 2", "reason 3", "reason 4"],
    pictureUrl: "images/linkinpark-meteora.jpg",
    id: "album2"
}

//functions
function createItem(item) {
    if (item.Category === "book") {

        return `<div id=${item.name} class="${item.Category} product bounceInUp animated">
                    <div id=${item.id}>
                        <div class="picture">
                            <img src=${item.pictureUrl} alt="${item.Category} cover">
                        </div>
                        <hr class="line">
                        <div class="name">Name : ${item.displayName}</div>
                        <div class="category">Category : ${item.Category} </div>
                        <div class="price">Price : ${item.price}$ </div>
                        <div class="selling-points">List of selling points : ${item.listOfSellingPoints[0]} ,${item.listOfSellingPoints[1]}, ${item.listOfSellingPoints[2]} ,${item.listOfSellingPoints[3]}</div>
                    </div>
                </div>`;
    }
    else {
        return `<div id=${item.name} class="${item.Category} product bounceInUp animated">
                    <div id=${item.id}>
                        <div class="picture">
                            <img src=${item.pictureUrl} alt="${item.Category} cover">
                        </div>
                        <hr class="line">
                        <div class="info">
                            <div class="name">Name : ${item.displayName}</div>
                            <div class="category">Category : ${item.Category} </div>
                            <div class="price">Price : ${item.price}$ </div>
                            <div class="selling-points">List of selling points : ${item.listOfSellingPoints[0]} ,${item.listOfSellingPoints[1]}, ${item.listOfSellingPoints[2]} ,${item.listOfSellingPoints[3]}</div>
                        </div>
                    </div>
                </div>`
    }
}

function addBooks() {
    let book1Element = createItem(book1);
    let book2Element = createItem(book2);
    $('#content-area-js').append('<div class="books"></div>')
    $('.books').append(book1Element).append(book2Element);
}

function addAlbums() {
    let album1Element = createItem(album1);
    let album2Element = createItem(album2);
    $('#content-area-js').append('<div class="albums"></div>')
    $('.albums').append(album1Element).append(album2Element);
}


//events
$('#books').click(function () {
    $('#content-area-js').empty();
    addBooks();
})

$('#albums').click(function () {
    $('#content-area-js').empty();
    addAlbums();
})

$('#showAll').click(function () {
    $('#content-area-js').empty();
    addBooks();
    addAlbums();
})

//the default is to show the books
addBooks();


