var grados = 0;
var backX = 0;
var cw = canvas.width;
var ch = canvas.height;
var speedScene = 10;
var backW = cw;
var goX = 0;
var turnoImg = 0;
var puntos = buclePrincipal.seg;
var puntosFinal = 0;

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function colision(obj1,obj2){
    if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.height + obj1.y > obj2.y) {
            pause = true;
            registroTemporal = 2000;
            puntosFinal =  buclePrincipal.seg = screenshot;
            
            
        }

}

resetGame();

function escenaJuego(){
    colision(Pajaro,Suelo);
    colision(Suelo,Pajaro);
    colision(TuberiaDown,Pajaro)
    colision(Pajaro,TuberiaDown)
    colision(Pajaro,TuberiaUp)
    colision(TuberiaUp,Pajaro)

    //Color de cielo azul
    ctx.fillStyle = "rgb(112,197,206)";
    ctx.fillRect(0,0,cw,ch);

    // Fondo de imagen Paisaje
    ctx.translate(0,ch-235);
    var Edificios = ctx.createPattern(Fondo, 'repeat-x');
    ctx.fillStyle = Edificios;
    ctx.fillRect(0, 0, cw, ch);
    ctx.resetTransform();

    //Dibujamos el suelo
    ctx.save();
    ctx.fillStyle = "rgb(232, 210, 136)";
    ctx.fillRect(Suelo.x,Suelo.y,Suelo.width,Suelo.height)
    ctx.restore();

    //Linea de suelo negra
    ctx.beginPath();
    ctx.moveTo(Suelo.x,Suelo.y);
    ctx.lineTo(cw,Suelo.y);
    ctx.stroke();
    ctx.closePath();

    //Fondo en movimiento
    ctx.translate(backX,Suelo.y);
    var pattern = ctx.createPattern(Back, 'repeat-x');
    ctx.fillStyle = pattern;
    ctx.fillRect(0,0, backW, ch);
    ctx.resetTransform();

    //si el juego esta play
    if(!pause){
        Pajaro.y+= 9.8 * buclePrincipal.mseg/80;

        backX-=speedScene;
        backW+=speedScene;
        goX-=speedScene;
        turnoImg+=0.2;

        if(grados >= 90){
            grados=90;
        }else{
            grados+=5;
        }
    }

    TuberiaUp.x = goX;
    TuberiaDown.x = goX;
    //Dibbujamos las tuberias
    if(goX==-100){
        goX=cw;
        TuberiaUp.height = randomInt(30,Suelo.y-200);
        TuberiaDown.y = TuberiaUp.height + 140;
        TuberiaDown.height = Suelo.y - TuberiaDown.y;
        
    }
    ctx.beginPath()
    ctx.lineWidth = 5;

    ctx.fillStyle = "#12C41A";
    ctx.rect(goX,TuberiaUp.y,TuberiaUp.width, TuberiaUp.height)

    ctx.fillStyle = "#12C41A";
    ctx.rect(goX,TuberiaDown.y,TuberiaDown.width, TuberiaDown.height);
    ctx.fill();
    ctx.stroke();

    //Dibujamos el Pajaro con sus posiciones y animaciones
    anguloRotacion = grados * Math.PI / 360;
    ctx.translate(Pajaro.x+20,Pajaro.y+20);
    ctx.rotate(anguloRotacion);
    if(turnoImg <= 1){
        ctx.drawImage(Bird1,-20,-20,Pajaro.width,Pajaro.height)//pajaro
    }
    else if(turnoImg <= 2){
        ctx.drawImage(Bird3,-20,-20,Pajaro.width,Pajaro.height)//pajaro
    }
    else if(turnoImg <= 3){
        ctx.drawImage(Bird2,-20,-20,Pajaro.width,Pajaro.height)//pajaro        
    }else{
        ctx.drawImage(Bird1,-20,-20,Pajaro.width,Pajaro.height)//pajaro
        turnoImg=0;
    }

    ctx.resetTransform();

    // Mostramos los segundos
    ctx.fillStyle="#000";
    ctx.fillText("TIEMPO TRANSCURRIDO Y PUNTAJE FINAL : " + buclePrincipal.seg ,10,30);
    ctx.font = "25px Arial";
    
    if(pause) {// si el juego esta pausado
        ctx.save();
        ctx.font = "40px Arial";
        ctx.textAlign  = "center";
        ctx.fillStyle = "#000";
        turnoImg+=0.05;
        ctx.fillText("Iniciar juego",cw/2,ch/2);
        
        ctx.restore();
    }
   

}

