let age = [20,5,12,43,98,55];

// Console.log the sum of all the numbers in the age array.
let sum = 0;
for (const el of age) {
    sum += Number(el);
}
console.log(sum);

// Console.log the highest age in the array.
let highest = Number(age[0]);
for (const el of age) {

    if (highest<Number(el)) {
        highest = Number(el);
    }
}
console.log(highest);