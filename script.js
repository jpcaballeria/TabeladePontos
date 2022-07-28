var furia = {nome: "Furia", vitorias:0, empates:0, derrotas:0, pontos:0}
var zeroZeroNation = {nome: "00Nation", vitorias:0, empates:0, derrotas:0, pontos:0}
var mibr = {nome: "MIBR", vitorias:0, empates:0, derrotas:0, pontos:0}


function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return(pontos)
}

const times = [];

function exibeTimesNaTela(times){
    var elemento = ""
    for(var i = 0; i < times.length; i++){
        elemento +="<tr><td>" + times[i].nome + "</td>"
        elemento +="<td>" + times[i].vitorias + "</td>"
        elemento +="<td>" + times[i].empates + "</td>"
        elemento +="<td>" + times[i].derrotas + "</td>"
        elemento +="<td>" + times[i].pontos + "</td>"
        elemento +="<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento +="<td><button onclick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento +="<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaTimes = document.getElementById("tabelaTimes");
    tabelaTimes.innerHTML = elemento;
}

exibeTimesNaTela(times);

function adicionarVitoria(i) {
    var time = times[i];
    time.vitorias ++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(times);
}

function adicionarEmpate(i) {
    var time = times[i];
    time.empates ++
    time.pontos = calculaPontos(time)
    exibeTimesNaTela(times);
}

function adicionarDerrota(i) {
    var time = times[i];
    time.derrotas ++
    exibeTimesNaTela(times);
}

function adicionarTime(){
    const novoTime = document.getElementById("nomeNovoTime").value;
    if (novoTime != "") {
        newTime = {
            nome: novoTime,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        };
        times.push(newTime);
        exibeTimesNaTela(times);
        document.getElementById("nomeNovoTime").value = "";
    } else {
        alert ("o nome não pode ser vazio!")
    }
}

function zerarPontos(){
    for (let i = 0; i < times.length; i++){
        let time = times[i];
        time.vitorias = 0;
        time.empates = 0;
        time.derrotas = 0;
        time.pontos = 0;
    }
    exibeTimesNaTela(times);
}

function deletarTimes(){
    for (var i = 0; times.length != 0; i++){
        var removedItem = times.splice(0,i);
    }
    exibeTimesNaTela(times);
}
