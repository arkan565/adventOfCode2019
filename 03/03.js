const fs = require('fs');
const input = fs.readFileSync('./input').toString().trim();
const wiresInput = input.split('\n');
const wire1Input = wiresInput[0].split(',');
const wire2Input = wiresInput[1].split(',');

let wire1Positions;
let wire2Positions;
let intersections = [];

function getWirePositions (wireInput) {
    let positions = [];
    var position = [0,0];
    wireInput.forEach(command => {
        let endPosition;
        let direction;
        let stepNumber = command.substring('1');
        switch(command[0]){
            case 'U':
                direction = [0, 1];
                break;
            case 'R':
                direction = [1, 0];
                break;
            case 'L':
                direction = [-1, 0];
                break;
            case 'D':
                direction = [0, -1];
                break;
        }
        for(let i = 1; i <= stepNumber; i++){
            let newPosition = {
                x: position[0] + (direction[0] * i), 
                y:position[1] + (direction[1] * i)
            };
            positions.push(newPosition);
        }
        position = [position[0] + (direction[0] * stepNumber), position[1] + (direction[1] * stepNumber)];
        
    });
    return positions;
}
function getWireIntersections(wireInput,wirePositions){
    let intersections = [];
    var position = [0, 0];
    wireInput.forEach(command => {
        let direction;
        let stepNumber = command.substring('1');
        switch (command[0]) {
            case 'U':
                direction = [0, 1];
                break;
            case 'R':
                direction = [1, 0];
                break;
            case 'L':
                direction = [-1, 0];
                break;
            case 'D':
                direction = [0, -1];
                break;
        }
        
        for (let i = 1; i <= stepNumber; i++) {
            let newPosition = {
                x: position[0] + (direction[0] * i),
                y: position[1] + (direction[1] * i)
            };
            ;
            let positionIntersection = wirePositions.filter((position) => { return position.x == newPosition.x && position.y == newPosition.y })
            if(positionIntersection.length > 0){
                intersections.push(newPosition);   
            };
        }
        position = [position[0] + (direction[0] * stepNumber), position[1] + (direction[1] * stepNumber)];

    });
    return intersections;
}
function getMinimumDistance(intersections){
    let minimum;
    minimum = Math.abs(intersections[0].x) + Math.abs(intersections[0].y);
    intersections.forEach(intersection =>{
        let distance = Math.abs(intersection.x) + Math.abs(intersection.y);
        if(minimum > distance){
            minimum = distance
        }
    })
    return minimum
}
wire1Positions = getWirePositions(wire1Input);
wire2Positions = getWirePositions(wire2Input);
intersections = getWireIntersections(wire2Input,wire1Positions);
console.log(getMinimumDistance(intersections));
//part 2
let minimumSteps
intersections.forEach(intersection => {
    let wire1Step = wire1Positions.findIndex(position => {return position.x == intersection.x && position.y == intersection.y}) + 1;
    let wire2Step = wire2Positions.findIndex(position => { return position.x == intersection.x && position.y == intersection.y}) + 1;
    let combinedwireSteps = wire1Step + wire2Step;
    if (!minimumSteps) minimumSteps = combinedwireSteps
    else if (combinedwireSteps < minimumSteps) minimumSteps = combinedwireSteps
});
console.log(minimumSteps);