
if (localStorage.getItem("currentUser")) {
    window.location.href = "index.html"
}



const firstName = document.querySelector("#exampleInputFirstName")
const lastName = document.querySelector("#exampleInputLastName")
const email = document.querySelector("#exampleInputEmail1")
const password = document.querySelector("#exampleInputPassword1")
const submit = document.querySelector("#submit")
const form = document.querySelector("#form")
const warn = document.querySelector("#warn")

const checkEmailExits = email => {
    return !users.some(
        item => {
            return item.email.trim().toLowerCase() === email.trim().toLowerCase();
        }
    )
}

const createUser = user => {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkEmailExits(email.value)) {
        createUser(user
            = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            isAdmin: false,
            cart: [],
            orders: [],
            wishlist: [],
        });
        window.location.href = "login.html";
    } else {
        warn.innerHTML = `This email is exits ,  <a href="login.html" style="text-decoration: none;" class="text-primary">Login</a> `
    }

})