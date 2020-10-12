
function binary_search(arr,key){
    start=0;
    end=arr.length
    while(start<=end){

        mid=(start+end)/2
        if(arr[mid].name==key){
            return mid
        }
        if(arr[mid].name<key){
            start=mid+1
            
        }else if(arr[mid].name>key){
            end=mid-1
        }
    
         
    }
    return null
      
    
}

//TEST

const arr=[
    {name:"ahmed",phone:"1"},
    {name:"azat",phone:"2"},
    {name:"mahmoud",phone:"3"},
    {name:"mohamed",phone:"4"},
    {name:"mohey",phone:"5"},
    {name:"zaher",phone:"6"}



]
const name="mohey";


console.log(binary_search(arr,name))