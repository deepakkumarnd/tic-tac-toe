board = {
	x : 100,
	y : 100,
	d : 100,
	p : 100
}

var paper = null;

function formStringXY(x1,y1,x2,y2){
	var str = ("M" + x1 + "," + y1 + "L" + x2 + "," + y2);
	return(str);
}

function drawGrid() {
	var x = board.x;
	var y = board.y;
	var d = board.d;
	var p = board.p;

	paper = Raphael(x-p, y-p, (x+(3*d)+p), (y+(3*d)+p));

	var h1 = paper.path(formStringXY(x, y, (x+(3*d)), y));
	var h2 = paper.path(formStringXY(x, (y+d), (x+(3*d)), (y+d)));
	var h3 = paper.path(formStringXY(x, (y+(2*d)), (x+(3*d)), (y+(2*d))));
	var h4 = paper.path(formStringXY(x, (y+(3*d)), (x+(3*d)), (y+(3*d))));

	var v1 = paper.path(formStringXY(x, y, x, (y+(3*d))));
	var v2 = paper.path(formStringXY((x+d), y, (x+d), (y+(3*d))));
	var v3 = paper.path(formStringXY((x+(2*d)), y, (x+(2*d)), (y+3*d)));
	var v4 = paper.path(formStringXY((x+(3*d)), y, (x+(3*d)), (y+(3*d))));
}


function resetBoard(paper){
	for( i = 0 ; i < 9 ; i++) {
		cell  = Math.floor((Math.random()*9)+1);
		var circle = paper.circle(50, 40, 10);
		circle.attr("fill", "#f00");
		circle.attr("stroke", "#fff");
	}
}

function codeToCellNumber(n){
	var id = -1;

	if(n==1){id = 9;}
	else if(n==2){ id = 1;}
	else if(n==3){ id = 5;}
	else if(n==4){ id = 8;}
	else if(n==5){ id = 0;}
	else if(n==6){ id = 4;}
	else if(n==7){ id = 10;}
	else if(n==8){ id = 2;}
	else if(n==9){ id = 6;}
	else { throw id; }

	return(id);
}

function getCellNumber(p,q){
  var code = 0;
  var x = board.x;
  var y = board.y;
  var d = board.d;

  if(isOutOfBound(p,q)){
    return(-1);
  }

	if(p <= (x+d)){
		code = (code | 8);
	}
	else if(p > (x+(2*d))){
		code = (code | 4);
	}
	else{}

	if(q <= (y+d)){
		code = (code | 1)
	}
	else if(q > (y+(2*d))){
		code = (code | 2)
	}
	else{}

  return(codeToCellNumber(code));
}

function isOutOfBound(p,q){
  var result = false;
  if((p<board.x) || (p>(board.x+(3*board.d))) || (q<board.y) || (q>(board.y+(3*board.d)))){
    result = true;
  }
  return(result);
}

function drawCoin(cell, color){
	var centre = getCellCentre(cell);
	var x = centre[0];
	var y = centre[1];
	var coin = paper.circle(x, y, 10);
	coin.attr({fill: color, stroke: "none"});
}

function getCellCentre(cell){
	var d = board.d;
	var x = (d/2);
	var y = (d/2);

	if(cell == 1){
		x = y = Math.round(d/2);
	}
	else if(cell == 2){
		x = Math.round(d+(d/2));
		y = Math.round(d/2);
	}
	else if(cell == 3){
		x = Math.round((2*d)+(d/2));
		y = Math.round(d/2);
	}
	else if(cell == 4){
		x = Math.round(d/2);
		y = Math.round(d+(d/2));
	}
	else if(cell == 5){
		x = y = Math.round(d+(d/2));
	}
	else if(cell == 6){
		x = Math.round((2*d)+(d/2));
		y = Math.round(d+(d/2));
	}
	else if(cell == 7){
		x = Math.round(d/2);
		y = Math.round((2*d)+(d/2));
	}
	else if(cell == 8){
		x = Math.round(d+(d/2));
		y = ((2*d)+(d/2));
	}
	else if(cell == 9){
		x = y = ((2*d)+(d/2));
	}
	else{ throw -1;}

	x = board.x + x;
	y = board.y + y;

	return(Array(x,y));
}

var setUpBoard = function(){
	drawGrid();
    board.ai_coin_1 = paper.circle(board.x+(3.5*board.d), board.y+(board.d), 10);
	board.ai_coin_1.attr({fill: "green", stroke: "none"});
	board.human_coin_1 = paper.circle(board.x+(3.5*board.d), board.y+(1.5*board.d), 10);
	board.human_coin_1.attr({fill: "red", stroke: "none"});
}

var randomCell = function(){
	cell_no = Math.round((Math.random()*9) + 1);
    return cell_no;
}
