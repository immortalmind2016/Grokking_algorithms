
function quickSort(arr)
{
    if(arr.length<2){
        return arr
    }
    else{
        let pivot=arr[0]
        let smaller=[]
        let greater=[]
        for(element of arr){
            if(element<pivot){
                smaller.push(element)
            }else if(element>pivot){
                greater.push(element)
            }
        }
        return quickSort(smaller)+pivot+quickSort(greater);
    }
}
console.log(quickSort([1,0,5,7,9,2,3]))