const card = document.querySelector(".card-1");
const fa = document.getElementById("fa");
const idk = document.getElementById("idk");
let totalItems = 0;
function updateTotalItems() {
  totalItems++;
  idk.textContent = totalItems;
}
fa.addEventListener("click", function () {
  updateTotalItems();
  alert("Item added to the cart!");
});

card.addEventListener("click", function () {
  fa.click();
});
