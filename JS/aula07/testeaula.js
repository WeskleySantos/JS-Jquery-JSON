function invert(){
    var lista = 
    ["FATEC"
    ,"SANTOS"
    ,"ETEC"
    ,"CENTRO"].map(x => x.split("").reverse().join(""));
    //x.split("") PEGA UMA STRING
    // e retorna ['F','A','T','E','C']
    //x.join("")Junta conforme o separador
    alert(lista);
    alert(elevar([1,2,3,4,5]))
}
function elevar(ls){
    return ls.map(x => x*x);
}

