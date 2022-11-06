// localstorage==get,set,clear,remove
// localstorage.setitem(key,value)
// let key = "info";
// let data = "information";
// localStorage.setItem("name", "diplov");
// localStorage.setItem(key, data);

// // get data
// let Name = localStorage.getItem(key);
// document.write(Name);

// localStorage.removeItem("name");
// localStorage.clear();

// creating objects
let info = {
  name: "diplov",
  address: {
    tol:"sanepa",
    ward:2
  },
  phone: 9804863198,
};

localStorage.setItem("info", JSON.stringify(info));

let personal_info = JSON.parse(localStorage.getItem("info"));
document.write("Name:" + info.name);
document.write("<br>");
document.write("Name:" + personal_info.name);
document.write("<br>address:" + personal_info.address.tol);
document.write("<br>phone:" + personal_info.phone);
