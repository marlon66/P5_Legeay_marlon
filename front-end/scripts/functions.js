function getNumberArticlesInCart () {
    let quantity = 0;
    let cart = JSON.parse(localStorage.getItem("products"));
    if(cart)
    cart.forEach((article) => {
      quantity += parseInt(article.quantity);
    });
    console.log(quantity);
    document.querySelector(".number-item").textContent = quantity;
  }
  
  getNumberArticlesInCart();