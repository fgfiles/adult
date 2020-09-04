var gameLine = {
  '1': {
    video: 'menu_1',
    loop: false,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {
      renderGameScene();
    },
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [],
    origin: 'menu_2\t\tplay'
  },
  '2': {
    video: 'menu_2',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'play',
        x: 0,
        y: 0,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '3': {
    video: 'girl_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '1',
        x: 320,
        y: 60,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '2',
        x: 320,
        y: 60,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '3',
        x: 320,
        y: 60,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t1-3\t'
  },
  '4': {
    video: 'man_1_camera',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '4',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '5',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '6',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1_camera\t4-6\t'
  },
  '5': {
    video: 'girl_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '7',
        x: 320,
        y: 60,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t7\t'
  },
  '6': {
    video: 'man_1',
    loop: true,
    next: true,
    smoothStart: false,
    smoothFinish: true,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '8',
        x: 220,
        y: 210,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '9',
        x: 220,
        y: 210,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '10',
        x: 220,
        y: 210,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t8-10\t'
  },
  '7': {
    video: 'man_2',
    loop: true,
    next: true,
    smoothStart: true,
    smoothFinish: true,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '11',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '12',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '13',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '14',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '15',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '16',
        x: 300,
        y: 50,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '8': {
    video: 'girl_2',
    loop: true,
    next: true,
    smoothStart: true,
    smoothFinish: true,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '17',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '18',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '19',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '20',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '21',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '22',
        x: 220,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '9': {
    video: 'girl_3_man_3',
    loop: true,
    next: true,
    smoothStart: true,
    smoothFinish: true,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '23',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '24',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '25',
        x: 260,
        y: 360,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '26',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '27',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '28',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '29',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '30',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '31',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '32',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '33',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '34',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '35',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '36',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '37',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '38',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '39',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '40',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '41',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '42',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '43',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '44',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '45',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '46',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '47',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '48',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '49',
        x: 250,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '10': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'man_2\t11-16\t'
  },
  '11': {
    video: 'sex_2_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '12': {
    video: 'girl_4',
    loop: true,
    next: true,
    smoothStart: true,
    smoothFinish: true,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '50',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '51',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '52',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '53',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '54',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '55',
        x: 190,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '13': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '14': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_2\t17-22\t'
  },
  '15': {
    video: 'sex_5_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '16': {
    video: 'girl_5',
    loop: true,
    next: true,
    smoothStart: true,
    smoothFinish: false,
    open: function() {
      // PlaySound(\"sounds/sfx_.mp3\", 0);
      // PlaySound(\"sounds/env_.mp3\", 1);
    },
    click: function() {},
    close: function() {
      // StopSound(\"sounds/sfx_.mp3\", 0);
      // StopSound(\"sounds/env_.mp3\", 0);
    },
    onended: function() {},
    actions: [
      {
        type: 'dialog',
        image: '56',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '57',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '58',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '59',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '60',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '61',
        x: 700,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '62',
        x: 130,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '63',
        x: 130,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '64',
        x: 350,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '65',
        x: 350,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '66',
        x: 350,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '67',
        x: 130,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '68',
        x: 350,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  }
};
function getGameLine() {
  return gameLine;
}
