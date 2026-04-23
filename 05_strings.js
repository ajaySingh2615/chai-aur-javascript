const codeName = "Shawdow Fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "A";
console.log(intercepted); // slient fail

const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(0));
console.log(secretCode.charAt(1));
console.log(secretCode.at(-1));
console.log(secretCode.charAt(99));
console.log(secretCode.at(99));
console.log(secretCode[0]);
console.log(secretCode[99]);

const rawTransmission = "The Eagle is landed";
console.log(rawTransmission.toUpperCase());
console.log(rawTransmission.toLowerCase());

const message = "The drop point is at dock 7. Repeat: Dock 7";
console.log(message.indexOf("Dock"));
console.log(message.includes("Dock"));
console.log(message.slice(0, 12));

const orders = "move-noth|hold-position|extract-vip";
orderList = orders.split("|");
console.log("Split: ", orderList);

const myDataValue = "SOS".split();
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = "42";
console.log(missionNumber.padStart(6, "x"));

// const profile = `
//     ${checker ? "true-value" : "false-value"}
// `;

// Tagged Template Literal

console.log(void "hitesh");

let generalStore = { name: "Kirana store", goods: 2 };
console.log(generalStore);
generalStore = null;
console.log(generalStore);
