// ---------------- Add to Cart ----------------
function wishlistProduct() {
    let wishlist = document.getElementById("cartProducts");

    let cartItems = [
        {
            id: 1,
            brand: "Nike",
            availability: "in stock",
            price: 1200,
            img: "../assets/imgs/fg.jpg"
        },
        {
            id: 2,
            brand: "New Balance",
            availability: "Limited Edition",
            price: 1200,
            img: "../assets/imgs/aaa.jpg"
        },
        {
            id: 3,
            brand: "Nike",
            availability: "in stock",
            price: 1200,
            img: "../assets/imgs/ddf.jpg"
        },
        {
            id: 4,
            brand: "Nike",
            availability: "Out of stock",
            price: 1200,
            img: "../assets/imgs/iii.jpg"
        }
    ];

    let wishlistItem = cartItems.map((cartItem) => {
        return `
            <div class="cart-wrap">
                
                <div class="cart-products">
                    <img src="${cartItem.img}" alt="">
                </div>

                <div class="cart-details">
                    <div class="details">
                        <p>${cartItem.brand}</p>
                        <span>${cartItem.availability}</span>
                    </div>

                    <div class="price">
                        <p>$${cartItem.price}</p>
                    </div>
                </div>
                <div class="add-to-cart-btns">
                    <button>ADD TO CART</button>
                </div>
                <ion-icon class="cancel-icon" name="close-outline"></ion-icon>

            </div>
        `;
    });

    wishlist.innerHTML = wishlistItem.join("");
}

document.addEventListener("DOMContentLoaded", () => {
    wishlistProduct();

    const wishlist = document.getElementById("cartProducts");

    wishlist.addEventListener("click", (e) => {
        const icon = e.target.closest(".cancel-icon");

        if (icon) {
            icon.closest(".cart-wrap").remove();
        }

    });

});