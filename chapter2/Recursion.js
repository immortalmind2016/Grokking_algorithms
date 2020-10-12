
function lookForMyKey(main_box){
    let pile=main_box.make_a_pile_to_look_throughla ()
    while(pile.length){
        box=pile.grab_a_box();
        for(const item of box){
            if(item.is_a_box){
                pile.push(item)
            }else if(item.is_a_key){
                console.log("keyFound")
            }
        }
    }
}


//CLEAR
function lookForKey(box){
    for(const item in box){
        if(item.is_a_box){
            lookForKey(item)
        }else 
            return "key"
    }
}

//Count down

function countDown(counter){
  
    if(counter==-1) //BASE CASE
    return
    console.log(counter) 
    countDown(--counter) //Recursive case
}

countDown(10)