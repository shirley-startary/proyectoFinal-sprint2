function Lista(titulo,contenido){
  this.titulo = titulo;
  this.contenido=contenido;
}

var contador=0;
function crearLista(){
  contador++;

  var titulo = document.getElementById("titulo").value;
  var contenedor = document.getElementById("contenedor");
  //contenedor.id="contenedor"+contador;
  var botonX =document.createElement("button");
  botonX.id="XX"+contador;
  botonX.setAttribute("onclick","removerLista();")


  var tr=document.createElement("tr");
  tr.id="tr"+contador;

  var td=document.createElement("td");
  td.id="td"+contador;




  var article =document.createElement("article");
  article.id="article"+contador;

  var h2 =document.createElement("h2");
  h2.id="titulo"+contador;

  var ul =document.createElement("ul")
  ul.id="lista"+contador;

  //var li =document.createElement("li");
  //li.id="elementoLista"+contador;

  var input=document.createElement("input");
  input.id="entradalista"+contador;
  var boton =document.createElement("button");
  boton.id="boton"+contador;
  boton.setAttribute("onclick","crearPendiente();")
  //boton.onclick="crearPendiente()";
  console.log(contenedor);
  contenedor.appendChild(tr);
  tr.appendChild(td);
  td.appendChild(botonX).innerHTML="x"
  td.appendChild(article)
  article.appendChild(h2);
  article.appendChild(ul);
  //ul.appendChild(li);
  article.appendChild(input);
  article.appendChild(boton).innerHTML="Crear Pendiente"
  h2.innerText=titulo;

  document.getElementById("titulo").value='';
}

function crearPendiente(){
  var elemento =document.getElementById("entradalista"+contador).value;
  var ul =document.getElementById("lista"+contador);
  var li=document.createElement("li");
  var boton =document.createElement("button");
  boton.id="X"+contador;
  boton.setAttribute("onclick","remover();")
  ul.appendChild(li);

  li.innerText=elemento
  ul.appendChild(boton).innerHTML="X";
  document.getElementById("entradalista"+contador).value='';

}

function removerLista(){
  var celda = document.getElementById("tr"+contador);
  console.log(celda);
  celda.parentNode.removeChild(celda);
}

function removerPandientes
