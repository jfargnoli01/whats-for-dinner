var letsCookButton = document.querySelector('.lets-cook');
var sideInput = document.querySelector('.side');
var mainDishInput = document.querySelector('.main-dish');
var dessertInput = document.querySelector('.dessert');
var cookpotIcon = document.querySelector('.cookpot');
var youShouldMakeText = document.querySelector('.you-should-make');
var yourDish = document.querySelector('.dish-displays-here');

letsCookButton.addEventListener('click', selectDish);

var sides = [
  "Crispy Potatoes",
  "Garlic Butter Mushrooms",
  "Greek Salad",
  "Olive Tapenade Bruschetta",
  "Caprese Salad",
  "Toasted Garlic Bread",
  "Butternut Squash Soup",
  "Rosemary Olive Oil Bread",
  "Feta and Fennel Salad",
  "Figs and Warm Brie",
  "Grilled Broccoli"
];

var mainDishes = [
  "Margarita Pizza",
  "Veggie Fajitas",
  "Seitan Crispy Tacos",
  "Mushroom Dumplings and Rice",
  "Grilled Portobellos",
  "Shaved Brussels Salad",
  "Goat Cheese Polenta",
  "Tofu Lettuce Wraps",
  "Baked Gnocchi",
  "Pesto Panini",
  "Baked Potato"
];

var desserts = [
  "Vanilla Bean Ice Cream",
  "Rosemary Shortbread Cookies",
  "Oatmeal Raisin Cookies",
  "Birthday Cake",
  "Ice Cream Sandwich",
  "Pumpkin Pie",
  "Blueberry Crisp",
  "Chocolate Chip Cannoli",
  "Bananas with Nutella",
  "Dulce de Leche with Nilla Wafers"
];

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function selectDish() {
  if(sideInput.checked) {
    var side = getRandomIndex(sides);
    displayDish(side);
  }
  if(mainDishInput.checked) {
    var mainDish = getRandomIndex(mainDishes);
    displayDish(mainDish);
  }
  if(dessertInput.checked) {
    var dessert = getRandomIndex(desserts);
    displayDish(dessert);
  }
};

function displayDish(side) {
  cookpotIcon.classList.add('hidden');
  youShouldMakeText.classList.remove('hidden');
  yourDish.innerText = `${side}!`
  yourDish.classList.remove('hidden');
};
