//=============================================================================
// CloudSave.js
//=============================================================================

/*:
 * @plugindesc Additional Load Screen for Cloud Save Games
 * @author Wes Townsend
 * 
 * @param Title Menu Text
 * @desc Text that appears in the title menu. Make blank to not show in title menu.
 * @default Resume from Cloud
 *
 * @param Number of Saves
 * @desc How many saves you have
 * @default 20
 *
 * @param Display per page
 * @desc How many chapters (saves) to display at once
 * @default 4
 *
 * @help This plugin does not provide plugin commands.
 * 
 * V.0.0.1a
 *
 */
 
//var SR = SR || {};                            // Futureproofing
//SR.CloudSave = SR.CloudSave || {};        // This object

 
(function() {

    DataManager._saveFileExists = 0;
    DataManager._validSaves = "";
    DataManager._latestSave = 0;
    DataManager._lastGlobalInfo = 0;
    DataManager._GlobalInfo = [];
    
    DataManager.loadGlobalInfo = function() {
    if((Date.now() - this._lastGlobalInfo) < 10000) {
        console.log("GLOBAL INFO SAVED");
        return this._GlobalInfo;
    } else {
        var json;
        try {
            console.log("BAD ---- loading global info");
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://www.nlt-media.net/js/cl.php?slot=0", false);
            xhttp.withCredentials = true;
            xhttp.send();
            
            console.log("done loading stuff");
            json = atob(xhttp.response);
        } catch (e) {
            console.error(e);
            return [];
        }
        if (json) {
            this._GlobalInfo = JSON.parse(json);
            this._lastGlobalInfo = Date.now();
            var globalInfo = JSON.parse(json);
            console.log("slot check ");
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://www.nlt-media.net/js/ce.php", false);
            xhttp.withCredentials = true;
            xhttp.send();
            this._validSaves = xhttp.response;
            for (var i = 1; i <= this.maxSavefiles(); i++) {
                if(!this._validSaves.includes(":" + i + ":")) {
                    delete globalInfo[i];
                }
            }
            console.log("done slot check");
            return globalInfo;
        } else {
            return [];
        }
    }
};

DataManager.saveGlobalInfo = function(info) {
    console.log("doing save global info");
    this.GlobalInfo = info;
    this.lastGlobalInfo = Date.now();
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.nlt-media.net/js/cs.php", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials = true;
    xhttp.send("slot=0&jsdata=" + encodeURI(btoa(JSON.stringify(info))));
    console.log(xhttp.response);
    console.log("done save global info");
};

DataManager.isThisGameFile = function(savefileId) {
    console.log("is this game file");
    if(this._validSaves != "") {
        if(this._validSaves.includes(":" + savefileId + ":")) {
            console.log("CHECK SAVED true");
            return true;
        } else {
            console.log("CHECK SAVED false");
            return false;
        }
    } else {
        var globalInfo = this.loadGlobalInfo();
        if (globalInfo && globalInfo[savefileId]) {
            if (StorageManager.isLocalMode()) {
                console.log("done- local");
                return true;
            } else {
                var savefile = globalInfo[savefileId];
                console.log("done- not local");
                return (savefile.globalId === this._globalId &&
                        savefile.title === $dataSystem.gameTitle);
            }
        } else {
            console.log("done- no info");
            return false;
        }
    }
};

DataManager.isAnySavefileExists = function() {
    console.log("is any save file exists");
    if(this._saveFileExists > 0) {
        console.log("no check");
        return true;
    } else {
        var globalInfo = this.loadGlobalInfo();
        if(globalInfo.length > 0) {
            this._saveFileExists = 1;
            console.log("done - yup - is any save file exists");
            return true;
        } else {
            console.log("done - nope - is any save file exists");
            return false;
        }
    }
};

DataManager.latestSavefileId = function() {
    console.log("latest save file id");
    if(this._latestSave > 0) {
        console.log("SAVED ONE");
        return this._latestSave;
    } else {
        var globalInfo = this.loadGlobalInfo();
        var savefileId = 1;
        var timestamp = 0;
        if (globalInfo) {
            for (var i = 1; i < globalInfo.length; i++) {
                if (this.isThisGameFile(i) && globalInfo[i].timestamp > timestamp) {
                    timestamp = globalInfo[i].timestamp;
                    savefileId = i;
                }
            }
        }
        this._latestSave = savefileId;
        console.log("done latest save file id");
        return savefileId;
    }
};
	
DataManager.saveGameWithoutRescue = function(savefileId) {
    var json = JsonEx.stringify(this.makeSaveContents());
    if (json.length >= 200000) {
        console.warn('Save data too big!');
    }
    console.log("save game without rescue");
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.nlt-media.net/js/cs.php", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.withCredentials = true;
    xhttp.send("slot=" + savefileId + "&jsdata=" + encodeURI(btoa(encodeURIComponent(json))));
    console.log(xhttp.response);
    StorageManager.save(savefileId, json);
    this._lastAccessedId = savefileId;
    var globalInfo = this.loadGlobalInfo() || [];
    globalInfo[savefileId] = this.makeSavefileInfo();
    this.saveGlobalInfo(globalInfo);
    console.log("done save game without rescue");
    return true;
};

	DataManager.loadGameWithoutRescue = function(savefileId) {
    console.log("load game without rescue");
    
    var globalInfo = this.loadGlobalInfo();
    if (this.isThisGameFile(savefileId)) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://www.nlt-media.net/js/cl.php?slot=" + savefileId, false);
        xhttp.withCredentials = true;
        xhttp.send();
        console.log(atob(xhttp.response));
        var json = decodeURIComponent(atob(xhttp.response));
        this.createGameObjects();
        this.extractSaveContents(JsonEx.parse(json));
        this._lastAccessedId = savefileId;
        console.log("done - true - load game without rescue");
        return true;
    } else {
        console.log("done -false - load game without rescue");
        return false;
    }
};

  //  SR.CloudSave.titleText = PluginManager.parameters('CloudSave')["Title Menu Text"];
//    SR.CloudSave.numOfWarps = PluginManager.parameters('CloudSave')["Number of Saves"];
    //SR.CloudSave.warpsPerPage = PluginManager.parameters('CloudSave')["Display per page"];
    
    // data
    




})();
