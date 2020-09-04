/* ******************** Анимация экрана окончания игры ******************** */
animationEndGame = function(room) {
    var vidTheEnd1 = document.getElementById('vid_win_the_end_1'); 
    var vidTheEnd2 = document.getElementById('vid_win_the_end_2'); 
    var vidTheEnd3 = document.getElementById('vid_win_the_end_3'); 

    vidTheEnd1.currentTime = 0;
    vidTheEnd1.playbackRate = 1;
    vidTheEnd1.loop = false;
    vidTheEnd1.pause();

    vidTheEnd2.currentTime = 0;
    vidTheEnd2.playbackRate = 1;
    vidTheEnd2.loop = false;
    vidTheEnd2.pause();

    vidTheEnd3.currentTime = 0;
    vidTheEnd3.playbackRate = 1;
    vidTheEnd3.loop = true;
    vidTheEnd3.pause();

    vidTheEnd1.onended = function() {
        vidTheEnd1.pause();

        vidTheEnd2.onended = function() {
            vidTheEnd1.pause();
            vidTheEnd2.pause();
            vidTheEnd3.play();

            ObjSet('vid_win_the_end_1', { alp: 0 });
            ObjSet('vid_win_the_end_2', { alp: 0 });
            ObjSet('vid_win_the_end_3', { alp: 1 });

            showButtons();
        }
        vidTheEnd2.play();
        
        ObjSet('vid_win_the_end_1', { alp: 0 });
        ObjSet('vid_win_the_end_2', { alp: 1 });
    }

    vidTheEnd1.play();
    ObjSet('vid_win_the_end_1', { alp: 1 });
    
    function showButtons() {
        ObjSet('spr_' + room + '_again', { input: 0, alp: 0 });
        ObjSet('spr_' + room + '_more_girls', { input: 0, alp: 0 });

        ObjAnimate('spr_' + room + '_again', 'scale_x', 0, 0, function() { }, [ 0,0,0.2, 0.6,0,0.8 ]);
        ObjAnimate('spr_' + room + '_again', 'scale_y', 0, 0, function() {

            ObjAnimate('spr_' + room + '_more_girls', 'scale_x', 0, 0, function() { }, [ 0,0,0.2, 0.6,0,0.8 ]);
            ObjAnimate('spr_' + room + '_more_girls', 'scale_y', 0, 0, function() {
                ObjSet('spr_' + room + '_again', { input: 1, alp: 1 });
                ObjSet('spr_' + room + '_more_girls', { input: 1, alp: 1 });
            }, [ 0,0,0.2, 0.6,0,0.8 ]);
            ObjAnimate('spr_' + room + '_more_girls', 'alp', 0, 0, function() { }, [ 0,0,0, 0.2,0,0.8 ]);

        }, [ 0,0,0.2, 0.6,0,0.8 ]);
        ObjAnimate('spr_' + room + '_again', 'alp', 0, 0, function() { }, [ 0,0,0, 0.2,0,0.8 ]);
    }
}
