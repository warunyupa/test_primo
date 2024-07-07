import {sortArray} from '../math';

describe("Merge and Sort by ascending functions", ()=>{
    const col1 = [2,8,9,45];
    const col2 = [71,56,43,2,7];
    const col3 = [0,1,45,56];
    const expectAns = [0, 1, 2, 7, 8, 9, 43, 45, 56, 71];

    it("should be the same as Expect value", ()=>{
        const answer = sortArray(col1,col2,col3);
        console.log('Expect answer: ',expectAns);
        console.log('Answer: ',answer);
        expect(answer).toEqual(expectAns);
    });
});