const $level = {"easy":3, "medium":5, "hard":7}
const $imgWidth = 100; //largura
const $imgHeight = 80; //altura

$(document).ready(function() {
    fillBoard();
    $("#btnPlay").click(function(){
        startGame();
    });
});

function fillBoard(){
    $level = $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight =  $imgHeight * $level;
    $("#board").css({"width":$boardWidth,"height:":$boardHeight});
    placeHolesBoard($level);
}

function placeHolesBoard($level){
        $("#board").empty();
        for($i=0; s$<Math.pow($level,2); $i++){
        $div = $("<div></div>");//.attr("id",`mole_${$i+1}`);
        $img = $("<img>").attr({"src":"img/buraco.gif","id":`mole_${$i+1}`});
        $($div).append($img);
        $("#board").append($div);
        }
    }

function startGame(){
    $level = $getLevel();
    $randNumber = getRandomNumber(1,Math.pow($level,2));
    $(`#mole_${$randNumber}`).attr("src","img/toupeira.gif")
}

function getRandomNumber(min, max){
    return Math.random((Math.random()* Math.abs(max - min)) + min);
}

function getLevel(){
    $level = $levels[$("#level").val()];
}