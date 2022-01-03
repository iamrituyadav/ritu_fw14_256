var cartArray = JSON.parse(localStorage.getItem("cartItem"));
var mainDiv = document.querySelector("#main");
function displayMenu(array) {
  array.forEach(function (item, index) {
    var childDiv = document.createElement("div");
    var img = document.createElement("img");
    img.src = item.strCategoryThumb;

    var p1 = document.createElement("p");
    p1.textContent = item.strCategory;

    var price = Math.floor(Math.random() * (200 - 100) + 100);
    var p2 = document.createElement("p");
    p2.textContent = `Price: ${price} Rs`;

    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {});

    childDiv.append(img, p1, p2);
    mainDiv.append(childDiv);
  });

  //   var amount = array.price.reduce(function (ac, cv) {
  //     return ac + cv;
  //   }, 0);

  //   var total = document.createElement("div");
  //   total.textContent = `Total Amount: Rs.${amount}`;
}

displayMenu(cartArray);
