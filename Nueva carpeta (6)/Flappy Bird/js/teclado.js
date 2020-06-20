//Play al iniciar
var pause = true;

//para resetear el juego
window.onkeyup = function(press){
    
    if(press.key === "Enter"){
        pause=!pause;
        resetGame();
    }
}

function flyUp(){
    if(!pause){
        Pajaro.y-=40;
        grados=-90;
        buclePrincipal.mseg = 0;
        
    }
}