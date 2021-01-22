var whiteBtns = document.querySelectorAll('.piano-btn');
var blackBtns = document.querySelectorAll('.line');
//Detecting Button Press
function nadjiMuziku(buttonInnerHtml){
    switch(buttonInnerHtml){
        case "y":
            var audio = new Audio('Piano sounds/C.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('Piano sounds/Db.mp3');
            audio.play();
            break;
        case "x":
            var audio = new Audio('Piano sounds/D.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('Piano sounds/Eb.mp3');
            audio.play();
            break;
        case "c":
            var audio = new Audio('Piano sounds/E.mp3');
            audio.play();
            break;
        case "v":
            var audio = new Audio('Piano sounds/F.mp3');
            audio.play();
            break;
        case "g":
            var audio = new Audio('Piano sounds/Gb.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('Piano sounds/G.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('Piano sounds/Ab.mp3');
            audio.play();
            break;
        case "n":
            var audio = new Audio('Piano sounds/A.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('Piano sounds/Bb.mp3');
            audio.play();
            break;
        case "m":
            var audio = new Audio('Piano sounds/B.mp3');
            audio.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

function buttonPressed(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 500);
}

whiteBtns.forEach(btn => {

   btn.addEventListener('click', function(){
        var buttonInnerHtml = this.classList[0];
        nadjiMuziku(buttonInnerHtml);
        buttonPressed(buttonInnerHtml);
    });

});

blackBtns.forEach(btn => {

    btn.addEventListener('click', function(){
         var buttonInnerHtml = this.classList[0];
         nadjiMuziku(buttonInnerHtml);
         buttonPressed(buttonInnerHtml);
     });
 });


//Detecting keyboard press
document.addEventListener("keypress", function(event){
    nadjiMuziku(event.key);
    buttonPressed(event.key);
});
