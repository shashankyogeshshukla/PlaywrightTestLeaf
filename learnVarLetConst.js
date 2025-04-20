//Var can be redeclared and redefined
//Function scoped or Globally

var comName='TestLeaf'
//console.log(comName)

var comName='Test'
console.log(comName)

//let - we cannot redeclare, but we can only redefine

let dosa=1
dosa=2
console.log(dosa)

//const - final value - we cannot redecare or redefine the value

const pi=3.14 
//pi=3.00
console.log(pi)

//var vs let
//block level
{
    //blocked - scoped
}
