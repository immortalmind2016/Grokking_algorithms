const Infinity=9999
const graph={"S":{"A":6,"B":2},"A":{"FIN":1},"B":{"A":3,"FIN":5},"FIN":{}}  //{NODE:{NEIGHT"B"ORS "A"nd weights}}

const cost={"A":6,"B":2,"FIN":Infinity}
const parent={"A":"S","B":"S","FIN":null}

const visited=[]

let queue=[]
queue.push("S")

function min(arr){

   
    return  Object.keys(arr).sort((a,b)=>arr[a]-arr[b])
}

while(queue.length){

        let node=queue.shift()
        if(visited.indexOf(node)>-1){
            continue
        }
     
        console.log("NODE ",node)
      //GET THE MINIMUM COST NEIGHTBOR
        let minN=min(graph[node])[0] //MIN
        let minCost=graph[node][minN]
        visited.push(minN)
       
        
        //delete graph[node][minN]
      
       //UPDATE COST
        Object.keys(cost).forEach((n)=>{
            if(cost[n]>graph[minN][n]||cost[n]==null){
                cost[n]=minCost+graph[minN][n]
                graph[node][n]=minCost+graph[minN][n]
            }
        })

 
        
       console.log("MIN N :",minN)
        console.log(cost)
        console.log(graph)
        
}




