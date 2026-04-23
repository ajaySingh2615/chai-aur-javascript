const orders = [
  { dish: "Butter Chicken", price: 350, spicy: false, qty: 2 },
  { dish: "Chana Masala", price: 280, spicy: true, qty: 1 },
  { dish: "Biryani", price: 450, spicy: true, qty: 3 },
  { dish: "Samosa", price: 80, spicy: true, qty: 6 },
  { dish: "Paneer Tikka", price: 320, spicy: false, qty: 2 },
  { dish: "Dal Makhani", price: 300, spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
  console.log(` #${index + 1} : ${order.qty}x ${order.dish}`);
});

console.log(myData);

const recieptLines = orders.map((o) => `${o.dish}: ${o.price * o.qty}`);
console.log(recieptLines);

const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.qty * order.price;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    console.log("category: ", category);

    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);
console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
const sortedW = [...ticketNumbers].sort((a, b) => a - b);
console.log(sortedW);

const kitchenOrders = [
  { dish: "Butter Chicken", price: 350, spicy: false, qty: 2 },
  { dish: "Chana Masala", price: 280, spicy: true, qty: 1 },
  { dish: "Biryani", price: 450, spicy: true, qty: 3 },
  { dish: "Samosa", price: 80, spicy: true, qty: 6 },
  { dish: "Paneer Tikka", price: 320, spicy: false, qty: 2 },
  { dish: "Dal Makhani", price: 300, spicy: false, qty: 1 },
];

const mildReport = kitchenOrders
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price * order.qty,
  }));
