var getTime = new Date()
var anoCorrente = getTime.getFullYear()
var campoAnoNasc = document.querySelector('#formulario1')['anoNasc']
// .value se fosse com esse final o valor seria pego ao carregar o arquivo
// de dentro do formulario podem ser pegos os campos através de uma busca de lista
document.write(anoCorrente)
var idade = (Number(anoCorrente) - Number(anoNasc))
document.write(`<br>Idade = ${idade}`)
var botaoChecar = document.getElementById('botaoChecar')

botaoChecar.addEventListener("mouseover", trocaCor)  // não usar o prefixo 'on' nos eventos
function trocaCor() {
    botaoChecar.setAttribute('style', 'font-size:16pt;')
}

botaoChecar.addEventListener('click', verifica)
// a função a ser execurata não deve ser escrita com os parênteses

function verifica() {
    var anoNasc = campoAnoNasc.value  // o valor será pego nesse momento
    
    var novaDiv = document.createElement('div')
    novaDiv.setAttribute('id','novaDiv')
    novaDiv.innerHTML = `<p>teste de escrita do ano digitado ${anoNasc}</p>`
    document.body.appendChild(novaDiv)
}
