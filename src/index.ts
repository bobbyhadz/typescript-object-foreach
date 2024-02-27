export {};

// EXAMPLE 1 - Iterating over an Object with forEach() in TypeScript

const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
};

(Object.keys(obj) as (keyof typeof obj)[]).forEach((key, index) => {
  // 👇️ name Bobby Hadz 0, country Chile 1
  console.log(key, obj[key], index);
});

// ---------------------------------------------------

// // EXAMPLE 2 - Iterating over an Object's entries with forEach()

// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// Object.entries(obj).forEach(([key, value], index) => {
//   // name Bobby Hadz 0
//   // country Chile 1
//   console.log(key, value, index);
// });

// ---------------------------------------------------

// // EXAMPLE 3 - Iterating over an Object's values with forEach()

// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// Object.values(obj).forEach((value, index) => {
//   // Bobby Hadz 0
//   // Chile 1
//   console.log(value, index);
// });
