const Infinity=9999
const graph={"S":{"A":6,"B":2},"A":{"FIN":1},"B":{"A":3,"FIN":5},"FIN":{}}  //{NODE:{NEIGHT"B"ORS "A"nd weights}}

const costs={"A":6,"B":2,"FIN":Infinity}
const parents={"A":"S","B":"S","FIN":null}

const visited=[]

function find_lowest_cost_node(costs){
  lowest_cost=Infinity
  lowest_cost_node=null
  Object.keys(costs).forEach((node)=>{
      cost=costs[node]
      if(cost<lowest_cost && visited.indexOf(node)==-1){
          lowest_cost=cost
          lowest_cost_node=node
      }
  })
    return  lowest_cost_node
}
node=find_lowest_cost_node(costs)
while(node){
    console.log("NODE ",node)
    cost=costs[node]
    neighbors=graph[node]
    Object.keys(neighbors).forEach((n)=>{
        console.log(`cost ${cost} , neighbors[n] :${neighbors[n]}`)
        let new_cost=cost+neighbors[n]
        if(costs[n]>new_cost){
          
            costs[n]=new_cost;
            parents[n]=node
        }
    })
visited.push(node)
node=find_lowest_cost_node(costs)
}

console.log(costs)