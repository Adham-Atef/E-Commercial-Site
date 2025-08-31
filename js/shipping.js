

const shippingContainer = document.querySelector("#shippingContainer");
const checkoutCartBtn = document.querySelector("#checkoutCartBtn");
const checkoutDeliveryBtn = document.querySelector("#checkoutDeliveryBtn");
const checkoutPaymentBtn = document.querySelector("#checkoutPaymentBtn");
const checkoutShippingSummary = document.querySelector("#checkoutShippingSummary");
const checkoutTotalSummary = document.querySelector("#checkoutTotalSummary");
const proceedToBuy = document.querySelector("#proceedToBuy");
const totalShippingPrice = document.querySelector("#totalShippingPrice");
const shippingFees = document.querySelector("#shippingFees");
const subtotalPrice = document.querySelector("#subtotalPrice");

let onDelivery = false;

const showSummary = () => {
    if (currentUser.shipping) {
        checkoutShippingSummary.classList.remove("d-none")
        shippingFees.textContent = Number(localStorage.getItem("shippingFees"))
    }
    if (currentUser.payment && currentUser.shipping) {
        checkoutTotalSummary.classList.remove("d-none")
        totalShippingPrice.textContent = JSON.parse(localStorage.getItem("orderToBePlace")).totalPrice.toFixed(2)
    }
}

const drawCheckout = () => {
    if (!currentUser.shipping || onDelivery) {
        checkoutPaymentBtn.classList.add("btn-outline-primary");
        checkoutPaymentBtn.classList.remove("btn-primary");
        checkoutCartBtn.classList.remove("btn-primary");
        checkoutDeliveryBtn.classList.add("btn-primary");
        checkoutCartBtn.classList.add("btn-outline-primary");
        checkoutDeliveryBtn.classList.remove("btn-outline-primary");
        checkoutShippingSummary.classList.add("d-none");

        return `
        <div class="container-fluid py-5 px-2">
            <h3>Add Shipping Address</h3>
            <form id="deliverHereForm" class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmailOrder" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmailOrder" required value="${currentUser.shipping?.email || ''}">
                </div>
                <div class="col-md-6">
                    <label for="inputPhoneOrder" class="form-label">Mobile Number</label>
                    <input type="tel" class="form-control" id="inputPhoneOrder" pattern="[0-9]{10,15}" required placeholder="e.g. 01012345678" value="${currentUser.shipping?.phone || ''}">
                </div>
                <div class="col-12">
                    <label for="inputAddressOrder" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddressOrder" placeholder="1234 Main St" required value="${currentUser.shipping?.address1 || ''}">
                </div>
                <div class="col-12">
                    <label for="inputAddress2Order" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2Order" placeholder="Apartment, studio, or floor" value="${currentUser.shipping?.address2 || ''}">
                </div>
                <div class="col-md-6">
                    <label for="inputCityOrder" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCityOrder" required value="${currentUser.shipping?.city || ''}">
                </div>
                <div class="col-md-4">
                    <label for="inputStateOrder" class="form-label">State</label>
                    <input type="text" class="form-control" id="inputStateOrder" required value="${currentUser.shipping?.state || ''}">
                </div>
                <div class="col-md-2 mb-2">
                    <label for="inputZipOrder" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZipOrder" pattern="[0-9]{4,10}" required placeholder="e.g. 12345" value="${currentUser.shipping?.zip || ''}">
                </div>
                <hr class="my-4">
                <div class="col-12">
                    <button id="deliverHereBtn" type="submit" class="btn btn-primary w-100 mt-3">
                        Deliver Here
                    </button>
                </div>
            </form>
        </div>`;
    }

    checkoutPaymentBtn.classList.remove("btn-outline-primary");
    checkoutPaymentBtn.classList.add("btn-primary");
    checkoutCartBtn.classList.remove("btn-primary");
    checkoutDeliveryBtn.classList.remove("btn-primary");
    checkoutCartBtn.classList.add("btn-outline-primary");
    checkoutDeliveryBtn.classList.add("btn-outline-primary");
    checkoutShippingSummary.classList.remove("d-none");

    return `
    <div class="h-100 pt-5 px-3 d-flex flex-column justify-content-between">
        <div class="w-100">
            <h3 class="mb-3">Add Payment Method</h3>
            <label for="method1" class="container-fluid">
                <div class="row h-100 border justify-content-center align-items-center mb-3 cursor-pointer">
                    <div class="col-1 d-flex">
                        <input ${currentUser.payment === "cash" ? "checked" : ""} style="height: 30px;width: 30px;" type="radio" id="method1" name="method">
                    </div>
                    <div class="col-1 d-flex justify-content-center align-items-center">
                        <i class="fa-regular fa-money-bill text-success h2 mt-2"></i>
                    </div>
                    <div class="col-10 h-100 d-flex align-items-center">
                        <p class="h5">Pay With Cash</p>
                    </div>
                </div>
            </label>
            <label id="method2Border" for="method2" class="container-fluid">
                <div class="row h-100 border justify-content-center align-items-center mb-3 cursor-pointer">
                    <div class="col-1 d-flex">
                        <input ${currentUser.payment !== "cash" ? "checked" : ""} style="height: 30px;width: 30px;" type="radio" id="method2" name="method">
                    </div>
                    <div class="col-1 d-flex justify-content-center align-items-center">
                        <i class="fa-regular fa-credit-card text-primary h2 mt-2"></i>
                    </div>
                    <div class="col-10 h-100 d-flex align-items-center">
                        <p class="h5">Pay With Credit or Debit Card</p>
                    </div>
                </div>
                <form id="paymentHereForm" class="row g-3 p-2 ${currentUser.payment !== "cash" ? "" : "d-none"} border">
                    <div class="col-12">
                        <input required type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" inputmode="numeric" minlength="16" maxlength="16" value="${currentUser.payment?.cardNumber || ''}">
                    </div>
                    <div class="col-4">
                        <input required type="text" class="form-control" id="cardExpMonth" placeholder="MM" inputmode="numeric" minlength="2" maxlength="2" value="${currentUser.payment?.cardExpMonth || ''}">
                    </div>
                    <div class="col-4">
                        <input required type="text" class="form-control" id="cardExpYear" placeholder="YYYY" inputmode="numeric" minlength="4" maxlength="4" value="${currentUser.payment?.cardExpYear || ''}">
                    </div>
                    <div class="col-4">
                        <input required type="text" class="form-control" id="cardCVV" placeholder="CVV" inputmode="numeric" minlength="3" maxlength="4" value="${currentUser.payment?.cardCVV || ''}">
                    </div>
                    <div class="col-12">
                        <input required type="text" class="form-control" id="cardName" placeholder="Name on Card" value="${currentUser.payment?.cardName || ''}">
                    </div>
                        <button id="savePayment" class="btn btn-primary w-100 my-5">Save Payment</button>

                </form>
            </label>
        </div>
    </div>`;
};

const updateShippingContainer = () => {
    subtotalPrice.textContent = (JSON.parse(localStorage.getItem("orderToBePlace")).totalPrice - Number(localStorage.getItem("shippingFees")) + 2.5).toFixed(2);
    // checkoutTotalSummary.textContent = (JSON.parse(localStorage.getItem("orderToBePlace")).totalPrice + Number(localStorage.getItem("shippingFees"))).toFixed(2);
    shippingContainer.innerHTML = drawCheckout();
    bindEvents();

    showSummary()
};
updateShippingContainer();

function bindEvents() {
    const deliverHereForm = document.querySelector("#deliverHereForm");
    const deliverHereBtn = document.querySelector("#deliverHereBtn");

    const method1 = document.querySelector("#method1");
    const method2 = document.querySelector("#method2");
    const paymentHereForm = document.querySelector("#paymentHereForm");
    const savePayment = document.querySelector("#savePayment");

    if (deliverHereBtn && deliverHereForm) {
        deliverHereForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let shippingAddress = {
                email: document.querySelector("#inputEmailOrder").value.trim(),
                phone: document.querySelector("#inputPhoneOrder").value.trim(),
                address1: document.querySelector("#inputAddressOrder").value.trim(),
                address2: document.querySelector("#inputAddress2Order").value.trim(),
                city: document.querySelector("#inputCityOrder").value.trim(),
                state: document.querySelector("#inputStateOrder").value.trim(),
                zip: document.querySelector("#inputZipOrder").value.trim(),
                createdAt: new Date().toISOString(), // 3lshan nmsk taree5

            };
            currentUser.shipping = shippingAddress;
            onDelivery = false;
            updateUsers();
            addAlert(false, false, "Shipping Address has been updated successfully")
            updateShippingContainer();
        });
    }

    if (method1 && method2) {
        method1.addEventListener("change", () => {
            if (method2.checked) {
                paymentHereForm.classList.remove("d-none");
                paymentHereForm.classList.add("border");
            } else {
                paymentHereForm.classList.add("d-none");
                paymentHereForm.classList.remove("border");
                currentUser.payment = "cash";
                updateUsers();

                addAlert(false, false, "Payment has been updated successfully")
                updateShippingContainer();

            }

        });

        method2.addEventListener("change", () => {
            if (method2.checked) {
                paymentHereForm.classList.remove("d-none");
                paymentHereForm.classList.add("border");
            } else {
                paymentHereForm.classList.add("d-none");
                paymentHereForm.classList.remove("border");
            }

        });
    }

    if (paymentHereForm) {
        paymentHereForm.addEventListener("submit", e => {
            e.preventDefault()
            if (method1.checked) {
                currentUser.payment = "cash";
            } else {
                let paymentObj = {
                    cardName: document.querySelector("#cardName").value,
                    cardNumber: document.querySelector("#cardNumber").value,
                    cardExpMonth: document.querySelector("#cardExpMonth").value,
                    cardExpYear: document.querySelector("#cardExpYear").value,
                    cardCVV: document.querySelector("#cardCVV").value
                };
                currentUser.payment = paymentObj;
            }
            updateUsers();
            addAlert(false, false, "Payment has been updated successfully")
            updateShippingContainer();

        });
    }
}




if (checkoutDeliveryBtn) {
    checkoutDeliveryBtn.addEventListener("click", () => {
        onDelivery = true;
        updateShippingContainer();
    });
}

if (checkoutCartBtn) {
    checkoutCartBtn.addEventListener("click", () => {
        onDelivery = false;
        updateShippingContainer();
        window.location.href = "checkout.html"
    });
}

if (checkoutPaymentBtn) {
    checkoutPaymentBtn.addEventListener("click", () => {
        updateShippingContainer();

        if (currentUser.shipping) {
            onDelivery = false;
        } else {
            addAlert(true, true)
        }
    });
}
updateShippingContainer();


proceedToBuy.addEventListener("click", () => {

    if (!currentUser.shipping) {
        addAlert(true, true)
        return;
    }
    if (!currentUser.payment) {
        addAlert(false, true)
        return;
    }
    const orderToBePlace = JSON.parse(localStorage.getItem("orderToBePlace"));
    orderToBePlace.payment = currentUser.payment == "cash" ? "Cash" : "Credit Card";
    currentUser.orders.push(orderToBePlace);
    let nextID = Number(localStorage.getItem("lastOrderID")) + 1;
    localStorage.setItem("lastOrderID", nextID)
    currentUser.cart = []
    localStorage.setItem("orderToBePlace", true)
    updateUsers();
    window.location.href = "index.html"
})