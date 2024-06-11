// object-Oriented Programming(OOP)
//Programming we organize all of this code; into an object so we put everything.



function Cart(localStorageKey) {
  
  const cart = {
    cartItems: undefined,
   
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [
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
    },
  
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
  addToCart(productId) {
      let matchingItem;
    
      this.cartItems.forEach( (cartItem) =>{
       if (productId === cartItem.productId) {
         matchingItem = cartItem;
       }
      })
    
    
      if (matchingItem) {
       matchingItem.quantity += 1;
      } else {
       this.cartItems.push({
         productId: productId,
         quantity: 1,
         deliveryOptionId: '1'
        })
    
      }
      
      this.saveToStorage();
    },
  
  removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach( (cartItem) =>{
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },
  
  updateQuantity(productId, newQuantity) {
      let matchingItem;
    
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      matchingItem.quantity = newQuantity;
    
      this.saveToStorage();
    },
  
   calculateCartQuantity() {
      let cartQuantity = 0;
    
      this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
    
      return cartQuantity;
    },
  
  updateDeliveryOptions(productId, deliveryOptionId) {
      let matchingItem;
    
      this.cartItems.forEach( (cartItem) =>{
       if (productId === cartItem.productId) {
         matchingItem = cartItem;
       }
      });
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }
  }
  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();

businessCart.loadFromStorage();
// const businessCart = {
//   cartItems: undefined,

//   loadFromStorage() {
//     this.cartItems = JSON.parse(localStorage.getItem('cart-business')) || [
//       {
//         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity: 2,
//         deliveryOptionId: '1'
//       }, {
//         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         quantity: 1,
//         deliveryOptionId: '2'
//       }
//     ];
//   },

//   saveToStorage() {
//     localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
//   },

// addToCart(productId) {
//     let matchingItem;
  
//     this.cartItems.forEach( (cartItem) =>{
//      if (productId === cartItem.productId) {
//        matchingItem = cartItem;
//      }
//     })
  
  
//     if (matchingItem) {
//      matchingItem.quantity += 1;
//     } else {
//      this.cartItems.push({
//        productId,
//        quantity: 1,
//        deliveryOptionId: '1'
//       })
  
//     }
    
//     this.saveToStorage();
//   },

// removeFromCart(productId) {
//     const newCart = [];
//     this.cartItems.forEach( (cartItem) =>{
//       if (cartItem.productId !== productId) {
//         newCart.push(cartItem);
//       }
//     });
  
//     this.cartItems = newCart;
  
//     this.saveToStorage();
//   },

// updateQuantity(productId, newQuantity) {
//     let matchingItem;
  
//     this.cartItems.forEach((cartItem) => {
//       if (productId === cartItem.productId) {
//         matchingItem = cartItem;
//       }
//     });
  
//     matchingItem.quantity = newQuantity;
  
//     this.saveToStorage();
//   },

//  calculateCartQuantity() {
//     let cartQuantity = 0;
  
//     this.cartItems.forEach((cartItem) => {
//       cartQuantity += cartItem.quantity;
//     });
  
//     return cartQuantity;
//   },

// updateDeliveryOptions(productId, deliveryOptionId) {
//     let matchingItem;
  
//     this.cartItems.forEach( (cartItem) =>{
//      if (productId === cartItem.productId) {
//        matchingItem = cartItem;
//      }
//     });
  
//     matchingItem.deliveryOptionId = deliveryOptionId;
  
//     this.saveToStorage();
//   }
// }

//cart.loadFromStorage();

//businessCart.loadFromStorage();

cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e')
console.log(cart);
console.log(businessCart);

//IMPORTANT: Why do we use Object-Oriented Programming?
// Answer: Object-Oriented Programming = tries to represent the real world.

//IMPORTANT: Another reason to use Object-Oriented Programming is it's Easy to create multiple objects.




