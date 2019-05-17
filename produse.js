// document is ready for javascript queries
window.onload = function() {
    var addToCartButtons = document.getElementsByClassName("addProduct")
    console.log('asd ', addToCartButtons)
    for (var i=0; i<addToCartButtons.length;i++){
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCart)
    }
    function addToCart(event){
        event.preventDefault();
        var button = event.target
        var item = button.parentElement.parentElement
        var title = item.getElementsByClassName("name")[0].innerText
        var price = item.getElementsByClassName("productPrice2")[0].innerText
        var image = item.getElementsByClassName("productImage")[0].src
        console.log(title,price,image)
        addItemToCart(title,price,image)
    }
    function addItemToCart (title,price,image){
        var row = document.createElement("div")
        row.classList.add("products")
        var cartItems = document.getElementById("cart-items")
        var rowContents = `<h1 class="name">${title}</h1>
        <img src="${image}" alt="cover" class="productImage">
        <p>Vârstă: 3 ani
         <br>  Sex: mascul
         <br>Prietenos față de catei: NU 
         <br>Prietenos față de alte pisici: DA
           Sterilizat: DA
           <br>Deparazitat intern/extern: DA
        </p>
        <p class="productPrice">Preț: <span class="productPrice2">${price}</span></p>
        <p class="productTitle">
           <a class="addProduct" href="file:///C:/xampp/htdocs/proiectCv/cart.html" title="Add the product" onclick="myFunction()">Adaugă</a>
        </p>`
        row.innerHTML = rowContents
        cartItems.append(row)
    }
}