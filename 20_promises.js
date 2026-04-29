// pending, done(fulfill, resolve), nope(not, reject, nako)
//

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("chaicode");
    reject(new Error("chaicode"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

const myFunction = (data) => {
  console.log(data);
};

promise
  .then((data) => {
    newData = data.toUpperCase();
    return newData;
  })
  .then((data) => {
    return data + ".com";
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "chai";
  })
  .then(console.log);

  */

const turant = Promise.resolve("Turant");
console.log(turant);

const allPromise = Promise.allSettled([
  Promise.resolve("chai"),
  Promise.resolve("code"),
  Promise.reject("Error"),
]);

// allPromise.then(console.log);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("No Masterji"));
  }, 3000);
});

async function nice() {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

nice();

// const newResult = await hPromise;
// console.log(newResult);
