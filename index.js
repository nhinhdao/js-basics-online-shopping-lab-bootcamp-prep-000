var cart = [];

function getCart() {
   return cart;
}

function setCart(c) {
   cart = c;
   return cart;
}

function addToCart(item) {
   var itemName = item;
   var itemPrice = Math.floor(Math.random()*100);
   var cartobj = {itemName : itemName, itemPrice : itemPrice};
   cart.push(cartobj);
   return `${itemName} has been added to your cart.`;
}

function viewCart() {
   var tempcart = setCart(cart);
   if (tempcart.length>0){
     for (var i = 0; i < tempcart.length; i++){
        return `In your cart, you have ${tempcart.itemName} at ${tempcart.itemPrice}`;
     }
   }
  else return `Your shopping cart is empty.`;
}

function total() {
   var tempcart = cart;
   var sum = 0;
   for (var i = 0; i < tempcart.length; i++){
     sum += tempcart[i].itemPrice;
   }
   return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

console.log(addToCart("bananas"));
console.log(addToCart("eggs"));
console.log(cart);
// var tempcart = setCart(cart);
// console.log(tempcart);
// var total1 = 0;
// for (var i = 0; i < tempcart.length; i++){
//   total1 += tempcart[i].itemPrice;
// }
// // total1 += tempcart.itemPrice;
// console.log(total1);
