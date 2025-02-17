const selectBtn = document.createElement("button");
selectBtn.innerHTML = "Vad ska vi äta idag?";
document.getElementById("app").appendChild(selectBtn);

const food = document.createElement("p");
food.className = "food";

const foods = [
  "Thai",
  "Sushi",
  "Hamburgare",
  "Pasta",
  "Dumplings",
  "Pizza",
  "Fisk/skaldjur",
  "Baguette/macka",
  "Kyckling",
  "Mexikanskt/tacos",
  "Kött",
  "Indiskt",
];

selectBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * foods.length);
  food.innerHTML = "--- " + foods[random] + " ---";
  document.getElementById("app").appendChild(food);
});
