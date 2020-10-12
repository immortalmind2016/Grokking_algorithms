
let graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

let visited=[]
let queue=graph["you"]


//Find the shortest path in term of number of nodes
while(queue.length!=0){

   let person=queue.splice(0,1)[0];
 
    if(person=="anuj")
        console.log("FOUND")
    else
    { 
     //  console.log(person)
     if(visited.indexOf(person)==-1){
        visited.push(person)
        console.log(person)
        queue=[...queue,...graph[person]]
 }
  
   
    }
       
    
}
/*
for(var head in graph){
    let queue=graph[head]
  
     queue.forEach(person => {
        if(person=="anuj")
        console.log("FOUND")
        else{
          
            queue=[...queue,...graph[person]]
        }
         
     });
     
    
    
}*/