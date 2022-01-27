 
 let greet=(name, greet)=>{
console.log(`hello ${name} ${greet}`)
 }
 greet('ahsan', 'Good_morning')
 greet('ahad', 'good_Night')

//  There are two ways of declaring a function, fuction declaration and function expression 
// function declaration is hoisted e.g. it can be hoist on the top of the execution
 
dec()
dec()

function dec(){
    console.log('hello, Good Morning')
}

// function Expression: it can't be call before the function declaration

// exp()  : Error  
const exp=function(){
    console.log('welcome')
}
exp()

// Parameteres Vs Arguments 
Parameteres: We define the parameter when defining the function.
 To get the value from the arguments,
 we utilize the local variables in the function declaratrion.

 Arguments: We use the arguments to transfer values from the 
 calling function to receiving function


// Anonymous Function 
const calcArea=function (radius)
{
    return 3.14 *radius**2
}

const area=calcArea(6)
console.log(area)