
if (!localStorage.getItem("viewProductID")) {
    window.location.href = "index.html"
}


const productViewContainer = document.querySelector("#productViewContainer")
const productDescriptionContainer = document.querySelector("#productDescriptionContainer")
const productReviewsContainer = document.querySelector("#productReviewsContainer")
const submitReviewBtn = document.querySelector("#submitReviewBtn")
const submitReviewForm = document.querySelector("#submitReviewForm")
const subjectReview = document.querySelector("#subjectReview")
const descriptionReview = document.querySelector("#descriptionReview")
const rateReview = document.querySelector("#rateReview")
const overallRating = document.querySelector("#overallRating")
const overallNumberRates = document.querySelector("#overallNumberRates")
const overallNumber = document.querySelector("#overallNumber")


if (!currentUser) {
    submitReviewForm.classList.add("d-none")
}

const drawPageProduct = () => {
    productReviewsContainer.innerHTML = ``
    productReviewsContainer.style.overflowY = "scroll"
    overallNumber.classList.remove("d-none")
    let product = products.find(
        e => e.id == localStorage.getItem("viewProductID")
    )
    if (product) {

        let isWish = -1;
        let allRate = 0;
        if (currentUser) {
            isWish = currentUser.wishlist.findIndex(id => id === product.id);
        }


        productDescriptionContainer.innerHTML = `
                     <div class="col-12">
                        <p class="h3">Product Overview</p>
                        <hr class="my-4">
                     </div>
                     <div class="col-12">
                        <p>${product.description || "No description available."}</p>
                     </div>
        `

        product.reviews.forEach(
            review => {
                allRate += Number(review.rate)
                productReviewsContainer.innerHTML += `
                 <div class="row mb-4">
                                <div class="col-12 d-flex align-items-center" style="gap: 10px;">
                                    <img width="35" class="img-fluid"
                                        src="https://m.media-amazon.com/images/S/amazon-avatars-global/default.png"
                                        alt="">
                                    <div>${review.firstName} ${review.lastName}</div>
                                </div>
                                <div class="col-12"><bdi>${review.subject}</bdi> <span class="h6 text-info">${review.rate} / 5</span></div>
                                <div class="col-12 text-secondary">Reviewed on ${review.createdAt}</div>
                                <div class="col-12 ${review.isVerified ? `text-warning` : `text-danger`} h6">${review.isVerified ? `Verified Purchase` : `Unverified Purchase`}</div>
                                <div class="col-12">${review.description}
                                </div>
                </div>
                `
            }
        )

        const rateRatio = allRate / product.reviews.length
        console.log(allRate)
        console.log(product.reviews.length)
        productViewContainer.innerHTML = `
        <div style="position: relative;" class="col-lg-4 col-8">
            <img class="img-fluid w-100" src="${product.imageUrl}" alt="${product.title}">
            <div style="position: absolute; top: 0;left: 100%; transform: translate(-150%,50%);">
                ${isWish === -1
                ? `<i class="fa-regular fa-heart wishlist text-danger" style="font-size: 2rem; cursor:pointer;"></i>`
                : `<i class="fa-solid fa-heart wishlist text-danger" style="font-size: 2rem;cursor:pointer;"></i>`} 
            </div>
        </div>

        <div class="col-lg-4 px-4">
            <p class="h6 text-secondary">${product.company} ></p>
            <p class="h3">${product.title}</p>
            ${rateRatio ? `            <p class="h6">${rateRatio.toFixed(1)}/5.0 <a href="#">${product.reviews.length} Ratings</a></p>
`: `<p class="h6 text-muted">No Reviews</p>`}
            <p class="h3 my-4"><sub class="h6">USD </sub>${product.price}</p>
            <button id="addToPageCart" class="btn btn-primary">Add to Cart</button>
        </div>

        <div class="col-lg-4 border p-3 rounded mt-5">
            <div>
                <p class="h6 text-secondary mb-4">
                    Sold By <span class="h6 text-black ">${product.seller} ></span>
                </p>
                <div class="row">
                    <div class="col-6">
                        <p class="p-2 rounded" style="width: fit-content; background-color: #f3f4f8;">
                            Items as shown <span class="h6 text-success">90%</span>
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="p-2 rounded" style="width: fit-content; background-color: #f3f4f8;">
                            Partner since <span class="h6 text-success">2+ Years</span>
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="p-2 rounded" style="width: fit-content; background-color: #f3f4f8;">
                            Great recent rating <span class="h6 text-success">5</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="d-flex flex-column" style="gap: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                    <img width="17" height="17"
                        src="https://f.nooncdn.com/s/app/com/noon/icons/warranty-mono-icon.svg" alt="">
                    <p class="h6" style="margin: 0;">No warranty</p>
                </div>

                <div style="display: flex; align-items: center; gap: 6px;">
                    <img width="17" height="17"
                        src="https://f.nooncdn.com/s/app/com/noon/icons/locker-delivery-mono-icon.svg" alt="">
                    <p class="h6" style="margin: 0;">Free delivery on Lockers & Pickup Points</p>
                </div>

                <div style="display: flex; align-items: center; gap: 6px;">
                    <img width="17" height="17"
                        src="https://f.nooncdn.com/s/app/com/noon/icons/return-mono-icon.svg" alt="">
                    <p class="h6" style="margin: 0;">Easy and Hassle Free Returns</p>
                </div>

                <div style="display: flex; align-items: center; gap: 6px;">
                    <img width="17" height="17"
                        src="https://f.nooncdn.com/s/app/com/noon/icons/payment-shield-mono-icon.svg" alt="">
                    <p class="h6" style="margin: 0;">Secure Payments</p>
                </div>
            </div>
        </div>

    `


        if (!rateRatio) {
            overallNumber.classList.add("d-none")
        }
        overallRating.innerHTML = `
                    ${rateRatio ? `${rateRatio.toFixed(1)} / 5.0` : `No Reviews`}
        `
        overallNumberRates.innerHTML = product.reviews.length;

        if (!productReviewsContainer.children.length) {
            productReviewsContainer.style.overflow = "hidden"
            productReviewsContainer.innerHTML = `
                             <div class="row mb-4">
                             <p class="h4">
                             No Reviews Yet</p>
                </div>

            `
        }
        const addToPageCart = document.querySelector("#addToPageCart")


        addToPageCart.addEventListener("click",
            () => {
                addToCart(product)
                calculateItemsQuantity()
            }
        )
        const wishlistIcon = productViewContainer.querySelector(".wishlist");
        wishlistIcon.addEventListener("click", () => {
            addToWishlist(product);
            drawPageProduct()

        });
    }


}

drawPageProduct()
if (submitReviewForm) {

    submitReviewForm.addEventListener("submit", e => {
        e.preventDefault();

        let isVerified = false;
        currentUser.orders.forEach(
            order => {
                if (order.orderStatus === "approved") {
                    order.order.forEach(
                        item => {
                            if (item.id == localStorage.getItem("viewProductID"))
                                isVerified = true;
                        }
                    )
                }
            }
        );

        const reviewObj = {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            subject: subjectReview.value.trim(),
            description: descriptionReview.value.trim(),
            rate: rateReview.value.trim(),
            createdAt: new Date().toUTCString(),
            isVerified: isVerified,
        }
        subjectReview.value = ""
        descriptionReview.value = ""
        const productIndex = products.findIndex(
            product => {
                return product.id == localStorage.getItem("viewProductID")
            }
        )
        if (productIndex !== -1) {
            products[productIndex].reviews.push(reviewObj)
            localStorage.setItem("products", JSON.stringify(products))
            drawPageProduct()
        }
    })

}
