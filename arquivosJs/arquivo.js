// PROBLEMA ATUAL É SOBRE O JUROS 


const frm = document.querySelector("form")  // entrada

//saidas

const saidaValorFinanciado = document.getElementById ("out.valorFinanciado")
const saidaValorTotalComJuros = document.getElementById ("out.valorTotalComJuros")
const saidaValorDaParcela = document.getElementById ("out.valorDaParcela")
const saidaTaxaJurosAtual = document.getElementById ("out.taxaDeJurosAtual")

// codigo script

frm.addEventListener ("submit", (e) => {
    const valorDaMoto = frm.inp_valorMoto.value  //copiar
    const valorDaEntrada = frm.inp_valorDaEntrada.value  //copiar
    const numeroDeParcelas = frm.inp_qtdParcelas.value  //copiar


    const taxaJurosAleatorio = Math.random() * 10


    const valorFinanciado = (Math.abs(valorDaMoto) - Math.abs(valorDaEntrada)) //processamento // aqui ok

    const calc1 = (((numeroDeParcelas * taxaJurosAleatorio) /100 ) + 1)
    const valorDaParcela = (calc1 * valorDaEntrada) / numeroDeParcelas


    const valorTotalComJuros = Math.abs(numeroDeParcelas) * valorDaParcela  // processamento




    saidaValorFinanciado.innerText = "O valor Financiado é R$ " +valorFinanciado  // saida de dados
    saidaValorTotalComJuros.innerText = "O valor Total com Juros é R$ " +valorTotalComJuros.toFixed(0) // saída de dados
    saidaValorDaParcela.innerText = "O valor da Parcela é R$ " +valorDaParcela.toFixed(0) // saída de dados
    saidaTaxaJurosAtual.innerText = `A taxa de juros aplica da é  ${taxaJurosAleatorio.toFixed(2)} a.m %  `  // saída de dados

    e.preventDefault()    //prevenção de pradrão de carregamento


})



