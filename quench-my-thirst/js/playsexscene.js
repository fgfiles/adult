/* ******************** Глобальные переменные ******************** */
var timer;
var doneSpeeds = [];
var position = 'classic';
var currentSpeedVideo = 'stop';
var needSpeedVideo;
var doneSpeeds = [];
var availSpeeds = ['slow', 'fast', 'furious'];
var nameVideo = '';
var isChangeSpeed = false;
var isVideoCum = false;
var isVideoAfterCum = false;
var cum = true;
var afterCum = false;
var cumImage = './images/cum.png';
var curCumBtn = 'spr_bottle_cum_cum';
var videoSrcSmall;
var timerStopSexScene;

SetSmallGif = function(nameScene) {
  return;
  if (nameScene) {
    videoSrcSmall = nameScene;
    ObjSet('spr_video_small', { res: videoSrcSmall, alp: 1 });
  } else {
    var newVideoSrcSmall =
      './images/' + nameVideo + '_' + currentSpeedVideo + '_small.gif';
    if (isVideoCum) {
      newVideoSrcSmall = './images/' + nameVideo + '_' + 'cum' + '_small.gif';
    } else if (isVideoAfterCum) {
      newVideoSrcSmall =
        './images/' + nameVideo + '_' + 'after_cum' + '_small.gif';
    }

    if (nameVideo && currentSpeedVideo && videoSrcSmall != newVideoSrcSmall) {
      // console.log(newVideoSrcSmall);
      videoSrcSmall = newVideoSrcSmall;
      ObjSet('spr_video_small', { res: videoSrcSmall, alp: 1 });
    } else if (!nameVideo || !currentSpeedVideo) {
      ObjSet('spr_video_small', { alp: 0 });
    }
  }
};

function clearSettings() {
  if (isDev) {
    console.log('video.ended nameVideo', nameVideo);
  }

  // *********** Обнуление параметров секс сцены *********** //
  clearTimeout(timerStopSexScene);
  timerStopSexScene = setTimeout(function() {
    video.pause();
    video.currentTime = 0;
  }, 900);

  currentSpeedVideo = 'stop';
  isVideoCum = false;
  // isVideoAfterCum = false;
  doneSpeeds = [];
  isChangeSpeed = false;
  cum = true;
  cumImage = './images/cum.png';
  curCumBtn = 'spr_bottle_cum_cum';
  nameVideo = '';
  availSpeeds = ['slow', 'fast', 'furious'];
  // ObjSet('spr_bottle_pleasure_gif', { alp: 0 });
  // ObjSet('spr_bottle_pleasure', { alp: 0 });
  ObjSet('spr_bottle_speed_slow', { alp: 0 });
  ObjSet('spr_bottle_speed_fast', { alp: 0 });
  ObjSet('spr_bottle_speed_furious', { alp: 0 });
  ObjSet('spr_bottle_speed_slow_static', { alp: 0 });
  ObjSet('spr_bottle_speed_fast_static', { alp: 0 });
  ObjSet('spr_bottle_speed_furious_static', { alp: 0 });

  // ObjStopAnimate('spr_bottle_sperm', 'pos_y');
  // ObjSet('spr_bottle_sperm', { pos_y: 18 } );
}

// var intervalTick = setInterval(function () {
// }, 20);

/* ******************** room bottle ******************** */
startSexScene = function(vid, _cum, _cumImage, _afterCum) {
  clearTimeout(timerStopSexScene);
  if (_cum != undefined) {
    cum = _cum;
  } else {
    cum = true;
  }
  cumImage = _cumImage || cumImage;
  curCumBtn = 'spr_bottle_cum_' + cumImage.split('/')[2].split('.')[0];
  // console.log(curCumBtn);

  afterCum = false;
  if (typeof _afterCum === 'boolean') {
    afterCum = _afterCum;
  }

  function startScene() {
    PlaySound('sounds/env_sex.mp3', 1);
    StopSound('sounds/env_main.mp3', 0);
    currentSpeedVideo = 'stop';
    nameVideo = vid.substr(0, vid.indexOf('_stop'));
    doneSpeeds = [];
    // ObjSet('spr_bottle_pleasure_gif', { alp: 0.8 });
    // ObjSet('spr_bottle_pleasure', { alp: 0 });
    // ObjSet('spr_bottle_sperm_hub', { alp: 0 });
    // ObjSet('spr_bottle_spot', { alp: 0 });
    ObjSet('spr_interface_loading_sex', { input: 1, alp: 1 });
    setLoading(1);
    video.src = './video/' + vid + '.mp4';
    // video_small.src = './video/' + vid + '_small.mp4';

    playSexVideo();
    isVideoCum = false;
    isVideoAfterCum = false;

    ObjSet('spr_bottle_play', { input: 1, alp: 1 });
    ObjSet('spr_bottle_play_after_cum', { input: 0, alp: 0 });
    hideInterfaceSexScene();

    SwitchRoom('room_bottle');
    // ObjSet('spr_interface_video_bg', { alp: 0 });
    if (nameVideo == 'sex_1' && currentSpeedVideo == 'stop') {
      //            ObjSet('spr_bottle_play', { input: 0, alp: 0 });
    }
  }

  // if ( GetCurrentRoom() == 'room_video') {
  // ObjAnimate('spr_interface_video_bg', 'alp', 0, 0, function() {
  //     startScene();
  // }, [ 0,0,'cur', 1.5,0,1 ]);
  // } else {
  startScene();
  // }
};

function playSexVideo() {
  setLoading(1);
  video.currentTime = 0;
  video.playbackRate = 1;
  video.loop = true;
  video.oncanplay = function() {
    video.oncanplay = function() {};
    video.play();
    setLoading(0);
  };
}
if (nameVideo == 'sex_1' && currentSpeedVideo == 'stop') {
  ObjSet('spr_bottle_play', { input: 0, alp: 0 });
}

// ObjSet('spr_interface_dialog40', {
//     event_mup: function () {
//         ObjSet('spr_interface_dialog40', { alp: 0, input:0})
//         setLoading(1);
//         currentSpeedVideo = 'slow';
//         video.src = "./video/" + nameVideo + "_slow.mp4";
//         // video_small.src = './video/' + nameVideo + '_slow_small.mp4';

//         playSexVideo();
//         startTimerSpeed();
//     }
// });

ObjSet('spr_bottle_play', {
  event_mup: function() {
    setLoading(1);
    currentSpeedVideo = 'slow';
    video.src = './video/' + nameVideo + '_slow.mp4';
    // video_small.src = './video/' + nameVideo + '_slow_small.mp4';

    playSexVideo();
    startTimerSpeed();

    // КОСТЫЛЬ УДАЛИТЬ
    (function() {
      // StopSound("sounds/env_woman.mp3", 0);
      // StopSound("sounds/env_man.mp3", 0);

      if (nameVideo == 'classic') {
        // PlaySound("sounds/env_woman.mp3", 1);
        // PlaySound("sounds/env_man.mp3", 1);
      }
      if (nameVideo == 'blow_job') {
        // PlaySound("sounds/env_man.mp3", 1);
      }
      if (nameVideo == 'cun') {
        // PlaySound("sounds/env_woman.mp3", 1);
      }
    })();
  }
});
ObjSet('spr_bottle_play_after_cum', {
  event_mup: function() {
    ObjSet('spr_bottle_play_after_cum', { alp: 0, input: 0 });
    clearSettings();
    renderGameScene();
  }
});

function hideInterfaceSexScene() {
  ObjSet(curCumBtn, { alp: 0, input: 0 });
  // ObjSet('spr_bottle_slow', { input: 0, alp: 0 });
  // ObjSet('spr_bottle_fast', { input: 0, alp: 0 });
  // ObjSet('spr_bottle_furious', { input: 0, alp: 0 });
  // ObjSet('spr_bottle_sperm_hub', { alp: 0 });
  // ObjSet('spr_bottle_spot', { alp: 0 });
  // ObjSet('spr_bottle_pleasure', { alp: 0 });
  // ObjSet('spr_bottle_pleasure_gif', { alp: 0 });
}

function showInterfaceSexScene() {
  if (doneSpeeds.length) {
    // ObjSet('spr_bottle_sperm_hub', { alp: 0.6 });
    // ObjSet('spr_bottle_spot', { alp: 0.6 });
    // ObjSet('spr_bottle_pleasure', { alp: 0.8 });
    // ObjSet('spr_bottle_pleasure_gif', { alp: 0 });
  } else {
    // ObjSet('spr_bottle_sperm_hub', { alp: 0 });
    // ObjSet('spr_bottle_spot', { alp: 0 });
    // ObjSet('spr_bottle_pleasure', { alp: 0 });
    // ObjSet('spr_bottle_pleasure_gif', { alp: 0.8 });
  }
  // ObjSet('spr_bottle_slow', { input: 1, alp: 0.5 });
  // ObjSet('spr_bottle_fast', { input: 1, alp: 0.5 });
  // ObjSet('spr_bottle_furious', { input: 1, alp: 0.5 });
}

function startTimerSpeed() {
  clearTimeout(timer);
  needSpeedVideo = '';

  ObjSet('spr_bottle_play', { input: 0, alp: 0 });
  showInterfaceSexScene();

  ObjSet('spr_bottle_speed_slow', { alp: 0 });
  ObjSet('spr_bottle_speed_fast', { alp: 0 });
  ObjSet('spr_bottle_speed_furious', { alp: 0 });
  ObjSet('spr_bottle_speed_slow_static', { alp: 0 });
  ObjSet('spr_bottle_speed_fast_static', { alp: 0 });
  ObjSet('spr_bottle_speed_furious_static', { alp: 0 });

  // win
  if (doneSpeeds.length >= 3) {
    if (setSpeedVideo) {
    }
    setSpeedVideo('furious');
    // ObjSet('spr_bottle_cum', { input: 1, alp: 1, res: disableCum ? './images/play.gif' : cumImage });
    ObjSet(curCumBtn, { input: 1, alp: 0.5 });
    // ObjSet('spr_bottle_speed_slow', { alp: 0 });
    // ObjSet('spr_bottle_speed_fast', { alp: 0 });
    // ObjSet('spr_bottle_speed_furious', { alp: 0 });
    // ObjSet('spr_bottle_speed_slow_static', { alp: 0 });
    // ObjSet('spr_bottle_speed_fast_static', { alp: 0 });
    // ObjSet('spr_bottle_speed_furious_static', { alp: 0 });
  } else {
    timer = setTimeout(function() {
      // ObjSet('spr_bottle_slow', { input: 1, alp: 0.5 });
      // ObjSet('spr_bottle_fast', { input: 1, alp: 0.5 });
      // ObjSet('spr_bottle_furious', { input: 1, alp: 0.5 });

      clearTimeout(timer);
      var idVideo = randomInteger(1, 2);
      needSpeed = availSpeeds[idVideo];
      availSpeeds.splice(idVideo, 1);
      showNeedSpeedVideo(needSpeed);
    }, 2000);
  }
}

function showNeedSpeedVideo(needSpeed) {
  if (!needSpeed) {
    var idVideo = randomInteger(0, availSpeeds.length - 1);
    needSpeed = availSpeeds[idVideo];
    availSpeeds.splice(idVideo, 1);
  }

  needSpeedVideo = needSpeed;

  ObjSet('spr_bottle_speed_slow', { alp: 0 });
  ObjSet('spr_bottle_speed_fast', { alp: 0 });
  ObjSet('spr_bottle_speed_furious', { alp: 0 });
  ObjSet('spr_bottle_speed_slow_static', { alp: 0 });
  ObjSet('spr_bottle_speed_fast_static', { alp: 0 });
  ObjSet('spr_bottle_speed_furious_static', { alp: 0 });
  // ObjSet('spr_bottle_speed_' + needSpeedVideo, { alp: 0.8 });
  ObjSet('spr_bottle_speed_' + needSpeedVideo + '_static', { alp: 0.9 });
  ObjSet('spr_bottle_run', { alp: 0.8, input: 1 });

  if (needSpeedVideo == currentSpeedVideo) {
    setSpeedVideo(needSpeedVideo);
  }
}

function setSpeedVideo(speedVideo) {
  if (doneSpeeds.length >= 3) {
    return;
  }
  currentSpeedVideo = needSpeedVideo || speedVideo;
  ObjSet('spr_bottle_run', { input: 0, alp: 0 });
  // ObjSet('spr_bottle_pleasure_gif', { alp: 0 });
  // ObjSet('spr_bottle_pleasure', { alp: 0.8 });
  // ObjSet('spr_bottle_sperm_hub', { alp: 0.6 });
  // ObjSet('spr_bottle_spot', { alp: 0.6 });
  ObjSet('spr_bottle_speed_' + currentSpeedVideo + '_static', { alp: 0 });

  ObjSet('spr_bottle_speed_' + currentSpeedVideo, { alp: 0.9 });

  if (!isChangeSpeed) {
    //setLoading(1);
    //video.src = "./video/" + nameVideo + "_slow.mp4";
    // video_small.src = "./video/" + nameVideo + "_slow_small.mp4";

    video.oncanplay = function() {
      video.oncanplay = function() {};
      video.play();
      //setLoading(0);
    };
    isChangeSpeed = true;
  }

  PlaySound('sounds/sfx_click.mp3', 0);
  var percent = 0;
  currentSpeedVideo = speedVideo;

  if (currentSpeedVideo == 'slow') {
    video.playbackRate = 1;
  } else if (currentSpeedVideo == 'fast') {
    video.playbackRate = 2;
  } else if (currentSpeedVideo == 'furious') {
    video.playbackRate = 2.5;
  }

  if (needSpeedVideo == currentSpeedVideo) {
    percent = (doneSpeeds.length + 1) * 33;
  } else {
    percent = doneSpeeds.length * 33;
  }
  percent++;

  /*
    ObjAnimate('spr_bottle_sperm', 'pos_y', 0, 0, function() { 
        if (needSpeedVideo == currentSpeedVideo) {
            doneSpeeds.push(currentSpeedVideo);
            startTimerSpeed();
            // console.log('spr_bottle_speed_' + currentSpeedVideo);
            ObjSet('spr_bottle_speed_' + currentSpeedVideo, { alp: 0 });
            ObjSet('spr_bottle_speed_' + currentSpeedVideo + '_static', { alp: 0 });
        }
    // }, [ 0,0,ObjGet('spr_bottle_sperm').pos_y, (isDev ? 0.05 : 7),0,18-(percent*1.75) ]);
    }, [ 0,0,ObjGet('spr_bottle_sperm').pos_y, 2,0,18-(percent*1.75) ]);
    */
  var timeMove = 7;
  switch (currentSpeedVideo) {
    case 'slow':
      timeMove = 9;
      break;
    case 'fast':
      timeMove = 7;
      break;
    case 'furious':
      timeMove = 5;
      break;
    default:
      tomeMove = 7;
      break;
  }

  ObjAnimate(
    'spr_bottle_speed_' + currentSpeedVideo,
    'pos_x',
    0,
    0,
    function() {
      // if (needSpeedVideo == currentSpeedVideo) {
      doneSpeeds.push(currentSpeedVideo);
      startTimerSpeed();
      // console.log('spr_bottle_speed_' + currentSpeedVideo);
      // ObjSet('spr_bottle_speed_' + currentSpeedVideo, { alp: 0 });
      // ObjSet('spr_bottle_speed_' + currentSpeedVideo + '_static', { alp: 0 });
      // }
      // }, [ 0,0,0, (isDev ? 0.05 : timeMove), 0,18 - (percent*1.75) ]);
    },
    [0, 0, 0, isDev ? 1 : timeMove, 0, 830]
  );
  // }, [ 0,0,0, (timeMove),0,825 ]);
  // }, [ 0,0,0, 2,0,850 ]);
}

ObjSet('spr_bottle_run', {
  event_mup: function() {
    setSpeedVideo(needSpeedVideo);
  },
  event_menter: function() {
    // ObjSet('spr_bottle_run', { scale_x: 0.35, scale_y: 0.35, alp: 0.5 });
  },
  event_mleave: function() {
    // ObjSet('spr_bottle_run', { scale_x: 0.3, scale_y: 0.3, alp: 0.5 });
  }
});

/*
ObjSet('spr_bottle_slow', {
    event_mup: function() {
        setSpeedVideo('slow');
    },
    event_menter: function() {
        ObjSet('spr_bottle_slow', { scale_x: 0.35, scale_y: 0.35, alp: 0.5 });
    },
    event_mleave: function() {
        ObjSet('spr_bottle_slow', { scale_x: 0.3, scale_y: 0.3, alp: 0.5 });
    }
});

ObjSet('spr_bottle_fast', {
    event_mup: function() {
        setSpeedVideo('fast');
    },
    event_menter: function() {
        ObjSet('spr_bottle_fast', { scale_x: 0.35, scale_y: 0.35, alp: 0.5 });
    },
    event_mleave: function() {
        ObjSet('spr_bottle_fast', { scale_x: 0.3, scale_y: 0.3, alp: 0.5 });
    }
});

ObjSet('spr_bottle_furious', {
    event_mup: function() {
        setSpeedVideo('furious');
    },
    event_menter: function() {
        ObjSet('spr_bottle_furious', { scale_x: 0.35, scale_y: 0.35, alp: 0.5 });
    },
    event_mleave: function() {
        ObjSet('spr_bottle_furious', { scale_x: 0.3, scale_y: 0.3, alp: 0.5 });
    }
});
*/
function onClickCum() {
  hideInterfaceSexScene();

  // StopSound("sounds/env_woman.mp3", 0);
  // StopSound("sounds/env_man.mp3", 0);

  // ObjSet('spr_bottle_slow', { input: 0 });
  // ObjSet('spr_bottle_fast', { input: 0 });
  // ObjSet('spr_bottle_furious', { input: 0 });

  PlaySound('sounds/sfx_click.mp3', 0);
  ObjSet(curCumBtn, { input: 0, alp: 0 });

  if (!cum) {
    // Если cum отсутствует то обнуляем и рендерим следующее видео
    if (afterCum) {
      setLoading(1);
      video.src = './video/' + nameVideo + '_after_cum.mp4';
      // video_small.src = "./video/" + nameVideo + "_after_cum_small.mp4";

      isVideoCum = false;
      isVideoAfterCum = true;
      video.currentTime = 0;
      video.playbackRate = 1;
      video.loop = true;
      video.oncanplay = function() {
        video.oncanplay = function() {};
        video.play();
        setLoading(0);
      };
      ObjSet('spr_bottle_play_after_cum', { alp: 1, input: 1 });
      // clearSettings();
      return;
    } else {
      clearSettings();
      return renderGameScene();
    }
  }

  setLoading(1);
  video.src = './video/' + nameVideo + '_cum.mp4';
  // video_small.src = "./video/" + nameVideo + "_cum_small.mp4";

  // isVideoCum = true;
  isVideoAfterCum = false;
  video.currentTime = 0;
  video.playbackRate = 1;
  video.loop = false;
  video.oncanplay = function() {
    video.oncanplay = function() {};
    isVideoCum = true;
    video.play();
    setLoading(0);
  };

  video.onended = function() {
    if (!isVideoCum) return;

    if (afterCum) {
      setLoading(1);
      video.src = './video/' + nameVideo + '_after_cum.mp4';
      // video_small.src = "./video/" + nameVideo + "_after_cum_small.mp4";

      isVideoCum = false;
      isVideoAfterCum = true;

      video.currentTime = 0;
      video.playbackRate = 1;
      video.loop = true;
      video.oncanplay = function() {
        video.oncanplay = function() {};
        video.play();
        setLoading(0);
      };
      ObjSet('spr_bottle_play_after_cum', { alp: 1, input: 1 });
      // clearSettings();
    } else {
      clearSettings();
      renderGameScene();
    }
  };
}

/* ******************** Создание изображений cum, ass ******************** */
var gameLineSexScene = getGameLine();
var cumImages = {};
function createCumImages() {
  for (var key in gameLineSexScene) {
    if (
      'cum_image' in gameLineSexScene[key] &&
      gameLineSexScene[key].cum_image
    ) {
      cumImages[gameLineSexScene[key].cum_image] = 1;
    }
  }

  var cumImagesHub = document.getElementById('room_bottle');
  for (var key in cumImages) {
    // console.log('cumImages key', key);

    var cumElement = document.createElement('div');
    cumElement.className = 'spr';
    var image = key.split('/')[2];
    cumElement.id = 'spr_bottle_cum_' + image.split('.')[0];
    cumElement.style =
      'left: 30px; top: 27px; z-index: 3; width: 106px; height: 106px; transform: scaleX(1) scaleY(1) rotate(0deg); pointer-events: none; opacity: 0; background-image: url("images/' +
      image +
      '");  background-position: 0px 0px; cursor: pointer;';

    cumImagesHub.appendChild(cumElement);

    ObjSet(cumElement.id, {
      event_mup: function() {
        onClickCum();
      },
      event_menter: function() {
        // if ( ObjGet('spr_bottle_cum_cum').res == 'url("./images/cum.png")' || ObjGet('spr_bottle_cum_cum').res == 'url("./images/ass.png")' ) {
        ObjSet(cumElement.id, { scale_x: 1.1, scale_y: 1.1 });
        // }
      },
      event_mleave: function() {
        ObjSet(cumElement.id, { scale_x: 1, scale_y: 1 });
      }
    });
  }
}
createCumImages();
