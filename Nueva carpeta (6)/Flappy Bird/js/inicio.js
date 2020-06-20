var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

window.addEventListener("load", function(){
	document.body.appendChild(canvas);
    inicio.iniciarJuego();
});

var inicio = {
    iniciarJuego(){
        dimensiones.iniciar();
		buclePrincipal.iterar();
		mouse.iniciar();
		autoScale(canvas);
    }
};


