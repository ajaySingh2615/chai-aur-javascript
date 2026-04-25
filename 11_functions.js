console.log(brewPotion("Healing Herbs", 3));

function brewPotion(ingredient, dose) {
  return `Brewing potion with${ingredient} (x${dose})... Potion ready`;
}

const mixElixir = function (ingredient) {
  return `Mixing elexir with ${ingredient}`;
};

// no own 'this' no arguments object
const distilEssence = (ingredient) => {
  return `Mixing elexir with ${ingredient}`;
};

function oldBrewingLogs() {
  console.log("Type: ", typeof arguments);
  console.log("Is Array: ", Array.isArray(arguments));
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

oldBrewingLogs("Sage", "rosemary");

// const arrowBrew = () => {
//   try {
//     console.log(arguments);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// arrowBrew();

let globalCount = 0;
// impure function
function brewAndCount(name) {
  globalCount++;
}

// HOF
function anotherFunctionForClass(brewAndCount) {
  return function newBrew() {
    // do something
  };
}

// IIFE
// ()()
(function () {})();
(() => {})();
const potionShop = (function () {
  let inventory = 0;

  return {
    brew() {
      inventory++;
      return `Brew potion #${inventory}`;
    },

    getStock() {
      return inventory;
    },
  };
})();

console.log(potionShop);
console.log(potionShop.brew());
console.log(potionShop.inventory);

// closure

function makeFun() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFun();
myFunc();

function outer() {
  let count = 0; // this variable lives in outer's scope

  function inner() {
    count++; // inner "closes over" count
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
