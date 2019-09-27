// A variavel global somar contem uma funcao dentro dela na linha
// var s = somar ocorre uma atribuição de FNS a função s, local é a mesma que somar, GLOBLAL

function somar(x,y){
    return x+y;
}
function teste(){
    var s = somar;
    alert(s(3,4));
    var d = function(x){
        return 2*x;
    }
    alert(d(10));

    var d = x => 2*x;
    alert(d(10));

    //UMA FUNCAO CHAMADA DA FORMA: (F) (VALOR)
    //PROGRAMAÇÃO FUNCIONAL
    //SERA DEFINIDA E EXECUTADA NAQUELA LINHA
    alert((x => x+1)(5));
    alert(((x,y) => x*y)(1,2));

    //---------------arollfunction lambida
    //var k = function(x,y,z) => x+y+z;
    var k = function(x,y,z){
        return x+y+z;
    };
    alert(k(1,2,3));
    //FUNCAO DE ALTA ORDEM : SAO FUNCAOES QUE RECEBEM E OU RETORNAM OUTRAS FUNCAOES.
    //RECEBA uma função
    alert(func(x => 2*5));
    alert(func(x => 2*x));
    alert(func(triplo));
    
    //-----------------
    var s = soma(5)(2)//COMO RETORNO DA FUNCAO USO UM SEGUNDO PARAMETRO QUE SE REFERE A FUNCAO DE RETORNO;
    alert(s);
    


    //-------------
    comp(alert, x => 2*x)(7);


    //-----------
    var lista = [1,2,3,4].map(x => 2*x);
    }

   //RECEBE UMA FUNCAO E RETORNA OUTRA
   function comp(f,g){
       return function(a){
           return f(g(a));
       }
   }
   
   
   
   
   
    //recebe um valor e RETORNA UMA UMA FUNCAO
function somar(x){
    return function(y){ // Y E O RETORNO DA FUNCAO SOMAR
        return x+y;
    }
}


function func(f){
    return 1 + f(5);
}
function triplo(z){
    return 3*z;
}