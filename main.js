var contenitore = [];
var cont = 0;

function carica(){
    var tabella = document.getElementById("tabella");
    var nome = document.getElementById("input_nome").value;
    var cognome = document.getElementById("input_cognome").value;
    var classe = document.getElementById("input_classe").value;
    var scuola = document.getElementById("input_scuola").value;
    var newriga = [nome, cognome, classe, scuola];
    contenitore[cont];
    var riga = document.createElement("tr");
    var ele_nome = document.createElement("th");
    ele_nome.innerHTML=nome;
    var ele_cognome = document.createElement("th");
    ele_cognome.innerHTML=cognome;
    var ele_classe = document.createElement("th");
    ele_classe.innerHTML=classe;
    var ele_scuola = document.createElement("th");
    ele_scuola.innerHTML=scuola;
    riga.appendChild(ele_nome);
    riga.appendChild(ele_cognome);
    riga.appendChild(ele_classe);
    riga.appendChild(ele_scuola);
    tabella.appendChild(riga);
    cont++;
}

function resetta_campi(){
    document.getElementById("input_nome").value = "";
    document.getElementById("input_cognome").value = "";
    document.getElementById("input_classe").value = "";
    document.getElementById("input_scuola").value = "";
}