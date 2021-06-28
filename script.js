// BUSCO A LISTA IDENTIFICADA PELA TAG LI E PASSO PARA A VAR "MINHA LISTA"
var minhaLista = document.getElementsByTagName("li");
var contador;
    
    // CRIANDO UM BOTÃO PARA EXCLUIR CADA ITEM DA LISTA
    // contador RECEBE 0 E EQUANTO FOR MENOR QUE O TAMANHO DA LISTA EXECUTARÁ
    for(contador = 0; contador < minhaLista.length; contador++ )
    {
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
    }

