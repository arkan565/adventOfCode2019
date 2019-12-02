const fs = require('fs');
const input = fs.readFileSync('./input').toString().trim();
const inputNumbers = input.split(',');

//part1
inputNumbers[1] = 12;
inputNumbers[2] = 2;

for (let i = 0; i < inputNumbers.length; i = i + 4) {
    let command = inputNumbers[i];
    let firstOperatorPosition = inputNumbers[i+1];
    let secondOperatorPosition = inputNumbers[i + 2];
    let resultPosition = inputNumbers[i + 3];
    if (command == 1) {
        inputNumbers[resultPosition] = parseInt(inputNumbers[firstOperatorPosition]) + parseInt(inputNumbers[secondOperatorPosition]);
    }
    else if(command == 2) {
        inputNumbers[resultPosition] = parseInt(inputNumbers[firstOperatorPosition]) * parseInt(inputNumbers[secondOperatorPosition]);
    }
    else if(command == 99) {
        break;
    }
}
console.log(inputNumbers[0].toLocaleString('fullwide'));
//part2
var input2 = fs.readFileSync('./input').toString().trim();
var inputNumbers2 = input2.split(',');
function halt(){
    input2 = fs.readFileSync('./input').toString().trim();
    inputNumbers2 = input2.split(',');
}
var i = 0;
let noun = 0;
let verb = 0;
inputNumbers2[1] = noun;
inputNumbers2[2] = verb;
while (noun <= 99 && verb <= 99){
    let command = inputNumbers2[i];
    let firstOperatorPosition = inputNumbers2[i + 1];
    let secondOperatorPosition = inputNumbers2[i + 2];
    let resultPosition = inputNumbers2[i + 3];
    if (command == 1) {
        inputNumbers2[resultPosition] = parseInt(inputNumbers2[firstOperatorPosition]) + parseInt(inputNumbers2[secondOperatorPosition]);
        i= i + 4;

    }
    else if (command == 2) {
        inputNumbers2[resultPosition] = parseInt(inputNumbers2[firstOperatorPosition]) * parseInt(inputNumbers2[secondOperatorPosition]);
        i= i + 4;
    }
    else if (command == 99) {
        i = 0;
        if(inputNumbers2[0] == 19690720){
            console.log((100 * parseInt(noun)) + parseInt(verb))

        }
        verb++;
        if (verb > 99) {
            noun++;
            verb = 0;
        }
        halt();
        inputNumbers2[1] = noun;
        inputNumbers2[2] = verb;
    }
}