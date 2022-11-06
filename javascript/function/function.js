// function display() {
//   document.write("write");
// }
function displaytime() {
  document.getElementById("myheading").innerHTML = new Date();
}

// function add() {
//   let a = 5;
//   let b = 18;
//   document.write("sum= " + (a + b));
// }
// // with parameters without return
// function add2(m,n){
//     document.write("sum="+(m+n))
// }
// // with return without params

// function add3(){
//     let a=10
//     let b=10
//     return (a+b)
// }
// function call_add(){
//     let c=add3()
//     document.write("sum="+c)
// }
// // with params and return
// function add4(x,y){
// return (x+y)
// }
// function call_add4(m,n){
//     let z=add4(m,n)
//     document.write("sum = "+z)
// }

// arrow function
// const mul=(parameters)=>{
// statement
// return
// }
const add = () => {
  let a = 10;
  let b = 10;
  document.write("add = " + (a + b));
};
// // with parameters without return
const add2 = (m, n) => {
  document.write("sum=" + (m + n));
};

const add3 = () => {
  let a = 10;
  let b = 10;
  return a + b;
};
const call_add = () => {
  let c = add3();
  document.write("sum=" + c);
};
const call_add4 = () => {
  let x = document.getElementById("num").value;
  document.getElementById("result").innerHTML = x * x;
};
// const call_add4 = (m, n) => {
//   let z = add4(m, n);
//   document.write("sum = " + z);
// };
// advantage of arrow function
// no nedd to give bracket if one params is given
// no need to return it direct statement is given
//
