function disparador(id){
abrirv();

carga_info(id);
}

function abrirv() {
    var ventana=document.getElementById("ventana");
    ventana.classList.toggle("open");
    ventana.classList.toggle("close");
}

function carga_info(id){
    
//copiar 
var figure= document.getElementById(id);
var titulo= figure.getElementsByTagName("figcaption")[0].textContent;
var texto= figure.getElementsByTagName("p")[0].textContent;
var img= figure.getElementsByTagName("img")[0].getAttribute("src");

//pegar

var ventana= document.getElementById("ventana");
ventana.getElementsByTagName("h2")[0].innerHTML=titulo;
ventana.getElementsByTagName("p")[0].innerHTML=texto;
ventana.getElementsByTagName("img")[0].setAttribute("src",img);

}