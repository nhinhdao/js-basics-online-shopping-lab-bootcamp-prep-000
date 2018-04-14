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
   var arrayitemprice = [];
   if (cart.length>0){
     for (var i = 0; i < cart.length; i++){
        if ( i === cart.length - 1){
           console.log(i);
           arrayitemprice[i] = "and" + cart[i].itemName + " at " + cart[i].itemPrice + '.';
        }
        console.log(i);
        else arrayitemprice[i] = cart[i].itemName + " at " + cart[i].itemPrice + ',';
        console.log(i);

        return `In your cart, you have ${arrayitemprice}`;
     }
   }
  else return `Your shopping cart is empty.`;
}

function total() {
   var sum = 0;
   for (var i = 0; i < cart.length; i++){
     sum += cart[i].itemPrice;
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
console.log(viewCart());
