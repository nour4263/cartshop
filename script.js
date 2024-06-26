const cartItems = document.querySelectorAll(".cart-item");
const totalPriceElement = document.querySelector(".total-price h2");

const updateTotalPrice = () => {
  let total = 0;
  cartItems.forEach((item) => {
    const itemQuantity = parseInt(item.querySelector(".quantity").textContent);
    const itemPrice = parseFloat(item.getAttribute("data-price"));
    total += itemQuantity * itemPrice;
  });
  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
};

cartItems.forEach((item) => {
  const quantityElement = item.querySelector(".quantity");
  const priceElement = item.querySelector(".item-price .price");
  const minusBtn = item.querySelector(".minus");
  const plusBtn = item.querySelector(".plus");
  const deleteBtn = item.querySelector(".delete-btn");
  const likeBtn = item.querySelector(".like-btn");

  let quantity = parseInt(quantityElement.textContent);
  const price = parseFloat(item.getAttribute("data-price"));

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      priceElement.textContent = (quantity * price).toFixed(2);
      updateTotalPrice();
    }
  });

  plusBtn.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
    priceElement.textContent = (quantity * price).toFixed(2);
    updateTotalPrice();
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    updateTotalPrice();
  });

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});

updateTotalPrice();