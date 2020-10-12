const original=[1,4,8,70,0,3,2,9,11,5,7]
const final=[]
const length=original.length


while(final.length!=length){
    let temp=0
    for(const element of original){
        if(element>temp){
            temp=element
        }
    }
    original.splice(original.indexOf(temp),1)
  
    final.push(temp)
  //  final.push(temp)
}
console.log(final)