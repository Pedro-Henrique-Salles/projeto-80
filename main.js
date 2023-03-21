var lista_convidados=[];

function enviar(){
    var nome_usuario=document.getElementById("nome").value ;
    lista_convidados.push(nome_usuario);
}

function mostrar(){
    document.getElementById("mostrar_lista").innerHTML=lista_convidados;
}

function organizar(){
    lista_convidados.sort();
    document.getElementById("organizar_nome").innerHTML=lista_convidados;
}

function pesquisar_nome(){
    var num=0;
    var nome_pesquisado=document.getElementById("nome_pesquisado").value ;
    for(var indice=0; indice<lista_convidados.length; indice++){
        if(nome_pesquisado==lista_convidados[indice]){
            num++;
        }
    }
    document.getElementById("achar_nome").innerHTML="nome encontrado "+num+" vez(es)";
}