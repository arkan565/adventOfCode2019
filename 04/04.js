
let minNumber = 357253;
let maxNumber = 892942;

let numberArray = [0,0,0,0,0];
let inputNumber = 0;
let numberResult = 0;
for (let i = parseInt(minNumber.toString()[0]); i <= parseInt(maxNumber.toString()[0]); i++) {
    numberArray[0] = i;
    for (let j = i; j <= 9; j++) {
        numberArray[1] = j;
        for (let k = j; k <= 9; k++) {
            numberArray[2] = k;
            for (let l = k; l <= 9; l++) {
                numberArray[3] = l;
                for (let m = l; m <= 9; m++) {
                    numberArray[4] = m;
                    for (let n = m; n <= 9; n++) {
                        numberArray[5] = n;
                        let finalNumber =  parseInt(numberArray.join(''))
                        if ( finalNumber >= minNumber && finalNumber <= maxNumber){
                            if (numberArray[0] == numberArray[1] || numberArray[1] == numberArray[2] || numberArray[2] == numberArray[3]
                                || numberArray[3] == numberArray[4] || numberArray[4] == numberArray[5]) 
                                {
                                    numberResult++;
                                }
                         
                        }
                    }
                }
            }
        }
    }
}
console.log(numberResult);

//part 2

function minRepeatNumberPart2 (finalNumberArray){
    if (finalNumberArray[1] == finalNumberArray[0] && finalNumberArray[2] != finalNumberArray[1]){
        return true;
    }
    if (finalNumberArray[2] == finalNumberArray[1] && finalNumberArray[1] != finalNumberArray[0] && finalNumberArray[2] != finalNumberArray[3]) {
        return true;
    }
    if (finalNumberArray[3] == finalNumberArray[2] && finalNumberArray[1] != finalNumberArray[2] && finalNumberArray[3] != finalNumberArray[4]) {
        return true;
    }
    if (finalNumberArray[3] == finalNumberArray[4] && finalNumberArray[3] != finalNumberArray[2] && finalNumberArray[4] != finalNumberArray[5]) {
        return true;
    }
    if (finalNumberArray[4] == finalNumberArray[5] && finalNumberArray[4] != finalNumberArray[3]) {
        return true;
    }
    return false;
}
numberResult = 0;
for (let i = parseInt(minNumber.toString()[0]); i <= parseInt(maxNumber.toString()[0]); i++) {
    numberArray[0] = i;
    for (let j = i; j <= 9; j++) {
        numberArray[1] = j;
        for (let k = j; k <= 9; k++) {
            numberArray[2] = k;
            for (let l = k; l <= 9; l++) {
                numberArray[3] = l;
                for (let m = l; m <= 9; m++) {
                    numberArray[4] = m;
                    for (let n = m; n <= 9; n++) {
                        numberArray[5] = n;
                        let finalNumber = parseInt(numberArray.join(''))
                        if (finalNumber >= minNumber && finalNumber <= maxNumber) {
                            if (minRepeatNumberPart2(numberArray)) {
                                console.log(finalNumber);
                                numberResult++;
                            }

                        }
                    }
                }
            }
        }
    }
}
console.log(numberResult);
