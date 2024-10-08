// this Procedural programming
// procedure = a set of step-by-step instructions;
// set of step-by-step instruction and this is basically a function so in procedural programming we organize our code into separate.

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach( (cartItem) =>{
   if (productId === cartItem.productId) {
     matchingItem = cartItem;
   }
  })

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
   matchingItem.quantity += quantity;
  } else {
   cart.push({
     productId,
     quantity,
     deliveryOptionId: '1'
    })

  }
  
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach( (cartItem) =>{
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage()
}


export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}


export function updateDeliveryOptions(productId, deliveryOptionId) {
  let matchingItem; 

  cart.forEach( (cartItem) =>{
   if (productId === cartItem.productId) {
     matchingItem = cartItem;
   }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    console.log(xhr.response);
    
      fun()
  })
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}