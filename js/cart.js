const cartContainer = document.querySelector("#cart-container")
const allPrice = document.querySelector("#allPrice")
let cartToBeSend = [];

const sendOrder = (totalPrice, totalQuantity,) => {
    orderToBePlace = {
        id: localStorage.getItem("lastOrderID"),
        order: cartToBeSend,
        totalPrice: totalPrice + Number(localStorage.getItem("shippingFees")),
        totalQuantity: totalQuantity,
        createdAt: new Date().toUTCString(),
        orderStatus: "pending",
    };
    localStorage.setItem("orderToBePlace", JSON.stringify(orderToBePlace))
    // currentUser.cart = []
    // updateUsers()
    // console.log(currentUser.orders)
    window.location.href = "shipping.html";
}

const updateCart = (cart = true, cont = cartContainer) => {

    const ourCart = [...currentUser.cart];
    if (cart) {
        allPrice.textContent = 0;
    }
    if (cont) {
        cont.innerHTML = "";
    }
    ourCart.forEach(
        (itemRef, itemRefIndex) => {
            let item = products.find(
                product => {
                    return itemRef.id === product.id
                }
            );
            if (item && item.isActive) {
                if (cart) {
                    allPrice.textContent = getTotalCartPrice(item).toFixed(2)
                    cont.innerHTML += `
                 <div class="row align-items-center">
                            <div class="col-3" style="position:relative">
                                <img  class="img-fluid" src="${item.imageUrl}" alt="${item.title}">
                                <span class="d-flex justify-content-center align-items-center text-white bg-primary rounded-circle" style="font-weight:bold; position:absolute; top:0; left:75%; width:27.5px; height:27.5px;">
                                    ${itemRef.quantity}
                                </span>

                            </div>
                            <div class="col-5">
                                <p style="overflow: hidden;text-overflow: ellipsis;">${item.title}</p>
                            </div>
                            <div class="col-4 text-center">
                                <p>${(item.price * itemRef.quantity).toFixed(2)} $</p>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button id="decrease-btn" onClick = "decreaseProduct(${itemRefIndex})" type="button"  class="btn btn-outline-primary">${itemRef.quantity > 1 ? `-` : `<i style="font-size:0.85rem" class="fa-regular fa-trash"></i>`}</button>
                                    <button type="button" class="btn btn-outline-primary">${itemRef.quantity}</button>
                                    <button id="increase-btn" onClick = "increaseProduct(${itemRefIndex})" type="button" class="btn btn-outline-primary">+</button>
                                </div>
                            </div>
                        </div>
		<hr class="my-4" style="opacity: 1;" />`
                } else {
                    if (cont) {
                        cont.innerHTML += `
                    <div class="row align-items-center bg-white mb-3 rounded">
                    <!-- Product image with badge -->
                    <div class="col-3 position-relative">
                        <img class="img-fluid"
                            src="${item.imageUrl}" alt="${item.title}">
                    </div>

                    <!-- Product title -->
                    <div class="col-5">
                        <p style="overflow: hidden;text-overflow: ellipsis;">${item.title}</p>
                    </div>

                    <!-- Price and quantity controls -->
                    <div class="col-4 text-center">
                       <p>${(item.price * itemRef.quantity).toFixed(2)} $</p>
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button id="decrease-btn" onClick = "decreaseProduct(${itemRefIndex},${false})" type="button"  class="btn btn-outline-primary">${itemRef.quantity > 1 ? `-` : `<i style="font-size:0.85rem" class="fa-regular fa-trash"></i>`}</button>
                                    <button type="button" class="btn btn-outline-primary">${itemRef.quantity}</button>
                                    <button id="increase-btn" onClick = "increaseProduct(${itemRefIndex},${false})" type="button" class="btn btn-outline-primary">+</button>
                                </div>
                    </div>
                </div>
                `
                    }

                    if (checkoutProducts) {
                        let totalQuantity = 0;
                        let totalPrice = 0;
                        cartToBeSend = [];
                        ourCart.forEach(itemCart => {

                            const product = products.find(item => item.id === itemCart.id);
                            if (product && product.isActive) {
                                cartToBeSend.push(itemCart)
                                totalQuantity += itemCart.quantity
                                totalPrice += product.price * itemCart.quantity;
                            }
                        });
                        console.log(cartToBeSend)
                        checkoutSummary.innerHTML = `
                <div class="  checkoutContainer p-5">
                    <div class="container-fluid p-3 border">
                        <h4>Order Summary</h2>
                            <div class="input-group mb-3">
                                <input style="outline: none;" type="text" class="form-control rounded-0"
                                    placeholder="Recipient's username" aria-label="Recipient's username"
                                    aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-primary rounded-0" type="button">Button</button>
                                </div>
                            </div>

                            <div class="order-text d-flex justify-content-between">
                                <div class="text-right">
                                    <p class="text-secondary">Subtotal (<span>${totalQuantity}
                                    </span> items)</p>
                                    <p>Coupon</p>
                                    <p class="text-secondary">Shipping Fee</p>
                                </div>
                                <div class="text-left text-end">
                                    <p>${totalPrice.toFixed(2)} $</p>
                                    <p>- EGP 5259.50</p>
                                    <p>EGP 5259.50</p>
                                </div>
                            </div>
                            <div class="alert alert-success px-3 py-1" role="alert">
                                <i class="fa-regular fa-cart-shopping"></i> Hurray! You got a discount!
                            </div>
                            <hr class="my-4">
                            <div class="row py-2">
                                <div class="col-6">
                                    <h5>Total <sup class="text-secondary" style="font-weight: normal;">(Inclusive
                                            of VAT)</sup></h5>
                                </div>
                                <div class="col-6 text-end">
                                    <h4 style="font-weight: bolder;">${totalPrice.toFixed(2)} $</h4>
                                </div>
                            </div>
                            <button onclick="sendOrder(${totalPrice},${totalQuantity})" class="btn btn-primary w-100 rounded">CHECKOUT</button>
                    </div>
                </div>`
                    }

                }
            }
        }
    )
}

const decreaseProduct = (itemRefIndex, isCart = true) => {
    if (currentUser.cart[itemRefIndex].quantity > 1) {
        currentUser.cart[itemRefIndex].quantity--;
    } else {
        currentUser.cart.splice(itemRefIndex, 1)
    }
    if (isCart) {
        updateCart()
        if (cartContainer.children.length > 0) {
            checkoutCart.classList.remove("d-none")
        } else {
            checkoutCart.classList.add("d-none")

        }

        if (checkoutProducts) {
            updateCart(false, checkoutProducts);

        }
    } else {
        updateCart(false, checkoutProducts);
        if (currentUser.cart.length <= 0) {
            window.location.href = "index.html"
        }
    }

    updateUsers()
    calculateItemsQuantity()
}

const increaseProduct = (itemRefIndex, isCart = true) => {

    currentUser.cart[itemRefIndex].quantity++;
    if (isCart) {
        updateCart()
        if (cartContainer.children.length > 0) {
            checkoutCart.classList.remove("d-none")
        } else {
            checkoutCart.classList.add("d-none")

        }
        if (checkoutProducts) {
            updateCart(false, checkoutProducts);

        }
    } else {
        updateCart(false, checkoutProducts);

    }
    updateUsers()
    calculateItemsQuantity()

}


showBtn.addEventListener("click", () => {


    updateCart()
    if (cartContainer.children.length > 0) {
        checkoutCart.classList.remove("d-none")
    } else {
        checkoutCart.classList.add("d-none")

    }
})
