const buttonColors = ["red","blue","green","yellow"];
var patternArray=[];

var  userClickedArray=[];
$(".btn").click(function(){
    var userbuttonClickedColor = $(this).attr("id");
    userClickedArray.push(userbuttonClickedColor);
})

function nextSequence()
{
    var randomNumber = Math.floor(Math.random()*4);
    var choosenColor = buttonColors[randomNumber];
    patternArray.push(choosenColor);

    var btn = $("#"+choosenColor);

    btn.fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + choosenColor + ".mp3");
    audio.play();


    
}

nextSequence();