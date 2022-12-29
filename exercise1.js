let numbers = [123, 8409, 100053, 333333333, 7];

// Loop through the array above and determine whether or not each number is divisible by three.
let multipleThree = [3,6,9];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 3 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}