var counter = 0;
var currentDialog_ = 0;
var gameLine = {
  '1': {
    video: 'menu_1',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'menu_2\t\tplay',
  },
  '2': {
    video: 'menu_2',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'play',
        x: 0,
        y: 0,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: '\t\t',
  },
  '3': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '1',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '2',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '3',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '4',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '5',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'boy_1\t1-5\t',
  },
  '4': {
    video: 'camera_inst',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '5': {
    video: 'camera',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      PlaySound('sounds/sfx_click1.mp3', 0);
      document.querySelector('#vid_video_camera').playbackRate += 0.1;
      counter++;
      if (counter === 10) {
        counter = 0;
        renderGameScene();
      }
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'camera_inst\t\t',
  },
  '6': {
    video: 'camera_snap',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_ready.mp3', 0);
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '                         camera\t\t',
  },
  '7': {
    video: 'camera_ready',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'camera_snap\t\t',
  },
  '8': {
    video: 'micro_inst',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'camera_ready\t\t',
  },
  '9': {
    video: 'micro',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      PlaySound('sounds/sfx_click1.mp3', 0);
      document.querySelector('#vid_video_micro').playbackRate += 0.1;
      counter++;
      if (counter === 10) {
        counter = 0;
        renderGameScene();
      }
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '10': {
    video: 'micro_snap',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_ready.mp3', 0);
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'micro_inst\t\t',
  },
  '11': {
    video: 'micro_ready',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'micro\t\t',
  },
  '12': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '6',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '7',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'micro_snap\t\t',
  },
  '13': {
    video: 'tablet_1',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      renderGameScene();
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'micro_ready\t\t',
  },
  '14': {
    video: 'girl_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '8',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '9',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '10',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '11',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '12',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '13',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '14',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '15',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '16',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '17',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '18',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '19',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '20',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '21',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '22',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '23',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '24',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '25',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '26',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '27',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '28',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '29',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '30',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '31',
        x: 140,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '32',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: '\t\t',
  },
  '15': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function () {},
    close: function () {},
    delete: true,
    origin: '  boy_1\t6,7\t',
  },
  '16': {
    video: 'photo_1',
    loop: false,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_snap.mp3', 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '17': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '33',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '34',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'tablet_1\t\t',
  },
  '18': {
    video: 'tablet_2',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      renderGameScene();
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '19': {
    video: 'girl_2',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '35',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '36',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '37',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '38',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '39',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '40',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '41',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '42',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '43',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '44',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '45',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '46',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '47',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '48',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '49',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '50',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '51',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '52',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '53',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '54',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '55',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '56',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '57',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '58',
        x: 160,
        y: 140,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '59',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'girl_1\t8-32\t',
  },
  '20': {
    video: 'sex_2_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function () {},
    close: function () {},
    delete: true,
    origin: '\t\t',
  },
  '21': {
    video: 'photo_2',
    loop: false,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_snap.mp3', 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'sex_1_stop\t\tplay',
  },
  '22': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '60',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '61',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'sex_1_slow\t\tcum',
  },
  '23': {
    video: 'tablet_3',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      renderGameScene();
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'sex_1_cum\t\t',
  },
  '24': {
    video: 'girl_3',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '62',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '63',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '64',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '65',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '66',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '67',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '68',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '69',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '70',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '71',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '72',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '73',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '74',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '75',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '76',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '77',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '78',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '79',
        x: 200,
        y: 150,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '80',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'sex_1_after_cum\t\tplay',
  },
  '25': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function () {},
    close: function () {},
    delete: true,
    origin: '\t\t',
  },
  '26': {
    video: 'photo_3',
    loop: false,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_snap.mp3', 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'photo_1\t\t',
  },
  '27': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '81',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '82',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: '\t\t',
  },
  '28': {
    video: 'tablet_4',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      renderGameScene();
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'boy_1\t33,34\t',
  },
  '29': {
    video: 'girl_4',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '83',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '84',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '85',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '86',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '87',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '88',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '89',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '90',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '91',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '92',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '93',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '94',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '95',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '96',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '97',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '98',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '99',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '100',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '101',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '102',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '103',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '104',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '105',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '106',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '107',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '108',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '109',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '110',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '111',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '112',
        x: 520,
        y: 120,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '113',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: '123123',
  },
  '30': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function () {},
    close: function () {},
    delete: true,
    origin: 'tablet_2\t\t',
  },
  '31': {
    video: 'photo_4',
    loop: false,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_snap.mp3', 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '32': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '114',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '115',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '116',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'girl_2\t             35-59\t',
  },
  '33': {
    video: 'tablet_5',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {
      renderGameScene();
    },
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '34': {
    video: 'girl_5',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '117',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '118',
        x: 520,
        y: 130,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '119',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '120',
        x: 520,
        y: 130,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '121',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '122',
        x: 520,
        y: 130,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '123',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '124',
        x: 520,
        y: 130,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '125',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '126',
        x: 520,
        y: 130,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '127',
        x: 620,
        y: 300,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'sex_2_stop\t\tplay',
  },
  '35': {
    video: 'sex_5_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function () {},
    close: function () {},
    delete: true,
    origin: 'sex_2_slow\t\tcum',
  },
  '36': {
    video: 'photo_5',
    loop: false,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function () {
      PlaySound('sounds/sfx_snap.mp3', 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: 'sex_2_cum\t\t',
  },
  '37': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function () {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '128',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '129',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '130',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'sex_2_after_cum\t\tplay',
  },
  '38': {
    video: 'voting',
    loop: true,
    next: false,
    smoothStart: false,
    smoothFinish: false,
    stopAction: true,
    open: function () {
      ObjSet('spr_video_cube1', {
        pos_x: 290,
        pos_y: 320,
        pos_z: 1,
        alp: 1,
        input: 1,
        event_mup: function () {
          currentDialog_ = 3;
          renderGameScene();
        },
      });
      ObjSet('spr_video_cube2', {
        pos_x: 550,
        pos_y: 320,
        pos_z: 1,
        alp: 1,
        input: 1,
        event_mup: function () {
          currentDialog_ = 4;
          renderGameScene();
        },
      });
      ObjSet('spr_video_cube3', {
        pos_x: 155,
        pos_y: 100,
        pos_z: 1,
        alp: 1,
        input: 1,
        event_mup: function () {
          currentDialog_ = 0;
          renderGameScene();
        },
      });
      ObjSet('spr_video_cube4', {
        pos_x: 420,
        pos_y: 100,
        pos_z: 1,
        alp: 1,
        input: 1,
        event_mup: function () {
          currentDialog_ = 1;
          renderGameScene();
        },
      });
      ObjSet('spr_video_cube5', {
        pos_x: 670,
        pos_y: 100,
        pos_z: 1,
        alp: 1,
        input: 1,
        event_mup: function () {
          currentDialog_ = 2;
          renderGameScene();
        },
      });
    },
    click: function () {},
    close: function () {
      hideDialog();
      renderActionGameScene(null, 4);
    },
    delete: true,
    onended: function () {},
    actions: [],
    origin: '\t\t',
  },
  '39': {
    video: 'boy_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    stopAction: true,
    open: function () {
      ObjSet('spr_video_cube1', {
        pos_x: 290,
        pos_y: 320,
        pos_z: 1,
        alp: 0,
        input: 0,
      });
      ObjSet('spr_video_cube2', {
        pos_x: 550,
        pos_y: 320,
        pos_z: 1,
        alp: 0,
        input: 0,
      });
      ObjSet('spr_video_cube3', {
        pos_x: 155,
        pos_y: 100,
        pos_z: 1,
        alp: 0,
        input: 0,
      });
      ObjSet('spr_video_cube4', {
        pos_x: 420,
        pos_y: 100,
        pos_z: 1,
        alp: 0,
        input: 0,
      });
      ObjSet('spr_video_cube5', {
        pos_x: 670,
        pos_y: 100,
        pos_z: 1,
        alp: 0,
        input: 0,
      });
      //hideDialog();
      renderActionGameScene(null, currentDialog_);
    },
    click: function () {},
    close: function () {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    delete: false,
    stopAction: true,
    onended: function () {},
    actions: [
      {
        type: 'dialog',
        image: '131_1',
        x: 290,
        y: 110,
        next: false,
        open: function () {},
        click: function () {
          renderActionGameScene(null, 5);
        },
      },
      {
        type: 'dialog',
        image: '131_2',
        x: 290,
        y: 110,
        next: false,
        open: function () {},
        click: function () {
          renderActionGameScene(null, 5);
        },
      },
      {
        type: 'dialog',
        image: '131_3',
        x: 290,
        y: 110,
        next: false,
        open: function () {},
        click: function () {
          renderActionGameScene(null, 5);
        },
      },
      {
        type: 'dialog',
        image: '131_4',
        x: 290,
        y: 110,
        next: false,
        open: function () {},
        click: function () {
          renderActionGameScene(null, 5);
        },
      },
      {
        type: 'dialog',
        image: '131_5',
        x: 290,
        y: 110,
        next: false,
        open: function () {},
        click: function () {
          renderActionGameScene(null, 5);
        },
      },
      {
        type: 'dialog',
        image: '132',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '133',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
      {
        type: 'dialog',
        image: '134',
        x: 290,
        y: 110,
        next: true,
        open: function () {},
        click: function () {},
      },
    ],
    origin: 'photo_2\t\t',
  },
};
function getGameLine() {
  return gameLine;
}
