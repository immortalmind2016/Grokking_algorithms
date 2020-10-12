

//Binary Search - Get number Sqroot
function sqroot(num) {
    var temp=0;
س
    start = 0,
        end = num,
        mid = 0, result = 0
    do {

        mid = (start + end) / 2
        if(mid==temp){
            return mid
        }
        result = mid * mid
        if (result > num) {
            end = mid
        } else if (result < num) {
            start = mid
        }

 
        temp=mid
    } while (result != num)

    return mid
}

console.log(sqroot(120))