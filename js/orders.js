const tableBody = document.querySelector("#tableBody")
const filterOrderSelect = document.querySelector("#filterOrderSelect")
const filterOrderSearch = document.querySelector("#filterOrderSearch")
localStorage.removeItem("viewOrderID")


const viewOrder = id => {
    console.log(id)
    localStorage.setItem("viewOrderID", id)
    window.location.href = "order.html"
}

const drawOrderRow = order => {
    tableBody.innerHTML += `
        <tr>
                    <td style="vertical-align: middle;">#${order.id}</td>
                    <td style="vertical-align: middle;">${order.createdAt}</td>
                    <td style="vertical-align: middle;" class="${order.orderStatus != "pending" ? `${order.orderStatus == "approved" ? `text-success` : `${order.orderStatus == "declined" ? `text-danger` : `text-secondary`}`}` : `text-warning`}"    >${order.orderStatus}</td>
                    <td style="vertical-align: middle;">${order.payment}</td>
                    <td style="vertical-align: middle;">${order.totalPrice.toFixed(2)}$ for ${order.totalQuantity} items</td>
                    <td><button onclick="viewOrder(${order.id})" class="btn btn-outline-secondary">View</button>
                        ${order.orderStatus === "pending" ? `<button onclick="cancelOrder(${order.id})" class="btn btn-danger ms-md-3">Cancel</button>` : ``}
                    </td>
        </tr>
    `
}



const updateOrders = () => {
    const ordersList = [...currentUser.orders]

    const searchValue = filterOrderSelect.value;
    tableBody.innerHTML = ""
    ordersList.forEach(element => {
        if (searchValue == 0) {
            if (element.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase())) {
                drawOrderRow(element)
            }
        } else if (searchValue == 1) {
            if (element.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase()) && element.orderStatus === "approved") {

                drawOrderRow(element)
            }
        } else if (searchValue == 2) {
            if (element.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase()) && element.orderStatus === "pending") {

                drawOrderRow(element)
            }
        } else if (searchValue == 3) {
            if (element.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase()) && element.orderStatus === "declined") {
                drawOrderRow(element)
            }
        }
        else if (searchValue == 4) {
            if (element.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase()) && element.orderStatus === "canceled") {
                drawOrderRow(element)
            }
        }
    });
}

const cancelOrder = orderID => {
    const orderIndex = currentUser.orders.findIndex(
        order => {
            return order.id == orderID && order.orderStatus === "pending"
        }
    )
    currentUser.orders[orderIndex].orderStatus = "canceled"
    updateUsers()
    updateOrders()
}

updateOrders()
filterOrderSelect.addEventListener("change", updateOrders)
filterOrderSearch.addEventListener("input", updateOrders)
