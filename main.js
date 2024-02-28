const sortJson = {'alphabetical': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'reverse alphabetical': ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']};
const arrayToSort = ['zebra', 'cube', 'watermelon', 'apple', 'computer'];
const userInput = require('node:readline').createInterface({input: process.stdin, output: process.stdout}); 
//^^ Node.js docs https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

function sortArray(arrayToSort, type) {
    let finalArray = [];
    while (arrayToSort.length > 0) {
        var lowestValue = '';
        for (let i2 = 0; i2 < arrayToSort.length; i2++) {
            if (lowestValue == '' || sortJson[type].indexOf(arrayToSort[i2][0]) < sortJson[type].indexOf(lowestValue[0])) { 
                //^^ Mozilla web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
                lowestValue = arrayToSort[i2];
            } else if (sortJson[type].indexOf(arrayToSort[i2][0]) == sortJson[type].indexOf(lowestValue[0])) {
                for (let i3 = 0; i3 < arrayToSort[i2].length; i3++) {
                    if (sortJson[type].indexOf(arrayToSort[i2][i3]) < sortJson[type].indexOf(lowestValue[i3])){
                        lowestValue = arrayToSort[i2];
                        break;
                    }
                }
            }
        }
        finalArray.push(lowestValue);
        arrayToSort.splice(arrayToSort.indexOf(lowestValue), 1);
        //^^ Mozilla web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    }
    return finalArray;
}

function generateTypeOptions() {
    let toReturn = [];
    for (let [i, i2] of Object.entries(sortJson)){ 
        //^^ Mozilla web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        toReturn.push(i);
    }
    return toReturn;
}

function main() {
    console.log(arrayToSort);
    userInput.question('How would you like to sort the above list? ' + generateTypeOptions().join(', ') + " >>> ", input => { 
        //^^ Node.js docs https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs
        let output = sortArray(arrayToSort, input);
        console.log('Here is the sorted array:\n' + output.join(', '));
    })
}

main();