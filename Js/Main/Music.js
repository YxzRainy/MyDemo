
var Music = new Audio("../../Music/Bgm.mp3");

// play end
function MusicMonitor() {
    Music.addEventListener(
        'ended',
        function () {
            Music = new Audio("../../Bgm.mp3");
            MusicMonitor();
        },
        false
    );
}
MusicMonitor();

var Body = $('body')

Body.mouseover(function () {
    Music.play();
})
