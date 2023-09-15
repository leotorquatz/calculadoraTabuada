/******************************************************************
 * Objetivo: Realizar o calculo de uma tabuada através de estruturas de repetição
 * Data: 01/09/2023
 * Autor: Leonardo Torquato de Andrade
 * Versão: 1.0
 *****************************************************************/


// Função para gerar uma tabuada
const gerarTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    // Entrada de dados vieram pelo argumentos de função
    let tabuada = valorTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;

    let resultado;
    let status = false;

    if(contFinal < contInicial){
        contInicial = contadorFinal;
        contFinal = contadorInicial;
    }


    if(contInicial == '' || contFinal == '' || tabuada =='')
        console.log('ERRO: É obrigatório fornecer todos os valores')
    else if(isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
        console.log('ERRO: É obrigatório a entrada somente de números.')
    else{
        // Conversão de dados de String para Numbers
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        tabuada = Number(tabuada)

        //Exemplo de While
        while(contInicial <= contFinal){
        resultado = tabuada * contInicial
        console.log(tabuada + 'x' + contInicial + '=' + resultado)

        contInicial ++;

        status = true;
        }
    }

    return status;
}

gerarTabuada('2', '0', '10');