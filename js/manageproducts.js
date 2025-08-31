

if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "index.html"
}


const manageProductViewContainer = document.querySelector("#manageProductViewContainer")
const ManageSearchBar = document.querySelector("#ManageSearchBar")
const manageSearchSelect = document.querySelector("#manageSearchSelect")
const addProductBtn = document.querySelector("#addProductBtn")




const drawManageProduct = (productObj) => {
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
                   
                    <button class="editProduct btn btn-primary">Edit</button>
                    ${productObj.isActive ? `<button class="activeBtn btn btn-secondary">Inactive</button>` : `<button class="activeBtn addProductToCartBtn btn btn-success">Active</button>`}
                    <button class="deleteProduct btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    `;

    const activeBtn = colDiv.querySelector(".activeBtn");
    activeBtn.addEventListener("click", () => {
        productObj.isActive = !productObj.isActive;
        updateProductStorage();
        updateManageProducts()
    });

    const deleteProduct = colDiv.querySelector(".deleteProduct");
    deleteProduct.addEventListener("click", () => {
        const productIndex = products.findIndex(
            product => productObj.id === product.id
        )
        products.splice(productIndex, 1)
        localStorage.setItem("lastProductID", Number(localStorage.getItem("lastProductID")) - 1)

        updateProductStorage();
        updateManageProducts()
    });

    const editProduct = colDiv.querySelector(".editProduct");
    editProduct.addEventListener("click", () => {
        const productIndex = products.findIndex(
            product => productObj.id === product.id
        )
        localStorage.setItem("productIndexToEdit", productIndex)
        window.location.href = "editproduct.html"
        updateProductStorage();
        updateManageProducts()
    });


    if (manageProductViewContainer) {
        manageProductViewContainer.appendChild(colDiv);
    }
}


function updateManageProducts() {
    const searchValue = manageSearchSelect.value;
    manageProductViewContainer.innerHTML = ""
    products.forEach(element => {
        if (searchValue == 0) {
            if (element.title.trim().toLowerCase().includes(ManageSearchBar.value.trim().toLowerCase())) {
                drawManageProduct(element)
            }
        } else if (searchValue == 1) {
            if (element.title.trim().toLowerCase().includes(ManageSearchBar.value.trim().toLowerCase()) && element.isActive) {
                console.log("ss")

                drawManageProduct(element)
            }
        } else {
            if (element.title.trim().toLowerCase().includes(ManageSearchBar.value.trim().toLowerCase()) && !element.isActive) {

                drawManageProduct(element)
            }
        }
    });
}

if (ManageSearchBar) {
    ManageSearchBar.addEventListener("input", updateManageProducts);
}

if (manageSearchSelect) {
    manageSearchSelect.addEventListener("change", updateManageProducts);
}

if (addProductBtn) {
    addProductBtn.addEventListener("click", () => {
        window.location.href = "addproduct.html"
    })
}

updateManageProducts();