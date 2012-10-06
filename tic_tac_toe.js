var game = {
    ai_color : "red",
    human_color : "red",
    ai_cells : Array(),
    human_cells : Array()
}
var TicTacToe = {
    play: function(){
        var randomCellNo;
        do{
            randomCellNo = randomCell();
        }while((game.ai_cells.indexOf(randomCellNo) !== -1) && (game.human_cells.indexOf(randomCellNo) !== -1));
        drawCoin(randomCellNo, game.ai_color);
    }
}
