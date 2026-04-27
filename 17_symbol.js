const aadharOfMayur = Symbol("aadhar");
const aadharOfPiyush = Symbol("aadhar");

console.log(typeof aadharOfMayur);
console.log(aadharOfMayur === aadharOfPiyush);
console.log(aadharOfMayur.toString());
console.log(aadharOfMayur.description);

const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecords = {
  name: "Ved Pandey",
  age: 21,
  [biometricHash]: "a7jeudh8dd6",
  [bloodGroup]: "O+",
};
console.log(Object.keys(citizenRecords));
console.log(Object.getOwnPropertySymbols(citizenRecords));

const rtiQueryBook = {
  queries: ["Infra budget", "Ration Card", "Education budget", "Startups laws"],
  [Symbol.iterator]() {
    let index = 0;
    const queries = this.queries;
    return {
      next() {
        if (index < queries.length) {
          return {
            value: queries[index++],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const query of rtiQueryBook) {
  console.log(`Filing RTI: ${query}`);
}

const governmentScheme = {
  name: "PM Kisan Yojna",
  people: 54,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.name;
  },
};
console.log(+governmentScheme);
console.log(`${governmentScheme}`);
