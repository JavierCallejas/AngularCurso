var saludo = "Hello World!";

function saludar(){
    console.log(saludo);
}
saludar();

function ejemploScope() {
    var a = 1;
    console.log(a);
}
var ejemplo2 = ejemploScope;

ejemplo2();
ejemploScope();

console.log("=======================================================")

var contador = (function() {
    var num = 1;
    num++; 
    return function(){
        console.log(num);
    }
})()

contador();
contador();

console.log("=======================================================")

var sumar = require ('./suma');

console.log (sumar (2,5));