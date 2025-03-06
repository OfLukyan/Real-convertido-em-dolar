function calcular() {
    let real = prompt("Digite o valor em real a ser convertido para dolar.");
    let cotacao = 5.88;//cotação atual
    if(real === "" || isNaN(real)) {
        alert("BURRO não e com letra");
    } else {
        let resultado = (real / cotacao).toFixed(2);
        alert("o valor em dolar e $" + resultado);
    }
}

calcular()