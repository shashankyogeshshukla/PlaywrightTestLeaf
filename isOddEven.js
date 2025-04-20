let number = -7

function isOddEven(number){
    let result
    if (number%2==0){
        result='Even'
    }
    else{
        result='Odd'
    }
    return result
}

console.log("The number "+number+" is "+isOddEven(number))