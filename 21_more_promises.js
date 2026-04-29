// console.log("Swastik");
// Promise.resolve("resolved value").then((v) => {
//   console.log("MicroTask ", v);
// });
// console.log("Avishek");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("krte hai ji boil");
    if (typeof ms !== "number" || ms < 0) {
      rej(new Error("ms must be in number and greater than zero"));
    }

    setTimeout(() => {
      res("ubal gaya");
    }, ms);
  });
}

boilWater(200)
  .then((msg) => {
    console.log("Resolved: ", msg);
  })
  .catch((error) => {
    console.log("Rejected: ", error.message);
  });

function gridLeaves() {
  return Promise.resolve("Leaves grounded");
}

function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => res("Steeped tea"), time);
  });
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}

gridLeaves().then((val) => console.log);
