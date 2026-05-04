const express = require("express")

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

//To export the methods, we have to bring in our node module (npm init -y) and also express(npm install express), and put the codes at the top
//export default[add, subtract];

//module doen't use default, it uses commonjs/ if you're using default, use commonjs in the package,json file
module.exports = {add, subtract} //to export