let dummyData = [
  {
    id: 1,
    name: "Casual Half Sleeve Tan Dress Shirt",
    price: 29.99,
    image: "../assets/tan-shirt.png",
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
    id: 4,
    name: "Black Fleece Jogger Pants",
    price: 14.99,
    image: "../assets/black-pants.png",
  },
  {
    id: 5,
    name: "Aviator Glasses - Polarized Brown",
    price: 119.99,
    image: "../assets/brown-glasses.png",
  },
  {
    id: 6,
    name: "Dark Green Cargo Pants - Flex",
    price: 33.99,
    image: "../assets/green-pants.png",
  },
  {
    id: 7,
    name: "That's Cap - Blue",
    price: 19.99,
    image: "../assets/blue-cap.png",
  },
  {
    id: 8,
    name: "Sample product eight",
    price: 19.99,
    image: "../assets/tan-shirt.png",
  },
  {
    id: 9,
    name: "Sample product nine",
    price: 19.99,
    image: "../assets/tan-shirt.png",
  },
];

let dummyDataCart = [
  {
    id: 1,
    name: "Sample product one",
    price: 29.99,
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
  },
  {
    id: 2,
    name: "Sample product two",
    price: 9.99,
    image:
      "https://cdn.shopify.com/s/files/1/0409/3031/2352/products/m-dirt-pants-product-olive-2.jpg?v=1661466657",
  },
];

let productsDisplay = document.getElementById("products");
let cartItems = document.getElementById("cartarea");

let displayItems = (dummyData, parentElement) => {
  dummyData.forEach((element) => {
    parentElement.innerHTML +=
      `<div id= ` +
      element.id +
      ` class="product-card" draggable="true" ondragstart="drag(event)">
        <img src="` +
      element.image +
      `" alt="">
        <h3>` +
      element.name +
      `</h3>
        <p>$` +
      element.price +
      `</p>
    </div>`;
  });
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var product = document.getElementById(data);
  if ((ev.target.getElementById = "cartarea")) {
    cartItems.appendChild(product);
    console.log("update cart POST call product id:", product.id);
  }
}

displayItems(dummyData, productsDisplay);
//displayItems(dummyDataCart, cartItems);
