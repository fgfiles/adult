//-----------------------------------------------------------------------------
//  Galv's Screen Buttons
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  Galv_ScreenButtons.js
//-----------------------------------------------------------------------------
//  2017-01-06 - Version 1.3 - fixed a bug with mouse move enabled and no
//                             button with id 0
//  2016-12-15 - Version 1.2 - fixed a bug I created fixing the other bug
//  2016-12-13 - Version 1.1 - fixed a bug with mobile touch going into menus
//  2016-11-30 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_ScreenButtons = true;

var Galv = Galv || {};                  // Galv's main object
Galv.SBTNSH = Galv.SBTNSH || {};          // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.3) Show buttons on screen that can be touched or clicked.
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Precache Buttons
 * @desc A list of image names from /img/system/ for your buttons you wish to use should be precached
 * @default BtnUp,BtnDown,BtnRight,BtnLeft,BtnOk,BtnCancel
 *
 * @param Disable Mouse Move
 * @desc Disable moving character on the map with mouse click true/false
 * @default true
 *
 * @param Button Fade
 * @desc Speed that the buttons fade in/out when disabling/enabling
 * @default 30
 *
 *
 * @help
 *   Galv's Screen Buttons
 * ----------------------------------------------------------------------------
 * This plugin enables you to create buttons on the screen that can be clicked
 * and touched to run a script or emulate a button press.
 *
 * Buttons are given an id that can be used if you wish to replace an existing
 * button with a new one during the game.
 *
 * ----------------------------------------------------------------------------
 *  SCRIPT CALLS
 * ----------------------------------------------------------------------------
 *
 *   Galv.SBTNSH.addButton(id,'type','img',x,y,['actionType','action'],e);
 * 
 * id            = the id of the button. Use a unique number for each button.
 * 'type'        = can currently be 'map' or 'mapX' with x being map id
 * 'img'         = the image name located in /img/system/
 * x             = the x position of the button
 * y             = the y postiion of the button
 * 'actionType'  = You can choose one of the following types here:
 *                 'button' to emulate a button while button is being pressed
 *                 'buttonT' to emulate a button being triggered
 *                 'script' to run script code when button is pressed
 *                 'event' to run a common event when button is pressed
 * 'action'      = The resulting action relating to the actionType
 *                 'button' action is used for key press. Some examples:
 *                          'ok','cancel','shift','up','down','left','right'
 *                 'script' action is the script call you wish to run
 *                 'event' action is the common event id to run
 * e             = A number used for button opacity when events (such as show
 *                 text) are running. 0-255. If it is 255 then the button
 *                 will stay visible and still be able to be pressed.
 *                 Less than 255 the button will be disabled. Leave this blank
 *                 for the button to automatically be invisible during events.
 *
 * EXAMPLES:
 * Galv.SBTNSH.addButton(1,'map','BtnOk',570,500,['button','ok']);
 * Galv.SBTNSH.addButton(2,'map','BtnRun',690,500,['button','shift']);
 * Galv.SBTNSH.addButton(3,'map','BtnMenu',0,0,['script','SceneManager.push(Scene_Equip)']);
 * Galv.SBTNSH.addButton(4,'map1','BtnEvent',0,0,['event',1]);
 *
 *
 *   $gameSystem._hideBtns = status;    // status can be true or false to hide
 *                                      // or show all buttons
 * ----------------------------------------------------------------------------
 */



//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {

Galv.SBTNSH.btnList = PluginManager.parameters('Galv_ScreenButtons')["Precache Buttons"].split(',');
Galv.SBTNSH.disableMove = PluginManager.parameters('Galv_ScreenButtons')["Disable Mouse Move"].toLowerCase() == 'true' ? true : false;
Galv.SBTNSH.fade = Number(PluginManager.parameters('Galv_ScreenButtons')["Button Fade"]);


Galv.SBTNSH.triggered = {};

// to be bound within a scene
Galv.SBTNSH.createButton = function(obj) {
	if (!obj) return;
	var index = obj.id;

	if (!Galv.SBTNSH.canHasButton(index)) return;
	this.removeChild(this._GButtonHs[index]);

	this._GButtonHs[index] = new Sprite_GButtonH(obj);

	if (obj.action) {
		var type = obj.action[0];
		var data = obj.action[1];
		
		switch (type) {
			case 'button':    // for button press emulation
				var button = data;
				this._GButtonHs[index].setPressHandler(Galv.SBTNSH.btnPress.bind(this,data));
				this._GButtonHs[index].setClickHandler(Galv.SBTNSH.btnRelease.bind(this,data));
				break;
			case 'buttonT':    // for button trigger emulation
				var button = data;
				this._GButtonHs[index].setPressHandler(Galv.SBTNSH.btnTrigger.bind(this,data));
				this._GButtonHs[index].setClickHandler(Galv.SBTNSH.btnRelease.bind(this,data));
				break;
			case 'script':    // for script calls
				var script = data;
				this._GButtonHs[index].setClickHandler(this.gButtonScript.bind(this,data));
				break;
			case 'event':     // for common event
				this._GButtonHs[index].setClickHandler(Galv.SBTNSH.runGCommentEvent.bind(this,data));
				break;	
		}
	}
	this.addChild(this._GButtonHs[index]);
};


Galv.SBTNSH.onButton = function() {
	var x = TouchInput.x;
	var y = TouchInput.y;
	var btns = SceneManager._scene._GButtonHs;
	if (!btns) return false;
	var result = false;
	for (var i = 0; i < btns.length; i++) {
		if (btns[i] && x > btns[i].x && x < btns[i].x + btns[i].width && y > btns[i].y && y < btns[i].y + btns[i].height) {
			result = true;
			break;
		};
	}
	return result;
};

Galv.SBTNSH.canHasButton = function(i) {
	return $gameSystem._gBtns[i] && $gameSystem._gBtns[i].location == 'map' && ($gameSystem._gBtns[i].mapId == 0 || $gameSystem._gBtns[i].mapId == $gameMap.mapId());
};

Galv.SBTNSH.runGCommentEvent = function(id) {
	 $gameTemp.reserveCommonEvent(id);
};

Galv.SBTNSH.btnPress = function(btn) {
	Input._currentState[btn] = true;
};

Galv.SBTNSH.btnTrigger = function(btn) {
	if (!Galv.SBTNSH.triggered[btn]) {
		Input._currentState[btn] = true;
		Galv.SBTNSH.triggered[btn] = true;
	} else {
		Input._currentState[btn] = false;
	};
};

Galv.SBTNSH.btnRelease = function(btn) {
	Input._currentState[btn] = false;
	Galv.SBTNSH.triggered[btn] = false;
};

Galv.SBTNSH.addButton = function(id,location,img,x,y,action,e) {
	var obj = {id:id,image:img,x:x,y:y,action:action,eOpacity:e || 0};
	
	var location = location.toLowerCase();
	if (location[0] == 'm') {
		// map
		obj.location = 'map';
		obj.mapId = Number(location.replace('map',''));

		$gameSystem._gBtns[id] = obj;
		SceneManager._scene.createGBtn($gameSystem._gBtns[id]);	
	}
	
};

Galv.SBTNSH.removeButton = function(id) {
	$gameSystem._gBtns[id] = null;
	SceneManager._scene.removeGButtonH(id);
};


//-----------------------------------------------------------------------------
//   PRE CACHE BUTTONS!
//-----------------------------------------------------------------------------

Galv.SBTNSH.Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
Scene_Boot.loadSystemImages = function() {
	Galv.SBTNSH.Scene_Boot_loadSystemImages.call(this);
	for (var i = 0; i < Galv.SBTNSH.btnList.length; i++) {
		ImageManager.loadSystem(Galv.SBTNSH.btnList[i]);
	}
};


//-----------------------------------------------------------------------------
//  GAME SYSTEM
//-----------------------------------------------------------------------------

Galv.SBTNSH.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	this._mouseMove = !Galv.SBTNSH.disableMove;
	this._hideBtns = false;
	this._gBtns = [];
	Galv.SBTNSH.Game_System_initialize.call(this);
};


//-----------------------------------------------------------------------------
//  SCENE BASE
//-----------------------------------------------------------------------------

Galv.SBTNSH.Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
	Input.clear();
	this._GButtonHs = [];
	Galv.SBTNSH.Scene_Base_initialize.call(this);
	this.createGBtn = Galv.SBTNSH.createButton.bind(this);
};

Galv.SBTNSH.Scene_Base_start = Scene_Base.prototype.start;
Scene_Base.prototype.start = function() {
	Input.clear(); // clear anything held down when starting a new scene!
	Galv.SBTNSH.Scene_Base_start.call(this);
};

Scene_Base.prototype.createGButtonHs = function() {};

Scene_Base.prototype.removeGButtonH = function(id) {
	this.removeChild(this._GButtonHs[id]);
};

Scene_Base.prototype.gButtonScript = function(script) {
	eval(script);
};


//-----------------------------------------------------------------------------
//  SCENE MAP
//-----------------------------------------------------------------------------

Galv.SBTNSH.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	this.createGButtonHs();
	Galv.SBTNSH.triggered = {};
	Galv.SBTNSH.Scene_Map_start.call(this);
};

Scene_Map.prototype.createGButtonHs = function() {
	for (var i = 0; i < $gameSystem._gBtns.length; i++) {
		if (Galv.SBTNSH.canHasButton(i)) {
			this.createGBtn($gameSystem._gBtns[i]);
		}
	}
};


//-----------------------------------------------------------------------------
//  GAME TEMP
//-----------------------------------------------------------------------------

Galv.SBTNSH.Game_Temp_setDestination = Game_Temp.prototype.setDestination;
Game_Temp.prototype.setDestination = function(x, y) {
	if (!$gameSystem._mouseMove || Galv.SBTNSH.onButton()) return;
    Galv.SBTNSH.Game_Temp_setDestination.call(this,x,y);
};


})();


//-----------------------------------------------------------------------------
//  SPRITE GBUTTON
//-----------------------------------------------------------------------------

function Sprite_GButtonH() {
    this.initialize.apply(this, arguments);
}

Sprite_GButtonH.prototype = Object.create(Sprite_Button.prototype);
Sprite_GButtonH.prototype.constructor = Sprite_GButtonH;

Sprite_GButtonH.prototype.initialize = function(gameBtn) {
    Sprite_Button.prototype.initialize.call(this);
	this._hidden = false;
	this.setupButton(gameBtn);
};

Sprite_GButtonH.prototype.setupButton = function(b) {
	this._btn = b;
	this.bitmap = ImageManager.loadSystem(b.image);
	var h = this.bitmap.height / 2;
	var w = this.bitmap.width;
	this.setColdFrame(0, 0, w, h);
	this.setHotFrame(0, h, w, h);
	
	this.x = b.x;
	this.y = b.y;
};

Sprite_GButtonH.prototype.processTouch = function() {
    if (this.isActive() && this.opacity >= 255) {
        if (TouchInput.isTriggered() && this.isButtonTouched()) {
			$gameSwitches.setValue(301, true)
            this._touching = true;
			this._wasTouching = true;
		}
        if (this._touching) {
            if (TouchInput.isReleased() || !this.isButtonTouched()) {
                if (this._wasTouching) {
					console.log(this._btn);
					$gameSwitches.setValue(301, true)
                    this.callClickHandler();
                }
				this._touching = false;
				this._wasTouching = false;
            } else {
				// while pressed
				this.callPressHandler();
			}
        } else if (this._wasTouching) {
			// for click holding, moving off of button and releasing issue
			$gameSwitches.setValue(301, true)
			this.callClickHandler();
			this._wasTouching = false;
			this._touching = false;
		}
    } else {
        this._touching = false;
		if (this._wasTouching) {
			$gameSwitches.setValue(301, true)
			this.callClickHandler();
			this._wasTouching = false;
		};
    }
};

Sprite_GButtonH.prototype.setPressHandler = function(method) {
    this._pressHandler = method;
};

Sprite_GButtonH.prototype.callPressHandler = function() {
    if (this._pressHandler) {
        this._pressHandler();
    }
};

Sprite_GButtonH.prototype.update = function() {
	Sprite_Button.prototype.update.call(this);
	this.updateVisibility();
};

Sprite_GButtonH.prototype.updateVisibility = function() {
	if ($gameSystem._hideBtns) {
		this.opacity -= Galv.SBTNSH.fade;
	} else if ($gameMap.isEventRunning()) {
		this.opacity = Math.max(this.opacity - Galv.SBTNSH.fade,this._btn.eOpacity);
	} else {
		this.opacity += Galv.SBTNSH.fade;
	}
};