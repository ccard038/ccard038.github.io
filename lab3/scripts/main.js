// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
  var s1 = document.getElementById(slct1);
  var s2 = document.getElementById(slct2);

  var s1 = [];
  if (document.getElementById("vegetarian").checked) {
    s1.push("vegetarian");
  }
  if (document.getElementById("glutenFree").checked) {
    s1.push("glutenFree");
  }
  if (document.getElementById("organic").checked) {
    s1.push("organic");
  }
  if (document.getElementById("lactoseFree").checked) {
    s1.push("lactoseFree");
  }
  if (document.getElementById("nutFree").checked) {
    s1.push("nutFree");
  }
  if (document.getElementById("all").checked) {
    s1.push("all");
  }
  var s2 = document.getElementById(slct2);
  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = " ";
  s2.className = "row";

  // obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, s1);

  // for each item in the array, create a checkbox element, each containing information such as:
  // <input type="checkbox" name="product" value="Bread">
  // <label for="Bread">Bread/label><br>

  for (i = 0; i < optionArray.length; i++) {
    var productName = optionArray[i].name;
    let divcontainer = document.createElement("div");
    divcontainer.className = "column";
    // image first
    let img = new Image(200, 200);
    img.src = "/lab3/images/" + productName + ".png";
    divcontainer.appendChild(img);
    divcontainer.appendChild(document.createElement("br"));

    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName;
    divcontainer.appendChild(checkbox);

    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement("label");
    label.htmlFor = productName;
    label.appendChild(
      document.createTextNode(productName + "	$" + productPrice(productName))
    );
    divcontainer.appendChild(label);

    //add container to s2
    s2.appendChild(divcontainer);
    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement("br"));
  }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {
  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById("displayCart");
  c.innerHTML = "";
  c.className = "cartDiv";

  let divcontainer = document.createElement("div");
  divcontainer.className = "columnC";

  // build list of selected item
  var para = document.createElement("P");
  para.innerHTML = "You selected : \n";
  para.appendChild(document.createElement("br"));
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      // image first
      let img = new Image(50, 50);
      img.src = "/lab3/images/" + ele[i].defaultValue + ".png";
      img.style.alignContent = "left";
      divcontainer.appendChild(img);

      //price after
      var inP = document.createElement("p");
      var text = document.createTextNode(
        ele[i].value + ": $" + productPrice(ele[i].value)
      );

      inP.appendChild(text);
      //para.append(ele[i].value + ": $" + productPrice(ele[i].value));
      // para.appendChild(document.createElement("br"));
      inP.style.textAlign = "right";
      divcontainer.appendChild(inP);
      divcontainer.appendChild(document.createElement("br"));
      chosenProducts.push(ele[i].value);
    }
    para.appendChild(divcontainer);
  }

  // add paragraph and total price
  c.appendChild(para);
  c.appendChild(
    document.createTextNode(
      "Total Price is " + "$" + getTotalPrice(chosenProducts)
    )
  );
}

//from w3 schools for accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}