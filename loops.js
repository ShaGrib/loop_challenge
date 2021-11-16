for (var i = 1;i <= 20;i+=2) {
    console.log(i);
}

console.log("------------");

for (var t =100;t >= 1;t--) {
    if (t % 3 == 0)
    console.log(t);
}

console.log("------------");

var num = [4, 2.5, 1, -0.5, -2, -3.5];

for(x = 0; x < num.length;x++) {
    console.log(num[x]);
}

console.log("------------");

var sum = 0;

for(s = 1; s <= 100;s++) { 
    sum += s;
    console.log(sum);
}

console.log("------------");

var mult = [1,2,3,4,5,6,7,8,9,10,11,12]
var total = 1;
for(var v =1;iv <mult.length;v++) {
    total *= mult[v];
}
console.log(total)