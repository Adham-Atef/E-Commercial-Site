

const wishlistProductViewContainer = document.querySelector("#wishlistProductViewContainer")



const drawWishlistProduct = (productObj) => {
    let isWish = -1;
    if (currentUser) {
        isWish = currentUser.wishlist.findIndex(id => id === productObj.id);
    }

    const colDiv = document.createElement("div");
    colDiv.className = "col-lg-4 col-md-6 col-12 px-4 mb-5 text-center";

    colDiv.innerHTML = `
        <div class="d-flex flex-column product-content border bg-white">
            <div style="cursor:pointer;" onclick="emitProductPage(${productObj.id})" class="product-image w-100">
                <img src="${productObj.imageUrl}" alt="${productObj.title}">
            </div>
            <div class="d-flex flex-column product-info w-100">
                <h4 class="px-3">${productObj.title}</h4>
                <p>Price: <span>${productObj.price} $</span></p>
                <p>Category: <span style="text-transform: capitalize;">${productObj.category}</span></p>
                <div class="mt-auto mb-4 d-flex justify-content-center align-items-center product-btns" style="gap: 10px;">
                    ${isWish === -1
            ? `<i class="fa-regular fa-heart wishlist text-danger" style="font-size: 2rem; cursor:pointer;"></i>`
            : `<i class="fa-solid fa-heart wishlist text-danger" style="font-size: 2rem;cursor:pointer;"></i>`} 
                    <button class="addProductToCartBtn btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    `;



    const addProductToCartBtn = colDiv.querySelector(".addProductToCartBtn");
    addProductToCartBtn.addEventListener("click", () => {
        addToCart(productObj);
    });

    const wishlistIcon = colDiv.querySelector(".wishlist");
    wishlistIcon.addEventListener("click", () => {
        addToWishlist(productObj);
        updateWishlistProducts()
    });

    if (wishlistProductViewContainer) {
        wishlistProductViewContainer.appendChild(colDiv);
    }
}


function updateWishlistProducts() {
    wishlistProductViewContainer.innerHTML = ""
    products.forEach(element => {

        if (currentUser.wishlist.findIndex(id => {
            return id == element.id
        }) != -1 && element.isActive) {
            drawWishlistProduct(element)
        }


    });
}



updateWishlistProducts();