function formStringXY(x1,y1,x2,y2){
	var str = ("M" + x1 + "," + y1 + "L" + x2 + "," + y2);
	return(str);
}

function drawgrid() {
	var x  = 100;
	var y  = 100;
	var d  = 100;
	var p = 5;

	var paper = Raphael(x-p, y-p, (x+(3*d)+p), (y+(3*d)+p));

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
		cell  = Math.floor((Math.random()*10)+1);
		var circle = paper.circle(50, 40, 10);
		circle.attr("fill", "#f00");
		circle.attr("stroke", "#fff");
	}
}

function getGridXY(x,y){

}
