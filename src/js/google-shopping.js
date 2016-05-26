var data = require('../products.json');

// Write your solutions below

/*
//one solution to question 1
var count = 0;

for (var i = 0; i < data.items.length; i++) {
  if(data.items[i].kind === "shopping#product") {
    count++;
  }
}
console.log(count);
*/

/*
//second solution to question 1
var counter = 0;
for (var i = 0; i < data.items.length; i++) {
 //console.log(data.items[i].kind.includes("shopping#product"));
 if (data.items[i].kind.includes("shopping#product")) {
     counter++;
 }

}
console.log(counter);
*/

/*
// Deliverable 2
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.inventories[0].availability === 'backorder') {
  console.log(data.items[i].product.title);
}
}
*/

/*
// Deliverable 3
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.images.length > 1) {
  console.log(data.items[i].product.title);
}
}
*/

/*
// Deliverable 4
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.brand === 'Canon') {
  console.log(data.items[i].product);
}
}
*/

/*
// Deliverable 5
for (var i = 0; i < data.items.length; i++) {
if ((data.items[i].product.author.name.includes('eBay')) &&
(data.items[i].product.brand === 'Canon')) {
  console.log(data.items[i]);
}
}
*/


/*
// Deliverable 6
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product) {
console.log(data.items[i].product.brand)
console.log(data.items[i].product.inventories[0].price)
console.log(data.items[i].product.images[0].link)
}
}
*/

