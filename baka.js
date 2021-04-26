function sus() {
    window.open("index.html")
}

var source = "amonguss.m4a"
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;

sus();
