// call and apply => basic chef (kitchen)
// bind => return a new functions

function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style!`;
}

const sharmaKitchen = { name: "Sharma Ji's Kitchen" };
const guptaKitchen = { name: "Gupta Ji's Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Muglai"));

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"];
console.log(cookDish.apply(guptaKitchen, guptaOrder));

function reportDelivery(location, status) {
  return `${this.name} at ${location}: ${status}`;
}

console.log("--------------");

const deliveryBoy = { name: "Ranveer" };
console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick Up"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT"));

const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT");
console.log(bindReport());
