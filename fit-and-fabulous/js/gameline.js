var gameLine = {
    "1": {
        "video": "menu_1",
        "loop": false,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function() {renderGameScene();},
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [],
        "origin": "menu_2\t\tplay"
    },
    "2": {
        "video": "menu_2",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "play",
                "x": 0,
                "y": 0,
                "next": true,
                "open": function () {
                            },
                "click": function () {
                            }
            }
        ],
        "origin": "\t\t"
    },
    "3": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "1",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t1\t"
    },
    "4": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "2",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "3",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t2-3\t"
    },
    "5": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "4",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t4\t"
    },
    "6": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "5",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t5\t"
    },
    "7": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "6",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t6\t"
    },
    "8": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "7",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t7\t"
    },
    "9": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "8",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t8\t"
    },
    "10": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "9",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t9\t"
    },
    "11": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "10",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t10\t"
    },
    "12": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "11",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t11\t"
    },
    "13": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "12",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t12\t"
    },
    "14": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "13",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t13\t"
    },
    "15": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "14",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t14\t"
    },
    "16": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "15",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t15\t"
    },
    "17": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "16",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t16\t"
    },
    "18": {
        "video": "man_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "17",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "18",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "19",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "20",
                "x": 120,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t17-20\t"
    },
    "19": {
        "video": "girl_1",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": true,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "21",
                "x": 540,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t21\t"
    },
    "20": {
        "video": "sex_1_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": true,
        "afterCum": true,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "\t\t"
    },
    "21": {
        "video": "girl_man_2",
        "loop": true,
        "next": true,
        "smoothStart": true,
        "smoothFinish": true,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "22",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "23",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "24",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "25",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "26",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "27",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "28",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "29",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "30",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "31",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_1_stop\t\tplay"
    },
    "22": {
        "video": "sex_2_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": true,
        "afterCum": true,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "sex_1_slow\t\tcum"
    },
    "23": {
        "video": "girl_man_3",
        "loop": true,
        "next": true,
        "smoothStart": true,
        "smoothFinish": true,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "32",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "33",
                "x": 400,
                "y": 80,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "34",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "35",
                "x": 420,
                "y": 80,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "36",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "37",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "38",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "39",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "40",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "41",
                "x": 200,
                "y": 180,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "42",
                "x": 420,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_1_cum\t\t"
    },
    "24": {
        "video": "sex_3_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": true,
        "afterCum": true,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "sex_1_after_cum\t\tplay"
    },
    "25": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": true,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "43",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "26": {
        "video": "girl_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "44",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_man_2\t22-31\t"
    },
    "27": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "45",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "28": {
        "video": "girl_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "46",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_stop\t\tplay"
    },
    "29": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "47",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_slow\t\tcum"
    },
    "30": {
        "video": "girl_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "48",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_cum\t\t"
    },
    "31": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "49",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_after_cum\t\tplay"
    },
    "32": {
        "video": "girl_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "50",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "33": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "51",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_man_3\t32-42\t"
    },
    "34": {
        "video": "girl_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "52",
                "x": 220,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "35": {
        "video": "man_4",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": true,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "53",
                "x": 170,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_3_stop\t\tplay"
    },
    "36": {
        "video": "sex_4_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": false,
        "cum": true,
        "afterCum": false,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "sex_3_slow\t\tcum"
    },
    "37": {
        "video": "sex_4_aftercum",
        "loop": true,
        "next": true,
        "smoothStart": false,
        "smoothFinish": true,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "54",
                "x": 520,
                "y": 120,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_3_cum\t\t"
    },
    "38": {
        "video": "sex_5_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": true,
        "afterCum": false,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "sex_3_after_cum\t\tplay"
    },
    "39": {
        "video": "sex_5_aftercum",
        "loop": true,
        "next": true,
        "smoothStart": true,
        "smoothFinish": false,
        "open": function () {
                        // PlaySound(\"sounds/sfx_.mp3\", 0);
                        // PlaySound(\"sounds/env_.mp3\", 1);
                
                    },
        "click": function () {
                        
                    },
        "close": function () {
                        // StopSound(\"sounds/sfx_.mp3\", 0);
                        // StopSound(\"sounds/env_.mp3\", 0);
                
                    },
        "onended": function () {
                    },
        "actions": [
            {
                "type": "dialog",
                "image": "55",
                "x": 190,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "56",
                "x": 520,
                "y": 70,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "57",
                "x": 190,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "58",
                "x": 520,
                "y": 70,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "59",
                "x": 190,
                "y": 220,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t"
    }
}
function getGameLine() {
  return gameLine;
}
