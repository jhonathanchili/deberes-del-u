var mouse = {
    x: null,
    y: null,
    press1: null,
    press2: null,
    press3: null,
    focus: null,
    iniciar(){
        mouse.move();
        mouse.up();
        mouse.down();
    },
    move(){
        window.addEventListener("mousemove",function(event){
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            //console.log("Coordenadas X: " + mouse.x + " Coordenadas Y: " + mouse.y)
        },false);
    },
    down(){
        window.addEventListener("mousedown",function(event){
            // Si el mouse esta presionado
            mouse.press1 = (event.which==1)? true: false;
            mouse.press2 = (event.which==2)? true: false;
            mouse.press3 = (event.which==3)? true: false;
            if(event.which == 1){
                flyUp()
                pause = false;
                console.log("Tiene presionado el botón principal : " + mouse.press1 )
            }
            if(event.which == 2){
                console.log("Tiene presionado el botón de enmedio de el scroll: " + mouse.press2)
            }
            if(event.which == 3){
                console.log("Tiene presionado el botón secundario: " + mouse.press3)
            }
        },false)
    },
    up(){
        window.addEventListener("mouseup",function(event){
            // Si el mouse estaba presionado y lo soltaste
            mouse.press1 = (event.which == 1)? false: true;
            mouse.press2 = (event.which == 2)? false: true;
            mouse.press3 = (event.which == 3)? false: true;

            if(event.which == 1){
                console.log("Acaba de soltar el botón pricipal : " + mouse.press1 )
            }
            if(event.which == 2){
                console.log("Acaba de soltar el boton de enmedio de el scroll: " + mouse.press2)
            }
            if(event.which == 3){
                console.log("Acaba de soltar el boton secundario: " + mouse.press3)
            }
        },false)
    },
    
    
};