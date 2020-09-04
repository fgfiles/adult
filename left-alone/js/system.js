/* ******************** Настройки служебные ******************** */

// Массив событий для комнат и интерфейса
var ticks = [];
ticks["room_interface"] = new CustomEvent("room_interface");

var curTime = new Date().getTime();
var diffTickTime = 0;
var FPS = 0;
var startFPStime = curTime;

// Заполняем ассациативный массив событиями
for (var i = 0, len = rooms.length; i < len; i++) {
    ticks[ rooms[i] ] = new CustomEvent(rooms[i]);
}

var tmrGlobal = window.document.getElementById("tmr_global");
var intervalTick = setInterval(function () {
    var newTime = new Date().getTime();
    diffTickTime = (newTime - curTime);
    curTime = newTime;

    if ( (curTime - startFPStime) >= 1000 ) {
        startFPStime = curTime;
        // ObjSet('txt_bottle_fps', { text: 'FPS: ' +FPS });
        FPS = 0;
    } else {
        FPS++;
    }

    ticks[currentRoom]['diffMs'] = diffTickTime;
    ticks["room_interface"].diffMs = diffTickTime;
    tmrGlobal.dispatchEvent(ticks[currentRoom]);
    tmrGlobal.dispatchEvent(ticks["room_interface"]);

    // Отключение логотипа порнгеймс в нужных комнатах
    var roomsDisableLogo = ['room_preloader', 'room_win', 'room_gameover'];
    var blockLogo = false;

    roomsDisableLogo.forEach(function(element) {
        if (element == currentRoom) {
            blockLogo = true;
        }

        if (typeof setLogoPornGames != 'function' || typeof setFullScreen != 'function') {
            return;
        }
        
        if (blockLogo) {
            setLogoPornGames(0);
            setFullScreen(0);
        } else {
            setLogoPornGames(1);
            setFullScreen(1);
        }
    });

    if (typeof SetSmallGif == 'function') {
        SetSmallGif();
    }
}, 20);

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

SwitchRoom('room_preloader');