/* ******************** Экран победителя ******************** */
gameWin = function () {
    ObjSet('spr_interface_full_screen', { input: 0, alp: 0 });
    StopSound("sounds/env_sex.mp3", 0);
    StopSound("sounds/env_main.mp3", 0);

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
    
    SwitchRoom("room_win");
    ObjAnimate('spr_interface_video_bg', 'alp', 0, 0, function () {
    }, [0,0,1, 0.5,0,1, 0.7,0,0]);

    ObjAnimate('spr_interface_video_bg', 'scale_x', 0, 0, function () {
        animationEndGame('win');
    }, [0,0,1, 0.5,0,1]);
}

ObjSet('spr_win_again', { 
    event_mup: function() {
        PlaySound("sounds/sfx_click.mp3", 0);
        window.location.reload()
    },
    event_menter: function() {
        ObjSet('spr_win_again', { scale_x: 1, scale_y: 1 });
        PlaySound("sounds/sfx_click.mp3", 0);
    },
    event_mleave: function() {
        ObjSet('spr_win_again', { scale_x: 0.8, scale_y: 0.8 });
    }
});

ObjSet('spr_win_more_girls', { 
    event_mup: function() {
        PlaySound("sounds/sfx_click.mp3", 0);
        window.open('http://www.forestrygames.com/');
    },
    event_menter: function() {
        ObjSet('spr_win_more_girls', { scale_x: 1, scale_y: 1 });
        PlaySound("sounds/sfx_click.mp3", 0);
    },
    event_mleave: function() {
        ObjSet('spr_win_more_girls', { scale_x: 0.8, scale_y: 0.8 });
    }
});