"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortArray = sortArray;
function sortArray(col1, col2, col3) {
    var tempArray = col1.concat(col2, col3);
    // merge and remove duplicate value
    var mergeArray = tempArray.filter(function (item, index) { return tempArray.indexOf(item) === index; });
    //sort array
    for (var i = 0; i < mergeArray.length; i++) {
        for (var j = i + 1; j < mergeArray.length; j++) {
            if (mergeArray[i] > mergeArray[j]) {
                var temp = mergeArray[i];
                mergeArray[i] = mergeArray[j];
                mergeArray[j] = temp;
            }
        }
    }
    // console.log('answer: ',mergeArray);
    return mergeArray;
}
// sortArray([1,2,5],[4,1],[3,6]);
