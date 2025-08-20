var largura = document.getElementById("i_largura");
var altura = document.getElementById("i_altura");
var cor = document.getElementById("i_cor");
var espessura = document.getElementById("i_espessura");

var box = document.getElementById("box");

largura.addEventListener('input', function(){
    let v_largura = largura.value;
    box.style.width = v_largura + 'px';
})

altura.addEventListener('input', function(){
    let v_altura = altura.value;
    box.style.height = v_altura + 'px';
})

cor.addEventListener('input', function(){
    let v_cor = cor.value;
    box.style.backgroundColor = v_cor;
})

espessura.addEventListener('input', function(){
    let v_espessura = espessura.value;
    box.style.borderWidth = v_espessura + 'px';
    box.style.borderStyle = 'solid';
})

