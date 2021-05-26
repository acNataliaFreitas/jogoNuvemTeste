const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100; // largura da toupeira
const $imgHeight = 80; //altura da toupeira

$(document).ready(function () {
    fillBoard();
    $("#btnPlay").click(function () {
        setInterval(startGame, 2000);
    });
});

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
        $img = $("<img>").attr({ "src": "img/buraco.gif", "id": `mole_${$i + 1}` });
        $($div).append($img);
        $("#board").append($div);
    }
}
function startGame() {
    fillBoard(); // Melhorar: trocar apenas a toupeira do tabuleiro pelo buraco ao inves de limpar todo o tabuleiro
    $level = getLevel();
    $randNumber = getRanNumber(1, Math.pow($level, 2));
    $(`#mole_${$randNumber}`).attr("src", "img/toupeira.gif");
}
// Gera um numero aleatorio entre "min" e "max"
function getRanNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}
function getLevel() {
    return $levels[$("#level").val()]
};