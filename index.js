var cart = [];

function getCart() {
   // card = new Object((itemName : itemPrice));
   return cart;
}

function setCart(c) {
   cart = c;
   return cart;
}

function addToCart(item) {
   var cartobj = new Object((itemName : itemPrice));
   cartobj.itemName = item;
   cartobj.itemPrice = Math.floor(Math.random()*100);
   cart.push(item);
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
