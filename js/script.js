var getTime = new Date()
var anoCorrente = getTime.getFullYear()
var anoNasc = document.querySelector('#formulario1')['anoNasc'].value
/*de dentro do formulario podem ser pegos os campos através de uma busca de lista*/
document.write(anoCorrente)
var idade = (Number(anoCorrente) - Number(anoNasc))
document.write(`<br>Idade = ${idade}`)