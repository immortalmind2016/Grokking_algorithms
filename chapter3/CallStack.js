function factorial(number){
    if(number==1) //BASE CASE 
    return 1
    console.log(number)
    return number*factorial(--number)  //RECURSIVE CASE
}

//CALL-STACk |  CODE
//Fact X|3      FACT(3)
//Fact X|3      if number==1
//Fact X|3      else

//Fact X|2      CODE return X*Facet(--number)
//Fact X|3       CODE return X*Facet(--number)

console.log(factorial(3))

