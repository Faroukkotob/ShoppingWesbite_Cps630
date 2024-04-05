let dummyDataCart = [
  {
    id: 2,
    name: "Green Zip-up Lounge Hoodie - Slim Fit",
    price: 19.99,
    image: "../assets/green-hoodie.png",
  },
  {
    id: 3,
    name: "Running Shoe - Flex Series",
    price: 64.99,
    image: "../assets/red-shoe.png",
  },
  {
    id: 2,
    name: "Green Zip-up Lounge Hoodie - Slim Fit",
    price: 19.99,
    image: "../assets/green-hoodie.png",
  },
  {
    id: 3,
    name: "Running Shoe - Flex Series",
    price: 64.99,
    image: "../assets/red-shoe.png",
  },
  {
    id: 2,
    name: "Green Zip-up Lounge Hoodie - Slim Fit",
    price: 19.99,
    image: "../assets/green-hoodie.png",
  },
  {
    id: 3,
    name: "Running Shoe - Flex Series",
    price: 64.99,
    image: "../assets/red-shoe.png",
  },
];

const shoppingCart = document.getElementById("cart-content");
const subtotalElement = document.getElementById("subtotal");
const shippingCostsElement = document.getElementById("shippingcosts");
const salesTaxElement = document.getElementById("salestax");
const totalElement = document.getElementById("total");
let subtotal = 0;
let shippingCost = 0;
let salesTax = 0;
let total = 0;

const displayCartItems = (data, parentElement) => {
  data.forEach((element) => {
    parentElement.innerHTML +=
      `<div id= ` +
      element.id +
      ` class="product-card">
            <img src=` +
      element.image +
      ` alt="product" width="15%" height="auto">
            <p>` +
      element.name +
      `</p>
            <div class="flex-col align-center">
                <p><strong>$` +
      element.price +
      `</strong></p>
                <button 
                    type="button"
                    onclick="removeItem(this.parentNode.parentNode)"
                >
                    <img src="../assets/bin.png" alt="delete" width="30px" height="30px">
                </button>
            </div>
        </div>`;
  });
};

const removeItem = (element) => {
  element.remove();
  //Remove from cart
  console.log("Remove from cart product id:", element.id);
};

const calculatCosts = (data) => {
  data.forEach((element) => {
    subtotal += element.price;
  });

  salesTax = subtotal * 0.13;
  shippingCost = subtotal > 0 ? 12.99 : 0;
  total = subtotal + salesTax + shippingCost;
};

const displayCosts = () => {
  console.log(
    subtotal.toFixed(2),
    salesTax.toFixed(2),
    shippingCost.toFixed(2),
    total.toFixed(2)
  );

  subtotalElement.innerHTML = "$" + subtotal.toFixed(2);
  shippingCostsElement.innerHTML = "$" + shippingCost.toFixed(2);
  salesTaxElement.innerHTML = "$" + salesTax.toFixed(2);
  totalElement.innerHTML = "<strong>$" + total.toFixed(2);
  +"</strong>";
};

displayCartItems(dummyDataCart, shoppingCart);
calculatCosts(dummyDataCart);
displayCosts();
