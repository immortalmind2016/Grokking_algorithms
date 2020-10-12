const Infinity=9999
const graph={"S":{"A":6,"B":2},"A":{"FIN":3,"X":1},"B":{"A":3,"FIN":5},"X":1,"FIN":{}}  //{NODE:{NEIGHT"B"ORS "A"nd weights}}

const cost={"A":6,"B":2,"X":Infinity,"FIN":Infinity}
const parent={"A":"S","B":"S","X":"A","FIN":null}

const visited=[]

let queue=[]
queue.push("S")

function sort(arr){

   
    return  Object.keys(arr).sort((a,b)=>arr[a]-arr[b])
}

while(queue.length){

        let node=  queue.shift()
        if(visited.indexOf(node)>-1||node=="FIN"){
            continue
        }
        console.log("NODE ",node)
        //GET THE NEIGHTBORS
        let neightbors=sort(graph[node]) 
        //CHOOSE MINIMUM 
        let minNeighbor=neightbors[0]
        let minCost=cost[minNeighbor]
        //PUSH NEIGHBORSS TO QUEUE
        queue=[...queue,...neightbors]
        
        //UPDATE COST
        Object.keys(cost).forEach((n)=>{
          
            if(cost[n]>graph[minNeighbor][n]+minCost||cost[n]==null){
                cost[n]=minCost+graph[minNeighbor][n]
                graph[node][n]=minCost+graph[minNeighbor][n]
            }
        })

 
        
       console.log("MIN N :",minCost)
        console.log(cost)
        console.log(graph)
        
}




