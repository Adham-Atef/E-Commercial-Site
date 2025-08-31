
if (!localStorage.getItem("viewOrderID")) {
    window.location.href = "orders.html"
}


const tableOrderBody = document.querySelector("#tableOrderBody")
const orderParagraphID = document.querySelector("#orderParagraphID")

const loadOrderDetails = () => {
    const userOrders = [...currentUser.orders]

    const OrderDetailsID = userOrders.findIndex(
        e => {
            return e.id == localStorage.getItem("viewOrderID")
        }
    )

    if (OrderDetailsID != -1) {
        const OrderDetails = [...currentUser.orders[OrderDetailsID].order]
        OrderDetails.forEach(
            order => {
                const product = products.find(
                    e => {
                        return e.id === order.id
                    }
                )
                orderParagraphID.textContent = `#${order.id} Order`
                tableOrderBody.innerHTML += `
                <tr>
                    <td>
                        <img width="100" class="img-fluid"
                            src="${product.imageUrl}" alt=""
                            srcset="">
                    </td>
                    <td style="vertical-align: middle;">
                        <p class="h5">${product.price}$</p>
                    </td>
                    <td style="vertical-align: middle;">
                        <p class="h5">${order.quantity} Items</p>
                    </td>
                    <td style="vertical-align: middle;">
                        <p class="h5">${(order.quantity * product.price).toFixed(2)}$</p>
                    </td>
                    <td style="vertical-align: middle;">
                        <p class="h5"><button onclick="emitProductPage(${product.id})" class="btn btn-outline-primary">View</button></p>
                    </td>
                </tr>
            `
            }
        )
    }
}

loadOrderDetails()