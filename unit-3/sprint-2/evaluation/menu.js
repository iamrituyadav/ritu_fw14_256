var mainDiv = document.querySelector("#main");
let url = "https://www.themealdb.com/api/json/v1/1/categories.php";

getMenu();
async function getMenu() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let list = data.categories;
    displayMenu(list);
    console.log("list:", list);
  } catch (err) {
    console.log("err:", err);
  }
}

function displayMenu(list) {
  list.forEach(function (item, index) {
    var childDiv = document.createElement("div");
    var img = document.createElement("img");
    img.src = item.strCategoryThumb;

    var p1 = document.createElement("p");
    p1.textContent = item.strCategory;

    var price = Math.floor(Math.random() * (200 - 100) + 100);
    var p2 = document.createElement("p");
    p2.textContent = `Price: ${price} Rs`;

    var btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(item, index);
    });

    childDiv.append(img, p1, p2, btn);
    mainDiv.append(childDiv);
  });
}

function addToCart(item) {
  console.log(item);
  var cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  cartArray.push(item);

  localStorage.setItem("cartItem", JSON.stringify(cartArray));
  
}
