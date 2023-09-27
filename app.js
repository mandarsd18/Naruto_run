const naruto=document.getElementById("naruto");
const sakura=document.getElementById("sakura");
var audio = new Audio('naruto_konoha.mp3');
audio.play();


function jump(){
    if(naruto.classList!="jump"){
        audio.volume=0.2;
        var audio1 = new Audio('naruto_dattebayo.mp3');
        audio1.play();

         naruto.classList.add("jump")
        setTimeout(function(){
            naruto.classList.remove("jump")
            audio.volume=1

        },500);
    }

}
let cheakAlive= setInterval(function(){
    let narutop=parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
   
    let sakuraleft=parseInt(window.getComputedStyle(sakura).getPropertyValue("left"));
    if (sakuraleft > 0 && sakuraleft < 140 && narutop >= 205) {
        audio.pause();
        alert("Whoops! Game Over :(");
       
        window.location.reload();
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});