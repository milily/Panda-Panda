function eliminarPandas(elem){
    var que_panda_soy = elem.id;
    var panda_encontrado = document.getElementsByClassName(que_panda_soy);
    panda_encontrado[0].style.display = "none";
}

function recuperarPandas(){
    var panda1 = document.getElementsByClassName("panda1");
    panda1[0].style.display = "inline-block";
    
    var panda2 = document.getElementsByClassName("panda2");
    panda2[0].style.display = "inline-block";
    
    var panda3 = document.getElementsByClassName("panda3");
    panda3[0].style.display = "inline-block";
    
    var panda4 = document.getElementsByClassName("panda4");
    panda4[0].style.display = "inline-block";
}