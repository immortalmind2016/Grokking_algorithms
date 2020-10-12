

function sqroot(start,end,number){
    let temp=start+end //To Avoid infinite loop
    let mid=(start+end)/2;
    let result=mid*mid
 
    if(result>number)
        end=mid
    else if(result<number){
        start=mid
    }
    if(result==number){
        return mid
    }
    if((start+end)==temp){
        return mid
    }

    return sqroot(start,end,number)
}

console.log(sqroot(1,20,120))