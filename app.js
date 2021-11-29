// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

const fromEuroToDollar =  function(valueInDollar){
    let valueInEuro = valueInDollar * (oneEuroIs.USD)

    return valueInEuro
}

console.log(fromEuroToDollar(15))


const fromDollarToYen = function(valueInDollar){
    let valueInYen = Math.floor(valueInDollar /(oneEuroIs.USD)*oneEuroIs.JPY);
    return valueInYen;
}
console.log(fromDollarToYen(15));

const fromYenToPound = function(valueInYen){
    let valueInpound = Math.floor(valueInYen/oneEuroIs.JPY)*oneEuroIs.GBP;
    return valueInpound;
}
console.log(fromYenToPound(12135));


console.log(fromEuroToDollar(3.5));
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };