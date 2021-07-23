var letsCookButton = document.querySelector('.lets-cook');
var sideInput = document.querySelector('.side');
var mainDishInput = document.querySelector('.main-dish');
var dessertInput = document.querySelector('.dessert');
var cookpotIcon = document.querySelector('.cookpot');

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
    getRandomIndex(sides)
  }
  if(mainDishInput.checked) {
    getRandomIndex(mainDishes)
  }
  if(dessertInput.checked) {
    getRandomIndex(desserts)
  }
  displayDish();
};

function displayDish() {
  //hide cookpot icon
  cookpotIcon.classList.add('hidden');
  
};
//cookpot icon will disapear
//string you should make: &
//item will be displayed in right section
//new clear button at bottom right "clear" in section
