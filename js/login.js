

if (localStorage.getItem("currentUser")) {
    window.location.href = "index.html"
}




const email = document.querySelector("#exampleInputEmail1")
const password = document.querySelector("#exampleInputPassword1")
const form = document.querySelector("#form")
const submit = document.querySelector("#submit")
const warn = document.querySelector("#warn")


console.log(users)

const checkUserCredentials = (email, password) => {
    return users.find( // find msh some 3lshan 3awez el user object nfso msh mogard true or false
        item => {
            if (
                email.trim().toLowerCase() === item.email.trim().toLowerCase() &&
                password.trim().toLowerCase() === item.password.trim().toLowerCase()
            ) {
                return item;
            }
        }
    )
}

const loginSuccess = user => {
    localStorage.setItem("currentUser", JSON.stringify(user))
    window.location.href = "index.html"
}

form.addEventListener("submit",
    e => {
        e.preventDefault();

        const user = checkUserCredentials(email.value, password.value);

        if (user) {
            loginSuccess(user)
        } else {
            warn.textContent = "Email or password might be invalid"
        }

    }
)