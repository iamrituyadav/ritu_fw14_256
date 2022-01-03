// document.querySelector("#menu").addEventListener("click", getMenu);
let url = "www.themealdb.com/api/json/v1/1/random.php";

async function getMenu() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}
