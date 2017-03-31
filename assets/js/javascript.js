var Listas=[];

function Lista(titulo,contenido){
  this.titulo = titulo;
  this.contenido=contenido;
  this.pendiente=[];
}

var contador=0;
function crearLista(){
  contador++;

  var titulo = document.getElementById("titulo").value;
  var contenedor = document.getElementById("contenedor");
  //contenedor.id="contenedor"+contador;
  var botonX =document.createElement("button");
  botonX.id="XX"+contador;
  botonX.onclick=removerLista;
  var lista = new Lista(titulo);

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
  boton.onclick=crearPendiente;
  //boton.onclick="crearPendiente()";

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
  console.log(contenedor);
  document.getElementById("titulo").value='';
}

function crearPendiente(){
  var elemento =document.getElementById("entradalista"+contador).value;
  var ul =document.getElementById("lista"+contador);
  var li=document.createElement("li");
  var botonPendiente =document.createElement("button");
  li.id="li"+contador;
  botonPendiente.id="X"+contador;
  botonPendiente.setAttribute("onclick","removerPendientes();")
  ul.appendChild(li);

  li.innerText=elemento
  ul.appendChild(botonPendiente).innerHTML="X";
  document.getElementById("entradalista"+contador).value='';
  console.log(contenedor);
}

function removerLista(){
  var celda = document.getElementById("tr"+contador);
  console.log(celda);
  celda.parentNode.removeChild(celda);
}

function removerPendientes(){
  var elemento = document.getElementById("li"+contador);
  elemento.parentNode.removeChild(elemento);
  var botonPendiente =document.getElementById("X"+contador);
  botonPendiente.parentNode.removeChild(botonPendiente);
}
