const totalAll = document.querySelector(".totalAll");

const count = parseInt(produit.querySelector(".count").innerText);
produit.querySelector(".total").innerText = count * price;

function deleteProduct(e) {
  e.target.parentElement.parentElement.remove();
  console.log(e);
}

function add(e) {
  const produit = e.target.parentElement.parentElement;
  const count = parseInt(produit.querySelector(".count").innerText);
  produit.querySelector(".count").innerText = count + 1;
  total(produit);
}

function remove(e) {
  const produit = e.target.parentElement.parentElement;
  const count = parseInt(produit.querySelector(".count").innerText);
  if (count > 1) {
    produit.querySelector(".count").innerText = count - 1;
    total(produit);
  }
}

function total(produit) {
  const price = parseInt(produit.querySelector(".price").innerText);
  const products = document.querySelectorAll(".total");

  const count = parseInt(produit.querySelector(".count").innerText);
  produit.querySelector(".total").innerText = count * price;
  var total = 0;
  products.forEach((element) => {
    total = total + parseInt(element.innerText);
  });
  totalAll.innerText = parseInt(total);
}
function heart(e) {
  const icon = e.target.parentElement.firstElementChild;
  icon.classList.toggle("red");

  //   for (let i = 1; i <= x.getAttribute("value"); i++)
  //     parent.children.child.classList = "fa-solid fa-star " + "yellow";
}
