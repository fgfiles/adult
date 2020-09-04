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
        image: '1',
        x: 520,
        y: 70,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '2',
        x: 520,
        y: 70,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t1-2\t'
  },
  '4': {
    video: 'girl_1_phone',
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
        image: '3',
        x: 620,
        y: 100,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '4',
        x: 520,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '5': {
    video: 'girl_2_man_1',
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
        image: '5',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '6',
        x: 400,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '7',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '8',
        x: 400,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '9',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '6': {
    video: 'girl_2_man_1',
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
        image: '10',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '11',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '12',
        x: 400,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '13',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '14',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '15',
        x: 400,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '16',
        x: 270,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '7': {
    video: 'girl_3_man_2',
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
        image: '17', // baba
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '18',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '19',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '20',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '21',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '22',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '23',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '24', //man
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '25',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '26',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '27',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '28',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '29',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '30',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '31',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '32',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '33',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '34',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '35',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '36',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '37',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '38',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '39',
        x: 480,
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '40',
        x: 280,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1_phone\t3-4\t'
  },
  '8': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: false,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '9': {
    video: 'girl_4_man_3',
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
        image: '41',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '42',
        x: 440, //girl
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '43',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '44',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '45',
        x: 440, //girl
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '46',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '47',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '48',
        x: 620, //man
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '49',
        x: 440, //girl
        y: 220,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '10': {
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
  '11': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_2_man_1\t5-9\t'
  },
  '12': {
    video: 'girl_5',
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
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '51',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '52',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '53',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '54',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '55',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '56',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '57',
        x: 270,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '13': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'fade\t\t'
  },
  '14': {
    video: 'sex_5_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: false,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '15': {
    video: 'sex_5_aftercum',
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
        image: '58',
        x: 120,
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '59',
        x: 120,
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '60',
        x: 230,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '61',
        x: 120,
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '62',
        x: 120,
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '63',
        x: 230,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '64',
        x: 120,
        y: 180,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '65',
        x: 230,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '66',
        x: 70,
        y: 110,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '67',
        x: 70,
        y: 110,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2_man_1\t10-16\t'
  }
};
function getGameLine() {
  return gameLine;
}
