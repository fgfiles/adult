/* ******************** gameLine render ******************** */
var defaultPosPlay = {
  x: 917,
  y: 474,
};
var defaultPosDialog = {
  x: 420,
  y: 150,
};
var defaultSizeDialog = {
  width: 370,
  height: 300,
};

var prevDialogPosXY = {
  x: defaultPosDialog.x,
  y: defaultPosDialog.y,
};
// var currentDialog = '';
var currentDialogs = [];
// Проверить что вперед выполняется , скрытие старых диалогов или показ новых
function hideDialog() {
  // console.log('hideDialog currentDialog', currentDialog);
  PlaySound('sounds/sfx_dialog.mp3', 0);
  // ObjSet('spr_interface_dialog', { res: '', input: 0, alp: 0 });
  for (let i = 0; i < currentDialogs.length; i++) {
    ObjStopAnimate(currentDialogs[i], 'alp');
    ObjStopAnimate(currentDialogs[i], 'pos_x');
    ObjStopAnimate(currentDialogs[i], 'pos_y');
    ObjStopAnimate(currentDialogs[i], 'scale_x');
    ObjStopAnimate(currentDialogs[i], 'scale_y');
    ObjSet(currentDialogs[i], { input: 0, alp: 0 });
  }
  currentDialogs = [];
}

var currentGameLine = isDev || 0;
var currentActionGameLine;
var gameLineR = getGameLine();

function renderActionGameScene(step, action) {
  if (step) {
    currentActionGameLine += step;
  } else if (!isNaN(action)) {
    currentActionGameLine = action;
  } else {
    currentActionGameLine++;
  }

  if (
    gameLineR[currentGameLine] &&
    gameLineR[currentGameLine].actions &&
    gameLineR[currentGameLine].actions[currentActionGameLine]
  ) {
    if (isDev) {
      console.log('');
      // console.log('type[' + gameLineR[currentGameLine].actions[currentActionGameLine].type + '] scene[' + currentGameLine + '] action[' + currentActionGameLine + ']');
      console.log(
        'Scene',
        currentGameLine,
        gameLineR[currentGameLine].actions[currentActionGameLine].type
      );
    }

    function renderDialogGameScene(dialog) {
      var posX = dialog.x || defaultPosDialog.x;
      var posY = dialog.y || defaultPosDialog.y;
      var image = dialog.image;

      if (isDev) {
        console.log('Dialog', image);
      }

      // console.log('spr_interface_dialog' + image);
      // if (dialog.image == '7w') {return;}
      var currentDialog = 'spr_interface_dialog' + image;
      currentDialogs.push(currentDialog);
      var dialogWidth = image.indexOf('full_') ? defaultSizeDialog.width : 777;
      if (dialog.width) {
        dialogWidth = dialog.width;
      }
      var dialogHeight = image.indexOf('full_')
        ? defaultSizeDialog.height
        : 320;
      if (dialog.height) {
        dialogHeight = dialog.height;
      }

      ObjSet(currentDialog, {
        //width: dialogWidth,
        //height: dialogHeight,
        alp: 0,
        input: 0,
        event_mup: function () {
          ObjSet(currentDialog, { input: 0, alp: 0 });
          var image = dialog.image || 'full_';

          hideDialog();
          // console.log(image);
          // console.log(dialog.click);
          // if (image.indexOf('full_')) {
          if (dialog.click) {
            dialog.click();
          }
          // }
          if (
            currentActionGameLine >=
              gameLineR[currentGameLine].actions.length - 1 &&
            dialog.next
          ) {
            if (image.indexOf('full_')) {
              return renderGameScene();
            }
          }

          if (dialog.next) {
            renderActionGameScene();
          }

          // if (image.indexOf('full_')) {
          // hideDialog();

          // if (dialog.click) {
          //     dialog.click();
          // }

          // console.log('currentGameLine', currentGameLine);
          // console.log('gameLineR[currentGameLine]', gameLineR[currentGameLine]);

          //     if ( (currentActionGameLine >= gameLineR[currentGameLine].actions.length - 1)
          //         && dialog.next ) {
          //         return renderGameScene();
          //     }

          //     if (dialog.next) {
          //         renderActionGameScene();
          //     }
          // }
        },
      });

      var timeAnimateDialog = 0.2;
      if (dialog.image.indexOf('full_') + 1) {
        posX = dialog.x || 100;
        posY = dialog.y || 75;
        ObjAnimate(currentDialog, 'scale_x', 0, 0, function () {}, [
          0,
          0,
          0,
          0.5,
          0,
          1,
        ]);

        ObjAnimate(
          currentDialog,
          'scale_y',
          0,
          0,
          function () {
            // console.log(dialog);
            if (dialog.next) {
              renderActionGameScene();
            }
          },
          [0, 0, 0, 0.5, 0, 1]
        );

        ObjAnimate(currentDialog, 'pos_x', 0, 0, function () {}, [
          0,
          0,
          'cur',
          timeAnimateDialog,
          0,
          posX,
        ]);

        ObjAnimate(currentDialog, 'pos_y', 0, 0, function () {}, [
          0,
          0,
          'cur',
          timeAnimateDialog,
          0,
          posY,
        ]);
      } else {
        ObjAnimate(currentDialog, 'pos_x', 0, 0, function () {}, [
          0,
          0,
          prevDialogPosXY.x,
          timeAnimateDialog,
          0,
          posX,
        ]);

        ObjAnimate(currentDialog, 'pos_y', 0, 0, function () {}, [
          0,
          0,
          prevDialogPosXY.y,
          timeAnimateDialog,
          0,
          posY,
        ]);
      }

      ObjAnimate(
        currentDialog,
        'alp',
        0,
        0,
        function () {
          // console.log('@@@ dialog', dialog);
          // console.log('@@@ currentDialog', currentDialog);

          if (dialog.open) {
            dialog.open();
          }

          // Костыль убрать
          // if (currentDialog != 'spr_interface_dialogfull_3' && currentDialog != 'spr_interface_dialogfull_4' &&
          //     currentDialog != 'spr_interface_dialogfull_5' && currentDialog != 'spr_interface_dialogfull_6') {
          // ;
          ObjSet(currentDialog, { input: 1 });
          // }
        },
        [0, 0, 'cur', timeAnimateDialog, 0, 0.8]
      );

      prevDialogPosXY.x = posX;
      prevDialogPosXY.y = posY;
    }

    if (
      gameLineR[currentGameLine].actions[currentActionGameLine].type == 'dialog'
    ) {
      renderDialogGameScene(
        gameLineR[currentGameLine].actions[currentActionGameLine]
      );
    } else if (
      gameLineR[currentGameLine].actions[currentActionGameLine].type ==
      'dialogs'
    ) {
      gameLineR[currentGameLine].actions[currentActionGameLine].dialogs.forEach(
        (item) => {
          renderDialogGameScene(item);
        }
      );
    }

    if (
      gameLineR[currentGameLine].actions[currentActionGameLine].type == 'play'
    ) {
      var posX =
        gameLineR[currentGameLine].actions[currentActionGameLine].x ||
        defaultPosPlay.x;
      var posY =
        gameLineR[currentGameLine].actions[currentActionGameLine].y ||
        defaultPosPlay.y;
      var image =
        gameLine[currentGameLine].actions[currentActionGameLine].image;

      // ObjSet('spr_interface_play', { res: 'images/play.gif', pos_x: posX, pos_y: posY, alp: 1, input: 1,
      ObjSet('spr_interface_play', {
        pos_x: posX,
        pos_y: posY,
        alp: 1,
        input: 1,
        event_mup: function () {
          ObjSet('spr_interface_play', { alp: 0, input: 0 });
          //console.log(currentActionGameLine);

          if (gameLineR[currentGameLine].actions[currentActionGameLine]) {
            if (
              gameLineR[currentGameLine].actions[currentActionGameLine] &&
              gameLineR[currentGameLine].actions[currentActionGameLine].click
            ) {
              gameLineR[currentGameLine].actions[currentActionGameLine].click();
            }

            if (
              currentActionGameLine >=
                gameLineR[currentGameLine].actions.length - 1 &&
              gameLineR[currentGameLine].actions[currentActionGameLine].next
            ) {
              return renderGameScene();
            }
            if (
              gameLineR[currentGameLine].actions[currentActionGameLine].next
            ) {
              renderActionGameScene();
            }
          } else {
            return renderGameScene();
          }
        },
      });
      if (gameLineR[currentGameLine].actions[currentActionGameLine].open) {
        gameLineR[currentGameLine].actions[currentActionGameLine].open();
      }
    }
  }
}

var isNeedContent = false;
var loadScene;
var isCloseScene = false;
renderGameScene = function (key) {
  // console.log('renderGameScene');
  if (
    gameLine[currentGameLine] &&
    gameLineR[currentGameLine].smoothFinish &&
    !isCloseScene
  ) {
    // console.log('renderGameScene animation');
    // console.log('spr_interface_video_bg');
    return ObjAnimate(
      'spr_interface_video_bg',
      'alp',
      0,
      0,
      function () {
        closeGameScene();
        renderNextScene();
      },
      [0, 0, 0, 0.5, 0, 1]
    );
  } else {
    // console.log('renderGameScene no animation');
    closeGameScene();
    renderNextScene();
  }

  function closeGameScene() {
    if (isCloseScene) {
      return;
    }
    isCloseScene = true;
    if (gameLine[currentGameLine] && gameLineR[currentGameLine].close) {
      gameLineR[currentGameLine].close();
    }

    var vid;
    if (gameLine[currentGameLine] && gameLine[currentGameLine]) {
      vid = document.getElementById(
        'vid_video_' + gameLine[currentGameLine].video
      );
    }
    if (vid) {
      ObjSet('vid_video_' + gameLine[currentGameLine].video, {
        alp: 0,
        input: 0,
      });
    }
    // ObjSet('spr_interface_video_bg', { alp: 0 });
  }

  async function renderNextScene() {
    // console.log('renderNextScene');
    // if ( (gameLine[currentGameLine]) && (!doneScenes['vid_video_' + gameLine[currentGameLine ].video]) ||
    // if ( ( (gameLine[currentGameLine]) && (!doneScenes['vid_video_' + gameLine[currentGameLine].video]) ) ||
    //     ( (gameLine[currentGameLine + 1]) && (!doneScenes['vid_video_' + gameLine[currentGameLine + 1].video]) ) ) {

    var tmpKey = currentGameLine + 1;
    if (key || loadScene) {
      tmpKey = key || loadScene;
    }
    if (
      gameLine[tmpKey] &&
      gameLine[tmpKey].video.lastIndexOf('_stop') + 1 &&
      gameLine[tmpKey].video.length -
        gameLine[tmpKey].video.lastIndexOf('_stop') ==
        5
    ) {
    } else {
      if (key) {
        if (gameLine[key] && !doneScenes['vid_video_' + gameLine[key].video]) {
          isNeedContent = true;
          // console.log('renderNextScene загрузка key ', gameLine[key].video);
          loadScene = key;
          return pushVideosAndBackgrounds(key, key);
        }
      } else if (loadScene) {
        console.log('Загружена сцена loadScene', loadScene);
      } else {
        if (
          gameLine[currentGameLine + 1] &&
          !doneScenes['vid_video_' + gameLine[currentGameLine + 1].video]
        ) {
          isNeedContent = true;
          // console.log('Загрузка', 'vid_video_' + gameLine[currentGameLine + 1].video);
          // console.log('renderNextScene', gameLine[currentGameLine + 1], doneScenes['vid_video_' + gameLine[currentGameLine + 1].video] );
          // console.log('renderNextScene загрузка ', currentGameLine + 1, '-', currentGameLine + 5, ' done = ', !doneScenes['vid_video_' + gameLine[currentGameLine + 1].video], doneScenes);
          return pushVideosAndBackgrounds(
            currentGameLine + 1,
            currentGameLine + 7
          );
        }
      }
    }
    if (
      gameLine[currentGameLine - 1] !== undefined &&
      Boolean(gameLine[currentGameLine - 1].delete)
    ) {
      deleteVideo('vid_video_' + gameLine[currentGameLine - 1].video, 1000);
      if (isDev)
        console.log('Удалено видео: ' + gameLine[currentGameLine - 1].video);

      delete gameLine[currentGameLine - 1];
    }

    ObjSet('spr_interface_video_bg', { alp: 0 });
    isCloseScene = false;
    currentGameLine++;
    currentActionGameLine = -1;
    if (key || loadScene) {
      currentGameLine = key || loadScene;
      loadScene = 0;
    }
    // console.log('renderNextScene загружено ', gameLine[currentGameLine].video);
    if (!gameLine[currentGameLine]) {
      return gameWin();
    }
    if (isDev) {
      console.log('\n\r renderGameScene', currentGameLine);
    }

    if (gameLine[currentGameLine] && gameLineR[currentGameLine].video) {
      if (
        gameLine[currentGameLine].video.lastIndexOf('_stop') + 1 &&
        gameLine[currentGameLine].video.length -
          gameLine[currentGameLine].video.lastIndexOf('_stop') ==
          5
      ) {
        startSexScene(
          gameLine[currentGameLine].video,
          gameLineR[currentGameLine].cum,
          gameLineR[currentGameLine].cum_image,
          gameLineR[currentGameLine].afterCum
        );
      } else {
        var vid = document.getElementById(
          'vid_video_' + gameLine[currentGameLine].video
        );

        if ('loop' in gameLineR[currentGameLine]) {
          // console.log(currentGameLine);
          vid.loop = gameLineR[currentGameLine].loop;
        }

        vid.onended = async function () {
          if (gameLine[currentGameLine].onended) {
            gameLineR[currentGameLine].onended();

            if (
              currentActionGameLine >=
                gameLineR[currentGameLine].actions.length - 1 &&
              gameLineR[currentGameLine].next
            ) {
              return renderGameScene();
            }
            if (gameLine[currentGameLine].next) {
              renderActionGameScene();
            }
          }
        };
        playVideo(gameLine[currentGameLine].video);

        ObjSet('vid_video_' + gameLine[currentGameLine].video, {
          input: 1,
          alp: 1,
        });
        // console.log('gameLine[currentGameLine].video', gameLineR[currentGameLine].video);

        ObjSet('vid_video_' + gameLine[currentGameLine].video, {
          event_mup: function () {
            if (gameLine[currentGameLine].click) {
              gameLineR[currentGameLine].click();
            }
          },
        });

        // vid.click = function () {

        // };
      }
    } else if (gameLine[currentGameLine] && gameLineR[currentGameLine].room) {
      // console.log('!!!', gameLine[currentGameLine].room);
      SwitchRoom(gameLine[currentGameLine].room);
    }

    if (gameLine[currentGameLine].open) {
      if (gameLine[currentGameLine] && gameLineR[currentGameLine].smoothStart) {
        ObjAnimate(
          'spr_interface_video_bg',
          'alp',
          0,
          0,
          function () {
            gameLineR[currentGameLine].open();
            if (!gameLineR[currentGameLine].stopAction) {
              renderActionGameScene();
            }
          },
          [0, 0, 1, 0.5, 0, 1, 1, 0, 0]
        );
      } else {
        gameLineR[currentGameLine].open();
        if (!gameLineR[currentGameLine].stopAction) {
          renderActionGameScene();
        }
      }
    } else {
      if (!gameLineR[currentGameLine].stopAction) {
        renderActionGameScene();
      }
    }
  }
};

function createDialogs() {
  var interfaceElement = document.getElementById('interface');
  var countDioalogs = 0;
  var countDownloadedDioalogs = 0;

  for (var key in gameLine) {
    if ('actions' in gameLineR[key]) {
      gameLineR[key].actions.forEach((element) => {
        if (element.type == 'dialog') {
          createDialog(element);
        } else if (element.type == 'dialogs') {
          element.dialogs.forEach((item) => {
            item.height = 145;
            createDialog(item);
          });
        }
      });
    }
  }

  function createDialog(element) {
    var isExistsDialog = document.getElementById(
      'spr_interface_dialog' + element.image
    );
    if (isExistsDialog) {
      return false;
    }

    countDioalogs++;
    if (isDev) {
      console.log('countDioalogs', countDioalogs);
    }

    var dialogElement = document.createElement('img');
    dialogElement.id = 'spr_interface_dialog' + element.image;
    dialogElement.src = `./images/dialogs/${element.image}.png`;
    dialogElement.className = 'spr';
    dialogElement.style =
      'left: 0px; top: 0px; z-index: 100; width: auto; height: auto; transform: scaleX(1) scaleY(1) rotate(0deg); pointer-events: none; opacity: 0; background-image: url(""); background-position: 0px 0px;';

    //imgHub.appendChild(imgElement);
    //downloadImage(imgElement.id);

    //var dialogElement = document.createElement('div');

    function setPercentDownloadDialogs() {
      var percent = countDownloadedDioalogs / countDioalogs;

      if (isNumber(percent) && percent >= 0 && percent <= 1) {
        if (isDev) {
          console.log(
            'dialogs',
            countDownloadedDioalogs,
            '/',
            countDioalogs,
            percent
          );
        }
        ObjSet('spr_interface_loading_download_scene_text', {
          text: 'Loaded ' + (percent * 100).toFixed(0) + '%',
        });
      }
    }

    dialogElement.onload = function () {
      dialogElement.onload = function () {};
      countDownloadedDioalogs++;
      // doneDownloadImage();
      setPercentDownloadDialogs();
    };

    //dialogElement.className = 'spr';
    //dialogElement.id = 'spr_interface_dialog' + element.image;

    if (element.image.indexOf('full_')) {
      //dialogElement.style = 'left: 400px; top: 400px; z-index: 100; width: 300px; height: 300px; transform: scaleX(1) scaleY(1) rotate(0deg); pointer-events: none; opacity: 0; background-image: url("images/dialogs/' + element.image + '.png"); background-position: 0px 0px; display: block; cursor: pointer;'
    } else {
      //dialogElement.style = 'left: 100px; top: 75px; z-index: 100; width: 576px; height: 450px; transform: scaleX(1) scaleY(1) rotate(0deg); pointer-events: none; opacity: 0; background-image: url("images/dialogs/' + element.image + '.png"); background-position: 0px 0px; display: block;'
    }

    if (!element.image) {
      console.log('Not found dialog key', key);
    }

    interfaceElement.appendChild(dialogElement);
  }
}
createDialogs();

const sleep = async (msec) => {
  return new Promise((resolve) => setTimeout(resolve, msec));
};

function deleteVideo(name) {
  if (!name) {
    return;
  }
  var vid = document.getElementById(name);
  if (!vid) {
    return;
  }
  roomVideo.removeChild(vid);
  singleVideo = singleVideo.filter(function (value) {
    return 'vid_video_' + value != name;
  });
}
