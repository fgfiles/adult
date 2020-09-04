var isFullScreen = function() {
    return document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
}
window.addEventListener('resize', () => {
    if ( isFullScreen() ) {
        var zoomRateW = (window.innerWidth / 1024);
        var zoomRateH = (window.innerHeight / 576);
        var rate = (zoomRateW < zoomRateH) ? zoomRateW : zoomRateH;
        // console.log('zoomRateW', zoomRateW);
        // console.log('zoomRateH', zoomRateH);
        // console.log('rate', rate);

        // htmlGame.style="zoom: " + rate +  "; overflow: hidden;";
        // htmlGame.style="transform: scaleX(" + rate + ") scaleY(" + rate + "); float: left; overflow: hidden;";
        gameArea.style="transform: scale(" + rate + "); float: left;";
    } else {
        gameArea.style="transform: scale(1); float: left;";
        // gameArea.style="transform: scale(0.67); float: left; float: left; overflow: hidden;";
        // htmlGame.style="transform: scaleX(0.67) scaleY(0.67); float: left; overflow: hidden;";
        // htmlGame.style="zoom: 0.67; overflow: hidden;";
    }

});

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    var videos = document.getElementsByClassName('video');
    var videosLen = document.getElementsByClassName('video').length;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);

        // for (var i = 0; i < videosLen; i++) {
        //     videos[i].removeAttribute('playsinline');
        // }
    } else {
        cancelFullScreen.call(doc);
        gameArea.style="transform: scale(1); float: left;";

        // for (var i = 0; i < videosLen; i++) {
        //     videos[i].setAttribute('playsinline', '');
        // }
    }
}

ObjSet('spr_interface_full_screen', {
    event_mup: function() {
        toggleFullScreen();
    },
    event_menter: function() {
        ObjSet('spr_interface_full_screen', { scale_x: 1.05, scale_y: 1.05 });
    },
    event_mleave: function() {
        ObjSet('spr_interface_full_screen', { scale_x: 1.0, scale_y: 1.0 });
    }
});
