
function funcion1(a,b){
    return a+b;
}

var funcion2 = (a,b) => a + b;

var cond;
if (1 > 2){
    cond = 1;
}
else {
    cond = 2;
}

var condES6 = 1 > 2 ? 1 : 2;

const constante = 2;
console.log(constante);

let letvar = 2;
if (true){
    let letvar = 3
    console.log(letvar);
}