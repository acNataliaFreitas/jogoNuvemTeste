function loadCustomers() {
    let xhttp = new XMLHttpRequest();
    let file = "LISTA02\json\clientes.json";

    xhttp.onreadystatechange = function () {
        if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
            printCustomers(xhttp.responseText, idtable);
        }
    }

    xhttp.open("GET", file, true);
    xhttp.send();
}

function printCustomers(clientes) {
    let table = document.getElementById(idtable);
    let trCliente = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");
    let tdSexo = document.createElement("td");

    clientes = JSON.parse(clientes);

    nome = document.createTextNode(clientes.nome);
    idade = document.createTextNode(clientes.idade);
    sexo = document.createTextNode(clientes.sexo)
    tdNome.appendChild(nome);
    tdIdade.appendChild(idade);
    tdSexo.appendChild(sexo);
    trCliente.appendChild(tdNome);
    trCliente.appendChild(tdIdade);
    trCliente.appendChild(tdSexo);
    table.appendChild(trCliente);
}

function loadFeminino(){

    if(tdSexo == "F"){
    let table = document.getElementById(idtable);
    let trCliente = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");

    clientes = JSON.parse(clientes);

    nome = document.createTextNode(clientes.nome);
    idade = document.createTextNode(clientes.idade);
    tdNome.appendChild(nome);
    tdIdade.appendChild(idade);
    trCliente.appendChild(tdNome);
    trCliente.appendChild(tdIdade);
    table.appendChild(trCliente);
    }
}

function loadMasculino(){
    if(tdSexo == "M"){
        let table = document.getElementById(idtable);
        let trCliente = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdIdade = document.createElement("td");
    
        clientes = JSON.parse(clientes);
    
        nome = document.createTextNode(clientes.nome);
        idade = document.createTextNode(clientes.idade);
        tdNome.appendChild(nome);
        tdIdade.appendChild(idade);
        trCliente.appendChild(tdNome);
        trCliente.appendChild(tdIdade);
        table.appendChild(trCliente);
        }

}