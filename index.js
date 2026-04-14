// Write your solution in this file!
// Step 1: Variable Data (GLOBAL SCOPE)
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Function and Block (FUNCTION SCOPE)
function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

// Step 3: Variable Declaration and Scope (BLOCK SCOPE)
if(true) {
  const anotherNewBurger = "Maple Bacon Burger";
  burgers.push(anotherNewBurger);
}

// Step 3 (continued): Function to change featuredDrink (GLOBAL reassignment)
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}