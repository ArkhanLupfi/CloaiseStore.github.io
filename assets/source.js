document.getElementById("year").innerHTML = new Date().getFullYear();

function chat(product_name) {
    const message = `Hello, I want to ask if this ${product_name} is still available?`
    const whatsapp = `https://wa.me/6281804831455?text=${message}`
    open(whatsapp, "blank")
}

function buy(product_name, product_price) {
    const message = `Hello I want to buy this ${product_name} - ${product_price}, please confirm my order!`
    const whatsapp = `https://wa.me/6281804831455?text=${message}`
    open(whatsapp, "blank")
}
