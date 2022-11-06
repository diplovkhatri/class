test_array = ["apple", "banana", "orange", "mango"];
const show = () => {
  setTimeout(() => {
    test_array.map((item) => document.write(`<ul><li>${item}</li></ul>`));
  }, 3000);
  document.write("<br>");
};
// callback function use
// const add = (callback) => {
//   setTimeout(() => {
//     test_array.push("grapes");
//     callback();
//   }, 4000);
// };
// promiss function

const add = () => {
  let error = false;
  return (Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      test_array.push("grapes");
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  }));
};

// call back function==pass the second function inside the first dunction
// promiss ->.then(success function).catch(fail function)
// async await
