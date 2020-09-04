/* ******************** Экран проигравшего ******************** */
gameOver = function () {
    SwitchRoom("room_gameover");
    animationEndGame('gameover');
}

ObjSet('spr_gameover_again', { 
    event_mup: function() {
        PlaySound("sounds/sfx_click.mp3", 0);
        window.location.reload()
    },
    event_menter: function() {
        ObjSet('spr_gameover_again', { scale_x: 1, scale_y: 1 });
        PlaySound("sounds/sfx_click.mp3", 0);
    },
    event_mleave: function() {
        ObjSet('spr_gameover_again', { scale_x: 0.8, scale_y: 0.8 });
    }
});

ObjSet('spr_gameover_more_girls', { 
    event_mup: function() {
        PlaySound("sounds/sfx_click.mp3", 0);
        window.open('http://www.forestrygames.com/');
    },
    event_menter: function() {
        ObjSet('spr_gameover_more_girls', { scale_x: 1, scale_y: 1 });
        PlaySound("sounds/sfx_click.mp3", 0);
    },
    event_mleave: function() {
        ObjSet('spr_gameover_more_girls', { scale_x: 0.8, scale_y: 0.8 });
    }
});