/* Compra menor que 50 -> sem desconto
   Compra maior que 50 -> desconto de 5%
   Compra maior que 2008 -> desconto de 10%
*/

var limite5 = 50   
var limite10 = 2008 

function calcular() {
    var total = Number(document.getElementById("tsd").value)
    var tDesconto = 0

    if (total < limite5){
        tDesconto = total
        console.log(tDesconto)
    }
    else if (total >= limite5 && total < limite10){
        let desconto = total * 0.05
        tDesconto = total - desconto
        console.log(tDesconto)
    }
    else{
        let desconto = total * 0.1
        tDesconto = total - desconto
        console.log(tDesconto)
    }

    var valorDesconto = total - tDesconto

    document.getElementById("resultado").innerHTML =
        "Desconto: R$ " + valorDesconto.toFixed(2) + "<br>" +
        "Total com desconto: R$ " + tDesconto.toFixed(2)
}