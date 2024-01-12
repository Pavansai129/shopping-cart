const productsData = [
  {
    id: 1,
    name: "Harper Dining & Study Chair",
    image: "./assets/images (1).jpeg",
    price: 8000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Armchair, Kilanda light beige",
    image: "./assets/images (2).jpeg",
    price: 20000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Cafe chairs",
    image: "./assets/images (3).jpeg",
    price: 10000,
    quantity: 1,
  },
  {
    id: 4,
    name: "Wicker papason chair",
    image: "./assets/images (9).jpeg",
    price: 9000,
    quantity: 1,
  },
  {
    id: 5,
    name: "sky homes arm chair",
    image: "./assets/images (5).jpeg",
    price: 15000,
    quantity: 1,
  },
  {
    id: 6,
    name: "Seesham wood wing chair",
    image: "./assets/images (6).jpeg",
    price: 18000,
    quantity: 1,
  },
  {
    id: 7,
    name: "Designer chair",
    image: "./assets/images (7).jpeg",
    price: 11000,
    quantity: 1,
  },
  {
    id: 8,
    name: "Hardwood wing chair",
    image: "./assets/images (8).jpeg",
    price: 13000,
    quantity: 1,
  },
];

let cartData = [];

const productCardsSection = document.getElementById("productCardsSection");
const cartSection = document.getElementById("cartSection");
const cartProducts = document.getElementById("cartProducts");
const clearCart = document.getElementById("clearCart");
const cartSummry = document.getElementById("cartSummry");

clearCart.addEventListener("click", () => clearCartData());

function clearCartData() {
  cartProducts.textContent = "Your cart is Empty";
}

function createAndAppendProductCards(data) {
  for (let each of data) {
    const productCard = document.createElement("li");
    productCard.classList.add("product-card");
    productCardsSection.appendChild(productCard);

    const productImage = document.createElement("img");
    productImage.setAttribute("src", each.image);
    productImage.classList.add("product-image");
    productCard.appendChild(productImage);

    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.classList.add("products-details-container");
    productCard.appendChild(productDetailsContainer);

    const productNameAndPriceContainer = document.createElement("div");
    productDetailsContainer.appendChild(productNameAndPriceContainer);

    const productName = document.createElement("p");
    productName.textContent = each.name;
    productName.classList.add("product-name");
    productNameAndPriceContainer.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + each.price;
    productPrice.classList.add("product-price");
    productNameAndPriceContainer.appendChild(productPrice);

    const addToCartButton = document.createElement("div");
    addToCartButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    addToCartButton.classList.add("add-to-cart-button");
    productDetailsContainer.appendChild(addToCartButton);

    addToCartButton.addEventListener("click", () => addCartItem(each));
  }
}

function createAndAppendProductCardsToCart(data) {
  cartProducts.textContent = "";
  for (let each of data) {
    const productCard = document.createElement("li");
    productCard.classList.add("product-card");
    cartProducts.appendChild(productCard);

    const productImage = document.createElement("img");
    productImage.setAttribute("src", each.image);
    productImage.classList.add("product-image");
    productCard.appendChild(productImage);

    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.classList.add("products-details-container");
    productCard.appendChild(productDetailsContainer);

    const productNameAndPriceContainer = document.createElement("div");
    productDetailsContainer.appendChild(productNameAndPriceContainer);

    const productName = document.createElement("p");
    productName.textContent = each.name;
    productName.classList.add("product-name");
    productNameAndPriceContainer.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + each.price;
    productPrice.classList.add("product-price");
    productNameAndPriceContainer.appendChild(productPrice);

    const removeItem = document.createElement("button");
    removeItem.textContent = "Rremove Item";
    removeItem.classList.add("add-to-cart-button");
    productDetailsContainer.appendChild(removeItem);

    removeItem.addEventListener("click", () => removeCartItem(each));
  }
}

function addCartItem(product) {
  const productObject = cartData.find(
    (eachcartItem) => eachcartItem.id === product.id
  );

  if (productObject === undefined) {
    cartData.push(product);
  } else {
    let newCartList = cartData.map((each) => {
      if (each.id === product.id) {
        return { ...each, quantity: each.quantity + 1 };
      } else {
        return each;
      }
    });
    cartData = newCartList;
  }
  console.log(cartData);
  createAndAppendProductCardsToCart(cartData);
  renderCartSummery();
}

function removeCartItem(product) {
  const filteredData = cartData.filter((each) => each.id !== product.id);
  cartData = filteredData;
  console.log(cartData);
  createAndAppendProductCardsToCart(filteredData);
  renderCartSummery();
}

function renderCartSummery() {
  cartSummry.textContent = "";
  const title = document.createElement("h1");
  title.textContent = "Cart Summary";
  cartSummry.appendChild(title);
  const totalPrice = document.createElement("p");
  let price = 0;
  cartData.forEach((each) => (price += each.price * each.quantity));
  totalPrice.textContent = "Total Price:  $" + price;
  totalPrice.classList.add("product-card");
  cartSummry.appendChild(totalPrice);
  const averagePrice = document.createElement("p");
  let averPrice = 0;
  console.log("price:", price);
  if (price !== 0) {
    averPrice = parseInt(price / cartData.length);
  }
  console.log(averPrice);
  averagePrice.textContent = "Average Price:  $" + averPrice;
  averagePrice.classList.add("product-card");
  cartSummry.appendChild(averagePrice);
}

createAndAppendProductCards(productsData);
renderCartSummery();
