const states=["mt","wa","or","id","nv","ut","ca","az"]
const stations={
    'kone':["id","nv","ut"],
    'ktwo':["wa","id","mt"],
    'kthree':["or","nv","ca"],
    'kfour':["nv","ut"],
    'kfive':["ca","az"],
}
let coveredStations=new Set()
let selected=[]
coveredStations.add("test")
console.log(coveredStations.has("test"))

let sorted=Object.keys(stations).sort((a,b)=>stations[a].length-stations[b].length)
function checkAllDone(){
    let counter=states.length;
    states.forEach((state)=>{
        if(coveredStations.has(state)){
            counter--;
        }
        console.log(counter)
    })
    return counter==1
}z
sorted.forEach((station)=>{
    let done=checkAllDone()
    if(done){
        console.log("done")
        return
    }
    selected.push(station)
    stations[station].forEach((state)=>{
        coveredStations.add(state)
    })
})
console.log(selected)
