function concatArrays(arr1,arr2){
    
    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length){
        if(i < arr1.length){
            result.push(arr1[i]);
            i++;
        }
        if(j < arr2.length){
            result.push(arr2[j]);
            j++;
        }
    } 
    
    return result;
}

console.log(concatArrays([2, 2, 17, 21, 45, 12, 54, 31, 53],[12, 44, 23, 5]))