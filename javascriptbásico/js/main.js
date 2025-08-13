var div = document.getElementById("box");

if(localStorage.getItem('box_bg') != null){
    let bg = localStorage.getItem('box_bg');
    div.style.backgroundColor = bg;
}
function mudar_cor(hexcode){
    div.style.backgroundColor = hexcode;
    localStorage.setItem('box_bg', hexcode)
}
