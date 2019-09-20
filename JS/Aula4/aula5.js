function montarPag(){
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div1.appendChild(div2);
        div2.innerHTML = "Criado pelo JS";
        div1.style.backgroundColor = "red";
        document.body.appendChild(div1);
}

function montar(){
    montaUL(["PHP","HASKELL","JULIA","PYTHON","RUBY",
             "JS","LUA","COBOL","C#","C++","C",
             "FORTRAN","NODE.JS","ASSEMBLY"]);
}

function montaUL(lista){
    var ul = document.createElement("ul");
    for(let i=0; i < lista.length; i++){
        var li = document.createElement("li");
        li.innerHTML = lista[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function reqBD(){
    return {
        data:[{nome:"KAREN", idade:29,local:"SANTOS"},
              {nome:"MATHEUS", idade:31,local:"SANTOS"},
              {nome:"SAMUEL", idade:21,local:"SANTOS"},
              {nome:"MARTA", idade:20,local:"SV"},
              {nome:"ANNA JULIA", idade:18,local:"GJA"}
        ]
    }
}
function montarTab(){
    var objeto = reqBD();
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var thNOME = document.createElement("th");
    var thID = document.createElement("th");
    var thLC = document.createElement("th");
    thNOME.innerHTML = "NOME";
    thID.innerHTML = "IDADE";
    thLC.innerHTML = "LOCAL";
    var tbody = document.createElement("tbody");
    
        for (let i=0; i<objeto.data.length;i++){
            var trB = document.createElement("tr");
            var tdN = document.createElement("td");
            var tdI = document.createElement("td");
            var tdL = document.createElement("td");
            tdN.innerHTML = objeto.data[i].nome;
            tdI.innerHTML = objeto.data[i].idade;
            tdL.innerHTML = objeto.data[i].local;    
            trB.appendChild(tdN);
            trB.appendChild(tdI);
            trB.appendChild(tdL);
            tbody.appendChild(trB);
        }
        tr.appendChild(thNOME);
        tr.appendChild(thID);
        tr.appendChild(thLC);
        thead.appendChild(tr);
        tabela.appendChild(thead);
        tabela.appendChild(tbody);
        document.body.appendChild(tabela);

}


function teste(){
    var div = document.querySelector("#d1");
    var h1 = document.createElement("h1");
    h1.innerHTML = "trocado";
    div.parentNode.replaceChild(h1,div);
}

function remover(){
    var div = document.querySelector("#d1");
    div.parentNode.removeChild(div)
}

function inserirOutro(){
    var div3 = document.querySelector("#d3");
    var div = document.createElement("div");
    div.innerHTML = "INSERIDO"
    //DIV3 E A REFERENCIA PARA INSERIR
    //O PARENT NODE LOCALIZA O NO PAI PARA PODE EXECUTAR
    //CRUD NO DOM
    div3.parentNode.insertBefore(div,div3);

}

function inserirDepois(){
    var div1 = document.querySelector("#d1");
    var novo = document.createElement("div");
    novo.innerHTML = "INSERIDO";
    //NEXT SIBLING PEGA O ELEMENTO NO MESMO NIVEL ("IRMAO")
    div1.parentNode.insertBefore(novo, div1.nextSibling);
}

function ulzando(){
    var ul = document.createElement("ul");
    for(let i=0; i < 1000; i++){
        var li = document.createElement("li");
        li.innerHTML = "FABIO SEM MEGA DRIVE";
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function trocarDiv(){
    var div = document.querySelectorAll(".CLASSUDO");
    var h1 = document.createElement("h1");
    h1.innerHTML = "OK";

        div.parentNode.replaceChild(h1, div[i]);

}

