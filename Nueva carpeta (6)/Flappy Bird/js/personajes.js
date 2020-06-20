class Rectangulo{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

//var Pajaro = nuevo Rectangulo();
//var Suelo = nuevo Rectangulo();
function resetGame(){
    buclePrincipal.mseg = 0;
    grados = 0;
    Pajaro = new Rectangulo(cw/6,ch/3,40,40,);
    Suelo = new Rectangulo(0,ch-100,cw,250,);
    TuberiaUp = new Rectangulo(0,0,60, 0,);
    TuberiaDown = new Rectangulo(0,0,60, 0,);
    buclePrincipal.seg = 0;
}