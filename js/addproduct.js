if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "index.html"
}


const addProductForm = document.querySelector("#addProductForm")
const addProductBtn = document.querySelector("#addProductBtn")

const inputProductTitle = document.querySelector("#inputProductTitle")
const inputProductPrice = document.querySelector("#inputProductPrice")
const inputProductCategory = document.querySelector("#inputProductCategory")
const inputProductImageUrl = document.querySelector("#inputProductImageUrl")
const inputProductDescription = document.querySelector("#inputProductDescription")
const inputProductCompany = document.querySelector("#inputProductCompany")
const inputProductSeller = document.querySelector("#inputProductSeller")
const checkProductInactive = document.querySelector("#checkProductInactive")



addProductForm.addEventListener("submit", e => {
    e.preventDefault();

    localStorage.setItem("lastProductID", Number(localStorage.getItem("lastProductID")) + 1)
    const productObj = {
        id: Number(localStorage.getItem("lastProductID")),
        title: inputProductTitle.value.trim(),
        price: parseFloat(inputProductPrice.value),
        category: inputProductCategory.value.trim(),
        imageUrl: inputProductImageUrl.value.trim(),
        description: inputProductDescription.value.trim(),
        company: inputProductCompany.value.trim(),
        seller: inputProductSeller.value.trim(),
        isActive: !checkProductInactive.checked,
        reviews: [],
    }
    products.push(productObj)
    localStorage.setItem("products", JSON.stringify(products))
    window.location.href = "manageproducts.html"
})