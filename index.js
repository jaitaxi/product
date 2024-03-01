let products = []

const UImaker = () => {
    document.getElementById("data").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let img = document.createElement("img")
        img.src = products[i].img
        let title = document.createElement("h2")
        title.innerHTML = products[i].title
        let price = document.createElement("p")
        price.innerHTML = products[i].price

        let div = document.createElement("div")
        div.append(img, title, price)

        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", () => {
            products.splice(i, 1)
            UImaker()
        })


        title.setAttribute("class", "title")

        document.getElementById("data").append(div)
    }
}

const handlesubmit = (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value
    let price = document.getElementById("price").value
    let img = document.getElementById("img").value
    console.log(title, price, img);

    if (title.length < 3) {
        alert("Please enter valid title")
        let p = document.createElement("p")

        p.innerHTML = "Please enter a valid title"
        p.style.color="red"
        console.log(p);

        document.getElementById("t-error").append(p)
        return
    }
    if (price <= 0) {
        alert("Please enter valid price")
        return
    }
    let product = {
        title: title,
        img: img,
        price: price
    }
    products.push(product)

    UImaker()
}









document.getElementById("form").addEventListener("submit", handlesubmit)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              