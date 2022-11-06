let fruits = ["apple", "mango", "orange", "banana", "pear", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  document.write("<li>" + fruits[i] + "</li>");
}
document.write(`<br>`);
fruits.forEach((iteam, i) => {
  document.write(`<h3><li>${i + 1}. ${iteam.toLocaleUpperCase()}</li></h3>`);
});
document.write(`<br>`);

fruits.map((iteam, i) => {
  document.write(`<h3><li>${i + 1}. ${iteam.toLowerCase()}</li></h3>`);
});

// filter provides all outcome as array
// it provide empety array if condition is not match

fruits = fruits.filter((iteam) => iteam.match("a"));
document.write(fruits);
// find return onlu one value
// return undefined if condition is not matched
document.write(`<br>`);

fruit = fruits.find((iteam) => iteam.match("a"));
document.write(fruit);

// some ,all returns boolean value

results = fruits.some((iteam) => iteam.match("a"));
document.write(results);

number = [1, 2, 3, 4, 2, 1, 3, 5, 78, 9, 7, 6, 555];
num = number.sort();
num.forEach((iteam) => document.write(`<li>${iteam}</li>`));
document.write("<br>");
num.forEach((iteam, i) => document.write(`<li>${i + 1}. ${iteam}</li>`));
document.write("<br>");

result=num.filter(item=>item<5)
document.write(result)
