const sortJson = {'alphabetical': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'reverse alphabetical': ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']};
const arrayToSort = ['zebra', 'cube', 'watermelon', 'apple', 'computer'];
const userInput = require('node:readline').createInterface({input: process.stdin, output: process.stdout}); 
//This code was derived from  ^^ Node.js docs https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

function sortArray(arrayToSort, type) {
    let finalArray = [];
    let arrayToSort2 = Object.assign([], arrayToSort);
    while (arrayToSort2.length > 0) {
        var lowestValue = '';
        console.log(arrayToSort2);
        for (let i2 = 0; i2 < arrayToSort2.length; i2++) {
            if (lowestValue == '' || sortJson[type].indexOf(arrayToSort2[i2][0]) < sortJson[type].indexOf(lowestValue[0])) { 
                lowestValue = arrayToSort2[i2];
            } else if (sortJson[type].indexOf(arrayToSort2[i2][0]) == sortJson[type].indexOf(lowestValue[0])) {
                for (let i3 = 0; i3 < arrayToSort2[i2].length; i3++) {
                    if (sortJson[type].indexOf(arrayToSort2[i2][i3]) < sortJson[type].indexOf(lowestValue[i3])){
                        lowestValue = arrayToSort2[i2];
                        break;
                    }
                }
            }
        }
        finalArray.push(lowestValue);
        arrayToSort2.splice(arrayToSort2.indexOf(lowestValue), 1);
    }
    return finalArray;
}

function generateTypeOptions() {
    let toReturn = [];
    for (let [i, i2] of Object.entries(sortJson)){ 
        //This code was derived from  ^^ Mozilla web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        toReturn.push(i);
    }
    return toReturn;
}

console.log('Here is the array sorted in reverse alphabetical order:\n' + (sortArray(arrayToSort, "reverse alphabetical")).join(', '));
function main() {
    console.log(arrayToSort);
    userInput.question('How would you like to sort the above list? ' + generateTypeOptions().join(', ') + " >>> ", input => { 
        //This code was derived from  ^^ Node.js docs https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs
        let output = sortArray(arrayToSort, input);
        console.log('Here is the sorted array:\n' + output.join(', '));
    })
}

main();