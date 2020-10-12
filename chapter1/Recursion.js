//Recuresion Summition
function sum(num){
    if(num==0)
        return 0
    return sum(num-1)+num
}