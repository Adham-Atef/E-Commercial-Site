if (!currentUser || !currentUser.isAdmin) {
    window.location.href = "index.html"
}


const tableBody = document.querySelector("#tableBody")
const filterOrderSearch = document.querySelector("#filterOrderSearch")
localStorage.removeItem("viewOrderID")


const viewOrder = id => {
    console.log(id)
    localStorage.setItem("viewOrderID", id)
    window.location.href = "order.html"
}

const drawOrderRow = (order, email) => {
    const tr = document.createElement("tr")
    tr.style.cursor = "pointer"
    tr.innerHTML += `
                    <td style="vertical-align: middle;">#${order.id}</td>
                    <td style="vertical-align: middle;">${email}</td>
                    <td style="vertical-align: middle;">${order.createdAt}</td>
                    <td style="vertical-align: middle;">${order.payment}</td>
                    <td style="vertical-align: middle;">${order.totalPrice.toFixed(2)}$ for ${order.totalQuantity} items</td>
                    <td>
                       <button onclick="approveOrder(${order.id})" class="btn btn-success">Approve</button>
                       </td>
                      <td>
                       <button onclick="declineOrder(${order.id})" class="btn btn-danger">Decline</button>
                       </td>
            `
    tr.onclick = () => {
        // viewOrder(order.id)
    }
    tableBody.appendChild(tr)
}



const updateOrders = () => {
    const ordersList = [];
    users.forEach(
        user => {
            user.orders.forEach(
                order => {
                    if (order.orderStatus === "pending") {

                        ordersList.push({ order: order, email: user.email })
                    }
                }
            )
        }
    )

    ordersList.sort((a, b) => a.order.id - b.order.id) // a-b y3ny ascending order  !!!
    tableBody.innerHTML = ""
    ordersList.forEach(element => {
        if (element.order.id.trim().toLowerCase().includes(filterOrderSearch.value.trim().toLowerCase())) {
            drawOrderRow(element.order, element.email)
        }

    });
}

const declineOrder = orderID => {
    let orderIndex = -1;
    let userIndex = -1;
    users.forEach(
        user => {
            user.orders.forEach(
                order => {
                    if (order.id == orderID && order.orderStatus == "pending") {
                        order.orderStatus = "declined"
                    }
                }
            )

        }
    )
    localStorage.setItem("users", JSON.stringify(users))
    currentUser = users.find(
        user => user.email === currentUser.email
    )
    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    console.log(currentUser)

    updateOrders()
}

const approveOrder = (orderID) => {
    let orderIndex = -1;
    let userIndex = -1;
    users.forEach(
        user => {
            user.orders.forEach(
                order => {
                    if (order.id == orderID && order.orderStatus == "pending") {
                        order.orderStatus = "approved"
                    }
                }
            )

        }
    )
    localStorage.setItem("users", JSON.stringify(users))
    currentUser = users.find(
        user => user.email === currentUser.email
    )
    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    console.log(currentUser)

    updateOrders()
};


updateOrders()
filterOrderSearch.addEventListener("input", updateOrders)
