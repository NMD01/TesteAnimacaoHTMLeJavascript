let animacao = document.getElementById("animacao")                      

xInicial = 40
yInicial = 0

function mexer(a){
    animacao.style.left = a + "px"
    
}

setInterval(function(){
    mexer(xInicial++)

if(xInicial > 640){
    xInicial = 0
}

},2)   
    
                        