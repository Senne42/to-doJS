// BUSCO A LISTA IDENTIFICADA PELA TAG LI E PASSO PARA A VAR "MINHA LISTA"
var minhaLista = document.getElementsByTagName("li");
var contador;
var fechar = document.getElementsByClassName('fechar');


function novoElemento()
{
    var lista = document.createElement('li');
    var valor = document.getElementById('input_texto').value;
    var texto = document.createTextNode(valor);
    lista.appendChild(texto);

    // TRATANDO INPUT VAZIO
        if (valor == '')
        {
            alert("VOCÊ DEVE ESCREVER ALGO!!");
        }
        else
        {
            document.getElementById('lista').appendChild(lista);
        }

    // CRIANDO NOVO ELEMENTO SPAN
    var span = document.createElement("span");
    // DEFININDO TEXTO QUE FICARÁ NO SPAN
    var txt = document.createTextNode("X");
    // DEFININDO CLASSE "fechar" PARA O SPAN
    span.className = "fechar";
    // ADICIONANDO O TEXTO AO SPAN
    span.appendChild(txt);
    // INSERINDO O SPAN NO ELEMENTO "contador" DA LISTA
    minhaLista[contador].appendChild(span);

    for(contador = 0; contador < fechar.length; contador++)
    {
        fechar[contador].onclick = function()
                                    {
                                        var div = this.parentElement;
                                        div.style.display = 'none';
                                    }
    }
}