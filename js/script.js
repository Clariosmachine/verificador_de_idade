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
        window.alert('Idade digitada inválida!');
        return '';
    }  // adicionar verificação de valores errados e alertas para o caso
     
    var genero = form.sexo.value
    if (genero == '') {
        window.alert('Selecione um dos gêneros!');
        return;  // o return sem nada faz a execução da função parar, como um break
    }

    var idade = (Number(anoCorrente) - Number(anoNasc))
    
    divRes = document.createElement('div')
    divRes.setAttribute('id', 'divRes')
    
    if (genero == 'feminino') {
        if (idade >= 0 && idade <= 17) {
            divRes.innerHTML = `<p>Pessoa identificada como uma menina com ${idade} anos de idade.</p>
            <img src="./imgs/menina.png" alt="Imagem de Menina">`
        }
        else if (idade >= 18 && idade <= 59) {
            divRes.innerHTML = `<p>Pessoa identificada como uma mulher com ${idade} anos de idade.</p>
            <img src="./imgs/adulta.png" alt="Imagem de Mulher">`
        }
        else {
            divRes.innerHTML = `<p>Pessoa identificada como uma idosa com ${idade} anos de idade.</p>
            <img src="./imgs/idosa.png" alt="Imagem de Idosa">`
        }
    }
    
    else {
        if (idade >= 0 && idade <= 17) {
            divRes.innerHTML = `<p>Pessoa identificada como um menino com ${idade} anos de idade.</p>
            <img src="./imgs/menino.png" alt="Imagem de Menino">`
        }
        else if (idade >= 18 && idade <= 59) {
            divRes.innerHTML = `<p>Pessoa identificada como um homem com ${idade} anos de idade.</p>
            <img src="./imgs/adulto.png" alt="Imagem de Homem">`
        }
        else {
            divRes.innerHTML = `<p>Pessoa identificada como um idoso com ${idade} anos de idade.</p>
            <img src="./imgs/idoso.png" alt="Imagem de Idoso">`
        }
    }

    /*divRes.innerHTML = `<p>Sua idade é ${idade} e seu genero é ${genero}</p>`*/
    document.getElementsByTagName('body')[0].appendChild(divRes)
    
    botaoChecar.setAttribute('disabled', '')  // desabilita o botão
}

/*
pode ser adicionado um botão de resete que limparia os valores
de genero e ano de nascimento, além de habilitar o botão de checar
e sumir
*/
