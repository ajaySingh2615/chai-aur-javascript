const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "Volcanic Glass",
};

console.log(Object.keys(artifact));
console.log(Object.values(artifact));
console.log(Object.entries(artifact));

for (const [key, value] of Object.entries(artifact)) {
  console.log(key, value);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObj = Object.fromEntries(priceList);
console.log(priceObj);

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);
delete displayCase.locked;
displayCase.newProp = "Test";

console.log(displayCase);

const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};

Object.seal(catalogEntry);

const secureArtificats = { name: "Ruby Pendant" };
Object.defineProperty(secureArtificats, "catelogId", {
  value: "SEC-999",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(secureArtificats.catelogId);
secureArtificats.catelogId = "hacked";
console.log(secureArtificats.catelogId);

for (const [key, value] of Object.entries(secureArtificats)) {
  console.log(key, value);
}
