function Click() {
  let main = document.querySelector(".place");
  let card = document.querySelector(".addCard").cloneNode(true);
  main.appendChild(card);
  card.style.display = "block";
}

function SeparateClick() {
  let main = document.querySelector(".place");
  let card = document.querySelector(".addCard2").cloneNode(true);
  main.appendChild(card);
  card.style.display = "block";
}
