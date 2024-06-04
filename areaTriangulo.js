let resposta = document.getElementById('resposta')
console.log(resposta)

function calcula(){
    // Leitura dos dados de entrada na caixa input chamada area
    let base = Number (document.getElementById('base').value)
    console.log(base)

    let altura = Number (document.getElementById('altura').value)
    console.log(altura)

    // Fazendo o cálculo da área do Triangulo
    let area = (base * altura) / 2
    console.log("O valor da área é = ",area)

    // Mostrando o resultao para o usúario
    resposta.innerHTML = "O valor da área é = " + area.toFixed(2)
    resposta.style.color = "black"
    resposta.style.fontSize = "2rem"
}