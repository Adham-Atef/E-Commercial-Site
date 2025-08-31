const nav = document.querySelector("#navRoot")



const getTotalCartPrice = () => {

    const ourCart = [...currentUser.cart];
    let totalPrice = 0;
    ourCart.forEach(itemCart => {

        const product = products.find(item => item.id === itemCart.id);
        if (product && product.isActive) {
            totalPrice += product.price * itemCart.quantity;
        }
    });
    return totalPrice;

}


nav.innerHTML = `
    <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Navbar</a>
                <div id="user-nav" class="d-flex d-none me-1 align-items-center justify-content-center">
                    <span>Welcome,</span>
                    <div class="dropdown">
                        <a class="btn btn-outline-secondadry dropdown-toggle px-2" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="username" style="font-weight: bold;">${currentUser ? currentUser.firstName :
        ""}</span>
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="orders.html">My Orders</a></li>
                            <li><a class="dropdown-item" href="wishlist.html">My Wishlist</a></li>
                            ${currentUser ? currentUser.isAdmin ? `
                                <div>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="manageproducts.html">Manage Products</a></li>
                                <li><a class="dropdown-item" href="manageorders.html">Manage Orders</a></li>
                                </div>`: `` : ``}
                                <li><hr class="dropdown-divider"></li>
                                <li><a id="signout" class="dropdown-item" href="#">Signout</a></li>
                        </ul>
                    </div>
                    <button id="show-btn" class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style="position:relative">
                        <i class="fa-solid fa-cart-shopping"></i> : 
                        <span  class=" h6" id="NavCartQuantity">null</span>
                    </button>
                </div>
                <div id="login-nav" class="d-flex" style="gap: 10px;">
                    <button id="login-btn" class="btn btn-outline-primary" type="submit">Login</button>
                    <button id="register-btn" class="btn btn-outline-success" type="submit">Register</button>
                </div>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5  class="offcanvas-title" id="offcanvasExampleLabel">Total Price : <span id="allPrice">null</span>$</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mb-5">
                    <div class="w-100 h-100" id="cart-container">
                        
                    </div>
                </div>
                    <div class="cartBottom">
                    <button id="checkout-cart" class="btn btn-primary w-100 rounded-0">
                    Checkout</button>
                    </div>
            </div>
`

const NavCartQuantity = document.querySelector("#NavCartQuantity")
function calculateItemsQuantity() {
    let allItemsQuantity = 0;
    if (currentUser)
        currentUser.cart.forEach(
            item => {
                allItemsQuantity += item.quantity;
            }
        )
    if (NavCartQuantity)
        NavCartQuantity.textContent = allItemsQuantity;
}

calculateItemsQuantity()

const userNav = document.querySelector("#user-nav")
const userLogin = document.querySelector("#login-nav")
const loginBtn = document.querySelector("#login-btn")
const registerBtn = document.querySelector("#register-btn")
const username = document.querySelector("#username")
const showBtn = document.querySelector("#show-btn")
const signout = document.querySelector("#signout")

const checkoutProducts = document.querySelector("#checkoutProducts")
const checkoutSummary = document.querySelector("#checkoutSummary")
const checkoutCart = document.querySelector("#checkout-cart")

checkoutCart.addEventListener("click", () => {
    window.location.href = "checkout.html"
    updateCart(false, checkoutProducts);
})

if (currentUser) {
    userLogin.classList.add("d-none")
    userNav.classList.remove("d-none")
}

loginBtn.onclick = () => {
    window.location.href = "login.html"
}

registerBtn.onclick = () => {
    window.location.href = "register.html"
}

if (signout) {
    signout.addEventListener("click",
        () => {
            updateUsers()
            localStorage.removeItem("currentUser")
            window.location.reload()
        }
    )
}

