let number = 0

function numberType(number){
    let result
    if (number==0){
        result='Zero'
    }
    else if (number>0){
        result='Positive'
    }
    else {
        result='Negative'
    }
    return result
}

console.log("The number "+number+" is "+numberType(number))