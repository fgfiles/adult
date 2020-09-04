/* ******************** Показ прелоадеров ******************** */
function setLoading(active) {
  ObjSet('spr_interface_loading_sex', { input: active });
  ObjAnimate('spr_interface_loading_sex', 'alp', 0, 0, function () {}, [
    0,
    0,
    'cur',
    0.5,
    0,
    active,
  ]);
  var pseudoPercentLoadingSexScene = 100;
  if (active) {
    pseudoPercentLoadingSexScene = 0;
  }
  ObjSet('spr_interface_loading_download_sex_line', {
    width: pseudoPercentLoadingSexScene * 2,
  });
  ObjSet('spr_interface_loading_download_sex_text', {
    text: 'Loaded ' + pseudoPercentLoadingSexScene + '%',
  });
}

function setLoadingDownloadScene(active) {
  ObjSet('spr_interface_loading_download_scene', { input: active });
  ObjAnimate(
    'spr_interface_loading_download_scene',
    'alp',
    0,
    0,
    function () {},
    [0, 0, 'cur', 0.5, 0, active]
  );

  if (active) {
    var remainFiles = downloadableVideos.length + downloadableImages.length;
    if (remainFiles > countDownloadbleFiles) {
      countDownloadbleFiles = remainFiles;
    }
    ObjSet('spr_interface_loading_download_scene_line', { width: 0 });
    ObjSet('spr_interface_loading_download_scene_text', { text: 'Loaded 0%' });
  } else {
    setPercent();
    countDownloadbleFiles = 0;
  }
}

/* ******************** Загрузник ******************** */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function setPercent() {
  var count = downloadableVideos.length + downloadableImages.length;
  var percent = 1 - count / countDownloadbleFiles;
  var viewPercent = (percent * 100).toFixed(0);
  if (isNumber(percent) && percent >= 0 && percent <= 1) {
    if (isDev) {
      console.log('setPercent', count, countDownloadbleFiles, percent);
    }
    ObjSet('spr_interface_loading_download_scene_line', {
      width: viewPercent * 2,
    });
    ObjSet('spr_interface_loading_download_scene_text', {
      text: 'Loaded ' + (percent * 100).toFixed(0) + '%',
    });
  }
}

/* ******************** Загрузка видео ******************** */
var downloadableVideos = [];
var downloadableImages = [];
var doneScenes = {};
var countDownloadbleFiles = 0;

function doneDownloadScene() {
  if (downloadableVideos.length <= 0 && downloadableImages.length <= 0) {
    if (isNeedContent) {
      isNeedContent = false;
      // console.log('doneDownloadScene renderGameScene');
      renderGameScene();
    }
    setLoadingDownloadScene(0);
    // setLoadingDownloadScene(1);
  }
  setPercent();
}

function downloadImage(nameImage) {
  var imgLoad = document.getElementById(String(nameImage));

  if (!imgLoad) {
    setTimeout(function () {
      console.log('settimeout', String(nameImage));
      downloadImage(nameImage);
    }, 0);
    return;
  }

  if (imgLoad.src.slice(-4) != '.png' || doneScenes[nameImage]) {
    return;
  }
  // console.log('start', String(nameImage));

  downloadableImages.push(nameImage);
  setLoadingDownloadScene(1);

  function doneDownloadImage() {
    // console.log('doneDownloadImage', String(nameImage), 'success');
    downloadableImages = downloadableImages.filter(function (value) {
      return value != nameImage;
    });
    doneScenes[nameImage] = 1;
    // console.log('downloadableImages.len', downloadableImages.length);
    if (downloadableImages.length <= 0) {
      doneDownloadScene();
    }
    setPercent();
  }

  imgLoad.onload = function () {
    imgLoad.onload = function () {};
    doneDownloadImage();
  };
}

function downloadVideo(nameVideo) {
  // console.log('downloadVideo', nameVideo);
  var videoLoad = document.getElementById(String(nameVideo));
  // var videoLoad = nameVideo;
  // console.log(String(nameVideo));

  // console.log('downloadVideo', downloadVideo);

  if (videoLoad) {
    if (doneScenes[nameVideo]) {
      console.log('Уже загружено видео', nameVideo);
      return;
    }
  } else {
    setTimeout(function () {
      console.log('settimeout', String(nameVideo));
      downloadVideo(nameVideo);
    }, 0);
    return;
  }

  if (videoLoad.src.slice(-4) != '.mp4' || doneScenes[nameVideo]) {
    return;
  }
  // console.log('start', String(nameVideo));

  var timerDownloadVideo;
  downloadableVideos.push(nameVideo);
  setLoadingDownloadScene(1);

  function doneDownloadVideo() {
    // console.log('doneDownloadVideo', String(nameVideo), 'success');
    clearTimeout(timerDownloadVideo);
    videoLoad.pause();
    videoLoad.currentTime = 0;
    downloadableVideos = downloadableVideos.filter(function (value) {
      return value != nameVideo;
    });
    doneScenes[nameVideo] = 1;
    // console.log('downloadableVideos.len', downloadableVideos.length);
    if (downloadableVideos.length <= 0) {
      doneDownloadScene();
    }
    setPercent();
  }

  function handlerProgressVideo() {
    // console.log('handlerProgressVideo');
    var range = 0;
    var bf = this.buffered;
    var time = this.currentTime;

    try {
      while (!(bf.start(range) <= time && time <= bf.end(range))) {
        range += 1;
      }

      var loadStartPercentage = bf.start(range) / this.duration;
      var loadEndPercentage = bf.end(range) / this.duration;
      var loadPercentage = (loadEndPercentage - loadStartPercentage) * 100;
      if (loadPercentage == 100) {
        this.removeEventListener('progress', arguments.callee, false);
        videoLoad.pause();
        videoLoad.onended = function () {};
        doneDownloadVideo();
        // console.log('Video', nameVideo, 'download success');
      } else {
        // console.log(nameVideo, 'loadPercentage', loadPercentage);
      }
    } catch (error) {
      // console.error('try', error);
    }
  }

  async function playVideo() {
    clearTimeout(timerDownloadVideo);

    // console.log(videoLoad);
    if (typeof videoLoad.load === 'function') {
      videoLoad.load();
    }

    var playPromise;
    if (videoLoad.play) {
      playPromise = videoLoad.play();
    }

    if (playPromise) {
      playPromise
        .then(function () {
          // console.log('Video started!');
          clearTimeout(timerDownloadVideo);

          if (Math.round(videoLoad.buffered.end(0)) >= this.duration) {
            doneDownloadVideo();
            // console.log('Video', nameVideo, 'download success');
          }
        })
        .catch(function (error) {
          // console.log('Promise try catch play video', nameVideo, error);
          clearTimeout(timerDownloadVideo);
          timerDownloadVideo = setTimeout(playVideo, 2000);
        });
    } else {
      console.log('VideoLoad.play Not Promise', nameVideo);
      timerDownloadVideo = setTimeout(playVideo, 2000);
    }
  }

  timerDownloadVideo = setTimeout(playVideo, 2000);

  videoLoad.addEventListener('progress', handlerProgressVideo, false);
  videoLoad.addEventListener('canplay', function () {
    this.removeEventListener('canplay', arguments.callee, false);
    clearTimeout(timerDownloadVideo);
    playVideo();
  });
  videoLoad.onended = function () {
    videoLoad.onended = function () {};
    doneDownloadVideo();
  };

  if (videoLoad.load) {
    videoLoad.load();
  }
}
