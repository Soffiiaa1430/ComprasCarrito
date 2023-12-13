
const openShopping = document.querySelector(".shopping"),
closeShopping = document.querySelector(".closeShopping"),
body = document.querySelector("body"),
list = document.querySelector(".listCard"),
listCard = document.querySelector(".listCard"),
total = document.querySelector(".total"),
quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
body.classList.remove("active");
});

const products = [
    { id: "product-01", product: "Q&Q", price: 25000, image: "./images/reloj1-s.png", "data-category": "Caballero",quantity:10 },
    { id: "product-02", product: "Fossil", price: 200000, image: "./images/relojD1-s.png", "data-category": "Dama",quantity:9 },
    { id: "product-03", product: "Citizen", price: 15499, image: "./images/reloj2-s.jpg", "data-category": "Caballero",quantity:12  },
    { id: "product-04", product: "MVMT", price: 29499, image: "./images/relojD2-s.png", "data-category": "Dama",quantity:5},
    { id: "product-05", product: "Tommy Hilfige", price: 25499, image: "./images/reloj3-s.png", "data-category": "Caballero",quantity:9  },
    { id: "product-06", product: "Guess Caliber", price: 10000, image: "./images/relojD3-s.png", "data-category": "Dama" ,quantity:7 },
    { id: "product-07", product: "Loix", price: 46499, image: "./images/reloj4-s.png", "data-category": "Caballero",quantity:3},
    { id: "product-08", product: "Basement", price: 80000, image: "./images/relojD4-s.png", "data-category": "Dama",quantity:8},
    { id: "product-09", product: "Yess", price: 30000, image: "./images/reloj5-s.jpg", "data-category": "Caballero",quantity:7},
    { id: "product-10", product: "MVMT", price: 100000, image: "./images/relojD5-s.png", "data-category": "Dama",quantity:4},
    { id: "product-11", product: "Casio", price: 20000, image: "./images/reloj6-s.png", "data-category": "Caballero",quantity:14},
    { id: "product-12", product: "Tommy Hilfige", price: 9800, image: "./images/relojD6-s.png", "data-category": "Dama",quantity:3},
    { id: "product-13", product: "Guess Caliber", price: 70499, image: "./images/reloj7-s.png", "data-category": "Caballero",quantity:20 },
    { id: "product-14", product: "Loix", price: 50000, image: "./images/relojD7-s.png", "data-category": "Dama",quantity:3},
    { id: "product-15", product: "Basement", price: 5000, image: "./images/reloj8-s.png", "data-category": "Caballero" ,quantity:10},
    { id: "product-16", product: "Yess", price: 90000, image: "./images/relojD8-s.png", "data-category": "Dama",quantity:11 },
    { id: "product-17", product: "MVMT", price: 40000, image: "./images/reloj9-s.png", "data-category": "Caballero" ,quantity:8},
    { id: "product-18", product: "Casio", price: 150000, image: "./images/relojD9-s.png", "data-category": "Dama",quantity:4 },
    { id: "product-19", product: "Tommy Hilfige", price: 20000, image: "./images/reloj10-s.png", "data-category": "Caballero",quantity:4 },
    { id: "product-20", product: "Citizen", price: 150000, image: "./images/relojD10-s.png", "data-category": "Dama",quantity:9},
    { id: "product-21", product: "Tommy Hilfige", price: 70000, image: "./images/reloj11-s.png", "data-category": "Caballero",quantity:2 },
    { id: "product-22", product: "MVMT", price: 15000, image: "./images/relojD11-s.png", "data-category": "Dama",quantity:8 },
    { id: "product-23", product: "Guess Caliber", price: 15000, image: "./images/reloj12-s.png.png", "data-category": "Caballero",quantity:5 },
    { id: "product-24", product: "Loix", price: 12000, image: "./images/relojD12-s.png", "data-category": "Dama",quantity:7},
    { id: "product-25", product: "Citizen", price: 28000, image: "./images/reloj13-s.png", "data-category": "Caballero" ,quantity:4},
    { id: "product-26", product: "Tommy Hilfige", price: 100000, image: "./images/relojD13-s.png", "data-category": "Dama",quantity:8 },
    { id: "product-27", product: "Casio", price: 20000, image: "./images/reloj14-s.png", "data-category": "Caballero",quantity:23},
    { id: "product-28", product: "MVMT", price: 50000, image: "./images/relojD14-s.png", "data-category": "Dama" ,quantity:7},
    { id: "product-29", product: "Basement", price: 30000, image: "./images/reloj15-s.png", "data-category": "Caballero" },
    { id: "product-30", product: "Guess Caliber", price: 100000, image: "./images/relojD15-s.png", "data-category": "Dama" ,quantity:6},

];


let listCards = [];

const initApp = () => {
products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.setAttribute("data-category", value['data-category']);

    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");

    let cardImgDiv = document.createElement("div");
    cardImgDiv.classList.add("card-img");
    let img = document.createElement("img");
    img.classList.add("img3");
    img.src = value.image
    img.alt = value.product
    cardImgDiv.appendChild(img);

    let cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");
    let titleP = document.createElement("p");
    titleP.classList.add("text-title");
    titleP.textContent = value.product;
    let descriptionP = document.createElement("p");
    descriptionP.classList.add("text-body");
    descriptionP.textContent = "Product description and details";
    cardInfoDiv.appendChild(titleP);
    cardInfoDiv.appendChild(descriptionP);

    let cardFooterDiv = document.createElement("div");
    cardFooterDiv.classList.add("card-footer");

    let carddDiv = document.createElement("div");
    carddDiv.classList.add("cardd");
    let priceSpan = document.createElement("span");
    priceSpan.classList.add("text-title");
    priceSpan.textContent = "$" + value.price.toLocaleString() + " COP";
    let cardButtonDiv = document.createElement("div");
    cardButtonDiv.classList.add("card-button");
    let button = document.createElement("button");
    button.classList.add("addCart");
    let imgButton = document.createElement("img");
    imgButton.classList.add("imgsize");
    imgButton.src = "image/carrito-de-compras.png";
    button.appendChild(imgButton);
    cardButtonDiv.appendChild(button);
    carddDiv.appendChild(priceSpan);
    carddDiv.appendChild(cardButtonDiv);

    let cDiv = document.createElement("div");
    cDiv.classList.add("c");
    let sizeP = document.createElement("p");
    sizeP.id = "size";
    sizeP.textContent = "Disponible: " + (value.quantity - (listCards[key]?.quantity || 0));
    let spanAvailable = document.createElement("span");
    spanAvailable.classList.add("disponibles");
    spanAvailable.setAttribute("data-id", value.id);
    let sizeCategoryDiv = document.createElement("div");
    sizeCategoryDiv.classList.add("sizeCategory");
    sizeCategoryDiv.textContent = "Category: " + value['data-category'];
    sizeP.appendChild(spanAvailable);
    cDiv.appendChild(sizeP);
    cDiv.appendChild(sizeCategoryDiv);

    newDiv.appendChild(boxDiv);
    boxDiv.appendChild(cardImgDiv);
    boxDiv.appendChild(cardInfoDiv);
    boxDiv.appendChild(cardFooterDiv);
    cardFooterDiv.appendChild(carddDiv);
    cardFooterDiv.appendChild(document.createElement("br"));
    cardFooterDiv.appendChild(document.createElement("br"));
    cardFooterDiv.appendChild(cDiv);


  newDiv.addEventListener("click", () => addToCart(key)); // Agregar evento de clic para agregar al carrito

  list.appendChild(newDiv);
});
};
const updateAvailability = () => {
    document.querySelectorAll('.card').forEach((card, key) => {
        const productId = card.querySelector('.disponibles').getAttribute('data-id');
        const availableSpan = card.querySelector('.disponibles');
        availableSpan.textContent = "Disponible: " + (products[key].quantity - (listCards[key]?.quantity || 0));
    });
};

const addToCart = key => {
    const productId = products[key].id;
    const cartIndex = listCards.findIndex(product => product && product.id === productId);

    if (cartIndex === -1) {
        // Si el producto no está en el carrito, agréguelo con una cantidad de 1
        listCards.push({
            ...JSON.parse(JSON.stringify(products[key])),
            quantity: 1
        });
    } else {
        const selectedQuantity = listCards[cartIndex].quantity + 1;

        if (selectedQuantity <= products[key].quantity) {
            listCards[cartIndex].quantity = selectedQuantity;

            // Restar del stock disponible
            products[key].quantity -= selectedQuantity - listCards[cartIndex].quantity;

            // Actualizar el contador del carrito
            const cartQuantity = document.getElementById("cartQuantity");
            cartQuantity.textContent = parseInt(cartQuantity.textContent) + 1;
        } else {
            alert("¡No hay suficiente stock!");
            return; // Salir de la función si no hay suficiente stock
        }
    }

    reloadCard();
    updateAvailability();
};
 

function displayProducts(productArray) {
    const container = document.getElementById("products-container");
  
    // Limpiar el contenedor actual
    container.innerHTML = "";

    productArray.forEach(product => {
        const card = createCard(product);
        container.appendChild(card);
    });
}
function sortProducts(order) {
    const sortedProducts = products.slice().sort((a, b) => {
        return order === 'desc' ? b.price - a.price : a.price - b.price;
    });

    displayProducts(sortedProducts);
}


const reloadCard = () => {
    const listCard = document.getElementById("listCard");
  
    // Limpiar el contenido actual de listCard
    listCard.innerHTML = "";
  
    // Actualizar listCard con los productos seleccionados
    listCards.forEach((product, key) => {
        const listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerHTML = `
          <img class="img3" src="${product.image}" alt="${product.product}">
          <div class="text-title">${product.product}</div>
          <div class="text-title" quantity="${product.quantity}">${product.price.toLocaleString()} COP</div>
          <div>
            <button style="background-color:#4a0b0c;" class="cardButton" onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
            <div class="count">${product.quantity}</div>
            <button style="background-color:#4a0b0c;" class="cardButton" onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
          </div>
        `;
      
        listCard.appendChild(listItem);
    });
  
    // Actualizar la cantidad y el total en el carrito de compras
    const cartQuantity = document.getElementById("cartQuantity");
    cartQuantity.textContent = listCards.length;
  
    const cartTotal = listCards.reduce((total, product) => total + product.price, 0);
    const totalElement = document.querySelector(".total");
    totalElement.textContent = "$" + cartTotal.toLocaleString() + " COP";
  };
  

const changeQuantity = (key, quantity) => {
    const product = listCards[key];
    const originalQuantity = products[key].quantity;

    // Verificar si la nueva cantidad está dentro del stock disponible y la cantidad original
    if (quantity >= 0 && quantity <= originalQuantity) {
        // Restar del stock disponible la diferencia entre la nueva cantidad y la cantidad original
        products[key].quantity -= quantity - listCards[key].quantity;

        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

        // Actualizar el modal y el carrito
        reloadCard();

        // Actualizar el contador del carrito
        const cartQuantity = document.getElementById("cartQuantity");
        cartQuantity.textContent = listCards.length;
    } else {
        alert(`La cantidad debe estar entre 0 y ${originalQuantity}`);
    }
};



initApp();