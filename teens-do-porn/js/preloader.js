/* ******************** Прелоадер ******************** */
window.onload = function () {
  ObjSet('spr_interface_loading_download_scene_text', { text: 'Loaded 0%' });

  ObjSet('spr_interface_porn_games', {
    event_mup: function () {
      window.open('http://www.forestrygames.com/');
    },
    event_menter: function () {
      ObjSet('spr_interface_porn_games', { scale_x: 1.2, scale_y: 1.2 });
    },
    event_mleave: function () {
      ObjSet('spr_interface_porn_games', { scale_x: 1, scale_y: 1 });
    },
  });

  setLogoPornGames = function (active) {
    ObjSet('spr_interface_porn_games', { input: active, alp: active });
  };
  setFullScreen = function (active) {
    ObjSet('spr_interface_full_screen', {
      input: active,
      alp: active ? 0.7 : 0,
    });
  };

  ObjSet('video_preloader_start', {
    event_mup: function () {
      window.open('http://www.forestrygames.com/');
    },
  });
  ObjSet('video_preloader_end', {
    event_mup: function () {
      window.open('http://www.forestrygames.com/');
    },
  });
  var videoPreloaderStart = document.getElementById('video_preloader_start');
  var videoPreloaderEnd = document.getElementById('video_preloader_end');

  ObjSet('spr_interface_click', {
    alp: 1,
    input: 1,
    event_mup: function () {
      videoPreloaderStart.muted = false;
      videoPreloaderStart.currentTime = 0;
      videoPreloaderStart.playbackRate = 1;
      // videoPreloaderStart.onended = function() {
      //     ObjSet('spr_preloader_continue', { input: 1 });
      //     ObjSet('video_preloader_end', { alp: 1 });
      // }
      videoPreloaderStart.play();

      ObjSet('video_preloader_start', { alp: 1 });

      // createVideo(['porn_games_splash_old_start', 'porn_games_splash_old_end'], 'room_preloader');

      ObjSet('spr_interface_click', { alp: 0, input: 0 });
      ObjSet('spr_interface_loading_download_scene', { alp: 0, input: 0 });
      // setLoadingDownloadScene(0);

      // ObjSet('vid_video_porn_games_splash_old_start', { alp: 1 });

      setTimeout(function () {
        ObjSet('spr_preloader_continue', { input: 1 });
        ObjSet('video_preloader_end', { alp: 1 });
      }, 4000);

      //ObjSet('spr_preloader_porn_games', { alp: 0, input: 0 });

      if (isDev) {
        console.log('START iS DEV preloader');
        renderGameScene(isDev);
      }
    },
  });

  /*
    ObjSet('spr_preloader_porn_games', {
        alp: 1,
        input: 1,
        event_mup: function() {
            videoPreloaderStart.muted = false;
            videoPreloaderStart.currentTime = 0;
            videoPreloaderStart.playbackRate = 1;
            videoPreloaderStart.play();
            ObjSet('video_preloader_start', { alp: 1 }); 
            setTimeout(function() {
                ObjSet('spr_preloader_continue', { input: 1 });
                ObjSet('video_preloader_end', { alp: 1 });
            }, 4000);
            videoPreloaderStart.onended = function() {
                ObjSet('video_preloader_end', { alp: 1 });
                ObjSet('spr_preloader_continue', { input: 1 });
            }

            ObjSet('spr_preloader_porn_games', { alp: 0, input: 0 }); 

            if (isDev) {
                console.log('START iS DEV preloader');
                renderGameScene(isDev);    
            }
        }
    });
    */

  ObjSet('spr_preloader_continue', {
    event_mup: function () {
      ObjSet('spr_preloader_continue', { input: 0 });

      ObjSet('video_preloader_end', { alp: 1 });
      ObjSet('video_preloader_start', { alp: 0 });

      videoPreloaderStart.pause();
      videoPreloaderEnd.muted = false;
      videoPreloaderEnd.play();

      videoPreloaderEnd.onended = function () {
        videoPreloaderStart.pause();
        videoPreloaderEnd.pause();

        // console.log('onended preloader');
        renderGameScene();
        ObjSet('spr_interface_full_screen', { input: 1, alp: 0.5 });
      };
    },
  });
};
