const x=[2,4,6,7,9,71,10]


//SUM OF ARRAY ITEMS
function sum(arr){
    if(arr.length==0)
    return 0
    else 
    return arr[arr.length-1]+sum(arr.slice(0,arr.length-1))
}

//COUNT ITEMS NUMBER

function count(arr){
    if(arr.length==0)
    return 0 
    else 
    return 1+count(arr.slice(1,arr.length-1))
}

//FIND MAX NUMBER IN LIST
function max(arr){
 
    if(arr.length==2) //BASE CASE
    return arr[0]>arr[1]?arr[0]:arr[1]
    else //
    {
        arr[1]=arr[0]>arr[1]?arr[0]:arr[1]
        return max(arr.splice(1,arr.length-1))
    }
  
}


//BINARY SEARCH USING RECURSION
function binary(arr,key){

    let start=0,end=arr.length;

    mid=Math.floor((start+end)/2)
    console.log('KEY : '+key," ARR[MID]: "+arr[mid],"MID : "+mid)
    console.log(`ARR: ${arr}`)
    if(arr[mid]==key)
    {
        return x.indexOf(arr[mid])
    }
     
    else if(start==end){
        return 
    }

    else{
       
        if(key>arr[mid]){

            start=mid+1
    } 
        else {
            end=mid-1
    }
    console.log(`START : ${start} END:${end}`)

        return binary(arr.splice(start,end),key)
    }



}

console.log(binary([...x],71))