const src_1 = "img/thin.png";
const src_2 = "img/fat.png";
const character = document.getElementById("character");
character.src = src_1;

var block = document.getElementById("block");

function jump(){
    if (character.classList !="animate"){
        character.classList.add("animate");
}
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<100 && blockLeft>-10 && characterTop>=130){
        document.getElementById("character").src = src_2;
        block.style.animation = "none";
        block.requestFullscreen.display = "none";
    }
}, 10)
