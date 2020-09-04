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
        x: 150,
        y: 230,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t1\t'
  },
  '4': {
    video: 'man_1',
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
        image: '2',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '3',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t2-3\t'
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
        image: '4',
        x: 150,
        y: 230,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t4\t'
  },
  '6': {
    video: 'man_1',
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
        image: '5',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '6',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t5-6\t'
  },
  '7': {
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
        x: 150,
        y: 230,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t7\t'
  },
  '8': {
    video: 'man_1',
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
        image: '8',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t8\t'
  },
  '9': {
    video: 'girl_2_prisoner_1',
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
        image: '9',
        x: 130,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2_prisoner_1\t9\t'
  },
  '10': {
    video: 'man_1',
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
        image: '10',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t10\t'
  },
  '11': {
    video: 'girl_2_prisoner_1',
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
        image: '11',
        x: 130,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2_prisoner_1\t11\t'
  },
  '12': {
    video: 'man_1',
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
        image: '12',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '13',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t12-13\t'
  },
  '13': {
    video: 'girl_2_prisoner_1',
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
        image: '14',
        x: 130,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2_prisoner_1\t14\t'
  },
  '14': {
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
        image: '15',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '16',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t15-16\t'
  },
  '15': {
    video: 'man_1',
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
        image: '17',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '16': {
    video: 'girl_2',
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
        image: '18',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '17': {
    video: 'man_1',
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
        image: '19',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '18': {
    video: 'girl_2',
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
        image: '20',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t17\t'
  },
  '19': {
    video: 'man_1',
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
        image: '21',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '22',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t18\t'
  },
  '20': {
    video: 'girl_2',
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
        image: '23',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t19\t'
  },
  '21': {
    video: 'man_1',
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
        image: '24',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t20\t'
  },
  '22': {
    video: 'girl_2',
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
        image: '25',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t21-22\t'
  },
  '23': {
    video: 'man_1',
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
        image: '26',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t23\t'
  },
  '24': {
    video: 'girl_2',
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
        image: '27',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t24\t'
  },
  '25': {
    video: 'man_1',
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
        image: '28',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t25\t'
  },
  '26': {
    video: 'girl_2',
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
        image: '29',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t26\t'
  },
  '27': {
    video: 'man_1',
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
        image: '30',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t27\t'
  },
  '28': {
    video: 'girl_2',
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
        image: '31',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t28\t'
  },
  '29': {
    video: 'man_1',
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
        image: '32',
        x: 180,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t29\t'
  },
  '30': {
    video: 'girl_2',
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
        image: '33',
        x: 480,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t30\t'
  },
  '31': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_2\t31\t'
  },
  '32': {
    video: 'sex_2_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: false,
    cum: true,
    afterCum: false,
    open: function() {},
    close: function() {},
    origin: 'man_1\t32\t'
  },
  '33': {
    video: 'sex_2_aftercum',
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
        image: '34',
        x: 670,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '35',
        x: 310,
        y: 110,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '36',
        x: 670,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t33\t'
  },
  '34': {
    video: 'prisoner_1',
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
        image: '37',
        x: 260,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '38',
        x: 260,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t33\t'
  },
  '35': {
    video: 'sex_2_aftercum',
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
        image: '39',
        x: 670,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '40',
        x: 670,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '41',
        x: 310,
        y: 110,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '42',
        x: 670,
        y: 190,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'sex_1_stop\t\tplay'
  },
  '36': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: false,
    open: function() {},
    close: function() {},
    origin: 'sex_1_slow\t\tcum'
  },
  '37': {
    video: 'sex_3_aftercum',
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
        image: '44',
        x: 700,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '45',
        x: 550,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '46',
        x: 550,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'sex_1_cum\t\t'
  },
  '38': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: false,
    open: function() {},
    close: function() {},
    origin: 'sex_1_after_cum\t\tplay'
  },
  '39': {
    video: 'sex_4_aftercum',
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
        image: '47',
        x: 220,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '48',
        x: 400,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '49',
        x: 400,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '50',
        x: 400,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '51',
        x: 220,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '52',
        x: 280,
        y: 100,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '53',
        x: 400,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '54',
        x: 280,
        y: 100,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '55',
        x: 280,
        y: 100,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '56',
        x: 400,
        y: 80,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '40': {
    video: 'sex_5_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'sex_2_stop\t\tplay'
  },
  '41': {
    video: 'girl_3_prisoner_3',
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
        image: '57',
        x: 590,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '58',
        x: 280,
        y: 250,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '59',
        x: 590,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '60',
        x: 590,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '61',
        x: 590,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'sex_2_slow\t\tcum'
  },
  '42': {
    video: 'girl_3_prisoner_3_cum',
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
    origin: 'sex_2_cum\t\t'
  }
};
function getGameLine() {
  return gameLine;
}
