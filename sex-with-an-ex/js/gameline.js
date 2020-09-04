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
        x: 520,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '2',
        x: 520,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t1-2\t'
  },
  '4': {
    video: 'man_1_arm_up',
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
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1_arm_up\t3\t'
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
        x: 520,
        y: 150,
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
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t5\t'
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
        image: '6',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t6\t'
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
        image: '7',
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t7\t'
  },
  '9': {
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
        image: '8',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '9',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '10',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t8-10\t'
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
        image: '11',
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t11\t'
  },
  '11': {
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
        image: '12',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t12\t'
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
        image: '13',
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t13\t'
  },
  '13': {
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
        image: '14',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t14\t'
  },
  '14': {
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
        image: '15',
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t15\t'
  },
  '15': {
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
        image: '16',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t16\t'
  },
  '16': {
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
        image: '17',
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t17\t'
  },
  '17': {
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
        image: '18',
        x: 520,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t18\t'
  },
  '18': {
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
        x: 170,
        y: 160,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_1\t19\t'
  },
  '19': {
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
        image: '20',
        x: 520,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_1\t20\t'
  },
  '20': {
    video: 'girl_2_man_2',
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
        image: '21',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '22',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '23',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '24',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '25',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '26',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '27',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '28',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '29',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '30',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '31',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '32',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '33',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '34',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '35',
        x: 220,
        y: 170,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '36',
        x: 470,
        y: 270,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '21': {
    video: 'man_3',
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
        image: '37',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '38',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '22': {
    video: 'girl_3',
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
        image: '39',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '23': {
    video: 'man_3',
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
        image: '40',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '41',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_2_man_2\t21-36\t'
  },
  '24': {
    video: 'girl_3_cream',
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
        image: '42',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '25': {
    video: 'man_3',
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
        image: '43',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'fade\t\t'
  },
  '26': {
    video: 'girl_3_cream',
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
        image: '44',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: '\t\t'
  },
  '27': {
    video: 'man_3',
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
        image: '45',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t37-38\t'
  },
  '28': {
    video: 'girl_3_cream',
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
        image: '46',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3\t39\t'
  },
  '29': {
    video: 'man_3',
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
        image: '47',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t40-41\t'
  },
  '30': {
    video: 'girl_3_cream',
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
        image: '48',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_cream\t42\t'
  },
  '31': {
    video: 'man_3',
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
        image: '49',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t43\t'
  },
  '32': {
    video: 'girl_3',
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
        image: '50',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_cream\t44\t'
  },
  '33': {
    video: 'man_3',
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
        image: '51',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t45\t'
  },
  '34': {
    video: 'girl_3',
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
        image: '52',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_cream\t46\t'
  },
  '35': {
    video: 'man_3',
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
        image: '53',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t47\t'
  },
  '36': {
    video: 'girl_3',
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
        image: '54',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_cream\t48\t'
  },
  '37': {
    video: 'man_3',
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
        image: '55',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t49\t'
  },
  '38': {
    video: 'girl_3',
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
        image: '56',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3\t50\t'
  },
  '39': {
    video: 'man_3',
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
        image: '57',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t51\t'
  },
  '40': {
    video: 'girl_3',
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
        image: '58',
        x: 520,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3\t52\t'
  },
  '41': {
    video: 'man_3_cream',
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
        image: '59',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '60',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '61',
        x: 150,
        y: 310,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3\t53\t'
  },
  '42': {
    video: 'sex_1_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_3\t54\t'
  },
  '43': {
    video: 'sex_2_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'man_3\t55\t'
  },
  '44': {
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
        image: '62',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '63',
        x: 700,
        y: 340,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '64',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '65',
        x: 700,
        y: 340,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '66',
        x: 420,
        y: 130,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'girl_3_cream\t56\t'
  },
  '45': {
    video: 'sex_3_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'man_3\t57\t'
  },
  '46': {
    video: 'sex_4_stop',
    cum_image: './images/cum.png',
    smoothStart: true,
    smoothFinish: true,
    cum: true,
    afterCum: true,
    open: function() {},
    close: function() {},
    origin: 'girl_3\t58\t'
  },
  '47': {
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
        image: '67',
        x: 420,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '68',
        x: 700,
        y: 340,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '69',
        x: 420,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '70',
        x: 700,
        y: 340,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '71',
        x: 420,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '72',
        x: 700,
        y: 340,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '73',
        x: 420,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'man_3_cream\t59-61\t'
  },
  '48': {
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
  '49': {
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
        image: '74',
        x: 590,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '75',
        x: 590,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '76',
        x: 590,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '77',
        x: 220,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '78',
        x: 590,
        y: 20,
        next: true,
        open: function() {},
        click: function() {}
      },
      {
        type: 'dialog',
        image: '79',
        x: 220,
        y: 150,
        next: true,
        open: function() {},
        click: function() {}
      }
    ],
    origin: 'sex_1_stop\t\tplay'
  }
};
function getGameLine() {
  return gameLine;
}
