/* ******************** playVideo ******************** */
var obj = getGameLine(),
    currentVideo = '',
    singleVideo = [],
    backgrounds = [];

var playVideo = function (name) {
    StopSound("sounds/env_sex.mp3", 0);
    PlaySound("sounds/env_main.mp3", 1);
    name = `vid_video_${name}`;
    currentVideo = name;

    // console.log('playVideo', name)
    // ObjSet(name, { alp: 1 });
    ObjSet(name, { alp: 1 });

    singleVideo.forEach(function(nameVideo) {
        nameVideo = `vid_video_${nameVideo}`;
        if ( (!nameVideo) || (nameVideo == name) ) return;
        
        ObjSet(nameVideo, { alp: 0 });
        var vid = document.getElementById(nameVideo); 
        
        if (vid && vid.play) {
            // console.log(nameVideo);
            vid.currentTime = 0;
            vid.playbackRate = 1;
            // vid.loop = true;
            vid.pause();
        }
    });
    
    if (isDev) {
        console.log('name', name);
    }
    
    // console.log(name);
    
    var vid = document.getElementById(name);
    
    if (vid && vid.play) {
        vid.currentTime = 0;
        vid.playbackRate = 1;
        vid.play();
    }

    SwitchRoom('room_video');
}

function createImg(backgrounds, room) {
    var imgs = {};

    backgrounds.forEach(function(element) {
        imgs[element] = 1;
    });

    var imgHub = document.getElementById(room);

    // console.warn('\r\n !!! backgrounds', backgrounds);
    // console.warn('\r\n !!! backgrounds', backgrounds);
    // console.warn('\r\n !!! imgs', imgs);

    // console.log('imgs', imgs);

    for (var element in imgs) {
        // console.log('element', element);
        if (element && element != 'bg_black') {
            if ( document.getElementById(`vid_video_${element}`) ) {
                continue;
            }
            // console.warn(`create vid_video_${element}`);

            var imgElement = document.createElement('img');
            imgElement.id = `vid_video_${element}`;
            imgElement.src = `./images/${element}.png`;
            imgElement.className = 'txt';
            imgElement.style='left: 0px; top: 0px; z-index: 0; width: 1024px; height: 576px; transform: scaleX(1) scaleY(1) rotate(0deg); pointer-events: none; opacity: 0; background-image: url(""); background-position: 0px 0px; background-color: black;'

            imgHub.appendChild(imgElement);
            downloadImage(imgElement.id);
        }
    };
}

function createVideo(videoArray, room) {
    var videos = {};

    videoArray.forEach(function(element) {
        videos[element] = 1;
    });

    var videoHub = document.getElementById(room);

    for (var element in videos) {
        if (element && element != 'bg_black') {
            if ( document.getElementById(`vid_video_${element}`) ) {
                continue;
            }
            var videoElement = document.createElement('video');
            videoElement.setAttribute('playsinline', '');
            videoElement.id = `vid_video_${element}`;
            videoElement.src = `./video/${element}.mp4`;
            videoElement.className = 'txt video';
            videoElement.style='left: 0px; top: 0px; z-index: 0; width: 1024px; height: 576px; transform: scaleX(1) scaleY(1.005) rotate(0deg); pointer-events: none; opacity: 0; background-image: url(""); background-position: 0px 0px; background-color: black;'

            videoHub.appendChild(videoElement);
            downloadVideo(videoElement.id);
        }
    };
}

var roomVideo = document.getElementById('room_video');

function deleteVideo(name) {
    if (!name) {
        return;
    }
    var vid = document.getElementById(name);
    if (!vid) {
        return;
    }
    roomVideo.removeChild(vid);
    singleVideo = singleVideo.filter(function(value) {
        return ('vid_video_' + value != name);
    });
};

function pushVideosAndBackgrounds(start, end) {
	for (var key in obj) {
    	var scene = obj[key];
        // console.warn('!!!start', scene.video);
        if (key >= start && key <= end) {
            if (scene.video.length > 5 && (scene.video.length - scene.video.lastIndexOf('_stop') == 5) ) {
                // console.log('pushVideosAndBackgrounds не будет загружено', scene.video);
                continue;
            }
            // scene.video.lastIndexOf('_stop') != 5) {
            // console.warn('start', start);
            // console.log('pushVideosAndBackgrounds распределение загрузки', scene.video);
			if ( scene.video.indexOf('bg_') ) {
				if (!singleVideo.includes(scene.video)) {
                    // console.log('pushVideosAndBackgrounds', scene.video);
					singleVideo.push(scene.video);
				}
			} else {
                // console.log('pushVideosAndBackgrounds', scene.video);
				backgrounds.push(scene.video);
			}
		}
	}

    createImg(backgrounds, 'room_video');
    createVideo(singleVideo, 'room_video');
}

// pushVideosAndBackgrounds(1, 1);
// pushVideosAndBackgrounds(1, 5);
// pushVideosAndBackgrounds(1, 5);
// pushVideosAndBackgrounds(25, 25);
//console.log(singleVideo);
//console.log(backgrounds);