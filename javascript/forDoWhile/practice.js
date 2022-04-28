var a = "";
console.log("Continue Statement Result:")
for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 5 || i === 7) { continue; }
    console.log(i);
}

console.log("Break Statement Result:")
for (var j = 0; j < 10; j++) {
    if (j === 3) {
        break;
    }
    console.log(j);
}

console.log("Do while Result")
let text = "";
let b = 0;
do {
    text += b + "\n"
    b++;
}
while (b < 5);
console.log(text);