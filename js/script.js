var getTime = new Date()
const anoCorrente = getTime.getFullYear()
var form = document.querySelector('#formulario1')
var campoAnoNasc = document.querySelector('#formulario1')['anoNasc']
/*de dentro do formulario podem ser pegos os campos através de uma busca de lista*/

var botaoChecar = document.querySelector('#botaoChecar')
botaoChecar.addEventListener('click', checarIdade)

function checarIdade() {
    var anoNasc = campoAnoNasc.value
    if (anoNasc == '') {  // verificando se o campo está em branco
        window.alert('erro na idade');
        return '';
    }  // adicionar verificação de valores errados e alertas para o caso
     
    var genero = form.sexo.value
    if (genero == '') {
        window.alert('erro no genero');
        return;  // o return sem nada faz a execução da função parar, como um break
    }

    var idade = (Number(anoCorrente) - Number(anoNasc))
    divRes = document.createElement('div')
    divRes.setAttribute('id', 'divRes')
    divRes.innerHTML = `Sua idade é ${idade} e seu genero é ${genero}`
    form.appendChild(divRes)
    botaoChecar.setAttribute('disabled', '')  // desabilita o botão
}

/*
pode ser adicionado um botão de resete que limparia os valores
de genero e ano de nascimento, além de habilitar o botão de checar
e sumir
*/
