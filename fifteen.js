

var puzzlePiece;
var shiftx;
var shifty;

window.onload = function () { 
	    var puzzleArea = document.getElementById("puzzlearea");
		puzzlePiece = puzzleArea.getElementsByTagName("div");

	for(var i=0; i<puzzlePiece.length; i++) { 

		puzzlePiece[i].className = 'puzzlepiece';

		puzzlePiece[i].style.left = (i%4*100)+ 'px';

		puzzlePiece[i].style.top = (parseInt(i/4)*100) + 'px';

		puzzlePiece[i].style.backgroundPosition = '-' + gamePiece[i].style.left + ' ' + '-' + puzzlepiece[i].style.top;

		alert('Test');

	 puzzlepiece[i].onmouseover = function() { 
	 	if (checkMove(parseInt(this.innerHTML))) {
	 		this.style.border = "red";

	 	var whole = document.getElementsByClassName('body'); 
	 		whole[0].style.backgroundImage= "url('https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcPM2iaru8KO_HJBT1kailnugk.Z_hdUahfB_RHPB3xmCyO1gFieB4neGYHali1H8OkfrjHt1qX.c.j1olPFooCNcXOyVi7UyPgCmakPdYXvQl898F1JHktrhdG6a3gp6ikOPv55a3.crSO.y_dlndIYbh7eqkI2kHjg27.aYaWe8-&h=300&w=200&format=jpg')";
	 	}

	 	function change (position)
	 	//changes position to empty space 
	 	{ 
	 		var switch = puzzlePiece[position].style.top;

	 		puzzlePiece[position].style.top = shifty;
	 		shifty = change;

	 		change = puzzlePiece[position].style.left; 
	 		puzzlePiece[position].style.left = shiftx;
	 		shiftx = change;



	 	}

	 	function checkMove(position) { 
	 		if (left(shiftx, shifty) == (position-1)) { 
	 			return true;
	 		}
	 		if (right(shiftx, shifty) == (position-1)) { 
	 			return true; }

	 		if (up(shiftx, shifty) == (position-1)) { 
	 			return true; }

	 		if (down(shiftx, shifty) == (position-1)) { 
	 			return true; 
	 		} 
	 	} 





	 	}

	} 


} 


