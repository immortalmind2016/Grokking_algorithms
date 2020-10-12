const states_needed=new Set(["mt","wa","or","id","nv","ut","ca","az"])

const stations={
    'kone':["id","nv","ut"],
    'ktwo':["wa","id","mt"],
    'kthree':["or","nv","ca"],
    'kfour':["nv","ut"],
    'kfive':["ca","az"],
}


/*
    a: first array
    b: second array
*/

function intersect(a,b){
    let arr=[]
    a.forEach((element)=>{
   
        if(b.indexOf(element)!=-1){
            arr.push(element)
        }
    })
    return arr


}
final_stations =new Set()
while(states_needed.size){
   




let best_station = null
//Set of all states this stations covers that haven't been covered yet
let states_covered =new Set()
Object.keys(stations).forEach((station)=>{
    let states_for_station=stations[station]
    //Exist in states_needed and States_for_station
    let covered=intersect(states_needed,states_for_station)
    if(covered.length>states_covered.size){
        best_station=station
        states_covered=covered
    }


})
final_stations.add(best_station)

states_covered.forEach((st)=>{
 
  
        states_needed.delete(st)
})


}
console.log(final_stations)


