function teste1(){
    //querySelector: Obtem um ELEMENTO
    var lis = document.querySelectorAll("ul li");
    var aux = "";
    for ( i in lis){
        aux = aux + i + " -> " + lis[i] + "<br>";
    }
    document.write(aux);
}
//_________________________________________________________
function teste(){
    var lis = document.querySelectorAll("ul > li");
    for(var i = 0; i<lis.length;i++){
        lis[i].style.backgroundColor = "blue";
    }
}
//_________________________________________________________
function teste2(){
    var lis = document.querySelectorAll("p, div");
    for(var i = 0; i<lis.length;i++){
        lis[i].style.backgroundColor = "red";
    }
}
//_________________________________________________________
function teste3(){
    var lis = document.querySelectorAll(".classe");
    for(var i = 0; i<lis.length;i++){
        lis[i].style.backgroundColor = "green";
    }
}
//_________________________________________________________
function somar(){
    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    var div = document.getElementById("resultado");
    div.innerHTML = n1 + n2;
    div.style.backgroundColor = "yellow";
    n1.style.backgroundColor = "red";

}
//_________________________________________________________
function mouse(x){
    x.style.backgroundColor = "yellow";
}
function sair(sai){
    if (sai.value == ""){
        sai.style.backgroundColor = "red";
    }else{
        sai.style.backgroundColor = "#FFF";
    }
}
//_________________________________________________________
function sumir(){
   var elementosShow =  document.querySelectorAll("p, .some");
   for (var i = 0; i<elementosShow.length;i++){
    elementosShow[i].style.display = "none";
    
   }
}
//_________________________________________________________
/* 
    SEM O THIS TEM QUE BUSCAR O CARA LA NA CASA DO CHAPEL
*/
function mudar(){
    var lis = document.querySelectorAll("ul li");
    for(var i = 0; i<lis.length; i++){
        if(i%2==0)   lis[i].innerHTML = "OK";
    }
}