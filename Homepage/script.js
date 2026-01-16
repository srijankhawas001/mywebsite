 let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Product added to cart!");
}
function increaseQty(btn) {
  let span = btn.previousElementSibling;
  span.innerText = parseInt(span.innerText) + 1;
}

function decreaseQty(btn) {
  let span = btn.nextElementSibling;
  if (parseInt(span.innerText) > 1) {
    span.innerText = parseInt(span.innerText) - 1;
  }
}
