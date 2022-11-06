let num = Math.random() * 6;
document.write(num);

let n = Math.round(num);
document.write("<br>" + n);

n = Math.trunc(num);
document.write("<br>" + n);

n = Math.floor(num);
document.write("<br>" + n);

n = Math.ceil(num);
document.write("<br>" + n);

n = Math.sqrt(100);
document.write("<br>" + n);

n = Math.pow(10, 2);
document.write("<br>" + n);

n = Math.PI;
document.write("<br>" + n);

n1 = n.toFixed(4);
document.write("<br>" + n1);

n1 = n.toPrecision(7);
document.write("<br>" + n1);
