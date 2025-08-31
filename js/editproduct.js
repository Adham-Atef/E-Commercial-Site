if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "index.html"
}


const addProductForm = document.querySelector("#addProductForm")
const addProductBtn = document.querySelector("#addProductBtn")
const editProductID = document.querySelector("#editProductID")

const productIndex = Number(localStorage.getItem("productIndexToEdit"))



const inputProductTitle = document.querySelector("#inputProductTitle");
const inputProductPrice = document.querySelector("#inputProductPrice");
const inputProductCategory = document.querySelector("#inputProductCategory");
const inputProductImageUrl = document.querySelector("#inputProductImageUrl");
const inputProductDescription = document.querySelector("#inputProductDescription");
const inputProductCompany = document.querySelector("#inputProductCompany");
const inputProductSeller = document.querySelector("#inputProductSeller");
const checkProductInactive = document.querySelector("#checkProductInactive");


editProductID.textContent = products[productIndex].id
inputProductTitle.value = products[productIndex].title;
inputProductPrice.value = products[productIndex].price;
inputProductCategory.value = products[productIndex].category;
inputProductImageUrl.value = products[productIndex].imageUrl;
inputProductDescription.value = products[productIndex].description;
inputProductCompany.value = products[productIndex].company;
inputProductSeller.value = products[productIndex].seller;
checkProductInactive.checked = !products[productIndex].isActive;




addProductForm.addEventListener("submit", e => {
    e.preventDefault();

    const productObj = {
        id: products[productIndex].id,
        title: inputProductTitle.value.trim(),
        price: parseFloat(inputProductPrice.value),
        category: inputProductCategory.value.trim(),
        imageUrl: inputProductImageUrl.value.trim(),
        description: inputProductDescription.value.trim(),
        company: inputProductCompany.value.trim(),
        seller: inputProductSeller.value.trim(),
        isActive: !checkProductInactive.checked,
        reviews: products[productIndex].reviews,
    }
    products[productIndex] = productObj
    localStorage.setItem("products", JSON.stringify(products))
    window.location.href = "manageproducts.html"
})