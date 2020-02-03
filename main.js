import customers from "./customerList.js"

const emailListDOM = document.getElementById("email-list")

const customerEmailArray = customers.map(customer => `<h1>${customer.first_name} ${customer.last_name}</h1> <h3>${customer.contacts.email[0]}</h3><h3>${customer.contacts.email[1]}</h3><h3>${customer.contacts.email[2]}</h3>`)

customerEmailArray.forEach(customer =>
    emailListDOM.innerHTML += (customer)
)