const arr=[1,2,3,6,8,10,24,58,99,100,158,159,214,301]
const key=6;


function binary_search(arr,key){
    start=0;
    end=arr.length
    while(start<=end){

        mid=(start+end)/2
        if(arr[mid]==key){
            return mid
        }
        if(arr[mid]<key){
            start=mid+1
            
        }else if(arr[mid]>key){
            end=mid-1
        }
    
         
    }
    return null
      
    
}

console.log(binary_search(arr,key))