const $levels = { "easy": 3, "medium": 4, "hard": 5 };
const $imgsTheme = { "default": "../img/buracoNuvem.gif", "active": "../img/nuvem.gif", "dead": "../img/deadNuvem.gif" }
const $imgWidth = 100; // largura da toupeira
const $imgHeight = 80; //altura da toupeira
const $initialTime = 30; //temp de jogabilidade independente da fase
var $timeGame = $initialTime;
var $idChronoGame; //ira controlar o setInterval do cronometro
var $idChronoStartGame; //ira controlar o setInterval do cronometro do jogo

urlParams = new URLSearchParams(window.location.search);
userId = urlParams.get('id');
console.log("Passado pela sessionStorage: " + sessionStorage.getItem("id"))
console.log("Usuario: " + userId)


$(document).ready(function () {
    fillBoard();
    $("#chrono").text($initialTime);
    $("#btnPlay").click(function () {
        btnCtrl();
        $idChronoStartGame = setInterval(startGame, 3000);
        $idChronoGame = setInterval(startChronoGame, 1000);
    });

    $("#btnPause").click(function () { pauseGame() });
    $("#btnStop").click(function () { endGame() });
    $("#btnExit").click(function () { window.open("login.html", "_self") });


});

function startChronoGame() {
    ($timeGame > 0) ? $("#chrono").text(--$timeGame) : andGame();
}

function andGame() {
    clearInterval($idChronoGame);
    clearInterval($idChronoStartGame);
    //alert(`Fim de jogo. Sua pontuaçao foi = ${("#score").text()}`)
    alertWifi(`Fim de Jogo. Sua pontuação foi = ${$("#score").text()}`, false, 0, `img/${$imgsTheme.active}`, "50");
    readUsers();
    fillBoard();
    $("#score").text("0");
    $timeGame = $initialTime;
    $("#chrono").text($timeGame);

}

function pauseGame() {
    clearInterval($chronoGame);
    clearInterval($chronoTime);
    fillBoard();
    $("#btnPlay").prop("disabled", false);
    $("#btnPause").prop("disabled", true);
}

function btnCtrl() {
    $("btnPause").prop("disabled", true);   //desabilitar
    $("btnStop").prop("disabled", true);    //desabilitar 
    $("btnPlay").prop("disabled", true);     //desabilita

}

//Cria a moldura do tabuleiro conforme o nível de dificuldade
function fillBoard() {
    $level = getLevel();
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({ "width": $boardWidth, "height": $boardHeight });
    placeHolesBoard($level);

}
//insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>");//attr("id",`mole_${$i+1}`);
        $img = $("<img>").attr({ "src": `img/${$imgsTheme.default}`, "id": `mole_${$i + 1}` });
        $($img).click(function () { updateScore(this) });//alert($(this).attr("id"))
        $($div).append($img);
        $("#board").append($div);
    }
}

// Atualiza a pontuaco ao clicar sobre a toupeira
function updateScore($img) {
    if ($($img).attr("src").search($imgsTheme.active)!= -1) {
        $("#score").text((String(parseInt($("#score").text())+1)));
        $($img).attr("src",`img/${$imgsTheme.dead}`);
    }
}

function startGame() {
    fillBoard(); // Melhorar: trocar apenas a toupeira do tabuleiro pelo buraco ao inves de limpar todo o tabuleiro
    $level = getLevel();
    $randNumber = getRanNumber(1, Math.pow($level, 2));
    $(`#mole_${$randNumber}`).attr({ "src": `img/${$imgsTheme.active}` });
    setTimeout(() => { //implementado
        $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.default}`)
    }, 1000);
}
// Gera um numero aleatorio entre "min" e "max"
function getRanNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}
function getLevel() {
    return $levels[$("#level").val()]
}

// CHAMA O RANKING E MOSTRA SUA PONTUAÇAO 
function readUsers(){
    fetch(jsonFile)
    .then(jsonFile => jsonFile.json())
    .then(contents =>{
        contents.users.forEach($user => {
            $nivel = $('#id_select').val();
            if($user.level == $nivel){
                $linha = $("<tr></tr>");
                $colunaNome = $("<td></td>").text($user.username);
                $linha.append($colunaNome);
                $colunaScore = $("<td></td>").text($user.score);
                $linha.append($colunaScore);
                $("#userTable").append($linha);
                  
            }
        });
    })
    .catch(err => console.log(err));
}