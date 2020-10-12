//Problem 4.5
function print(arr){
    if(arr.length==0){
        return
    }
    console.log(arr[0])
    print(arr.splice(1,arr.length-1))
}

print([1,2,4,5])


//Problem 4.6