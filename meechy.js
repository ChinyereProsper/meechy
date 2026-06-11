let productContainer = document.getElementById("product");
let productContent = document.getElementById("product-list");

function displayProducts() {

    let products = [
        {
            id: 1,
            img: "../assets/imgs/yyy.jpg",
            title: "Heavy cotton",
            price: "$200",
            wear: "Essentials",
        },
        {
            id: 2,
            img: "../assets/imgs/eee.jpg",
            title: "Heavy cotton",
            price: "$150",
            wear: "Essentials",
        },
        {
            id: 3,
            img: "../assets/imgs/ggg.jpg",
            title: "Heavy cotton",
            price: "$150",
            wear: "Footware",
        },
        {
            id: 4,
            img: "../assets/imgs/ccc.jpg",
            title: "Heavy cotton",
            price: "$230",
            wear: "Modulus Pack",
        },
        {
            id: 5,
            img: "../assets/imgs/ddd.jpg",
            title: "Heavy cotton",
            price: "$200",
            wear: "Essentials",
        },
        {
            id: 6,
            img: "../assets/imgs/eee.jpg",
            title: "Heavy cotton",
            price: "$240",
            wear: "Essentials",
        },
        {
            id: 7,
            img: "../assets/imgs/fff.jpg",
            title: "Heavy cotton",
            price: "$200",
            wear: "Essentials",
        },
        {
            id: 8,
            img: "../assets/imgs/ggg.jpg",
            title: "Heavy cotton",
            price: "$100",
            wear: "Essentials",
        },
        {
            id: 9,
            img: "../assets/imgs/hhh.jpg",
            title: "Heavy cotton",
            price: "$150",
            wear: "Essentials",
        },
        {
            id: 10,
            img: "../assets/imgs/iii.jpg",
            title: "Heavy cotton",
            price: "$200",
            wear: "Essentials",
        }
    ];

    let mappedProducts = products.slice(0, 4).map((product) => {

        return `
            <div class="product-card">

                <div class="listing-product">
                    <img src="${product.img}" alt="${product.title}" class="product-img">
                </div>
                <div class="price-content">
                    <p>${product.title}</>
                    <p>${product.price}</p>
                </div>
                <span>${product.wear}</span>

            </div>
        `;
    });

    productContainer.innerHTML = mappedProducts.join("");
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    // productContent();
})

// ============= Humbuger Menu ===============
let hambuger = document.getElementById("menu");
let menuContent = document.getElementById("menuItems");

hambuger.addEventListener("click", () => {
    menuContent.classList.toggle("active")
});


// ================ Shop ===============
let overview = document.getElementById("overview");
let view = document.getElementById("view");

let outfits = [
    {
        id: 1,
        img: "../assets/imgs/ddf.webp",
    },
    {
        id: 2,
        img: "../assets/imgs/df.webp",
    },
    {
        id: 2,
        img: "../assets/imgs/ddfg.webp",
    }
];


function displayOutfits() {
    outfits.forEach(outfit => {
        view.innerHTML += `<img src= "${outfit.img}" onclick="changeImage('${outfit.img}')">`;
    })
}
function changeImage(img) {
    var previewImg = document.getElementById("previewImg");
    previewImg.src = img;
}

displayOutfits();

// --------------- Add to Cart --------------
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", () => {
    document.getElementById("cartProducts").remove();
});