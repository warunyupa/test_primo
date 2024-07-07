export function sortArray(col1:number[], col2:number[], col3:number[]):number[]{
    let tempArray= col1.concat(col2,col3)
    // merge and remove duplicate value
    let mergeArray =tempArray.filter((item,index)=> tempArray.indexOf(item)===index);

    //sort array
    for(let i=0;i<mergeArray.length;i++){
        for(let j=i+1;j<mergeArray.length;j++){
            if(mergeArray[i]> mergeArray[j]){
                let temp = mergeArray[i];
                mergeArray[i] = mergeArray[j];
                mergeArray[j] = temp;   
            }
        }
    }
    
    console.log('answer: ',mergeArray);
    return mergeArray;
}

// sortArray([1,2,5],[4,1],[3,6]);

