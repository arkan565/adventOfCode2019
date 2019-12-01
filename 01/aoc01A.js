const fs = require('fs');
const input = fs.readFileSync('./input').toString().trim();
const inputNumbers = input.split('\n');

//part 1
var fuelSum = 0;

inputNumbers.forEach(mass => {
    fuelSum = fuelSum + (Math.floor(mass/3) - 2);
});
console.log(fuelSum);

// part 2

var fuelSumPart2 = 0;
inputNumbers.forEach(mass => {
    let partialMass = mass;
    let partialFuelSum = 0;

    while (partialMass > 0) {
        partialMass = Math.floor(partialMass / 3) - 2;
        if (partialMass > 0) {
            partialFuelSum = partialFuelSum + partialMass;
        }
    }

    fuelSumPart2 = fuelSumPart2 + partialFuelSum;
});
console.log(fuelSumPart2);