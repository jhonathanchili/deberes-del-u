// 1 seg 1000 ms
var buclePrincipal = {
    ultimoRegistro: 0,
    seg:0,
    mseg:0,
    iterar(registroTemporal){
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);//olver a inicar
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();
        if(!pause){
            buclePrincipal.mseg++;
        
        }
        // contador DE SEGUNDOS
        if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            buclePrincipal.seg++;//segundos que han pasado
           
        }
    },
   
    actualizar(registroTemporal){
        buclePrincipal.aps++;
       
    },
    dibujar(registroTemporal){
        
        escenaJuego();
    }
}