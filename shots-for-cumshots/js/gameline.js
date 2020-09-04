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
                "image": "1",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t1\t"
    },
    "4": {
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
                "image": "2",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t2\t"
    },
    "5": {
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
                "image": "3",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t3\t"
    },
    "6": {
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
                "x": 180,
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
    "7": {
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
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t5\t"
    },
    "8": {
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
                "x": 180,
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
    "9": {
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
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "8",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t7-8\t"
    },
    "10": {
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
                "image": "9",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t9\t"
    },
    "11": {
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
                "image": "10",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t10\t"
    },
    "12": {
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
                "image": "11",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t11\t"
    },
    "13": {
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
                "image": "12",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t12\t"
    },
    "14": {
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
                "image": "13",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t13\t"
    },
    "15": {
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
                "image": "14",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t14\t"
    },
    "16": {
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
                "image": "15",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t15\t"
    },
    "17": {
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
                "image": "16",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t16\t"
    },
    "18": {
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
                "image": "17",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t17\t"
    },
    "19": {
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
                "image": "18",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t18\t"
    },
    "20": {
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
                "image": "19",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t19\t"
    },
    "21": {
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
                "image": "20",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t20\t"
    },
    "22": {
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
                "image": "21",
                "x": 180,
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
    "23": {
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
                "image": "22",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t22\t"
    },
    "24": {
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
                "image": "23",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t23\t"
    },
    "25": {
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
                "image": "24",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t24\t"
    },
    "26": {
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
                "image": "25",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t25\t"
    },
    "27": {
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
                "image": "26",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t26\t"
    },
    "28": {
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
                "image": "27",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t27\t"
    },
    "29": {
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
                "image": "28",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t28\t"
    },
    "30": {
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
                "image": "29",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t29\t"
    },
    "31": {
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
                "image": "30",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t30\t"
    },
    "32": {
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
                "image": "31",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t31\t"
    },
    "33": {
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
                "image": "32",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t32\t"
    },
    "34": {
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
                "image": "33",
                "x": 180,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_1\t33\t"
    },
    "35": {
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
    "36": {
        "video": "man_2",
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
                "image": "34",
                "x": 540,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_1_stop\t\tplay"
    },
    "37": {
        "video": "girl_2",
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
                "image": "35",
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_1_slow\t\tcum"
    },
    "38": {
        "video": "man_2",
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
                "image": "36",
                "x": 520,
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
    "39": {
        "video": "girl_2",
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
                "image": "37",
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_1_after_cum\t\tplay"
    },
    "40": {
        "video": "man_2",
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
                "image": "38",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "39",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "41": {
        "video": "girl_2",
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
                "image": "40",
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t34\t"
    },
    "42": {
        "video": "man_2",
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
                "image": "41",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t35\t"
    },
    "43": {
        "video": "girl_2",
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
                "image": "42",
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t36\t"
    },
    "44": {
        "video": "man_2",
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
                "image": "43",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t37\t"
    },
    "45": {
        "video": "girl_2",
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
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t38-39\t"
    },
    "46": {
        "video": "man_2",
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
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t40\t"
    },
    "47": {
        "video": "girl_2",
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
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t41\t"
    },
    "48": {
        "video": "man_2",
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
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t42\t"
    },
    "49": {
        "video": "girl_2",
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
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t43\t"
    },
    "50": {
        "video": "man_2",
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
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t44\t"
    },
    "51": {
        "video": "girl_2",
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
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t45\t"
    },
    "52": {
        "video": "man_2",
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
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t46\t"
    },
    "53": {
        "video": "girl_2",
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
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t47\t"
    },
    "54": {
        "video": "man_2",
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
                "image": "53",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "54",
                "x": 520,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t48\t"
    },
    "55": {
        "video": "girl_2",
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
                "image": "55",
                "x": 580,
                "y": 160,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t49\t"
    },
    "56": {
        "video": "sex_2_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": false,
        "afterCum": true,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "girl_2\t50\t"
    },
    "57": {
        "video": "man_3",
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
                "image": "56",
                "x": 220,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t51\t"
    },
    "58": {
        "video": "girl_3",
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
                "image": "57",
                "x": 680,
                "y": 250,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t52\t"
    },
    "59": {
        "video": "man_3",
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
                "image": "58",
                "x": 220,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_2\t53-54\t"
    },
    "60": {
        "video": "girl_3",
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
                "image": "59",
                "x": 680,
                "y": 250,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_2\t55\t"
    },
    "61": {
        "video": "man_3",
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
                "image": "60",
                "x": 220,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "62": {
        "video": "girl_3",
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
                "image": "61",
                "x": 680,
                "y": 250,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_stop\t\tplay"
    },
    "63": {
        "video": "man_3",
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
                "image": "62",
                "x": 220,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_slow\t\tcum"
    },
    "64": {
        "video": "girl_3",
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
                "image": "63",
                "x": 680,
                "y": 250,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "64",
                "x": 680,
                "y": 250,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_cum\t\t"
    },
    "65": {
        "video": "man_3",
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
                "image": "65",
                "x": 220,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_2_after_cum\t\tplay"
    },
    "66": {
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
        "origin": "\t\t"
    },
    "67": {
        "video": "man_1",
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
                "image": "66",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_3\t56\t"
    },
    "68": {
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
                "image": "67",
                "x": 620,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_3\t57\t"
    },
    "69": {
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
                "image": "68",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_3\t58\t"
    },
    "70": {
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
                "image": "69",
                "x": 620,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_3\t59\t"
    },
    "71": {
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
                "image": "70",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_3\t60\t"
    },
    "72": {
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
                "image": "71",
                "x": 620,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_3\t61\t"
    },
    "73": {
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
                "image": "72",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_3\t62\t"
    },
    "74": {
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
                "image": "73",
                "x": 620,
                "y": 150,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_3\t63-64\t"
    },
    "75": {
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
                "image": "74",
                "x": 540,
                "y": 310,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_3\t65\t"
    },
    "76": {
        "video": "girl_4",
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
                "image": "75",
                "x": 620,
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
    "77": {
        "video": "sex_4_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": true,
        "cum": true,
        "afterCum": true,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "sex_3_stop\t\tplay"
    },
    "78": {
        "video": "man_2",
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
                "image": "76",
                "x": 520,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_3_slow\t\tcum"
    },
    "79": {
        "video": "girl_5",
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
                "image": "40",
                "x": 670,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_3_cum\t\t"
    },
    "80": {
        "video": "man_2",
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
                "image": "77",
                "x": 520,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "sex_3_after_cum\t\tplay"
    },
    "81": {
        "video": "girl_5",
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
                "image": "78",
                "x": 670,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "\t\t"
    },
    "82": {
        "video": "man_2",
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
                "image": "79",
                "x": 520,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t66\t"
    },
    "83": {
        "video": "girl_5",
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
                "image": "80",
                "x": 670,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_4\t67\t"
    },
    "84": {
        "video": "man_2",
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
                "image": "81",
                "x": 520,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t68\t"
    },
    "85": {
        "video": "girl_5",
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
                "image": "82",
                "x": 670,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_4\t69\t"
    },
    "86": {
        "video": "man_2",
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
                "image": "83",
                "x": 520,
                "y": 190,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "man_1\t70\t"
    },
    "87": {
        "video": "girl_5",
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
                "image": "84",
                "x": 670,
                "y": 200,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_4\t71\t"
    },
    "88": {
        "video": "sex_5_stop",
        "cum_image": "./images/cum.png",
        "smoothStart": true,
        "smoothFinish": false,
        "cum": true,
        "afterCum": false,
        "open": function () {
                    },
        "close": function () {
                    },
        "origin": "man_1\t72\t"
    },
    "89": {
        "video": "sex_5_aftercum",
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
                "image": "85",
                "x": 650,
                "y": 230,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "86",
                "x": 140,
                "y": 130,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "87",
                "x": 650,
                "y": 230,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "88",
                "x": 140,
                "y": 130,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "89",
                "x": 650,
                "y": 230,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "90",
                "x": 140,
                "y": 130,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            },
            {
                "type": "dialog",
                "image": "91",
                "x": 650,
                "y": 230,
                "next": true,
                "open": function () {
                        },
                "click": function () {
                        }
            }
        ],
        "origin": "girl_4\t73\t"
    }
}

function getGameLine() {
  return gameLine;
}
