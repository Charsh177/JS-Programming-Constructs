let sum = 0;
for(let a = 1; a <= 5;  a++) {
    let value = Math.floor(Math.random() * 100);
    console.log("Random value is : ", value);
    sum += value;
}
console.log("The sum of five random values : ", sum);