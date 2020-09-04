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
        y: 150,
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
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t2\t'
  },
  '5': {
    video: 'girl_1_flash',
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
        image: '3',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1_flash\t3\t'
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
        image: '4',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '5',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t4-5\t'
  },
  '7': {
    video: 'girl_1_flash',
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
        image: '6',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1_flash\t6\t'
  },
  '8': {
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
        image: '7',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '8',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t7-8\t'
  },
  '9': {
    video: 'girl_2',
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
        image: '9',
        x: 460,
        y: 1,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
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
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '11',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '11': {
    video: 'girl_2_flash',
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
        x: 460,
        y: 1,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '13',
        x: 460,
        y: 1,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '12': {
    video: 'man_1_fist',
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
        image: '14',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '15',
        x: 320,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2\t9\t'
  },
  '13': {
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
        image: '16',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '17',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '18',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '19',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '20',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '21',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '22',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '23',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '24',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '25',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '26',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '27',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '28',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '29',
        x: 220,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '30',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '31',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '32',
        x: 250,
        y: 200,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t10-11\t'
  },
  '14': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_2_flash\t12-13\t'
  },
  '15': {
    video: 'sex_2_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'man_1_fist\t14-15\t'
  },
  '16': {
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
        image: '33',
        x: 200,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '34',
        x: 200,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '35',
        x: 200,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '36',
        x: 200,
        y: 120,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '17': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: false,
    cum: true,
    afterCum: false,
    open: function() {},
    close: function() {},
    origin: 'fade\t\t'
  },
  '18': {
    video: 'sex_3_aftercum',
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
        x: 60,
        y: 240,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_man_2\t16-32\t'
  },
  '19': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: '\t\t'
  },
  '20': {
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
        image: '38',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '39',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '40',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '41',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '42',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '43',
        x: 670,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '21': {
    video: 'sex_5_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'sex_1_stop\t\tplay'
  },
  '22': {
    video: 'man_1_girl_6',
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
        image: '44',
        x: 220,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '45',
        x: 220,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '46',
        x: 220,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '47',
        x: 350,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '48',
        x: 350,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '49',
        x: 220,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '50',
        x: 350,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'sex_1_slow\t\tcum'
  }
};
function getGameLine() {
  return gameLine;
}
