var cart = [];

function getCart() {
   return cart;
}

function setCart(c) {
   cart = c;
   return cart;
}

function addToCart(item) {
   cart.itemName = item;
   cart.itemPrice = Math.floor(Math.random()*100);
   return `${itemName} has been added to your cart`;
}

function viewCart() {
   if (cart.length>0){
     for (var i = 0; i < cart.length; i++){
        return `In your cart, you have ${itemName} at ${itemPrice}`;
     }
   }
  else return `Your shopping cart is empty.`;
}

function total() {
   var sum = 0;
   for (var i = 0; i < cart.length; i++){
     sum += itemPrice[i];
   }
   return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
