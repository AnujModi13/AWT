var a =document.getElementById("input1");
var b =document.getElementById("input2");

function add(a,b){
let result = a+b;
    return result;
}

function mul(a,b){
    return a*b;
    }

function sub(a,b){
    return a-b;
    }

function div(a,b){
    return a/b;
}

module.exports = {add, mul};