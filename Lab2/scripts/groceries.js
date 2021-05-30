// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "Brocoli",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "Bread",
    vegetarian: true,
    glutenFree: false,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 2.35,
  },
  {
    name: "salmon",
    vegetarian: false,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 10.0,
  },
  {
    name: "Almond Milk",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: false,
    organic: true,
    price: 3.99,
  },
  {
    name: "Milk",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: false,
    nutFree: true,
    organic: true,
    price: 4.5,
  },
  {
    name: "Doritos",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: false,
    price: 4.99,
  },
  {
    name: "Ice Cream",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: false,
    nutFree: true,
    organic: false,
    price: 4.99,
  },
  {
    name: "Hamburgers",
    vegetarian: false,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 9.99,
  },
  {
    name: "Bananas",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 1.45,
  },
  {
    name: "Avocado",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 1.99,
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
// there is for sure a better way of doing this that is not O(nightmare).
function restrictListProducts(prods, restriction) {
  let product_names = [];

  for (let i = 0; i < prods.length; i++) {
    for (let j = 0; j < restriction.length; j++) {
      if (restriction[j] == "vegetarian" && prods[i].vegetarian == true) {
        if (product_names.includes(prods[i].name)) {
          break;
        } else {
          product_names.push(prods[i]);
        }
      } else if (
        restriction[j] == "glutenFree" &&
        prods[i].glutenFree == true
      ) {
        if (product_names.includes(prods[i].name)) {
          break;
        } else {
          product_names.push(prods[i]);
        }
      } else if (restriction[j] == "organic" && prods[i].organic == true) {
        if (product_names.includes(prods[i].name)) {
          break;
        } else {
          product_names.push(prods[i]);
        }
      } else if (
        restriction[j] == "lactoseFree" &&
        prods[i].lactoseFree == true
      ) {
        if (product_names.includes(prods[i].name)) {
          break;
        } else {
          product_names.push(prods[i]);
        }
      } else if (restriction[j] == "nutFree" && prods[i].nutFree == true) {
        if (product_names.includes(prods[i].name)) {
          break;
        } else {
          product_names.push(prods[i]);
        }
      } else if (restriction[j] == "all" && !product_names.includes(prods[i])) {
        if (product_names.includes(prods[i].name)) {
          break;
        }
        product_names.push(prods[i]);
      }
    }
  }

  if (restriction.length === 4) {
    document.getElementById("selected").innerHTML =
      "Selected " +
      restriction[0] +
      " " +
      restriction[1] +
      " " +
      restriction[2] +
      " " +
      restriction[3] +
      "  items:";
  }
  if (restriction.length === 3) {
    document.getElementById("selected").innerHTML =
      "Selected " +
      restriction[0] +
      " " +
      restriction[1] +
      " " +
      restriction[2] +
      "  items:";
  }
  if (restriction.length === 2) {
    document.getElementById("selected").innerHTML =
      "Selected " + restriction[0] + " " + restriction[1] + "  items:";
  }
  if (restriction.length === 1) {
    document.getElementById("selected").innerHTML =
      "Selected " + restriction[0];
  }
  if (restriction.length === 0) {
    document.getElementById("selected").innerHTML = "Please make a selection.";
  }

  for (let j = 0; j < restriction.length; j++) {
    if (restriction[j] == "vegetarian") {
      product_names = product_names.filter((item) => {
        if (item.vegetarian == false) {
          return false;
        } else {
          return true;
        }
      });
    }
    if (restriction[j] == "glutenFree") {
      product_names = product_names.filter((item) => {
        if (item.glutenFreee == false) {
          return false;
        } else {
          return true;
        }
      });
    }
    if (restriction[j] == "organic") {
      product_names = product_names.filter((item) => {
        if (item.organic == false) {
          return false;
        } else {
          return true;
        }
      });
    }
    if (restriction[j] == "lactoseFree") {
      product_names = product_names.filter((item) => {
        if (item.lactoseFree == false) {
          return false;
        } else {
          return true;
        }
      });
    }
    if (restriction[j] == "nutFree") {
      product_names = product_names.filter((item) => {
        if (item.nutFree == false) {
          return false;
        } else {
          return true;
        }
      });
    }
  }
  //from stackoverflow to ensure uniqueness of array, this entire solution is very slow https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
  product_names = product_names.filter(
    (v, i, a) => a.findIndex((t) => t.name === v.name) === i
  );

  // on how to use javascript sort https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  product_names.sort((a, b) => {
    return a.price - b.price;
  });

  return product_names;
}

function productPrice(productName) {
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].name == productName) {
      return products[i].price;
    }
  }
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < products.length; i += 1) {
    if (chosenProducts.indexOf(products[i].name) > -1) {
      totalPrice += products[i].price;
    }
  }
  return totalPrice;
}
