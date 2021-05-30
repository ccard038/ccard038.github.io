// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
  {
    name: "brocoli",
    vegetarian: true,
    glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    price: 1.99,
  },
  {
    name: "bread",
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
// There is for sure a better way of doing this than copy and pasting the same code for different condtions, however I'm doing this quick and dirty.

function restrictListProducts(prods, restriction) {
  let product_names = [];

  for (let i = 0; i < prods.length; i++) {
    if (restriction == "vegetarian" && prods[i].vegetarian == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "glutenFree" && prods[i].glutenFree == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "organic" && prods[i].organic == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "lactoseFree" && prods[i].lactoseFree == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "nutFree" && prods[i].nutFree == true) {
      product_names.push(prods[i].name);
    } else if (restriction == "all") {
      product_names.push(prods[i].name);
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
