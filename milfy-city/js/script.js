"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	"RetroFutureClean": "RetroFutureClean.mp3",
	"Deadly_Roulette": "Deadly_Roulette.mp3",
	"Vivacity": "Vivacity.mp3",
	"Why_Did_You_Do_It_-_Everet_Almond": "Why_Did_You_Do_It_-_Everet_Almond.mp3",
	"Fork_and_Spoon": "Fork_and_Spoon.mp3",
	"Secrets_of_the_Schoolyard": "Secrets_of_the_Schoolyard.mp3",
	"MarchoftheSpoons": "MarchoftheSpoons.mp3",
	"MenuMusic": "MenuMusic.mp3",
	"MiamiViceroy": "MiamiViceroy.mp3",
	"SneakySnitch": "SneakySnitch.mp3",
	"OctoBlues": "OctoBlues.mp3",
	"Niles_Blues": "Niles_Blues.mp3",
	"ChillWave": "ChillWave.mp3",
	"SockHop": "SockHop.mp3",
	"Rhinoceros": "Rhinoceros.mp3",
	"AcesHigh": "AcesHigh.mp3",
	"DooblyDoo": "DooblyDoo.mp3",
	"Marty_Gots_a_Plan": "Marty_Gots_a_Plan.mp3",
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"door_squeak": "door_squeak.mp3",
	"car_start": "car_start.mp3",
	"shelf_fall": "shelf_fall.mp3",
	"DrawerOpen": "DrawerOpen.mp3",
	"glassSmash": "glassSmash.mp3",

};

// Define the videos used in the game.
const videos = {
	"intro_movie": "intro_movie.mp4"
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"Morning": "Morning.jpg",
	"N_Morning": "N_Morning.jpg",
	"SD_Night": "SD_Night.jpg",
	"SD_Afternoon": "SD_Afternoon.jpg",
	"SD_E": "SD_E.jpg",
	"ND_A": "ND_A.jpg",
	"OH_later": "OH_later.jpg",

	"bi1": "bi1.jpg",
	"i2": "bi2.jpg",
	"bi3a": "bi3a.jpg",
	"bi3b": "bi3b.jpg",
	"bi4": "bi4.jpg",
	"i1": "i1.jpg",
	"i2": "i2.jpg",
	"i3": "i3.jpg",
	"i4": "i4.jpg",
	"i5": "i5.jpg",
	"i6": "i6.jpg",
	"i7": "i7.jpg",
	"i8": "i8.jpg",
	"i9": "i9.jpg",
	"i10": "i10.jpg",
	"i11": "i11.jpg",
	"i12": "i12.jpg",
	"i13": "i13.jpg",
	"i14": "i14.jpg",
	"i15": "i15.jpg",
	"i16": "i16.jpg",
	"i17": "i17.jpg",
	"i18": "i18.jpg",
	"i19": "i19.jpg",
	"i20": "i20.jpg",
	"i21": "i21.jpg",
	"i22": "i22.jpg",
	"i23": "i23.jpg",
	"i24": "i24.jpg",
	"i25": "i25.jpg",
	"i26a": "i26a.jpg",
	"i26b": "i26b.jpg",
	"i27": "i27.jpg",
	"i28": "i28.jpg",
	"i29": "i29.jpg",
	"i30": "i30.jpg",
	"i31": "i31.jpg",
	"i32": "i32.jpg",
	"i33": "i33.jpg",
	"i34": "i34.jpg",
	"i35": "i35.jpg",
	"i36": "i36.jpg",
	"i37": "i37.jpg",
	"i38": "i38.jpg",
	"i39": "i39.jpg",
	"i40": "i40.jpg",
	"i41": "i41.jpg",
	"i42": "i42.jpg",
	"i43": "i43.jpg",
	"i44": "i44.jpg",
	"i45": "i45.jpg",
	"i46": "i46.jpg",
	"i47": "i47.jpg",
	"i48": "i48.jpg",
	"i49": "i49.jpg",
	"i50": "i50.jpg",
	"i51": "i51.jpg",
	"i52": "i52.jpg",
	"i53": "i53.jpg",
	"i54": "i54.jpg",
	"Character_Choice": "Character_Choice.jpg",
	"M_S0_p1": "M_S0_p1.jpg",
	"M_S0_p2": "M_S0_p2.jpg",
	"M_S0_p2a": "M_S0_p2a.jpg",
	"M_S0_p3": "M_S0_p3.jpg",
	"M_S0_p4": "M_S0_p4.jpg",
	"M_S0_p5": "M_S0_p5.jpg",

	"M_S1_p1": "M_S1_p1.jpg",
	"M_S1_p2": "M_S1_p2.jpg",
	"M_S1_p3": "M_S1_p3.jpg",
	"M_S1_p4": "M_S1_p4.jpg",
	"M_S1_p5": "M_S1_p5.jpg",
	"M_S1_p6": "M_S1_p6.jpg",
	"M_S1_p7": "M_S1_p7.jpg",
	"M_S1_p8": "M_S1_p8.jpg",
	"M_S1_p9": "M_S1_p9.jpg",
	"M_S1_p10": "M_S1_p10.jpg",

	"M_S2_p1": "M_S2_p1.jpg",
	"M_S2_p2": "M_S2_p2.jpg",
	"M_S2_p3": "M_S2_p3.jpg",
	"M_S2_p4": "M_S2_p4.jpg",
	"M_S2_p5": "M_S2_p5.jpg",
	"M_S2_p6": "M_S2_p6.jpg",
	"M_S2_p7": "M_S2_p7.jpg",

	"M_NS1_p1": "M_NS1_p1.jpg",
	"M_NS1_p2": "M_NS1_p2.jpg",
	"M_NS1_p3": "M_NS1_p3.jpg",
	"M_NS1_p4": "M_NS1_p4.jpg",
	"M_NS1_p5": "M_NS1_p5.jpg",
	"M_NS1_p6": "M_NS1_p6.jpg",
	"M_NS1_p7": "M_NS1_p7.jpg",

	"M_Book_p1": "M_Book_p1.jpg",
	
	"M_Book_p3": "M_Book_p3.jpg",
	"M_Book_p4": "M_Book_p4.jpg",

	"M_MS3_p1": "M_MS3_p1.jpg",
	"M_MS3_p2": "M_MS3_p2.jpg",
	"M_MS3_p3": "M_MS3_p3.jpg",
	"M_MS3_p4": "M_MS3_p4.jpg",
	"M_MS3_p5": "M_MS3_p5.jpg",
	"M_MS3_p6": "M_MS3_p6.jpg",
	"M_MS3_p7": "M_MS3_p7.jpg",
	"M_MS3_p8": "M_MS3_p8.jpg",
	"M_MS3_p9": "M_MS3_p9.jpg",
	"M_MS3_p10": "M_MS3_p10.jpg",
	"M_MS3_p11": "M_MS3_p11.jpg",
	"M_MS3_p12": "M_MS3_p12.jpg",
	"M_MS3_p13": "M_MS3_p13.jpg",
	"M_MS3_p14": "M_MS3_p14.jpg",
	"M_MS3_p15": "M_MS3_p15.jpg",

	"M_MS5_p1": "M_MS5_p1.jpg",
	"M_MS5_p2": "M_MS5_p2.jpg",
	"M_MS5_p3": "M_MS5_p3.jpg",
	"M_MS5_p4": "M_MS5_p4.jpg",
	"M_MS5_p5": "M_MS5_p5.jpg",
	"M_MS5_p6": "M_MS5_p6.jpg",
	"M_MS5_p7": "M_MS5_p7.jpg",
	"M_MS5_p8": "M_MS5_p8.jpg",
	"M_MS5_p9": "M_MS5_p9.jpg",
	"M_MS5_p10": "M_MS5_p10.jpg",
	"M_MS5_p11": "M_MS5_p11.jpg",
	"M_MS5_p12": "M_MS5_p12.jpg",
	"M_MS5_p13": "M_MS5_p13.jpg",
	"M_MS5_p14": "M_MS5_p14.jpg",
	"M_MS5_p15": "M_MS5_p15.jpg",
	"M_MS5_p16": "M_MS5_p16.jpg",
	"M_MS5_p17": "M_MS5_p17.jpg",
	"M_MS5_p18": "M_MS5_p18.jpg",
	"M_MS5_p19": "M_MS5_p19.jpg",
	"M_MS5_p20": "M_MS5_p20.jpg",
	"M_MS5_p21": "M_MS5_p21.jpg",
	"M_MS5_p22": "M_MS5_p22.jpg",
	"M_MS5_p23": "M_MS5_p23.jpg",
	"M_MS5_p24": "M_MS5_p24.jpg",
	"M_MS5_p25": "M_MS5_p25.jpg",
	"M_MS5_p26": "M_MS5_p26.jpg",
	"M_MS5_p27": "M_MS5_p27.jpg",

	"M_AS1_p1": "M_AS1_p1.jpg",
	"M_AS1_p2": "M_AS1_p2.jpg",
	"M_AS1_p3": "M_AS1_p3.jpg",
	"M_AS1_p4": "M_AS1_p4.jpg",
	"M_AS1_p5": "M_AS1_p5.jpg",
	"M_AS1_p6": "M_AS1_p6.jpg",
	"M_AS1_p7": "M_AS1_p7.jpg",
	"M_AS1_p8": "M_AS1_p8.jpg",
	"M_AS1_p9": "M_AS1_p9.jpg",
	"M_AS1_p10": "M_AS1_p10.jpg",
	"M_AS1_p11": "M_AS1_p11.jpg",
	"M_AS1_p12": "M_AS1_p12.jpg",
	"M_AS1_p13": "M_AS1_p13.jpg",
	"M_AS1_p14": "M_AS1_p14.jpg",
	"M_AS1_p15": "M_AS1_p15.jpg",

	"M_MS6_p1": "M_MS6_p1.jpg",
	"M_MS6_p2": "M_MS6_p2.jpg",
	"M_MS6_p3": "M_MS6_p3.jpg",
	"M_MS6_p4": "M_MS6_p4.jpg",
	"M_MS6_p5": "M_MS6_p5.jpg",
	"M_MS6_p6": "M_MS6_p6.jpg",
	"M_MS6_p7": "M_MS6_p7.jpg",
	"M_MS6_p8": "M_MS6_p8.jpg",
	"M_MS6_p9": "M_MS6_p9.jpg",
	"M_MS6_p10": "M_MS6_p10.jpg",
	"M_MS6_p11": "M_MS6_p11.jpg",
	"M_MS6_p12": "M_MS6_p12.jpg",
	"M_MS6_p13": "M_MS6_p13.jpg",
	"M_MS6_p13a": "M_MS6_p13a.jpg",
	"M_MS6_p14": "M_MS6_p14.jpg",
	"M_MS6_p15": "M_MS6_p15.jpg",
	"M_MS6_p16": "M_MS6_p16.jpg",
	"M_MS6_p16a": "M_MS6_p16a.jpg",
	"M_MS6_p17": "M_MS6_p17.jpg",
	"M_MS6_p18": "M_MS6_p18.jpg",
	"M_MS6_p19a": "M_MS6_p19a.jpg",
	"M_MS6_p19b": "M_MS6_p19b.jpg",
	"M_MS6_p19c": "M_MS6_p19c.jpg",
	"M_MS6_p21": "M_MS6_p21.jpg",
	"M_MS6_p22": "M_MS6_p22.jpg",
	"M_MS6_p23": "M_MS6_p23.jpg",
	"M_MS6_p24": "M_MS6_p24.jpg",
	"M_MS6_p25": "M_MS6_p25.jpg",
	"M_MS6_p26": "M_MS6_p26.jpg",

	"M_AS2_p1": "M_AS2_p1.jpg",
	"M_AS2_p2": "M_AS2_p2.jpg",
	"M_AS2_p3": "M_AS2_p3.jpg",
	"M_AS2_p4": "M_AS2_p4.jpg",
	"M_AS2_p5": "M_AS2_p5.jpg",
	"M_AS2_p6": "M_AS2_p6.jpg",
	"M_AS2_p7": "M_AS2_p7.jpg",
	"M_AS2_p8": "M_AS2_p8.jpg",
	"M_AS2_p9": "M_AS2_p9.jpg",
	"M_AS2_p10": "M_AS2_p10.jpg",
	"M_AS2_p11": "M_AS2_p11.jpg",
	"M_AS2_p12": "M_AS2_p12.jpg",
	"M_AS2_p13": "M_AS2_p13.jpg",
	"M_AS2_p14": "M_AS2_p14.jpg",
	"M_AS2_p15": "M_AS2_p15.jpg",
	"M_AS2_p16": "M_AS2_p16.jpg",
	"M_AS2_p17": "M_AS2_p17.jpg",
	"M_AS2_p18": "M_AS2_p18.jpg",
	"M_AS2_p19": "M_AS2_p19.jpg",
	"M_AS2_p19a": "M_AS2_p19a.jpg",
	"M_AS2_p20": "M_AS2_p20.jpg",
	"M_AS2_p21": "M_AS2_p21.jpg",

	"M_NS3_p1": "M_NS3_p1.jpg",
	"M_NS3_p2": "M_NS3_p2.jpg",
	"M_NS3_p3": "M_NS3_p3.jpg",
	"M_NS3_p4": "M_NS3_p4.jpg",
	"M_NS3_p5": "M_NS3_p5.jpg",
	"M_NS3_p6": "M_NS3_p6.jpg",
	"M_NS3_p7": "M_NS3_p7.jpg",
	"M_NS3_p8": "M_NS3_p8.jpg",
	"M_NS3_p9": "M_NS3_p9.jpg",
	"M_NS3_p10": "M_NS3_p10.jpg",
	"M_NS3_p11": "M_NS3_p11.jpg",
	"M_NS3_p12": "M_NS3_p12.jpg",

	"M_NS3_Blow_p0": "M_NS3_Blow_p0.jpg",
	"M_NS3_Blow_p1": "M_NS3_Blow_p1.jpg",
	"M_NS3_Blow_p2": "M_NS3_Blow_p2.jpg",
	"M_NS3_Blow_p3": "M_NS3_Blow_p3.jpg",
	"M_NS3_Blow_p4": "M_NS3_Blow_p4.jpg",
	"M_NS3_Blow_p5": "M_NS3_Blow_p5.jpg",
	"M_NS3_Blow_p6": "M_NS3_Blow_p6.jpg",
	"M_NS3_Blow_p7": "M_NS3_Blow_p7.jpg",
	"M_NS3_Blow_p8": "M_NS3_Blow_p8.jpg",
	"M_NS3_Blow_p9": "M_NS3_Blow_p9.jpg",
	"M_NS3_Blow_p10": "M_NS3_Blow_p10.jpg",
	"M_NS3_Blow_p11": "M_NS3_Blow_p11.jpg",
	"M_NS3_Blow_p12": "M_NS3_Blow_p12.jpg",
	"M_NS3_Blow_p13a": "M_NS3_Blow_p13a.jpg",
	"M_NS3_Blow_p13b": "M_NS3_Blow_p13b.jpg",
	"M_NS3_Blow_p13c": "M_NS3_Blow_p13c.jpg",
	"M_NS3_Blow_p14a": "M_NS3_Blow_p14a.jpg",

	"M_NS3_Foot_p1": "M_NS3_Foot_p1.jpg",
	"M_NS3_Foot_p2": "M_NS3_Foot_p2.jpg",
	"M_NS3_Foot_p3": "M_NS3_Foot_p3.jpg",
	"M_NS3_Foot_p4": "M_NS3_Foot_p4.jpg",
	"M_NS3_Foot_p5": "M_NS3_Foot_p5.jpg",
	"M_NS3_Foot_p6": "M_NS3_Foot_p6.jpg",
	"M_NS3_Foot_p7": "M_NS3_Foot_p7.jpg",
	"M_NS3_Foot_p8": "M_NS3_Foot_p8.jpg",
	"M_NS3_Foot_p9": "M_NS3_Foot_p9.jpg",
	"M_NS3_Foot_p10": "M_NS3_Foot_p10.jpg",
	"M_NS3_Foot_p11": "M_NS3_Foot_p11.jpg",
	"M_NS3_Foot_p12": "M_NS3_Foot_p12.jpg",
	"M_NS3_Foot_p12a": "M_NS3_Foot_p12a.jpg",
	"M_NS3_Foot_p13": "M_NS3_Foot_p13.jpg",

	"C_MS1_p1": "C_MS1_p1.jpg",
	"C_MS1_p2": "C_MS1_p2.jpg",
	"C_MS1_p2a": "C_MS1_p2a.jpg",
	"C_MS1_p3": "C_MS1_p3.jpg",
	"C_MS1_p4": "C_MS1_p4.jpg",
	"C_MS1_p5": "C_MS1_p5.jpg",
	"C_MS1_p6": "C_MS1_p6.jpg",

	"C_ES1_p1": "C_ES1_p1.jpg",
	"C_ES1_p2": "C_ES1_p2.jpg",
	"C_ES1_p3": "C_ES1_p3.jpg",
	"C_ES1_p4": "C_ES1_p4.jpg",

	"C_MS2_p1": "C_MS2_p1.jpg",
	"C_MS2_p2": "C_MS2_p2.jpg",
	"C_MS2_p3": "C_MS2_p3.jpg",
	"C_MS2_p4": "C_MS2_p4.jpg",

	"C_MS3_p1": "C_MS3_p1.jpg",
	"C_MS3_p2": "C_MS3_p2.jpg",
	"C_MS3_p3": "C_MS3_p3.jpg",
	"C_MS3_p4": "C_MS3_p4.jpg",

	"C_AS1_p1": "C_AS1_p1.jpg",
	"C_AS1_p2": "C_AS1_p2.jpg",
	"C_AS1_p3": "C_AS1_p3.jpg",
	"C_AS1_p4a": "C_AS1_p4a.jpg",
	"C_AS1a_p1": "C_AS1a_p1.jpg",
	"C_AS1a_p2": "C_AS1a_p2.jpg",

	"C_AS2_p1": "C_AS2_p1.jpg",
	"C_AS2_p2": "C_AS2_p2.jpg",
	"C_AS2_p3": "C_AS2_p3.jpg",
	"C_AS2_p4": "C_AS2_p4.jpg",
	"C_AS2_p5": "C_AS2_p5.jpg",
	"C_AS2_p6": "C_AS2_p6.jpg",
	"C_AS2_p7": "C_AS2_p7.jpg",
	"C_AS2_p8": "C_AS2_p8.jpg",
	"C_AS2_p9": "C_AS2_p9.jpg",
	"C_AS2_p10": "C_AS2_p10.jpg",
	"C_AS2_p11": "C_AS2_p11.jpg",
	"C_AS2_p12": "C_AS2_p12.jpg",
	"C_AS2_p13": "C_AS2_p13.jpg",
	"C_AS2_p14": "C_AS2_p14.jpg",

	"C_ES2_p1": "C_ES2_p1.jpg",
	"C_ES2_p2": "C_ES2_p2.jpg",
	"C_ES2_p3": "C_ES2_p3.jpg",

	"C_NS1_p1": "C_NS1_p1.jpg",
	"C_NS1_p2": "C_NS1_p2.jpg",

	"C_NS1_Mouth_p1": "C_NS1_Mouth_p1.jpg",
	"C_NS1_Mouth_p2": "C_NS1_Mouth_p2.jpg",
	"C_NS1_Mouth_p3": "C_NS1_Mouth_p3.jpg",
	"C_NS1_Mouth_p4": "C_NS1_Mouth_p4.jpg",
	"C_NS1_Mouth_p5": "C_NS1_Mouth_p5.jpg",
	"C_NS1_Mouth_p6": "C_NS1_Mouth_p6.jpg",
	"C_NS1_Mouth_p7": "C_NS1_Mouth_p7.jpg",
	"C_NS1_Mouth_p8": "C_NS1_Mouth_p8.jpg",

	"C_NS1_Feet_p1": "C_NS1_Feet_p1.jpg",
	"C_NS1_Feet_p2": "C_NS1_Feet_p2.jpg",
	"C_NS1_Feet_p3": "C_NS1_Feet_p3.jpg",
	"C_NS1_Feet_p4": "C_NS1_Feet_p4.jpg",
	"C_NS1_Feet_p5": "C_NS1_Feet_p5.jpg",

	"C_NS1_Tits_p1": "C_NS1_Tits_p1.jpg",
	"C_NS1_Tits_p2": "C_NS1_Tits_p2.jpg",
	"C_NS1_Tits_p3": "C_NS1_Tits_p3.jpg",
	"C_NS1_Tits_p4": "C_NS1_Tits_p4.jpg",
	"C_NS1_Tits_p5": "C_NS1_Tits_p5.jpg",
	"C_NS1_Tits_p6": "C_NS1_Tits_p6.jpg",
	"C_NS1_Tits_p7": "C_NS1_Tits_p7.jpg",

	"C_NS1_Ass_p1": "C_NS1_Ass_p1.jpg",
	"C_NS1_Ass_p2": "C_NS1_Ass_p2.jpg",
	"C_NS1_Ass_p3": "C_NS1_Ass_p3.jpg",
	"C_NS1_Ass_p4": "C_NS1_Ass_p4.jpg",
	"C_NS1_Ass_p5": "C_NS1_Ass_p5.jpg",
	"C_NS1_Ass_p6": "C_NS1_Ass_p6.jpg",
	"C_NS1_Ass_p7": "C_NS1_Ass_p7.jpg",
	"C_NS1_Ass_p8": "C_NS1_Ass_p8.jpg",

	"C_MS4_p1": "C_MS4_p1.jpg",
	"C_MS4_p2": "C_MS4_p2.jpg",
	"C_MS4_p3": "C_MS4_p3.jpg",

	"C_ES3_p1": "C_ES3_p1.jpg",
	"C_ES3_p2": "C_ES3_p2.jpg",
	"C_ES3_p3": "C_ES3_p3.jpg",
	"C_ES3_p4": "C_ES3_p4.jpg",
	"C_ES3_p5": "C_ES3_p5.jpg",
	"C_ES3_p6": "C_ES3_p6.jpg",
	"C_ES3_p7": "C_ES3_p7.jpg",
	"C_ES3_p8": "C_ES3_p8.jpg",
	"C_ES3_p9": "C_ES3_p9.jpg",
	"C_ES3_p10": "C_ES3_p10.jpg",
	"C_ES3_p11": "C_ES3_p11.jpg",
	"C_ES3_p12": "C_ES3_p12.jpg",
	"C_ES3_p13": "C_ES3_p13.jpg",
	"C_ES3_p14": "C_ES3_p14.jpg",
	"C_ES3_p15": "C_ES3_p15.jpg",
	"C_ES3_p16": "C_ES3_p16.jpg",
	"C_ES3_p17": "C_ES3_p17.jpg",
	"C_ES3_p18": "C_ES3_p18.jpg",
	"C_ES3_p19": "C_ES3_p19.jpg",
	"C_ES3_p20": "C_ES3_p20.jpg",
	"C_ES3_p21": "C_ES3_p21.jpg",
	"C_ES3_p22": "C_ES3_p22.jpg",
	"C_ES3_p23": "C_ES3_p23.jpg",
	"C_ES3_p24": "C_ES3_p24.jpg",
	"C_ES3_p25": "C_ES3_p25.jpg",
	"C_ES3_p25a": "C_ES3_p25a.jpg",
	"C_ES3_p26": "C_ES3_p26.jpg",
	"C_ES3_p27": "C_ES3_p27.jpg",
	"C_ES3_p28": "C_ES3_p28.jpg",

	"C_AS3_p1": "C_AS3_p1.jpg",
	"C_AS3_p2": "C_AS3_p2.jpg",
	"C_AS3_p3": "C_AS3_p3.jpg",
	"C_AS3_p4": "C_AS3_p4.jpg",
	"C_AS3_p5": "C_AS3_p5.jpg",
	"C_AS3_p6": "C_AS3_p6.jpg",
	"C_AS3_p7": "C_AS3_p7.jpg",
	"C_AS3_p8": "C_AS3_p8.jpg",
	"C_AS3_p9": "C_AS3_p9.jpg",
	"C_AS3_p10": "C_AS3_p10.jpg",
	"C_AS3_p11": "C_AS3_p11.jpg",
	"C_AS3_p12": "C_AS3_p12.jpg",
	"C_AS3_p13": "C_AS3_p13.jpg",
	"C_AS3_p14": "C_AS3_p14.jpg",
	"C_AS3_p15": "C_AS3_p15.jpg",
	"C_AS3_p16": "C_AS3_p16.jpg",
	"C_AS3_p17": "C_AS3_p17.jpg",
	"C_AS3_p18": "C_AS3_p18.jpg",
	"C_AS3_p19": "C_AS3_p19.jpg",
	"C_AS3_p20": "C_AS3_p20.jpg",
	"C_AS3_p21": "C_AS3_p21.jpg",
	"C_AS3_p22": "C_AS3_p22.jpg",

	"C_ES4_p1": "C_ES4_p1.jpg",
	"C_ES4_p2": "C_ES4_p2.jpg",
	"C_ES4_p3": "C_ES4_p3.jpg",
	"C_ES4_p4": "C_ES4_p4.jpg",
	"C_ES4_p5": "C_ES4_p5.jpg",
	"C_ES4_p6": "C_ES4_p6.jpg",
	"C_ES4_p7": "C_ES4_p7.jpg",
	"C_ES4_p8": "C_ES4_p8.jpg",

	"C_MS5_p1": "C_MS5_p1.jpg",
	"C_MS5_p2": "C_MS5_p2.jpg",
	"C_MS5_p3": "C_MS5_p3.jpg",
	"C_MS5_p4": "C_MS5_p4.jpg",
	"C_MS5_p5": "C_MS5_p5.jpg",
	"C_MS5_p6": "C_MS5_p6.jpg",
	"C_MS5_p7": "C_MS5_p7.jpg",
	"C_MS5_p8": "C_MS5_p8.jpg",
	"C_MS5_p9": "C_MS5_p9.jpg",

	"C_MS5_Foot_p1": "C_MS5_Foot_p1.jpg",
	"C_MS5_Foot_p2": "C_MS5_Foot_p2.jpg",
	"C_MS5_Foot_p3": "C_MS5_Foot_p3.jpg",
	"C_MS5_Foot_p4": "C_MS5_Foot_p4.jpg",
	"C_MS5_Foot_p5": "C_MS5_Foot_p5.jpg",
	"C_MS5_Foot_p6": "C_MS5_Foot_p6.jpg",
	"C_MS5_Foot_p7": "C_MS5_Foot_p7.jpg",
	"C_MS5_Foot_p8": "C_MS5_Foot_p8.jpg",
	"C_MS5_Foot_p9": "C_MS5_Foot_p9.jpg",
	"C_MS5_Foot_p9a": "C_MS5_Foot_p9a.jpg",
	"C_MS5_Foot_p11": "C_MS5_Foot_p11.jpg",
	"C_MS5_Foot_p12": "C_MS5_Foot_p12.jpg",
	"C_MS5_Foot_p13": "C_MS5_Foot_p13.jpg",
	"C_MS5_Foot_p14": "C_MS5_Foot_p14.jpg",
	"C_MS5_Foot_p15": "C_MS5_Foot_p15.jpg",
	"C_MS5_Foot_p16": "C_MS5_Foot_p16.jpg",
	"C_MS5_Foot_p16a": "C_MS5_Foot_p16a.jpg",
	"C_MS5_Foot_p17": "C_MS5_Foot_p17.jpg",

	"S_MS1_p1": "S_MS1_p1.jpg",
	"S_MS1_p2": "S_MS1_p2.jpg",
	"S_MS1_p3": "S_MS1_p3.jpg",
	"S_MS1_p4": "S_MS1_p4.jpg",

	"S_AS1_p1": "S_AS1_p1.jpg",
	"S_AS1_p2": "S_AS1_p2.jpg",

	"S_NSS_p1": "S_NSS_p1.jpg",
	"S_NSS_p2": "S_NSS_p2.jpg",

	"S_NSS_hand_p1": "S_NSS_hand_p1.jpg",
	"S_NSS_hand_p2": "S_NSS_hand_p2.jpg",
	"S_NSS_hand_p3": "S_NSS_hand_p3.jpg",
	"S_NSS_hand_p4": "S_NSS_hand_p4.jpg",
	"S_NSS_hand_p5": "S_NSS_hand_p5.jpg",

	"S_NSS_mouth_p1": "S_NSS_mouth_p1.jpg",
	"S_NSS_mouth_p2": "S_NSS_mouth_p2.jpg",
	"S_NSS_mouth_p3": "S_NSS_mouth_p3.jpg",
	"S_NSS_mouth_p4": "S_NSS_mouth_p4.jpg",
	"S_NSS_mouth_p5": "S_NSS_mouth_p5.jpg",
	"S_NSS_mouth_p6": "S_NSS_mouth_p6.jpg",
	"S_NSS_mouth_p7": "S_NSS_mouth_p7.jpg",

	"S_NSS_pussy_p1": "S_NSS_pussy_p1.jpg",
	"S_NSS_pussy_p2": "S_NSS_pussy_p2.jpg",
	"S_NSS_pussy_p3": "S_NSS_pussy_p3.jpg",
	"S_NSS_pussy_p4": "S_NSS_pussy_p4.jpg",
	"S_NSS_pussy_p5": "S_NSS_pussy_p5.jpg",
	"S_NSS_pussy_p6": "S_NSS_pussy_p6.jpg",
	"S_NSS_pussy_p7": "S_NSS_pussy_p7.jpg",

	"S_NSS_thigh_p1": "S_NSS_thigh_p1.jpg",
	"S_NSS_thigh_p2": "S_NSS_thigh_p2.jpg",
	"S_NSS_thigh_p3": "S_NSS_thigh_p3.jpg",
	"S_NSS_thigh_p4": "S_NSS_thigh_p4.jpg",
	"S_NSS_thigh_p5": "S_NSS_thigh_p5.jpg",
	"S_NSS_thigh_p6": "S_NSS_thigh_p6.jpg",
	"S_NSS_thigh_p6a": "S_NSS_thigh_p6a.jpg",

	"S_MS3_p1": "S_MS3_p1.jpg",
	"S_MS3_p2": "S_MS3_p2.jpg",
	"S_MS3_p3": "S_MS3_p3.jpg",
	"S_MS3_p4": "S_MS3_p4.jpg",
	"S_MS3_p5": "S_MS3_p5.jpg",
	"S_MS3_p6": "S_MS3_p6.jpg",
	"S_MS3_p7": "S_MS3_p7.jpg",

	"S_AS2_p1": "S_AS2_p1.jpg",
	"S_AS2_p2": "S_AS2_p2.jpg",
	"S_AS2_p3": "S_AS2_p3.jpg",
	"S_AS2_p4": "S_AS2_p4.jpg",

	"S_NS1_p1": "S_NS1_p1.jpg",
	"S_NS1_p2": "S_NS1_p2.jpg",
	"S_NS1_p3": "S_NS1_p3.jpg",
	"S_NS1_p4": "S_NS1_p4.jpg",
	"S_NS1_p5": "S_NS1_p5.jpg",
	"S_NS1_p6": "S_NS1_p6.jpg",
	"S_NS1_p7": "S_NS1_p7.jpg",
	"S_NS1_p8": "S_NS1_p8.jpg",
	"S_NS1_p9": "S_NS1_p9.jpg",
	"S_NS1_p10": "S_NS1_p10.jpg",
	"S_NS1_p11": "S_NS1_p11.jpg",
	"S_NS1_p12": "S_NS1_p12.jpg",
	"S_NS1_p13": "S_NS1_p13.jpg",
	"S_NS1_p14": "S_NS1_p14.jpg",
	"S_NS1_p15": "S_NS1_p15.jpg",
	"S_NS1_p16a": "S_NS1_p16a.jpg",
	"S_NS1_p17": "S_NS1_p17.jpg",
	"S_NS1_p18": "S_NS1_p18.jpg",
	"S_NS1_p19": "S_NS1_p19.jpg",

	"S_AS3_p1": "S_AS3_p1.jpg",
	"S_AS3_p2": "S_AS3_p2.jpg",
	"S_AS3_p3": "S_AS3_p3.jpg",
	"S_AS3_p4": "S_AS3_p4.jpg",
	"S_AS3_p5": "S_AS3_p5.jpg",
	"S_AS3_p6": "S_AS3_p6.jpg",
	"S_AS3_p7": "S_AS3_p7.jpg",
	"S_AS3_p8": "S_AS3_p8.jpg",
	"S_AS3_p9": "S_AS3_p9.jpg",
	"S_AS3_p10": "S_AS3_p10.jpg",
	"S_AS3_p11": "S_AS3_p11.jpg",
	"S_AS3_p12": "S_AS3_p12.jpg",
	"S_AS3_p13": "S_AS3_p13.jpg",
	"13a": "S_AS3_p13a.jpg",
	"13b": "S_AS3_p13b.jpg",
	"13c": "S_AS3_p13c.jpg",
	"13d": "S_AS3_p13d.jpg",
	"13e": "S_AS3_p13e.jpg",
	"S_AS3_p14": "S_AS3_p14.jpg",
	"S_AS3_p15": "S_AS3_p15.jpg",
	"S_AS3_p16": "S_AS3_p16.jpg",
	"S_AS3_p17": "S_AS3_p17.jpg",
	"S_AS3_p18": "S_AS3_p18.jpg",
	"S_AS3_p19": "S_AS3_p19.jpg",
	"S_AS3_p20": "S_AS3_p20.jpg",
	"S_AS3_p21": "S_AS3_p21.jpg",
	"S_AS3_p22": "S_AS3_p22.jpg",
	"S_AS3_p23": "S_AS3_p23.jpg",
	"S_AS3_p24": "S_AS3_p24.jpg",
	"S_AS3_p25": "S_AS3_p25.jpg",
	"S_AS3_p26": "S_AS3_p26.jpg",
	"S_AS3_p27": "S_AS3_p27.jpg",
	"S_AS3_p28": "S_AS3_p28.jpg",
	"S_AS3_p29": "S_AS3_p29.jpg",
	"S_AS3_p30": "S_AS3_p30.jpg",
	"S_AS3_p31a": "S_AS3_p31a.jpg",
	"S_AS3_p31b": "S_AS3_p31b.jpg",
	"S_AS3_p32": "S_AS3_p32.jpg",
	"S_AS3_p33r": "S_AS3_p33r.jpg",
	"S_AS3_p34": "S_AS3_p34.jpg",
	"S_AS3_p35": "S_AS3_p35.jpg",
	"S_AS3_p36": "S_AS3_p36.jpg",
	"S_AS3_p37": "S_AS3_p37.jpg",
	"S_AS3_p37a": "S_AS3_p37a.jpg",
	"S_AS3_p38": "S_AS3_p38.jpg",
	"S_AS3_p43": "S_AS3_p43.jpg",
	"S_AS3_p44": "S_AS3_p44.jpg",
	"S_AS3_p45": "S_AS3_p45.jpg",
	"S_AS3_p47": "S_AS3_p47.jpg",
	"S_AS3_p48": "S_AS3_p48.jpg",
	"S_AS3_p50": "S_AS3_p50.jpg",
	"S_AS3_p51": "S_AS3_p51.jpg",
	"S_AS3_p52": "S_AS3_p52.jpg",
	"S_AS3_p53": "S_AS3_p53.jpg",
	"S_AS3_p54": "S_AS3_p54.jpg",
	"S_AS3_p55": "S_AS3_p55.jpg",
	"S_AS3_p56": "S_AS3_p56.jpg",
	"S_AS3_p57": "S_AS3_p57.jpg",

	"S_AS3_p40r": "S_AS3_p40r.jpg",
	"S_AS3_p41r": "S_AS3_p41r.jpg",
	"S_AS3_p41rr": "S_AS3_p41rr.jpg",
	"S_AS3_p42r": "S_AS3_p42r.jpg",





};

// Define the Characters
const characters = {
	"MC": {
		"Name": "{{player.Name}}",
		"Color": "#3366FF"
	},
	"MC???": {
		"Name": "???",
		"Color": "#3366FF"
	},
	"Judy???": {
		"Name": "???",
		"Color": "#993333"
	},
	"Judy": {
		"Name": "Judy",
		"Color": "#993333"
	},
	"Sara": {
		"Name": "Sara",
		"Color": "#00FFCC"
	},
	"Sara???": {
		"Name": "???",
		"Color": "#00FFCC"
	},
	"Linda": {
		"Name": "Linda",
		"Color": "#CC00CC"
	},
	"Celia": {
		"Name": "Celia",
		"Color": "#FF6EC7"
	},
	"Students": {
		"Name": "Students",
		"Color": "#fff"
	},
	"Caroline": {
		"Name": "Caroline",
		"Color": "#66CC33"
	},
	"Television": {
		"Name": "Television",
		"Color": "#fff"
	},
	"Bob???": {
		"Name": "???",
		"Color": "#fff"
	},
	"Bob": {
		"Name": "Bob",
		"Color": "#fff"
	},
	"Violet": {
		"Name": "Violet",
		"Color": "#66CC33"
	},
	"Lily": {
		"Name": "Lily",
		"Color": "#FF99CC"
	},



};

let script = {
	// The game starts here.
	"Start": [
		"scene bi1 with fadeIn",
		"Hey there! W-wait! Don’t skip ME!",
	  "Before we get to the prologue, give me a chance to quickly tell you a few things!",
		"scene bi4 with fadeIn",
	  "Firstly, and most importantly… this game is still in progress!",
	  "scene bi2 with fadeIn",
	  "Damn... Like almost every other game, right?",
	  "Fuck… That was a bad start.",
	  "scene bi4 with fadeIn",
    "But - don’t worry! There should be MORE than enough content already, to make you *ahem* have some fun!",
	  "scene bi3a with fadeIn",
	  "The second important piece of information is that this game is fully interactive! Maps, Inventory, Items, Minigames, loads of characters!",
	  "YOU decide what story you want to push forward! If you don’t like someone, you can even completely ignore her!",
	  "scene bi4 with fadeIn",
	  "The third and final piece of information is that the game has animated sex scenes!!",
	  "Yep! That’s it! A-N-I-M-A-T-E-D!! You heard me well!",
	  "scene bi3b with fadeIn",
	  "Just check out THIS shit!",
		"clear",
		"play video intro_movie loop",
		"scene bi1 with fadeIn",
	  "Okay, I think that’s enough! Have FUN!",
		"jump Intro"
	],
	"Intro": [
		"scene i21 with fadein",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene i28 with fadein",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene i46 with fadein",
		"wait 700",
		"scene #000",
		"Judy Are you alright?",
		"Judy Hey, you need to wake up.",
		"play music RetroFutureClean loop",
		"scene i1 with fadeIn",
		"MC??? Huh?! Where am I?!",
		"Judy??? It’s me, Judy - the school therapist.",
		"Judy I asked you to close your eyes and try to recall the events of yesterday, but you fell asleep.",
		"MC??? Oh, oh yeah. Sorry, I haven’t been sleeping well lately.",
		"Judy Hmm... try sitting back in your chair and relaxing. Make yourself comfortable.",
		"scene i2 with fadeIn",
		"MC??? Okay, no problem.",
	  "Judy Actually, before we begin, I need to check if I have your details correct.",
	  "Judy You’re in class 7C, is that right?",
	  "MC??? Yeah, 7C.",
	  "Judy Good, and is your name spelt correctly here?",
		"clear",
		"scene i2",
		{"Input": {
			"Text": "What is your name?",
			"Validation": function (input) {
				return input.trim().length > 0;
			},
			"Save": function (input) {
				Storage.set ("PlayerName", input);
				storage.player.Name = input;
				return true;
			},
			"Warning": "You must enter a name!"
		}},
		"Judy And the person living with, is… Linda?",
		"MC Yes, that’s her.",
		"scene i7",
		"Judy Okay, everything seems to be in order.",
	  "Judy I’m gonna take a couple of minutes to go over everything again.",
	  "Judy My name’s Judy Hannigan. I’m the school’s therapist.",
	  "Judy What happened yesterday was-",
		"scene i3",
    "MC Relax! Everything is fine! Really - I promise.",
	  "Judy {{player.Name}}, what happened was very serious. You can’t just-",
    "MC Everything’s cool - I can handle myself.",
    "Judy I’m not satisfied that everything is “fine”. This counselling service is for your own well-being.",
	  "MC I- I don’t want to think about yesterday ever again. I’m going to leave now and pretend like it never happened.",
	  "MC Haha! Honestly, it’s a joke that I’m even here at all. This has been blown WAY out of proportion.",
		"scene i4",
	  "Judy But it DID happen, {{player.Name}}. The fact that you simply choose not to address it, isn’t healthy.",
	  "Judy Avoidant behaviours are common in people recovering from trauma.",
	  "Judy Besides - if leave this room right now, I will have no choice but to sign this letter of expulsion.",
	  "scene i5",
	  "Judy I see you’ve stopped walking towards the door. Were you unaware that I report directly to the headmaster?",
	  "Judy He asked me to monitor your progress and behaviour, {{player.Name}}.",
	  "Judy I know you don’t feel like it right now - but I promise, this is for your own good.",
		"play music Deadly_Roulette loop",
		"scene i6",
	  "Judy What happened to you was embarrassing. Tremendously so. I can’t even begin to imagine how you must feel right now.",
	  "Judy But running away from this won’t fix anything. Please, help me to help you. Take a seat. Let’s talk things through.",
	  "Judy You can trust me.",
	  "MC (Sigh)",
		"MC Fine... Don’t send that letter to the headmaster though - Linda will kill me.",
		"Judy (I know she would. Linda would be raging if you will be kicked out of school.)",
	  "Judy I’m glad you changed your mind. Take a seat. Let’s start at the beginning.",
		"scene i7",
		"Judy Before we begin, is there anything you’d like to ask me?",
		"jump Introq1"
	],
	"Introq1": [
		"clear",
		{"Conditional": {
	    "Condition": function(){
	        return storage.Introq1a1 == false && storage.Introq1a2 == false;

		    },
		    "True": "jump afterIntroq1",
				"False" : {"Choice":{
			    "Introq1a1":{
			        "Text": "Could you tell me a little more about yourself?",
			        "Do": "jump Introq1a1",
							"Condition": function () {
			            return storage.Introq1a1 == true;
							}
			    },
			    "Introq1a2":{
			        "Text": "How long will this therapy take?",
			        "Do": "jump Introq1a2",
			        "Condition": function () {
			            return storage.Introq1a2 == true;
			        }
			    }
				}}

		}}


	],
	"Introq1a1": [
		"Judy Of course, {{player.Name}}. It’s best when patients feel comfortable with their therapist.",
	  "Judy My full name is Judy Hannigan. I’m a qualified therapist. I graduated from the University of Wisconsin four years ago. I’ve been working in this school ever since.",
		function () {
			storage.Introq1a1 = false;
			return true;
		},
		"jump Introq1"
	],
	"Introq1a2": [
		"Judy As long as is required. You can’t rush these things, {{player.Name}}.",
	  "Judy Some people can be out of therapy in three or four sessions. Other people take… much longer. What matters is that you are making progress. Don’t view your treatment as a race - think of it as a journey.",
	  "MC Huh… I guess so. I don’t like the idea of it going on for a long time though.",
	  "Judy We’ll cross that bridge when we come to it.",
		function () {
			storage.Introq1a2 = false;
			return true;
		},
		"jump Introq1"
	],
	"afterIntroq1": [
		"Judy Now tell me, {{player.Name}}, what happened yesterday?",
		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i8 with fadeIn",
		"play music Vivacity loop",
		"Sara??? Hey, {{player.Name}}! Wake up! You’re gonna be late for school!",
	  "MC (Yawn) Five more minutes, Sara…",
		"Sara You’re gonna be laaaate!",
		"scene i9",
		"MC (Sigh) Fine! I’m awake…",
		"Sara So, are you actually gonna do it?",
	  "MC Hmm?",
	  "Sara Are you really gonna ask Mrs. Celia out today?",
	  "MC Yeah, of course I am.",
		"scene i10",
		"Sara I don’t think it’s such a good idea, {{player.Name}}. She’s gonna reject you, for sure.",
	  "MC Just relax - everything will be fine, and I’ll finally get laid!",
	  "Sara Is getting laid the only thing you ever think about?!",
	  "Sara Besides, what makes you think she’s even interested in you!",

	  "scene i11",
	  "MC We’re on a first name basis. She let’s me call her Celia.",
	  "Sara So? I call some of my teachers by their first names.",
	  "MC It’s not just that! She’s ALWAYS looking at me and smiling.",
	  "Sara Maybe she’s just a happy person?",
	  "MC Plus, she touched my ass when I was walking in the corridor!",

	  "scene i12",
	  "Sara Are you sure her hand didn’t just slip?",
	  "MC What?! No, she definitely touched me, on purpose!",
	  "MC (At least… I think so…)",
	  "Sara Hey! What are you doing?! I’m still here!",

	  "scene i13",
	  "MC Huh?",
	  "Sara You’re getting changed! At least give me a warning, so I don’t have to see your icky ass!",
	  "MC Oh please - you’ve got one too. If it really bothers you then get out of my room!",
	  "Sara It’s just not-",

	  "scene i14",
	  "Sara Eeek! {{player.Name}}! Put some clothes on!",
	  "MC I DID tell you to get out of my room!",
	  "Sara Eww! Fine! But please listen to my advice - DON’T ask out Mrs. Celia! This will end badly.",
	  "MC Relax, Sara. What’s the worst that could happen?",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
	 	"scene i15",
		"play music Deadly_Roulette loop",
		"Judy Hmm… Interesting… Do you mind if I ask you a few questions about Sara?",
	  "MC I guess so.",
		"Judy What’s Sara like?",
		"jump Introq2"
	],
	"Introq2":[
		"clear",
		{"Conditional": {
	    "Condition": function(){
	        return storage.Introq2a2 == false && storage.Introq2a3 == false && storage.Introq2a1 == false;

		    },
		    "True": "jump afterIntroq2",
				"False" : {"Choice":{
			    "Introq2a1":{
			        "Text": "Tell her about Sara’s hobbies.",
			        "Do": "jump Introq2a1",
							"Condition": function () {
			            return storage.Introq2a1 == true;
							}
			    },
			    "Introq2a2":{
			        "Text": "Tell her about Sara’s school life.",
			        "Do": "jump Introq2a2",
			        "Condition": function () {
			            return storage.Introq2a2 == true; // The "Player" option will only be shown if this returns true.
			        }
					},
				  "Introq2a3":{
				      "Text": "Tell her about Sara’s social life.",
				      "Do": "jump Introq2a3",
				      "Condition": function () {
				          return storage.Introq2a3 == true; // The "Player" option will only be shown if this returns true.
				      }
				    }
				}}

		}}

	],
	"Introq2a1":[
		"MC Sara’s a huge nerd. She spends her free time playing videogames, going to comic-cons, and watching geeky British TV shows.",
		"Judy Do you enjoy these things yourself?",
		"MC I mean, videogames are fun - but I don’t really get the appeal of comic-cons or the shows she watches.",
		function () {
			storage.Introq2a1 = false;
			return true;
		},
		"jump Introq2"
	],
	"Introq2a2":[
		"MC She’s top of her class in Maths, Biology and Chemistry. I think she actually wants to become a Computer Scientist someday.",
		"Judy She sounds very intelligent. You must be very proud to have her.",
		"MC I guess so. I’ve never really thought about it.",
		function () {
			storage.Introq2a2 = false;
			return true;
		},
		"jump Introq2"
	],
	"Introq2a3":[
		"MC Sara keeps to herself, mostly. She’s got a couple of close friends, but I think she enjoys, hanging out with small groups of people, to large crowds.",
		"Judy Hmm... In my profession, we would call that ‘introverted’. Basically, she finds time in smaller groups more rewarding.",
		"Judy Consequently, large social situations can be particularly tiresome for introverts."	,
		function () {
			storage.Introq2a3 = false;
			return true;
		},
		"jump Introq2"
	],
	"afterIntroq2":[
		"scene i17",
		"Judy Thank you for answering my question. My next one might… be a little awkward, but we are going to have to delve into some Freudian psychoanalysis techniques.",
	  "MC Psycho-what?",
		"Judy Freudian Psychoanalysis. Tell me, {{player.Name}}, do you find Sara, sexually attractive?",

		"scene i16",
	  "MC Wh-What?!",
		"Judy Do you think Sara is sexy?",
		"MC I- How- This isn’t an appropriate question!",

		"scene i17",
	  "Judy I assure you, it absolutely is. Freudian Psychology delves into the nature of human sexuality. ",
	  "Judy Given the nature of this incident, which brought you to me, a sexualisised element of psychology is most definitely relevant.",
		"MC But… She’s my very close friend…",
		"Judy How often do you fantasise about having sex with Sara?",

		"scene i16",
	  "MC (Honestly? I’ve thought fucking her, more than once. I remember bumping into her as she got out of the shower, last year. Her towel fell off, and I saw her cute tits.)",
	  "MC (I must have wanked to that mental image for a solid week!)",
	  "MC These questions are really weird. I’m not… I’m not comfortable talking about these.",

	  "scene i18",
	  "Judy Understandable. You are still in the early stages of your treatment. It may take you some time to fully open up. ",
	  "Judy It is essential that you are honest with me, if you want to completely heal.",
		"MC (Sigh) Fine. I guess I’ve… maybe… fantasised about Sara, a couple of times",
		"Judy Interesting...",
	  "Judy We can return to this subject-matter another time. For now, please tell me what happened next, on the day of the incident.",
	  "MC Let me think… I was just about to leave for school.",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
	 	"scene i19 with fadeIn",
		"play music Why_Did_You_Do_It_-_Everet_Almond loop",

		"MC (Crap! Sara was right! I’m gonna be late if I don’t hurry!)",
	  "MC (I think she’s already started walking, ten minutes ago. I shouldn’t have spent so long in the shower!)",

	  "scene i20",
		"Linda Where are you rushing off to?",
	  "MC I’m gonna be late for school!",
	  "Linda Have you not forgotten to say good morning to someone?",
		"MC Morning, Linda! I’ll see you late-",

		"scene i21",
	  "Linda Oh, come on. You’ve got time to greet me properly.",
	  "Linda You’ll stress yourself out if you keep rushing around.",
	  "MC I really AM in a hurry.",
	  "Linda Why? Something special happening today?",
	  "MC Uhh… N-No!",

		"scene i22",
	  "Linda Then come over and give me a kiss, at the very least.",
	  "MC Fine, no problem.",
	  "Linda On the lips.",
		"MC Seriously, Linda NOBODY my age kisses a lot older woman on the lips! If anyone found out, they would laugh me out of the school!?",
		"Linda You’d better make sure nobody finds out, then.",
		"clear",
		{"Choice":{
			"Introq3a1":{
					"Text": "Kiss Linda on the cheek.",
					"Do": "jump Introq3a1",

			},
			"Introq3a2":{
					"Text": "Kiss Linda on the lips.",
					"Do": "jump Introq3a2",

			}
		}}

	],
	"Introq3a1": [
		"scene i23",
		"MC *Mwah*",
		"MC Sorry, Linda - I’m too old for that now. I’ll see you later, when I get home from school.",

		"scene i26b",
		"Linda Hmmpf!",
		"Linda (Why won’t he kiss me?! It’s not like any of his classmates are around to see him do it…)",
		function () {
			storage.IntroKiss = false;
			return true;
		},
		"jump afterIntroq3a1"

	],
	"Introq3a2": [
		"scene i24",
		"MC Haha! Okay, Linda. If it’ll make you happy.",
		"Linda It will....",

		"scene i25",
		"Linda (Whispered) It really will...",
		"MC (Huh? Linda’s acting a little strange today. I wonder if she’s feeling alright.)",

		"scene i26a",
		"MC (Mwah)",
		"Linda Mmm…",
		"Linda (God… I wish I could just pin him down to the bed and make out with him.)",
		function () {
			storage.IntroKiss = true;
			return true;
		},
		"jump afterIntroq3a1"

	],
	"afterIntroq3a1":[
		"scene i22",
		"MC I’ll see you later, Linda.",
		"Linda See you tonight, Sweetpea!",
	  "Linda (Ooh… I’m starting to get wet, just thinking about making out with him.)",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i27 with fadeIn",
		"play music Deadly_Roulette loop",
		"Judy Linda sounds like a very interesting person. She clearly cares about you, an awful lot.",
		"MC Yeah, I guess she does.",
	  "Judy We’ll come back to talk about HER later. For now though, please tell me about the incident.",
	  "MC (Gulp)",
	  "Judy I know this is difficult. Please take your time. If you need to take a break, just let me know.",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i28 with fadeIn",
		"play music Fork_and_Spoon loop",

		"MC Mrs. Celia?",
	  "Celia Please - I told you to call me Celia. How can I help you, {{player.Name}}?",
	  "MC Mrs. Celi- Celia, I was wondering if you would like to go… to Beniza’s Pizza with me, and… (gulp) c-catch a movie afterwards?",
	  "Celia Are you asking me out on a date, {{player.Name}}?",

	  "scene i29",
	  "MC Y-Yes.",
	  "Celia …",
	  "MC Well?",
	  "Celia …",
	  "Celia Hahahahaha! You are seriously asking out a teacher, on a date?!",
	  "MC I- Um- Ah…",

	  "scene i30",
	  "Celia Oh, my God! This is too funny!",
	  "MC I thought… Oh....",
	  "Celia Hehehehe!",

	  "scene i31 with shake",
	  "Students Did he just ask her out?!",
	  "Students Oh, my God! He did!",
	  "Students I’d be mortified if that happened to me!",
	  "Students Ahahaha!",
	  "Students What a LOSER! HAHAHA!",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i32 with fadeIn",
		"play music Secrets_of_the_Schoolyard loop",

		"MC I was SO... fucking angry.",
	  "Judy I can see that. You’re displaying extremely aggressive body language - Your clenched fists, your hunched posture.",
	  "Judy You still are angry, aren’t you?",
	  "MC Of course I fucking am! She embarrassed me, in-front of the whole school!",

	  "scene i33",
	  "Judy I think it’s a good thing that you came to therapy, as soon as you did. It means that you can really focus on healing.",
	  "Judy Tell me, {{player.Name}}, do you have strong feelings, to exact revenge upon Mrs. Celia?",

	  "scene i32",
	  "MC …",
	  "Judy You can tell me the truth. Please be honest.",
	  "MC Yeah… I hate her right now.",

	  "scene i33",
	  "Judy Thank you for being honest. Let’s talk more about Mrs. Celia later. For now, could you tell me what happened after?",
		"MC Let me think… I… I went and stole my friend’s whiskey from her room.",
		"Judy Sara has whiskey in her bedroom? (This sounds like something I should report to the headmaster.)",
		"MC No, this was my older friend, Caroline.",
		"Judy (Oh, thank God)",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i34 with fadeIn",
		"play music Deadly_Roulette loop",

		"Caroline Hmm? Oh hey, {{player.Name}}! Don’t you know it’s polite to knock first?",
	  "MC …",

	  "scene i35",
	  "Caroline Uh… is something wrong, {{player.Name}}?",
	  "MC ...",
	  "Caroline (What’s up with him? He’s not usually the quiet type.)",

	  "scene i36",
	  "Caroline If you’re looking for your phone charger, I already returned it. It’s beside your bed.",
	  "MC I… I need your whiskey.",
	  "Caroline Huh? Why?",
	  "MC I… I need a drink.",
	  "Caroline Is everything alright? Do you need some cash to buy your own?",
	  "MC I can’t be bothered leaving the house…",

	  "scene i37",
	  "Caroline I’m getting a little worried about you...",
	  "MC Yeah, whatever…",
	  "Caroline (What’s up with him? I’ve never seen him acting this weird before.)",
	  "Caroline (Could he be suffering from depression, or something?)",

	  "scene i38",
	  "Caroline Anyway, I’ve got to finish three more chapters of this book by tomorrow morning.",
	  "Caroline Go ahead and take the bottle - you owe me a favour for that though.",
	  "MC Sure…",
	  "Caroline (I wonder if something happened in school today. I should talk to Sara, when I get a chance.)",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i7 with fadeIn",
		"play music Deadly_Roulette loop",

		"Judy What happened after you took the whiskey, {{player.Name}}?",

	  "scene i27",
	  "MC I drank a lot of it… The next couple of hours were a bit of a blur. I remember lying on my bed, just wishing that… that…",
	  "Judy That the world would swallow you whole?",
	  "MC Yeah…",
	  "Judy A lot of patients have said similar things.",
	  "Judy Tell me - what happened to bring you out of this slump?",
		"MC Linda. She came into my room, that evening - I hadn’t shown up for dinner.",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i39 with fadeIn",
		"play music MarchoftheSpoons loop",

		"MC (Oh God… what have I done? I can’t ever show my face in school again.)",
	  "MC (Mrs. Celia thinks I’m a joke. My classmates think I’m a loser.)",
	  "MC (My life is ruined…)",

	  "scene i40",
	  "(Knock Knock)",
	  "Linda Hey there, Sweetpea. What’s wrong? You’re looking glum.",
		"MC It’s nothing, Linda. I’m fine.",
		"Linda You don’t look fine. And it stinks of alcohol in here. Have you been drinking?",
	  "MC Just a bit…",
	  "Linda (Sigh)",

		"scene i41",
	  "Linda Caroline told me, everything that happened in school today. She was worried about you and went to speak to Sara. ",
		"Linda It seems, everybody here knows what happened, before me. I was hoping you’d open-up to me.",
		"MC Linda?",
		"Linda Yes, Sweetpea?",
	  "MC Am… Am I ugly?",

	  "scene i42",
	  "Linda What?! Who told you that?",
	  "MC Nobody... But I feel like I am.",
	  "Linda You’re a very handsome young man.",
		"MC (Sigh) You have to say that.",
		"Linda Look at me, {{player.Name}}.",

		"scene i43",
		"Linda You’re not ugly. I think you are incredibly handsome.",
    "MC ...thanks, Linda. I still don’t believe it’s true though.",

		"scene i44",
	  "MC Mmpff!",
		"MC (What the heck, Linda?!)",

		"Linda Mmm!",

	  "scene i45",
	  "Linda (Holy shit! I can’t believe I just did that!)",
	  "Linda (I completely lost control, and let my lust take over!)",
		"MC (What’s Linda doing?!)",

		"scene i46",
	  "MC Wh-What was THAT for?!",
		"MC L-Linda! You just kissed me!?",

		{"Conditional": {
	    "Condition": function(){
	        return storage.IntroKiss == false ;

		    },
		    "True": "jump IntroKissFalse",
				"False" : "jump IntroKissTrue"
		}}

	],
	"IntroKissFalse":[
		"Linda Well, you owed me a proper kiss, since you only pecked me on the cheek this morning.",
    "MC ...",
    "Linda …",
		"jump afterIntroKissFalse "
	],
	"IntroKissTrue":[
		"Linda What? How’s it any different to, you kissing me, like you did this morning?",
    "MC ...",
    "Linda …",
		"jump afterIntroKissFalse "

	],
	"afterIntroKissFalse":[
		"scene i47",
	  "Linda I’m sorry. I got a little carried away, and couldn’t hold myself back this time.",
	  "MC Wh-",
	  "Linda I should go. Your dinner will be in the oven, to keep it warm.",

	  "scene i48",
	  "MC (What the heck did she mean by “hold myself back this time”?)",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i49 with fadeIn",
		"play music Deadly_Roulette loop",

		"MC So yeah, that was pretty much what happened.",
	  "Judy Hmm... When did the headmaster find out about the incident with Mrs. Celia?",
	  "MC About four hours ago - early this morning.",

	  "scene i50",
	  "Judy I really AM sorry to hear about what happened to you. It sounds terribly embarrassing. I can’t even begin to imagine, how it must feel to be in your position right now.",
	  "Judy Trust me though - with regular therapy sessions, we will get you through this.",
	  "Judy You are clearly - (ahem) - WERE clearly attracted to Mrs. Celia. I was wondering - does this attraction apply to other women, of a similar age?",
	  "MC Uhh… like who?",
		"Judy Oh, I don’t know... How about… Linda?",

		"scene i51",
		"MC What?! Are you asking me if I’m attracted to Linda?",
		"Judy You did just tell me you were, kissing her while lying down on your bed.",
	  "MC She was the one who kissed me!",
		"Judy Ahh, so you pushed her away when she tried to kiss you?",
		"MC N-Not exactly- but-",

		"scene i1",
		"Judy So, let me ask you the question again. Do you have sexual fantasies about Linda?",
		"MC No!",
		"Judy Why not? You stated you were attracted to Sara.",
		"MC It doesn’t matter - even if I did like her, I wouldn’t do anything! She’s my friend! It’s just… weird. Y’know?",

		"scene i15",
		"Judy You seem like a good-natured boy. Obviously, you want what’s best for your friends, right? You want them to be happy?",
		"MC Of course?",
		"Judy What if that meant, accepting Linda as a romantic partner? What if that is, what was required, to really make her happy?",
		"MC What kind of questions are these?!",
	  "Judy I already told you, it’s Freudian Psychology. Feel free to read about it in the school library, if you don’t believe me.",
		"Judy So, let me rephrase. If you had the opportunity to fuck Linda, would you take it? ",
		"Judy We’ve already established that you want to make Linda happy. And it’s pretty obvious, you want to get laid. Is this not a win-win situation?",

		"scene i16",
	  "MC I… No! I’ve never thought about her like that!",
		"MC She’s my friend! I’ve already said that I wouldn’t do anything with her!",
		"scene i52",
		"Judy Interesting... I think that will do for today’s session. I’m going to ask you to visit me again, if anything noteworthy happens between you and Linda. Or even, perhaps, your friends.",
		"MC Noteworthy? Like what?",
	  "Judy I’m sure you’ll recognise, something noteworthy, when it happens.",
	  "Judy Now, make sure you get some rest, {{player.Name}}. Relaxation is very important, in recovering from trauma.",

		"clear",
		"scene #000",
		"stop music",
		"wait 4000",
		"scene i53 with fadeIn",
		"play music Why_Did_You_Do_It_-_Everet_Almond loop",
		"MC (Yawn!)",
	  "MC (It’s the start of a brand new day. Let’s make the most of it!)",
	  "MC (I need to focus on getting my life back on track after that… mishap yesterday.)",

	  "scene i54",
	  "MC (Let’s get my confidence back, get a hot girl, and get laid!)",
	  "MC (Picking up chicks would be so much easier if I was in one of those sex games from Patreon.)",
	  "MC (I can’t give up though!)",
		"jump Character_Choice",

	],

	"Character_Choice":[
		"play music SockHop loop",
		"clear",
		"scene Character_Choice with fadeIn",
		{"Choice":{
			"Linda":{
					"Text": "Linda",
					"Do": "jump M_MS0",

			},
			"Caroline":{
					"Text": "Caroline",
					"Do": "jump C_MS1",

			},
			"Sara":{
					"Text": "Sara",
					"Do": "jump S_MS1",

			},
		}}
	],
	"M_MS0":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene Morning with fadeIn",
		"wait 3000",
		"scene M_S0_p1 with fadeIn",
		"play music MiamiViceroy loop",
		"MC (Huh, that’s unusual. That’s Linda’s office suit.)",
		"MC (She’s doesn’t normally dress and leave, for AT LEAST another hour.)",
		"scene M_S0_p2",
		"MC (Her legs DO look really good in it though…)",
	  "MC (Wait - what am I thinking?!)",
		"scene M_S0_p2a",
	  "MC (Ever since she kissed me on the mouth the other morning, these lewd thoughts about her have kept creeping into my mind.)",
	  "MC (Perhaps I should just address her about this, face-to-face?)",
		"play music Deadly_Roulette loop",
		"scene M_S0_p3",
	  "Linda Oh! You startled me there, {{player.Name}}!",
	  "Linda I was just about to head into work early, today.",
	  "Linda What’s up with you? Something on your mind?",
	  "MC Uhh… Y-Yeah actually - I wanted to talk to you about that… umm… kiss you gave me, the other day.",
	  "scene M_S0_p4",
	  "Linda Oh, that… Haha… That was… nothing.",
	  "MC It was… just... It was the first time I’ve ever kissed a girl.",
	  "Linda Aww, I’m sorry. C’mere.",
	  "scene M_S0_p5",
	  "Linda Sorry - you were just so sad there, back then. And I wanted to try and make my boy happy.",
	  "Linda I guess I got a little too emotional, and caught up in the moment.",
	  "Linda Can you forgive me?",
	  "MC Y-Yeah, Linda. It’s alright.",
		"jump M_MS1",
	],
	"M_MS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene M_S1_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"Television ...are in a high speed pursuit with three masked men.",
    "Television The vehicle was stolen from a local bank parking lot.",
		"MC (Looks like Linda’s watching the morning news.)",

		"scene M_S1_p2",
		"MC Morning, Linda!",
		"Linda Good morning, {{player.Name}}. Where are you off to?",
    "MC It’s a school day, remember?",
    "Linda Oh! Right.",
    "Linda You’ve still got some time. Come and sit beside me for a while.",
    "MC Uh, okay.",

    "scene M_S1_p3",
    "MC I’ve only got a few minutes - I can’t stay too long, or I’ll-",
    "Linda I know - you’ll be late for class.",
    "Linda I’m going to teach you a very important lesson right now. One that you should have learnt YEARS ago.",
		"Linda Never let your work get in the way of, quality friendships.",

		"scene M_S1_p4",
		"Linda Even if that means, just a few minutes in front of the TV with me, before you go to school.",
		"MC Uh… Okay. I’ll remember that.",
    "Linda Please do. Your own children will thank you for it someday.",

		"scene M_S1_p5",
		"MC (Holy shit! Linda’s not wearing a bra!)",
		"MC (Why isn’t she wearing one?!)",
    "MC (She’s leaning so close that I can almost feel her left nipple!)",
    "Linda ...and I’ll never make that mistake again.",

		"scene M_S1_p6",
    "Linda Are you listening, {{player.Name}}?",
    "MC Huh?! Oh! Y-Yeah!",
    "Linda Here, let me give you a kiss, before you rush off to class.",

    "scene M_S1_p7",
    "MC (Uh oh… Is she going to-)",
    "MC (Oh, it’s just on the cheek. My heart started racing there!)",
		"MC (Maybe I am over analyzing things? Perhaps that kiss before, was her being a loving friend?)",
		"MC (I’ve got to stop replaying it in my mind.)",

    "scene M_S1_p8",
    "MC (Huh?! She’s turning my head! This ISN’T a peck on the cheek!)",
    "MC (What should I do?!)",
		"MC (I can’t kiss her back like this - she’s my friend! It’s FAR too intimate!)",

		"scene M_S1_p9",
    "Linda Mmm…",
    "MC (She’s biting my lower lip!)",
    "MC (That’s it - any chances of this just being a regular kiss are out the window.)",

    "scene M_S1_p10",
    "Linda (Oh fuck! I almost did it again!)",
    "Linda I- um… I have to rush to work now. See you tonight!",
		"MC Uh… S-See you later, Linda…",
		"Linda (Maybe I got lucky, and I broke off the kiss off before he got suspicious?)",
		"jump M_MS2",


	],
	"M_MS2":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene M_S2_p1 with fadeIn",
		"play music MiamiViceroy loop",


    "Linda Morning, {{player.Name}}.",

    "MC Hey, Linda.",
    "Linda Are you about to leave for school?",
    "MC In a few minutes, yeah.",
    "Linda Do you have time to wash a few dishes before you go?",
    "MC Sure, no problem.",
    "Linda Thanks! You’re a sweetie.",

		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",

		"play music Deadly_Roulette loop",

		"scene M_S2_p2 with fadeIn",
	  "MC (There we go… That’s most of them.)",
	  "MC (They must have been left-over from last night’s dinner.)",

	 "scene M_S2_p2",

	  "MC (I wonder why Linda didn’t just stick them in the dishwasher.)",
	  "MC (Anyway, this is the last one.)",
	  "MC (It’s a good thing too - any more and I would have been late for school!)",

	  "scene M_S2_p4",
	  "Linda Thank you so much for doing those for me!",
	  "Linda You have no idea how much, you helping around the house, means to me.",


	  "MC Yeah, it’s no problem. Happy to help, Linda.",

	  "scene M_S2_p5",

	  "Linda Bob is terrible when it comes to chores.",
	  "Linda Never puts his clothes in the wash. Never scrapes his plate clean after meals.",
	  "Linda You’re a real man.",

	  "scene M_S2_p6",
	  "MC (A real man?!)",

	  "MC (Linda’s acting very… intimate again.)",
	  "MC (Maybe it’s got something to do with her hormones or something?)",
	  "MC (Girls are weird…)",

	  "scene M_S2_p7",
	  "Linda (Sniff…)",
	  "Linda (Mmm… God… he smells so good.)",
	  "Linda (I’d love to just, lie naked beside him and cuddle him all night-)",
	  "Linda (Shit! I’m getting far too involved in these fantasies again.)",


	  "scene #000",
	  "Linda You better go to school! Hurry up! Get a move on!",
	  "MC Yeah, I’ll just dry the plates-",
	  "Linda No time! Chop chop!",
	  "MC Okay, I’m going! (Geez, what got into her?)",
		"jump M_NS1"

	],
	"M_NS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Night with fadeIn",
		"wait 3000",
		"scene M_NS1_p1 with fadeIn",
		"play music SneakySnitch loop",



    "Bob??? (Ugh! Yeah!)",



    "MC (Huh… Sounds like Linda and Bob are having sex.)",
    "MC (Maybe I could take this chance to sneak a peek at Linda!)",
    "play sound door_squeak",

    "scene M_NS1_p2",
    "MC (Shit… I hope they didn’t hear the door opening!)",
    "Bob??? Oh! Ahhh!",
    "MC (Apparently not!)",
		"stop sound",


    "scene M_NS1_p3",
    "Bob Oh yeah, that’s it!",
    "Bob Aww, crap...",


    "MC (Huh, it’s only Bob moaning.)",
    "Bob Hang on, I’ll get my boner back. Just give me a minute and I’ll go in again!",
    "Linda Uh huh… No problem, Dear.",

    "scene M_NS1_p4",

    "MC (It looks like Linda’s… bored?)",
    "MC (No way! Why would she be bored having sex?!)",
    "MC (It doesn’t make sense…)",

    "scene M_NS1_p5",



    "MC (Looks like Linda is more interested in her book. I wonder what it is?)",
    "MC (Bob probably doesn’t even know or care right now.)",
    "scene M_NS1_p6",
    "Bob Ahhh! Oh yeah, that’s it! Ugh!",
    "Bob You feeling this, Honey?",
    "Linda Mmm hmm... ",
    "Linda (Yawn!)",

    "scene M_NS1_p7",
    "MC (That must be one, damn good book, if she’s managing to read it in the middle of sex!)",
    "MC (I should check out what it is, later on.)",
    "MC (Anyway, I better sneak away now, before I get caught!)",
		"jump M_MS3",

	],
	"M_MS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene M_MS3_p1 with fadeIn",
		"play music MiamiViceroy loop",


    "MC Morning, Linda! I’m heading to school now.",
    "Linda Wait - don’t go yet!",

    "scene M_MS3_p2",
    "Linda Sit with me awhile.",
    "MC I don’t want to be late.",
    "Linda You won’t be late - just a few minutes.",
    "MC Okay.",

    "scene M_MS3_p3",
    "Linda So, have you got your eye on any girls right now?",
		"clear",
		{"Choice":{
			"M_MS3_a1":{
					"Text": "I’ve seen a few cute ones around.",
					"Do": "jump M_MS3_a1",

			},
			"M_MS3_a2":{
					"Text": "Just one right now.",
					"Do": "jump M_MS3_a2",


			},
			"M_MS3_a3":{
					"Text": "No, I’d rather be single for a while.",
					"Do": "jump M_MS3_a3",
		}
		}}


	],
	"M_MS3_a1":[
		"scene M_MS3_p4",
		"MC I’ve seen a few cute girls about. You know how guys are.",
		"Linda Oooh, I hope you’re not going to turn into one of those playboys who chases all the girls!!",

		"MC Linda!",
		"Linda Hehe, I’m just teasing you.",
		"scene M_MS3_p5",

		"Linda You know that no matter what you do, I’ll always be proud of my little guy.",

		"MC Haha! You’re gonna make me blush, Linda.",
		"MC (She seems… different today. I wonder what’s gotten into her.)",

		"scene M_MS3_p6",

		"MC Umm… Linda?",
		"Television Up next - are lattes making you fat? Barry McSwindon investigates.",
		"Linda (Slowly does it… I’m going to move my hand, right up to his crotch and see how he reacts.)",

		"scene M_MS3_p7",
		"Television The truth is, Barry - drinking more than fifty lattes a day, greatly increases your risk of obesity.",
		"Television But, Sonja - who the hell drinks fifty cups of coffee a day?!",
		"Television That’s not the point I’m trying to make, Barry.",

		"MC (Linda looks engrossed in her show… I don’t think she’s paying attention to what she’s doing.)",
		"jump M_MS3_continue",

	],
	"M_MS3_a2":[
		"scene M_MS3_p4",
		"MC I’ve kinda got my eye on one right now.",
		"Linda Oh… You do?",
		"MC Yeah. Are you alright?",
		"Linda Oh yeah! I’m fine! I’m great.",
		"scene M_MS3_p5",

		"Linda You know that no matter what you do, I’ll always be proud of my little guy.",

		"MC Haha! You’re gonna make me blush, Linda.",
		"MC (She seems… different today. I wonder what’s gotten into her.)",

		"scene M_MS3_p6",

		"MC Umm… Linda?",
		"Television Up next - are lattes making you fat? Barry McSwindon investigates.",
		"Linda (Slowly does it… I’m going to move my hand, right up to his crotch and see how he reacts.)",

		"scene M_MS3_p7",
		"Television The truth is, Barry - drinking more than fifty lattes a day, greatly increases your risk of obesity.",
		"Television But, Sonja - who the hell drinks fifty cups of coffee a day?!",
		"Television That’s not the point I’m trying to make, Barry.",

		"MC (Linda looks engrossed in her show… I don’t think she’s paying attention to what she’s doing.)",
		"jump M_MS3_continue",
	],
	"M_MS3_a3":[
		"scene M_MS3_p4",
		"MC Nah, I’d rather be single for a while. Especially after that embarrassing situation with Mrs. Celia.",
		"Linda Good.",
		"MC Good?",
		"Linda Err… I mean, it’s good that you’re… taking things slow and recovering.",
		"MC Oh, right.",

		"scene M_MS3_p5",

		"Linda You know that no matter what you do, I’ll always be proud of my little guy.",

		"MC Haha! You’re gonna make me blush, Linda.",
		"MC (She seems… different today. I wonder what’s gotten into her.)",

		"scene M_MS3_p6",

		"MC Umm… Linda?",
		"Television Up next - are lattes making you fat? Barry McSwindon investigates.",
		"Linda (Slowly does it… I’m going to move my hand, right up to his crotch and see how he reacts.)",

		"scene M_MS3_p7",
		"Television The truth is, Barry - drinking more than fifty lattes a day, greatly increases your risk of obesity.",
		"Television But, Sonja - who the hell drinks fifty cups of coffee a day?!",
		"Television That’s not the point I’m trying to make, Barry.",

		"MC (Linda looks engrossed in her show… I don’t think she’s paying attention to what she’s doing.)",
		"jump M_MS3_continue",
	],
	"M_MS3_continue":[
		"scene M_MS3_p8",
		"MC (HUH?!)",
		"Television A typical latte from StarFucks has 190 calories. If you multiply that by fifty-",
		"Television Jesus Fucking Christ, Sonja! You’re missing the point!",

		"scene M_MS3_p9",

		"MC L-Linda! Your hand!",
		"Linda Huh? Oops! Sorry, I was trying to grab your arm. I thought you had it resting on your lap.",
		"Linda I should have looked.",

		"scene M_MS3_p10",
		"MC Why did you want to grab my arm?",
		"Linda Here, let me show you.",

		"scene M_MS3_p11",
		"MC What?!",
		"Linda Do you feel that?",
		"MC Y-Yeah - but I don’t think I should!",
		"Linda My heartbeat.",
		"MC Oh! R-Right.",

		"scene M_MS3_p12",
		"Linda Do you feel, how fast it beats around you?",
		"Linda It’s only around you. You’re special to me.",

		"MC L-Linda…",
		"scene M_MS3_p13",
		"Linda Always remember my heartbeat, and you’ll know how much you mean to me.",
		"Linda I really do love you, {{player.Name}}.",

		"MC I will, Linda.",
		"MC (What’s gotten into her today? I’ve never seen her act this emotionally before.)",

		"scene M_MS3_p14",
		"Linda Okay, you better get to school. I’m gonna make you late.",

		"MC It’s okay, Linda.",
		"Linda See you later on.",

		"scene M_MS3_p15",

		"MC Bye, Linda. See you later…",
		"MC (She’s acting really bizarre lately. I wonder if there’s something she’s not telling me.)",
		"jump M_Book ",
	],
	"M_Book":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene M_Book_p1 with fadeIn",
		"play music SneakySnitch loop",



	  "MC (Ahh, this looks like the book Linda was reading when she was fucking Bob the other night!)",
	  "MC (I wonder what could possibly be more interesting than having sex?)",
	  "MC (Let’s turn this over…)",



	  "MC Dating your… much younger friend?",
	  "MC How to tell if he… is SEXUALLY ATTRACTED to you?!",

	  "scene M_Book_p3",
	  "MC Holy moly!",
	  "MC (Is she just reading this for fun?)",
	  "MC (No… she must be serious.)",
	  "MC (The way she kissed me, so intensely that morning, and the weird way she’s been acting around me.)",

	  "MC (Is she thinking about fucking me when she’s with Bob?)",
	  "scene M_Book_p4",
	  "MC Fuck… It all makes sense now.",



	  "MC (Linda wants to fuck me!)",
	  "MC (How the heck am I even supposed to respond to this?!)",
	  "MC (God… I’ll never be able to look her straight, in the eyes again!)",
	  "MC (Linda’s lucky that Bob isn’t paying attention to the books she reads! If he caught her with this, he’d be furious!)",
		"jump M_MS5"
	],
	"M_MS5":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"play music SneakySnitch loop",
		"scene #000 with fadeIn",


	  "MC (I think Linda’s changing now. If I’m quick I might be able to sneak a peek!)",
	  "scene M_MS5_p1 with fadeIn",
	  "MC (Perfect timing!)",
	  "MC (Damn! She’s got an incredible ass. And she looks so sexy in those black high heels.)",

	  "scene M_MS5_p2",
	  "MC (No! She’s walking out of sight!)",
	  "MC (I’m gonna have to creep in further, or I’ll miss it!)",

	  "scene M_MS5_p3",
	  "MC (Aww - looks like she’s putting her panties back on.)",
	  "MC (I was hoping I’d catch a glimpse of her pussy.)",

	  "scene M_MS5_p4",
	  "MC (This isn’t bad though! I could fap to the mental image of her ass for a week!)",
	  "MC (I probably shouldn’t hang around much longer. She’s almost finished dressing.)",

	  "scene M_MS5_p5",
	  "MC (She’s so stunningly beautiful though.)",
	  "MC (Looks like she’s grabbing a dress from her closet.)",

	  "scene M_MS5_p6",
	  "MC (Okay, that’s her almost finished getting dressed - I better bolt before she notices I’ve been peeping at her.)",


	  "MC (Actually - instead of leaving, I could take this chance to talk with Linda about getting a job.)",
	  "MC Hey, Linda!",
	  "play music MiamiViceroy loop",

	  "scene M_MS5_p7",
	  "Linda Hi, Sweetie. I didn’t I didn’t see you there. What’s up?",

	  "MC I had been talking with Bob and he thought it would be a good idea for me to start earning money now.",
	  "MC He said you might have some work for me?",

	  "scene M_MS5_p8",
	  "Linda Hmm… I’m not sure. I can’t think of any work I need done right now.",
	  "MC How about in your office building?",
	  "Linda I’m not sure.",

	  "MC Please, Linda! I really need the money. I can’t just keep begging Bob for spare change!",

	  "scene M_MS5_p9",
	  "Linda Well… Maybe.",
	  "Linda There’s a small possibility that I could give you a job.",
	  "Linda It comes with a condition though.",

	  "scene M_MS5_p10",
	  "MC Awesome! What’s the condition?",
	  "Linda I’ll tell you later. In the meantime, just follow me.",
	  "MC Great!",
	  "scene #000",
		"clear",
	  "play sound car_start",
	  "wait 3000",

	  "scene M_MS5_p11",

		"stop sound",

	  "MC Where are we going, Linda?",
	  "Linda Just one more turn and then we’ll be there. ",
	  "Linda This is one of the car parks, near where I work.",
	  "MC Oh, right.",

	  "scene M_MS5_p12",
	  "MC It looks pretty desolate.",
	  "Linda Yeah - nobody ever comes into here apart from me.",
	  "Linda (And having no people around, is essential for what I’m about to try next.)",

	  "scene M_MS5_p13",
	  "MC So? What’s this condition?",
	  "Linda Just wait a minute. I need to plan it first.",
	  "Linda (Okay, you can do this. You’ve rehearsed it in your mind a hundred times!)",

	  "scene M_MS5_p14",

	  "MC Is everything okay, Linda? You’re looking a little nervous.",
	  "Linda I’m fine. Okay, here’s what’s going to happen.",

	  "scene M_MS5_p15",
	  "Linda The condition is, that you sit completely still for one full minute. Close your eyes and act like a doll.",
	  "MC Huh?",
	  "Linda You aren’t allowed to react. And you aren’t allowed to talk about it later on.",
		"jump M_MS5_q1",




	],
	"M_MS5_q1":[
		"clear",
		"scene M_MS5_p14",
		{"Conditional": {
	    "Condition": function(){
	        return storage.M_MS5_a1 == false && storage.M_MS5_a2 == false && storage.M_MS5_a3 == false;

		    },
		    "True": "jump M_MS5_continue",
				"False" : {"Choice":{
			    "M_MS5_a1":{
			        "Text": "Why? I don’t understand.",
			        "Do": "jump M_MS5_a1",
							"Condition": function () {
			            return storage.M_MS5_a1 == true;
							}
			    },
			    "M_MS5_a2":{
			        "Text": "What if I open my eyes or move?",
			        "Do": "jump M_MS5_a2",
			        "Condition": function () {
			            return storage.M_MS5_a2 == true;
			        }
					},
				  "M_MS5_a3":{
				      "Text": "What if I have questions after the minute is up?",
				      "Do": "jump M_MS5_a3",
				      "Condition": function () {
				          return storage.M_MS5_a3 == true;
				      }
				    }
				}}

		}}

	],
	"M_MS5_a1":[
		"scene M_MS5_p14",
		"MC Why? I don’t understand why I’d have to do this to get a job.",
		"Linda I’m not asking you to understand - it’s simply the condition I’ve laid out.",
		function () {
			storage.M_MS5_a1 = false;
			return true;
		},
		"jump M_MS5_q1",
	],
	"M_MS5_a2":[
		"scene M_MS5_p14",
		"MC What happens if I open my eyes or move?",
		"scene M_MS5_p15",
		"Linda Then the condition is forfeit, and you won’t get the job.",
		"MC Alright…",
		function () {
			storage.M_MS5_a2 = false;
			return true;
		},
		"jump M_MS5_q1",
	],
	"M_MS5_a3":[
		"scene M_MS5_p14",
		"MC What if I have questions after the minute is up?",
		"scene M_MS5_p15",
		"Linda You’ll just have to contain your curiosity - because if you ask me ANY questions about what happens, you won’t be getting that job.",

		"MC (Gee… Linda’s pretty serious about this.)",
		function () {
			storage.M_MS5_a3 = false;
			return true;
		},
		"jump M_MS5_q1",

	],
	"M_MS5_continue":[
		"scene M_MS5_p16",
		"play music OctoBlues loop",


		"MC Okay - that’s me ready.",
		"Linda The minute starts now. Remember, no talking, moving, or asking questions after.",

		"scene M_MS5_p17",
		"MC (One… Two… Three…)",
		"MC (She’s just put her hand on my shoulder. Nothing too strange yet…)",
		"MC (Seven… Eight… Nine…)",

		"scene M_MS5_p18",
		"Linda (God… He’s so handsome.)",
		"Linda (I have to kiss him. This could be my only chance.)",

		"Linda (I hope he doesn’t say anything to Bob about this.)",

		"scene M_MS5_p19",
		"Linda (Here we go… Now or never!)",
		"MC (Thirteen… Fourteen… Fifteen…)",
		"MC (What’s she doing?)",

		"scene M_MS5_p20",
		"MC (OH MY GOD!)",


		"MC (Linda’s full-on making out with me!)",
		"MC (I can feel her tongue in my mouth, and everything!)",

		"scene M_MS5_p21",
		"MC (I… I’ve lost count. Was I on twenty or thirty?)",

		"Linda (Why did I only say a minute? I could have said two or three…)",
		"Linda (I wish this moment would last forever. It’s like a  dream come true, right now.)",

		"scene M_MS5_p22",

		"Linda (If I think about this when Bob fucks me tonight, I might even climax, for a change.)",
		"Linda (I have to contain myself… but right now, I could just rip {{player.Name}}’s clothes off and ride him in the car seat.)",

		"scene M_MS5_p23",
		"Linda (I have to know if he’s hard. I have to know if he’s enjoying this as much as I am…)",
		"Linda (I’ll just move my hand down quickly, then take it away.)",

		"scene M_MS5_p24",
		"Linda (He’s hard! There’s no question about it.)",
		"Linda (It also feels like he’s got a pretty sizeable member.)",
		"Linda (If only I could feel it, hard and throbbing, deep inside my pussy!)",
		"MC (Holy shit! Did she just grope my crotch?! She HAS to have done that on purpose, right?) ",
		"play music MiamiViceroy loop",

		"scene M_MS5_p25",
		"Linda O-Okay, that’s a minute up now.",
		"Linda (Wow… That was… something else.)",
		"MC C-Can I talk now?",
		"Linda Yes, but you can’t speak about what happened.",

		"scene M_MS5_p26",
		"MC Oh… O-Okay…",

		"MC (Why would she do that? I don’t understand it…)",
		"MC (I mean, unless she has a crush on me, or something? But that doesn't make sense.)",

		"MC (If Mrs. Celia didn’t want to date me, how could she be interested?)",

		"scene M_MS5_p27",
		"Linda Ahem... I work in the building, just round the front of this carpark.",
		"Linda If you drop by tomorrow afternoon, I’ll set you up with a job.",

		"MC Th-Thanks, Linda.",
		function () {
			storage.M_MS5_a1 = true;
			storage.M_MS5_a2 = true;
			storage.M_MS5_a3 = true;
			return true;
		},
		"jump M_AS1"

	],
	"M_AS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene M_AS1_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC Hey, Linda! I’m free to do some work for you now.",
		"Linda Good afternoon, Sweetie. Great! Let me see what I need done.",
		"Linda Hmm…",

		"scene M_AS1_p2",
		"Linda We’re on top of paperwork and databasing right now.",
		"Linda However, we lost our cleaner last week. She badly twisted her ankle, and will be off work for a couple of months.",
		"Linda I’ll tell you what - if you can clean the offices for me, I’ll give you $25.",
		"MC What do I need to do?",
		"Linda Take out the trash, pick up any rubbish, tidy up loose papers.",
		"Linda Just make sure you don’t throw away anything important!",

		"MC Okay, Linda. I’ll be careful!",
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene OH_later with fadeIn",
		"wait 3000",
		"scene #000 with fadeIn",
		"MC Phew! (That looks like the last of it.)",

	  "MC (Linda’s offices are looking, in pretty good shape right now!)",
	  "MC (I’ll go and let her know I’m finished.)",
		"play music MiamiViceroy loop",

		"scene M_AS1_p3 with fadeIn",
		"MC Hi again! That’s me done.",
		"Linda Great work! Here’s the $25, as promised.",

		"MC (It’s not much, but it's better than having to constantly beg Bob!)",

		"scene M_AS1_p4",
		"Linda (The cleaner was getting $40 for the work {{player.Name}} just did - but now that I’ve got his attention, I can reel him in with the big money!)",
		"Linda Say - how would you like to earn another $50?",
		"MC (Another $50? That’ll bring me up to $75. I could really use the cash.)",
		"MC Yeah, what do you want me to do?",
		"Linda I want… to play the game again.",
		"MC The game?",
		"Linda The one we played in the car - but this time you must stay still for two minutes.",
		"MC (Gulp.)",
		"jump M_AS1_q1"
	],
	"M_AS1_q1":[
		"clear",
		"scene M_AS1_p1",
		{"Conditional": {
			"Condition": function(){
					return storage.M_AS1_a1 == false && storage.M_AS1_a2 == false && storage.M_AS1_a3 == false;

				},
				"True": "jump M_AS1_continue",
				"False" : {"Choice":{
					"M_AS1_a1":{
							"Text": "Do you… love me more than a friend?",
							"Do": "jump M_AS1_a1",
							"Condition": function () {
									return storage.M_AS1_a1 == true;
							}
					},
					"M_AS1_a2":{
							"Text": "Why do you want to play this game again?",
							"Do": "jump M_AS1_a2",
							"Condition": function () {
									return storage.M_AS1_a2 == true;
							}
					},
					"M_AS1_a3":{
							"Text": "Are you going to kiss me again?",
							"Do": "jump M_AS1_a3",
							"Condition": function () {
									return storage.M_AS1_a3 == true;
							}
					},
					"M_AS1_a5":{
							"Text": "Okay, I’m ready.",
							"Do": "jump M_AS1_continue",
					}
				}}

		}}



	],
	"M_AS1_a1":[
		"MC Before I say “yes”, I want to know… do you love me more than a friend?",
		"Linda I don’t know what you mean.",
		"scene M_AS1_p2",
		"MC I mean, do you- are you attracted to me?",
		"Linda Oh, come on. You’re being silly now, {{player.Name}}.",
		function () {
			storage.M_AS1_a1 = false;
			return true;
		},
		"jump M_AS1_q1",

	],
	"M_AS1_a2":[
		"MC Why do you want to play this weird game again?",
		"Linda Why does it matter to you? It’s an easy $50 if you agree.",
		"MC (Hmm... She’s being evasive with her answers.)",
		function () {
			storage.M_AS1_a2 = false;
			return true;
		},
		"jump M_AS1_q1",

	],
	"M_AS1_a3":[
		"MC If I stand still, are you going to try and kiss me again?",
		"scene M_AS1_p4",
		"Linda Who knows what will happen?",
		"Linda And why do you care? It’s not like I haven’t kissed you before.",
		function () {
			storage.M_AS1_a3 = false;
			return true;
		},
		"jump M_AS1_q1",

	],
	"M_AS1_continue":[
		function () {
			storage.M_AS1_a1 = true;
			storage.M_AS1_a2 = true;
			storage.M_AS1_a3 = true;
			return true;
		},
		"play music Niles_Blues loop",
		"MC Okay, I’m ready.",
		"Linda Don’t move a muscle. The two minutes begins now.",

		"scene M_AS1_p5",
		"MC (One… Two… Three…)",
		"MC (Oh, my God! Is she lifting up my t-shirt?!)",
		"Linda (My heart’s racing. I wonder how far I can get in two minutes.)",
		"Linda (Will I have enough time to see his hard dick?)",

		"scene M_AS1_p6",
		"Linda Ah ah - no moving!! We’ve only just started, Sweetie.",
		"MC I… ah…",
		"Linda No talking either. Your tongue counts as a muscle too, you know!",

		"scene M_AS1_p7",

		"MC (Sh-Shit! She’s my friend!)",
		"MC (I mean… I’m definitely getting hard right now… but it’s wrong. Isn’t it?)",
		"MC C-Careful! I’m falling back!",

		"scene M_AS1_p8",
		"MC Whoooaaaa!",
		"Linda (Oooh! Exciting!)",

		"MC (Jesus! Linda’s completely lost control of herself!)",

		"scene M_AS1_p9",
		"Linda (Mmm! I like this position!)",

		"MC L-Linda! Wait!",
		"Linda (Huh? What’s gotten into him? He’s resisting, a lot, this time.)",

		"scene M_AS1_p10",
		"Linda What’s wrong, Sweetie?",
		"Linda Do you want me to continue or not?",
		"clear",
		{"Choice":{
			"M_AS1_aa1":{
					"Text": "Yes.",
					"Do": "jump M_AS1_aa1",

			},
			"M_AS1_aa2":{
					"Text": "No.",
					"Do": "jump M_AS1_aa2",

		},
		}}


	],
	"M_AS1_aa1":[
		"MC Y-Yeah… I do.",
		"MC I’m just a little stunned at-",
		"jump M_AS1_continue2"


	],
	"M_AS1_aa2":[
		"MC I don’t know…",
		"MC It’s a bit too… intense….",
		"jump M_AS1_continue2"

	],
	"M_AS1_continue2":[
		"play music MiamiViceroy loop",

		"scene M_AS1_p11",
		"Linda (Oh, God… What am I doing?)",

		"Linda (I can’t believe I’ve sunk this low... To even try to rape him?!)",
		"Linda I… I’m so sorry.",

		"MC Linda, I-",

		"scene M_AS1_p12",
		"Linda I’m so so sorry, {{player.Name}}.",

		"MC It’s okay, Linda.",
		"Linda No, it’s not okay.",
		"Linda I’ve always felt this way.",

		"scene M_AS1_p13",
		"Linda I’ve been able to contain my emotions for so long.",
		"Linda I kept it all inside - and sometimes, I allowed myself to fantasise about being with you.",
		"Linda But I always felt SO guilty afterwards.",
		"Linda It was when you started wanting to date other women, that I finally cracked.",
		"Linda I… (sniff) I couldn’t stand the thought of you being romantically involved with someone else.",

		"scene M_AS1_p14",

		"MC Shush - it’s okay Linda. Breathe and relax.",
		"MC You know that I lov-",

		"scene M_AS1_p15",
		"Linda No. No.",
		"Linda I don’t want to hear it right now.",
		"Linda I’m feeling like a compelte piece of shit, after what I did to you today.",
		"Linda Just… think about everything I told you and… let me know tomorrow morning. Okay?",

		"MC O-Okay, Linda.",
		"jump M_MS6",


	],

	"M_MS6":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene M_MS6_p1 with fadeIn",
		"play music ChillWave loop",


	  "MC Hey, Linda. I’m here to talk to you about… the thing from yesterday.",
	  "Linda (Gulp) Y-Yes?",
	  "MC Is now a good time for you? Or do you want me to come back later?",
	  "Linda I… I’m going to work soon, but I have a few minutes.",

	  "scene M_MS6_p2",
		"clear",
		{"Choice":{
			"M_MS6_a1":{
					"Text": "I love you too.",
					"Do": "jump M_MS6_a1",

			},
			"M_MS6_a2":{
					"Text": "I think I want the… same thing.",
					"Do": "jump M_MS6_a2",


			},
			"M_MS6_a3":{
					"Text": "You should have told me sooner.",
					"Do": "jump M_MS6_a3",
		},
		}}


	],
	"M_MS6_a1":[

		"MC Linda, I… I love you too.",
		"MC And not just in the normal way. I mean, I really love you.",
		"jump M_MS6_continue"


	],
	"M_MS6_a2":[
		"MC After, all you said yesterday, and the way you’ve acted around me… I think…",
		"MC I think I want the same thing that you do.",
		"jump M_MS6_continue"

	],
	"M_MS6_a3":[

		"MC Linda… You really should have told me sooner.",
		"MC You said that you’ve always felt this way. If I’d known, then I would have been able to understand, why you were acting the way you were.",
		"MC Everything would have made sense.",
		"jump M_MS6_continue"

	],
	"M_MS6_continue":[
		"scene M_MS6_p3",

		"MC Anyway, I should go now. But… I really do love you, Linda. ",
		"MC And I might be interested in… doing some of the… um…. stuff… that...",
		"MC Sorry, I’m getting all nervous and stumbling over my words. I should just go.",

		"scene M_MS6_p4",
		"Linda Don’t go! Please!",
		"MC Wow!",
		"Linda S-Sorry, I didn’t mean to frighten you.",

		"Linda I was… just, so sure that you were going to tell me, that you only loved me like a friend.",
		"Linda I was scared that I might have pushed you away, with those silly games I made you play.",
		"Linda I know everything’s moving quite fast… but if you want, we could be intimate together, in our underwear. How does that sound?",
		"MC R-Really?",
		"Linda Sit down on the sofa at the end of my bed.",

		"play music Niles_Blues loop",


		"scene M_MS6_p5",
		"Linda I want you to see this.",
		"Linda I want you to look at my body and enjoy watching it.",
		"Linda This is just for you.",

		"scene M_MS6_p6",
		"Linda Well? What do you think?",
		"Linda (I hope he likes my body… I know I’m not THAT young anymore…)",

		"MC Wow… You’re stunning, Linda.",

		"scene M_MS6_p7",
		"Linda You really think so?",
		"MC Yeah - your body is incredible! And that lingerie you’re wearing, fits you perfectly!",
		"Linda I’m glad you like it.",

		"scene M_MS6_p8",
		"Linda How about you strip off now too?",
		"Linda I’ve shown you what I’ve got - it’s only fair that you show me yours.",
		"MC Okay, hang on…",

		"scene M_MS6_p9",
		"MC Well? Is it as good as you imagined?",
		"Linda Mmm… Almost. The part I spent, most time fantasising about, is still covered up right now.",

		"scene M_MS6_p10",
		"Linda It’s going to feel so good, to finally kiss you without feeling like a creep.",
		"MC You did have me wondering what was going on, for a few days there.",
		"Linda Hehe... I’m sorry. I just couldn’t resist you.",

		"scene M_MS6_p11",
		"MC Mmm…",
		"Linda (How can something so wrong, feel so right?)",
		"Linda (It’s like… my dreams are finally beginning to come true.)",
		"Linda (Whenever I kiss {{player.Name}}, there’s butterflies in my tummy… I’ve never felt this way, when I’ve kissed anyone else, in my life.)",

		"scene M_MS6_p12",
		"Linda Lie down on the bed. Just like that.",
		"Linda (I can see how hard he already is… but I have to feel it with my own hand.)",

		"scene M_MS6_p13",
		"Linda Do you mind if I… touch you with my hand?",
		"MC S-Sure… I don’t mind.",

		"scene M_MS6_p13a",
		"Linda (Wow… He’s huge…)",
		"Linda (If only he wasn’t wearing these boxer shorts…)",
		"Linda (I’d love to take his cock in my mouth right now, and suck on it until he came.)",

		"scene M_MS6_p14",

		"MC Ahh… L-Linda...",
		"MC (She’s being so gentle with her tongue…)",

		"scene M_MS6_p15",
		"MC Ah! Ahh...",
		"Linda (It sounds like his nipples are especially sensitive.)",
		"Linda (He’s clearly enjoying me flicking my tongue over them.)",

		"scene M_MS6_p16",

		"MC (I’m so hard right now… I can’t believe, Linda was this attracted to me for so long.)",
		"MC (I wonder if this was one of the fantasies she had, about me and her?)",

		"scene M_MS6_p16a",

		"MC Ooh... Oh, Linda!",
		"Linda Do you like it when I kiss your neck like this?",
		"MC Yes…",

		"scene M_MS6_p17",
		"Linda You can do whatever you want now. I’ve had my fun - it’s time for you to have some too.",
		"MC What do you mean?",
		"Linda I’ll lie back, on the bed. The rest is up to you.",
		"scene M_MS6_p18",
		"clear",
		{"Choice":{
			"M_MS6_aa1":{
					"Text": "Give Linda a foot massage to begin.",
					"Do": "jump M_MS6_aa1",

			},
			"M_MS6_aa2":{
					"Text": "Start with Linda’s hips, and work up her body.",
					"Do": "jump M_MS6_continue2",


			},
		}}


	],
	"M_MS6_aa1":[
		"scene M_MS6_p19a",
		"MC You’ve got beautiful feet.",
		"Linda Hehe... Thanks. Have you got a bit of a foot fetish, then?",
		"MC W-What?!",

		"scene M_MS6_p19b",
		"Linda Relax - I’m just teasing you.",
		"Linda Mmm… It’s nice when you massage them like that.",
		"MC You like that? I’ll do the soles too, then.",

		"scene M_MS6_p19c",
		"Linda Ahh… Bob never does ANYTHING like this, for me.",
		"Linda God… your fingers are amazing.",
		"jump M_MS6_continue2"
	],
	"M_MS6_continue2":[
		"scene M_MS6_p20",

		"MC Can you spread your legs a little more, Linda?",
		"Linda Of course. Like this?",
		"MC Perfect.",

		"scene M_MS6_p21",
		"Linda Ooh...",
		"Linda (His fingers are so close to my pussy… I wish he’d go a little bit closer, and just slip them inside me.)",
		"MC Your skin’s so soft.",

		"scene M_MS6_p22",
		"Linda The trick is, an exfoliating scrub and moisturiser, twice a day.",
		"MC Are you okay if I touch your breasts?",
		"Linda Please, go ahead.",

		"scene M_MS6_p23",
		"MC Wow…",
		"Linda You can give them a squeeze, if you want.",
		"Linda Just don’t be too rough, okay?",

		"scene M_MS6_p24",
		"Linda Ahh…",
		"MC (This is freaking awesome!)",
		"MC (I hope I get to play with them, without the bra, soon!)",

		"scene M_MS6_p25",
		"Linda If we weren’t wearing our underwear, I would just pull you inside me, right now.",
		"Linda Mmm... I’d love to feel your cock, thrusting, deep into my wet pussy.",

		"scene M_MS6_p26",
		"Linda I can already feel your hard cock, pressing against my black panties.",
		"Linda Sadly, I have to go. If I spend, another minute in bed, I’ll be late for work.",
		"Linda I’ll see you tonight, Sweetie.",

		"MC I love you, Linda.",
		"Linda I love you too.",
		"jump M_AS2"
	],
	"M_AS2":[
		"stop sound",
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene M_AS1_p1 with fadeIn",
		"play music MiamiViceroy loop",


		"MC Hi, Linda! That’s me back again.",
		"Linda Great! If you just do the same as last time.",
		"Linda Is $25 okay for you again?",
		"MC Sure. No problem.",

		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene OH_later with fadeIn",
		"wait 3000",
		"scene #000 with fadeIn",
		"MC (That’s me done for the day.)",

	  "MC (Time to go back to Linda and get my money.)",
		"play music MiamiViceroy loop",
		"scene M_AS1_p3 with fadeIn",
		"MC That’s it all done.",
		"Linda Great!",

		"scene M_AS1_p4",
		"Linda Say - would you fancy sitting on the couch with me for a while?",
		"MC Sure.",

		"scene M_AS2_p2",
		"MC (She just sat down on my knee! I didn’t expect that!)",
		"Linda You’ve got beautiful eyes, {{player.Name}}. You know that?",

		"MC Gee… Thanks, Linda.",
		"Linda You really do. I could gaze into them for hours.",

		"scene M_AS2_p3",
		"MC (Gulp!)",
		"Linda You look a little nervous.",
		"Linda You shouldn’t be. I promise, you’re in very safe hands right now.",
		"Linda Try relaxing. Put your hand on my thigh.",
		"play music Niles_Blues loop",

		"scene M_AS2_p4",
		"Linda That’s it. See?",
		"Linda I can hear your heart pounding from here.",
		"Linda Just try to breathe, and close your eyes.",
		"Linda I promise you’ll enjoy this.",

		"scene M_AS2_p5",
		"MC (Oh, my God… It’s really happening. She’s not worried about scaring me off anymore!)",
		"MC (How far is she going to take this, today? Just a kiss?)",

		"scene M_AS2_p6",
		"Linda Mmm…",
		"MC Mmm!",
		"MC (Wow! She’s an amazing kisser!)",

		"scene M_AS2_p7",
		"Linda (God… This is even better than I dreamt it would be.)",
		"Linda (I wish I could just freeze this moment, and stay right here forever.)",

		"MC (Linda must be getting nervous too - I can hear her heart beating, even louder than mine!)",

		"scene M_AS2_p8",
		"Linda Lie down on the couch beside me. I want to do something for you.",
		"MC D-Do something? Like what?",

		"Linda Hush… Just you lie back and relax. I will take care of everything.",

		"scene M_AS2_p9",
		"MC Ooohh….",
		"MC (Holy shit… I can feel her fingers, wrapping around my cock.)",
		"MC (She’s massaging it now.)",

		"scene M_AS2_p10",

		"MC L-Linda. Y-You-",
		"Linda Shush… I see you’ve got a hard problem, down here.",

		"Linda Let me help you sort it out.",

		"scene M_AS2_p11",
		"Linda (Mmm… It’s so big!)",
		"Linda (I’d love to feel this monster inside me. Filling up my pussy!)",
		"Linda (God, I’m getting wet at the mere thought of it!)",

		"scene M_AS2_p12",
		"Linda Does it feel good when I circle my fingers around, this little bit at the top?",
		"MC Ah… yes...",
		"Linda I’ll tell you why it’s so sensitive.",

		"scene M_AS2_p13",
		"Linda It’s called the frenulum - and it’s a sensitive little cluster of nerves.",
		"Linda A secret trick of mine, back in school, was to rapidly flick my tongue back and forth across it.",
		"Linda No guy could last thirty seconds, when getting one of MY blowjobs.",

		"scene M_AS2_p14",
		"Linda But enough foreplay - let’s get down to business.",
		"MC Ah! Ahh… Oohhh!",

		"Linda Mmm... sounds like my toyboy is enjoying.",

		"scene M_AS2_p15",
		"MC Oooh!",

		"MC (Oh, my God! I never imagined, Linda would be this kinky!)",
		"Linda (Haha! I felt him shudder as I licked him. He’ll be cumming for me, in no time.)",

		"scene M_AS2_p16",
		"Linda Up and down…",
		"Linda Up… and down.",
		"Linda I hope you’re enjoying this as much as I am.",

		"scene M_AS2_p17",
		"MC Ahh…",

		"Linda Are you close?",
		"Linda I want you to cum for me.",

		"scene M_AS2_p18",
		"MC Mmm! MMMMM!",
		"MC (Fuck! I’m gonna cum!)",
		"Linda Mmm…",
		"Linda (I can feel his cock, twitching and throbbing in my hand. My boy’s about to blow his load!)",

		"scene M_AS2_p19",

		"Linda That’s it! Cum for Linda! Good boy!",
		"MC Ahh! Ooooh! Ahhhh!",
		"scene #fff with fadein",
		"wait 700",
		"scene M_AS2_p19 with fadein",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene M_AS2_p19a with fadein",
		"Linda Wow… That’s a lot of cum! You’re lucky you had me around, to relieve you.",

		"scene M_AS2_p20",
		"Linda Is that you all finished? Or should I keep going?",
		"MC N-No, I’m… I’m done...",
		"Linda So, how was it? Did you enjoy it?",

		"scene M_AS2_p21",

		"MC It was amazing, Linda! Thank you!",
		"Linda I’m very happy to hear that.",
		"Linda You make SUCH a cute face when you cum!",

		"MC Linda!",
		"Linda Haha! I better get back to work. I’ll see you, later this evening.",
		"MC See ya, Linda. Thanks again.",
		"jump M_NS3",



	],
	"M_NS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Night with fadeIn",
		"wait 3000",
		"scene M_NS3_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"Linda Hello there, {{player.Name}}.",
		"MC Jesus! You scared the crap out of me!",
		"Linda Aww, sorry, I just had to see you again.",

		"MC Wh-What if Bob catches you?",

		"scene M_NS3_p2",
		"Linda Relax - he’s working late. He won’t be home for hours.",
		"Linda Which gives us plenty of time to get more intimate with each other.",
		"MC Y-You mean, like... without our underwear on?",
		"Linda Exactly. Sit back on the bed.",

		"scene M_NS3_p3",
		"MC I didn’t realise you’d be wanting to do… more stuff, so soon.",
		"Linda Of course I do. I’ve been waiting years for this moment.",
		"Linda There’s no sense in me waiting any longer.",

		"scene M_NS3_p4",
		"MC It’s… just going very fast.. What’s the plan?",
		"Linda Well, I’m going to start off by, slowly stripping for you.",
		"Linda Then I’m going to pull down your boxer shorts and get another look at your, thick hard cock.",

		"scene M_NS3_p5",
		"Linda Sound good?",
		"MC Y-Yes!",
		"MC (This is gonna be awesome!)",

		"scene M_NS3_p6",
		"Linda You sound a little nervous. Try to relax.",
		"Linda I hope you enjoy this. I want you to watch it all and see every moment.",
		"MC I-I’m just a little surprised, is all.",

		"scene M_NS3_p7",
		"Linda Just breathe slowly and relax.",
		"Linda This is all for you.",

		"MC (Oh, my God! I’m gonna see Linda’s pussy!)",

		"scene M_NS3_p8",
		"MC Wow…",
		"Linda I’ve kept it, trimmed short for you. I figured you’d prefer that.",
		"Linda There’s so many things I want to do with you.",

		"scene M_NS3_p9",
		"Linda Well? What do you think?",

		"MC You’re beautiful, Linda.",
		"Linda Aww... Thank you, Sweetie. I want to see YOUR body, now though.",

		"scene M_NS3_p10",
		"Linda Ever since I wanked you off, I haven’t been able to get your cock out of my head.",

		"Linda Any time I’m with Bob, I’m imagining that it’s you - but even that’s not good enough.",
		"Linda I need the real thing.",

		"scene M_NS3_p11",
		"Linda Wow…",
		"Linda Mmm… I could suck on that for hours.",

		"MC L-Linda!",
		"Linda Oh, don’t be so shy.",

		"scene M_NS3_p12",
		"Linda So - how would you like to begin?",
		"Linda I could live out my fantasy of, sucking you off till you cum; or I could rub your shaft with my feet.",
		"Linda You certainly seemed to enjoy massaging them, the other other day.",
		"clear",
		{"Choice":{
			"M_NS3_a1":{
					"Text": "I want you to use your mouth tonight.",
					"Do": "jump M_NS3_a1",

			},
			"M_NS13_a2":{
					"Text": "I want you to use your feet tonight.",
					"Do": "jump M_NS3_a2",


			},
		}}



	],
	"M_NS3_a1":[
		"scene M_NS3_Blow_p0",
		"MC I want to feel your lips, wrapped around my dick, tonight.",
		"Linda Mmm… I like THAT choice.",

		"scene M_NS3_Blow_p1",
		"Linda You just lie back and relax.",
		"Linda Let me work my magic, and blow your mind.",
		"Linda Although, I highly doubt, you’ll last very long.",

		"scene M_NS3_Blow_p2",

		"MC You seem a bit overconfident, Linda!",
		"MC I highly doubt, that you’re THAT good.",
		"Linda Let’s just see, shall we?",

		"scene M_NS3_Blow_p3",
		"Linda (Sniff!) Ahh…",
		"Linda (God, he smells incredible! I would love to take my time, sucking him slowly, and dragging out his orgasm.)",
		"Linda (But since he doesn’t believe I could make him cum THAT quickly, I’m just going to have to go all-out.)",

		"scene M_NS3_Blow_p4",

		"Linda (There’ll be other opportunities to go slowly. Tonight, I’m gonna blow this boy’s mind.)",
		"MC Ahh…",
		"Linda (Sounds like he’s already moaning - and I haven’t even reached the tip yet.)",

		"scene M_NS3_Blow_p5",
		"MC (Damn, she wasn’t lying when she said she was good with her tongue, at work.)",
		"MC (She’s wrapping and flicking her tongue across my cock, so well!)",

		"scene M_NS3_Blow_p6",
		"MC Ooohh…",
		"MC (I can feel her hot breath, cascading over my glans.)",
		"MC (She’s about to put it in her mouth, any second now!)",

		"scene M_NS3_Blow_p7",
		"Linda (Suck Suck.)",
		"MC Ahh…",
		"MC (Wow! It’s so hot and wet in her mouth!)",

		"scene M_NS3_Blow_p8",
		"Linda (Suck Suck Suck)",
		"MC Mmmm! Ohhh!",
		"Linda (Hehe... It doesn't sound like he’s gonna last, terribly long!)",

		"scene M_NS3_Blow_p9",
		"Linda (Shluuurrp)",
		"MC Ahhh!",
		"Linda (Mmm! His, thick cock, feels so good in my mouth!)",
		"Linda (I hope he wants to finish inside, so I can taste his cum.)",

		"scene M_NS3_Blow_p10",
		"Linda (Suck. Shlurp. Suuuuck)",
		"MC Ah! Fuck! Ahhh!",
		"clear",

		{"Choice":{
			"M_NS3_aa1":{
					"Text": "Cum inside her mouth.",
					"Do": "jump M_NS3_aa1",

			},
			"M_NS3_aaa1":{
					"Text": "Pull out and cum on her face.",
					"Do": "jump M_NS3_aaa1",


			},
		}}



	],
	"M_NS3_aa1":[
		"scene M_NS3_Blow_p11",
		"MC Ugh! I’m gonna cum!",
		"MC Don’t stop sucking! Ahh!",
		"Linda (Yes! He wants to cum inside!)",

		"scene M_NS3_Blow_p12",
		"MC Oooh! Ahhhhhhh!",
		"Linda (Gulp! Gulp!)",
		"Linda Mmm…",

		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Blow_p12 with fadeIn",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Blow_p13a with fadeIn",
		"Linda Aaahhh…",
		"Linda (Wow! He came so much! I had to swallow a little bit.)",

		"MC That was amazing, Linda... ",

		"scene M_NS3_Blow_p13b",
		"Linda (Gulp!)",
		"Linda (It tastes quite salty - not bad though!)",
		"MC (Wow! She just swallowed it all!)",

		"scene M_NS3_Blow_p13c",

		"MC That was incredible, Linda! Thank you!",
		"Linda I did warn you that you wouldn’t last long, against one of my blowjobs.",
		"MC Haha! I should have listened.",

		"Linda Okay, I better get back to bed, before Bob finds me missing.",
		"Linda See you tomorrow.",

		"MC See you tomorrow, Linda.",
		"jump Character_Choice",

	],
	"M_NS3_aaa1":[
		"scene M_NS3_Blow_p11",
		"MC I’m gonna cum! Ahh!",
		"MC Can I do it on your face?",

		"Linda (I would have preferred him, to cum in my mouth - but whatever makes this boy happier.)",
		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Blow_p11 with fadeIn",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Blow_p14a with fadeIn",
		"MC Oh fuck! Yes! Ahhh!",
		"Linda (Mmm... feeling his warm sticky cum, over my face, isn’t as bad as I imagined it would be.)",
		"MC Ah… Phew…",
		"Linda Did you enjoy that, Sweetie?",
		"MC Y-Yeah... That was amazing…",
		"Linda I did warn you that you wouldn’t last long, against one of my blowjobs.",
		"MC Haha! I should have listened.",

		"Linda Okay, I better get back to bed, before Bob finds me missing.",
		"Linda See you tomorrow.",

		"MC See you tomorrow, Linda.",
		"jump Character_Choice",

	],
	"M_NS3_a2":[
		"scene M_NS3_Foot_p1",

		"MC C-Could you use your feet tonight, Linda?",
		"Linda Feet? I didn’t expect t-tha...",
		"Linda ...Of course, Sweetie. Just sit back, against me and relax.",

		"Linda Let me take care of the rest.",

		"scene M_NS3_Foot_p2",


		"Linda Are you comfortable?",
		"MC Y-Yeah, I am.",
		"Linda Good. I’ll start now. I hope you enjoy this.",

		"scene M_NS3_Foot_p3",
		"MC Ahh…",

		"Linda You really like my feet, don’t you, {{player.Name}}?",

		"MC Y-Yeah, Linda.",
		"Linda Haha! I guessed that.",

		"scene M_NS3_Foot_p4",
		"Linda Would you like me to go faster?",

		"MC Just, whatever you think is best, Linda.",

		"scene M_NS3_Foot_p5",
		"Linda You’ve got such a sexy cock. I could play with it for hours.",
		"Linda I’ll let you fuck my pussy someday. I can’t wait to feel you inside me.",
		"Linda You’ve gotten me so wet, just by sitting naked beside me.",

		"scene M_NS3_Foot_p6",
		"MC Ahh!",

		"MC (I can feel Linda’s hot breath in my ear. She has such a seductive voice when she whispers.)",
		"Linda (Alright, I’ve been doing this for a few minutes now. Time to up my game.)",

		"scene M_NS3_Foot_p7",
		"Linda (Let’s see how he likes it when I lick his neck.)",
		"MC Ooohh!",
		"Linda (Mmm... he shivered! I think he’s rather sensitive there.)",

		"scene M_NS3_Foot_p8",

		"MC Oh! Oh, Linda!",
		"Linda Are you enjoying, my feet, massaging your cock, Sweetie?",
		"MC Y-Yes, Linda! Ahh…",

		"scene M_NS3_Foot_p9",

		"Linda I want you to be a good boy, and cum for me.",

		"Linda Will you do that for me?",
		"MC Y-Yes, Linda!",

		"scene M_NS3_Foot_p10",
		"Linda Be a good boy, and cum all over my feet.",
		"Linda I want to feel your sticky, warm cum, between my toes.",
		"MC Ah! Ahhh! Ohhh!",

		"scene M_NS3_Foot_p11",
		"MC Fuck! I’m cumming! Ahh! Uggghhh!",


		"Linda That’s it! Cum for me!",
		"scene M_NS3_Foot_p12",
		"Linda (It feels so good, making him cum. Hopefully he’ll want to repay the favour some day.)",
		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Foot_p12 with fadein",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene M_NS3_Foot_p12a with fadein",
		"Linda Wow… You came sooo much!",
		"MC (Gasp! Pant!)",
		"Linda Aww... are you out of breath. Let’s lie down together, for a while.",

		"scene M_NS3_Foot_p13",

		"MC Th-Thank you, Linda…",
		"Linda Shush... Just relax and catch your breath.",
		"Linda I’ll cuddle you for a while, then head back into my own room.",
		"MC (Pant) You’re incredible, Linda...",
		"Linda Shush - I know.",
		"Linda Sweet dreams, {{player.Name}}.",
		"jump Character_Choice",

	],
	"C_MS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene Morning with fadeIn",
		"wait 3000",
		"scene C_MS1_p1 with fadeIn",
		"play music Deadly_Roulette loop",


		"MC (Caroline’s always been a caring friend.)",
		"MC (In fact, one of my earliest memories was when I was getting bullied in school. I must have been six or seven years old.)",
		"MC (A duo of pricks named Tom and Samson had decided to steal my lunch money - just a couple of dollars; but I refused to give it up.)",
		"MC (I remember the agony of getting punched in the stomach, and the cruel sound of their laughter.)",
		"MC (Caroline was four years older than me, but that didn’t stop her from beating the bullies down with her bare fists.)",
		"MC (For her trouble, she got two sets of bruised knuckles and a three week suspension.)",
		"MC (Tom and Samson got three weeks off school too. However, their “break” was spent in the hospital.)",

		"scene C_MS1_p2",

		"MC Caroline, I-",
		"MC (Holy shit! Look at that ass! Talk about a bubble butt!)",
		"scene C_MS1_p2a",
		"MC S-Sorry! I didn’t know you were changing! I should have knocked!",

		"scene C_MS1_p3",
		"Caroline Hiiiii, {{player.Name}}!",
		"Caroline Don’t sweat it - you’re my {{player.Name}}. It’s not like you’re one of those, creepy guys from college, who’s just trying to get in my pants.",
		"MC Uhh, yeah…",
		"MC (I thought her ass was good, but her breasts might even be better!)",
		"Caroline So, what’s up?",
		"MC Nothing much - just came by to say hello.",

		"scene C_MS1_p4",
		"Caroline Oh! Before I forget - what happened in school the other day?",

		"Caroline I’ve only picked up fragments of the story from Sara and Linda?",
		"clear",
		{"Choice":{
			"C_MS1_a1":{
					"Text": "Tell her the full truth.",
					"Do": "jump C_MS1_a1",

			},
			"C_MS1_a2":{
					"Text": "Play it cool.",
					"Do": "jump C_MS1_a2",


			},
			"C_MS1_a3":{
					"Text": "I’d rather not talk about it.",
					"Do": "jump C_MS1_a3",
			}
		}}
	],
	"C_MS1_a1":[
		"MC Eh… It wasn’t good. I asked out Mrs. Celia, and got rejected.",
		"Caroline Ouch, that sounds rough. I know how tough a broken heart can feel.",
		"MC Oh! It’s not the broken heart that’s the bad part - she humiliated me in the middle of a busy corridor.",
		"Caroline Oh God… {{player.Name}}... I’m so sorry.",
		"jump C_MS1_continue"

	],
	"C_MS1_a2":[
		"MC Relax - it was nothing.",
		"Caroline Are you sure? I heard something about you getting humiliated in public?",
		"MC Really! It wasn’t a big deal. I asked Mrs. Celia out, but nothing came of it.",
		"Caroline Hmm… A lot of men tend to withold their feelings, rather than talking about their problems.",
		"Caroline Make sure you take care of yourself - and if you do ever want to talk, you know my door is always open.",
		"jump C_MS1_continue"
	],
	"C_MS1_a3":[
		"MC Yeah… I’d rather not talk about this.",
		"Caroline Oh! I’m sorry!",
		"MC No, it’s not your fault. You don’t need to apologise.",
		"Caroline Okay, just promise to take care of yourself? I heard something about Mrs. Celia and you in a corridor, but I didn’t get the full details.",
		"MC I… Sorry, I’d rather not think about it.",
		"Caroline That’s okay. If you ever change your mind, you know I’m always here to chat.",
		"MC Thanks, Caroline.",
		"jump C_MS1_continue"
	],
	"C_MS1_continue":[
		"scene C_MS1_p5",
		"Caroline Before you go, I want you to promise me something?",
		"MC Yes?",
		"Caroline Promise you’ll come to me if you’re ever feeling stressed or down about this, won’t you?",
		"MC I’m gonna be fine.",

		"scene C_MS1_p6",
		"Caroline I didn’t ask if you were going to be fine.",
		"Caroline I asked you to promise me that you’ll come to me if you are feeling down.",
		"MC Fine… I promise.",
		"Caroline Thank you.",

		"scene C_MS1_p3",
		"Caroline Catch you later, {{player.Name}}. I need to finish getting my makeup on.",
		"MC See ya, Caroline.",
		"jump C_ES1"
	],
	"C_ES1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_E with fadeIn",
		"wait 3000",
		"scene C_ES1_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC Hey, Caroline!",
		"Caroline Hiiii!",
		"MC Are you not getting dressed?",
		"Caroline What do you mean? I’m wearing a top.",
		"MC (Huh, I guess she considers a pair of panties “casual clothes”.)",
		"MC Nevermind - How’re you doing?",
		"Caroline I’ve got a few things on my mind - but they’re not worth complaining about.",
		"Caroline How about you? What’re you doing home at this hour? A guy your age should be out partying.",
		"clear",
		{"Choice":{
			"C_ES1_a1":{
					"Text": "I came home to see the best friend in the world.",
					"Do": "jump C_ES1_a1",

			},
			"C_ES1_a2":{
					"Text": "Nah, no one’s inviting me out to any parties after that fiasco with Mrs. Celia.",
					"Do": "jump C_ES1_a2",


			},
			"C_ES1_a3":{
					"Text": "I just came home to chill.",
					"Do": "jump C_ES1_a3",
			}
		}}

	],
	"C_ES1_a1":[
		"scene C_ES1_p2",
		"MC I just came home to see the best friend in the world.",
		"Caroline Oh really? How sweet.",
		"MC Yeah, I still haven’t found Sara yet though. Haha!",

		"scene C_ES1_p1",
		"Caroline Ahh, you bastard! Haha!",
		"MC Sorry, Caroline. Couldn’t resist.",
		"jump C_MS2"
	],
	"C_ES1_a2":[
		"scene C_ES1_p3",
		"MC Yeah… I’m not really getting invited out to any parties recently.",
		"MC Probably has to do with that Mrs. Celia fiasco.",
		"Caroline Oh God... I’m sorry to hear that.",

		"scene C_ES1_p4",
		"Caroline I wish I could give you some advice that would fix this.",
		"Caroline But… honestly, don’t even know where to begin.",
		"MC It’s okay, Caroline. Thanks anyway.",
		"jump C_MS2"
	],
	"C_ES1_a3":[
		"scene C_ES1_p2",
		"MC I just came home to chill and relax for a while.",
		"Caroline Coooool. Have fun with that.",
		"MC Thanks, Caroline. You up to much?",

		"scene C_ES1_p3",
		"Caroline Just researching marketing ideas.",
		"Caroline Y’know {{player.Name}}, I have to tell you...",

		"scene C_ES1_p4",
		"Caroline I never thought running a business would be this hard!",
		"Caroline I wish there was some easy way to crowdfund a business. Perhaps with a monthly subscription for users, y’know? Like a website!",
		"Caroline Heck - such a system could even be used to fund, small indie games developers and artists!",

		"scene C_ES1_p2",
		"Caroline Am I being crazy, {{player.Name}}, or does this sound like a good idea?",

		"scene C_ES1_p4",
		"Caroline Actually, don’t answer that! It would just be another bad financial investment from me!",
		"MC Don’t be too harsh on yourself, Caroline!",
		"MC It sounds like a good idea - but you’d probably have to start making difficult decisions, like arbitrarily banning certain content creators if you don’t like their stuff.",
		"Caroline True - it would probably get flooded with perverts, making dirty sex games.",
		"MC You’re better off just sticking with your clothes shop.",

		"scene C_ES1_p1",
		"Caroline Yeah, you’re right, {{player.Name}}. Thanks!",
		"MC Cool. See you later, Caroline!"	,
		"jump C_MS2"
	],
	"C_MS2":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene C_MS2_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC (Caroline did say I could come and talk with her any time.)",
		"MC (I guess it wouldn’t hurt to chat with someone, other than my therapist.)",
		"MC (Plus, Caroline tends to hang around in her underwear when she’s in her bedroom.)",

		"scene C_MS2_p2",
		"MC Uh, hey Caroline. Remember you said that I could come and chat-",
		"Caroline I’m sorry, {{player.Name}}. I know I promised, but... ",
		"Caroline ...I just can’t handle it right now.",
		"MC Is everything okay?",

		"scene C_MS2_p3",
		"Caroline …",
		"MC Caroline?",
		"MC (She might not be free to chat, but at least I get to check out her ass.)",

		"scene C_MS2_p4",
		"Caroline I’m sorry, {{player.Name}}. I’m under a LOT of pressure right now.",
		"MC Are you behind on those heavy business textbooks you read?",
		"Caroline No, it’s my shop. I… I can’t make the finances balance.",
		"Caroline Listen, would you mind leaving me alone for a while?",
		"Caroline I know I promised you that I’d be here to chat, but I’m in no fit state right now.",
		"MC Sorry, Caroline. I’ll give you some space.",
		"jump C_MS3"
	],
	"C_MS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene C_MS3_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC (Huh? What’s wrong with Caroline?)",
		"MC (This isn’t like her, at all. She’s usually one of the happiest, most upbeat people I’ve ever met!)",

		"MC (Even Linda’s gotten involved - this must be serious.)",

		"scene C_MS3_p2",
		"Linda Listen, I can afford to help out with the mortgage for a couple more months.",

		"Linda But after that, we’ll be relying, almost entirely Bob’s overtime, to make ends meet.",

		"Caroline I know. (Sniff) I’m sorry, Linda.",
		"Caroline I really thought this shop idea would work!",

		"scene C_MS3_p3",

		"Linda Perhaps you should consider cutting your losses? Bob might be able to get you a job in Risk Management at the firm?",
		"Caroline God no! Trust me - I have a plan to turn a profit at my store.",
		"Caroline I can’t do it on my own though. I’m gonna need some help to get things off the ground.",
		"Caroline Could I borrow {{player.Name}}, to help out at my shop a bit?",
		"Linda Sure - as long as he doesn’t mind.",

		"scene C_MS3_p4",
		"Caroline Would you be able to help me, {{player.Name}}?",
		"MC What do you need me to do?",
		"Caroline Just pop by my shop, in the afternoon. I’ll have everything ready. Then we can begin.",
		"jump C_AS1"

	],
	"C_AS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene ND_A with fadeIn",
		"wait 3000",
		"scene C_AS1_p1 with fadeIn",
		"play music Deadly_Roulette loop",


		"MC Afternoon, Caroline!",
		"Caroline Hiiii, {{player.Name}}!",
		"Caroline Perfect timing - I’ve just finished planning my idea to save the shop!",
		"MC Great! How can I help?",

		"scene C_AS1_p2",
		"Caroline Okay, listen to this. I’ve got a three point plan.",
		"Caroline One - I’m going to order in a new range of cosplay outfits.",
		"Caroline Two - I’m going to market these by modelling them and putting the pictures online.",


		"scene C_AS1_p3",

		"Caroline Which leads me into point three - I’m starting an online store too!",
		"Caroline This will hopefully increase my annual turnover enough, to make a profit.",
		"MC Sounds like a great idea! What do you need me to do?",
		"Caroline Can you take some pictures of me in the outfits?",
		"MC Of course!",

		"scene C_AS1_p4a",
		"Caroline Umm… there’s just one tiny problem.",
		"Caroline I don’t have a camera.",
		"MC Ah… Right.",
		"Caroline If you can get one, come on back and we’ll begin.",
		"Caroline I need to continue building my online catalogue.",
		"MC Okay, Caroline. I’ll go and find a camera.",

		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene OH_later with fadeIn",
		"wait 3000",
		"scene C_AS1a_p1 with fadeIn",
		"play music Deadly_Roulette loop",


		"MC Hey, Caroline! I found a camera!",
		"Caroline Amazing, {{player.Name}}! It looks like a really good one too.",
		"Caroline I’m ready to begin doing some modelling sessions, with the clothes, whenever you’re ready.",

		"scene C_AS1a_p2",
		"Caroline You’re doing the hard work - so how about you pick an outfit?",
		"Caroline Try and focus on getting good camera angles.",
		"Caroline Better pictures means more sales, which means more money!",
		"jump C_AS2"
	],
	"C_AS2":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene C_AS2_p1 with fadeIn",
		"play music MarchoftheSpoons loop",

		"Caroline This one’s a little bit embarrassing.",
		"MC Relax! It’s just for your business, remember? Think of the sales you’ll make!",
		"Caroline Yeah, I suppose so.",

		"scene C_AS2_p2",
		"MC You do look great in it, by the way.",
		"Caroline Aww - you don’t have to say that. It’s AT LEAST one size too small, on me, anyway!",
		"Caroline Just look at how tight it is!",
		"MC (It sure is!)",

		"scene C_AS2_p3",
		"Caroline I’m off to get changed over here.",
		"MC No problem, Caroline.",
		"MC (Damn, that’s a REALLY skinny thong on that costume!)",

		"scene C_AS2_p4",
		"MC (Hmm... she normally takes a while to change out of her cosplay outfits.)",
		"MC (Maybe I’ll have enough time to peek at her while she’s undressing!)",
		"MC (Just a little bit closer…)",

		"scene C_AS2_p5",
		"MC (Here we go - perfect view.)",
		"MC (I’m well hidden, so she won’t be able to see me - and I can duck around the corner if she turns quickly.)",
		"MC (Time to sit back and enjoy the show!)",

		"scene C_AS2_p6",
		"MC (C’mon, Caroline. Time to undress…)",
		"MC (Let’s see those big titties of yours!)",

		"scene C_AS2_p7",
		"MC (Okay. She’s searching the drawer for her clothes.)",
		"MC (God, my heart’s racing right now! Just a few more seconds, and she’ll be-)",

		"scene #000 with fadeIn",
		"play sound shelf_fall",
		"MC WHOOAAAAA!",
		"stop sound",

		"scene C_AS2_p8 with fadeIn",
		"Caroline Eeek!",
		"Caroline Wh-What the hell?!",
		"MC Ouch…",
		"MC (Fuck! The shelf broke, as I was leaning on it!)",
		"play music Rhinoceros loop",
		"scene C_AS2_p9",

		"Caroline {{player.Name}}! What the FUCK were you doing?!",
		"MC I… um…" ,

		"clear",
		{"Choice":{
			"C_AS2_a1":{
					"Text": "Err… I was… dusting the shelf!",
					"Do": "jump C_AS2_a1",

			},
			"C_AS2_a2":{
					"Text": "I… um… was checking if you needed any help!",
					"Do": "jump C_AS2_a2",


			},
			"C_AS2_a3":{
					"Text": "I saw a… big… um… spider! And I had to try and catch it!",
					"Do": "jump C_AS2_a3",
			}
		}}


	],
	"C_AS2_a1":[
		"MC I was… err… dusting the shelf!",
		"Caroline Oh really?",
		"MC Y-Yeah?",

		"scene C_AS2_p10",
		"Caroline With what?! You CLEARLY don’t have a cloth or any polish!",
		"Caroline PLUS, I dusted this whole place, like two hours ago!",
		"MC OW! OW!",
		"jump C_AS2_continue"
	],
	"C_AS2_a2":[
		"MC I was… um… checking if you needed any help!",
		"Caroline You were checking if I needed any help changing?",
		"MC Yeah- I mean, NO! Err…",

		"scene C_AS2_p10",
		"Caroline You disgusting little pervert!",

		"Caroline I’m your friend!",
		"MC Ouch! Ahh! I’m sorry!",
		"jump C_AS2_continue"
	],
	"C_AS2_a3":[
		"MC I saw a… big… spider… over on the uhh… shelf!",
		"scene C_AS2_p11",
		"Caroline A big spider, Huh?",
		"MC Y-Yeah! A tarantula or something…",
		"Caroline You’re an awful liar.",
		"MC N-No! Really! It was… uh…",

		"scene C_AS2_p10",
		"Caroline It’s bad enough that you were spying on me while I changed…",
		"MC OW! I’M SORRY!",
		"Caroline But then you had to go and make things WORSE by lying to me!",
		"Caroline Do you think I’m stupid?!",
		"MC I’m sorry!",
		"jump C_AS2_continue"

	],
	"C_AS2_continue":[
		"scene C_AS2_p12",
		"Caroline WHAT THE FUCK?!",
		"MC Huh?",
		"Caroline You’ve got a boner!",
		"MC (Jesus Christ! Not now!)",

		"scene C_AS2_p13",
		"MC I-I’m sorry! I have no control over it!",
		"Caroline Yes you do! You were the one SPYING on me!",
		"MC (Damn, she actually has a point there…)",

		"scene C_AS2_p14",
		"Caroline Get out of my store, this instant.",
		"Caroline Tonight, when I get home, we’re going to have a VERY serious discussion about boundaries.",
		"MC I’m sorry, Caroline.",
		"Caroline Just leave.",
		"jump C_ES2"
	],
	"C_ES2":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_E with fadeIn",
		"wait 3000",
		"scene C_ES2_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC Caroline? I- I’m sorry about earlier today.",
		"MC I’ll make it up to you, I swear. If you just let me-",
		"Caroline Shush.",

		"scene C_ES2_p2",
		"Caroline I’m the one who should be apologising. I completely overreacted.",
		"MC Y-You are?",
		"Caroline It’s completely normal - and probably even healthy - for a guy your age.",
		"Caroline And to be fair, my outfit wasn’t leaving a lot to the imagination.",
		"MC (Yeah, she’s right, there!)",

		"scene C_ES2_p3",
		"Caroline So, I’m sorry, {{player.Name}}. Are we cool?",
		"MC Yeah, we’re cool.",
		"MC And for the record… I’m sorry too.",
		"Caroline Oh! Before I forget - I’m planning a little surprise, to make it up to you.",

		"scene C_ES2_p2",
		"MC Aww, you don’t have to do that.",
		"Caroline Trust me. I think you’ll enjoy it!",
		"Caroline Catch you later, {{player.Name}}.",
		"MC See ya, Caroline!",
		"jump C_NS1"

	],
	"C_NS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Night with fadeIn",
		"wait 3000",
		"scene C_NS1_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"MC (I hope I haven’t come in too early. I need to wait until Caroline’s in a deep sleep.)",
		"MC (Hmm… She doesn’t seem to have moved since I opened the door.)",
		"MC (I guess it’s safe for me to creep across the room now.)",

		"scene C_NS1_p2",
		"MC (Just look at those breasts! They’re fucking massive!)",
		"MC (Hehe... I’m gonna have some fun with you tonight, Caroline.)",
		"MC (But where to begin…)",

		"clear",
		{"Choice":{
			"C_NS1_a1":{
					"Text": "Slide your cock into her mouth.",
					"Do": "jump C_NS1_a1",

			},
			"C_NS1_a2":{
					"Text": "Rub your cock on her feet.",
					"Do": "jump C_NS1_a2",


			},
			"C_NS1_a3":{
					"Text": "Pull down her bra and play with her tits.",
					"Do": "jump C_NS1_a3",
			},
			"C_NS1_a4":{
					"Text": "Play with her ass.",
					"Do": "jump C_NS1_a4",
			}
		}}

	],
	"C_NS1_a1":[
		"scene C_NS1_Mouth_p1",
		"MC (Okay, let’s try putting my cock in her mouth while she sleeps.)",
		"MC (This is gonna be risky. Lips are rather sensitive, and I could very easily wake her up if I’m not careful.)",
		"MC (Easy does it…)",

		"scene C_NS1_Mouth_p2",
		"MC Ooh…",
		"MC (I can feel the warm breath from her nose, blowing over my cock.)",
		"MC (Just another half an inch!)",
		"MC (Damn! Her teeth are in the way.)",

		"scene C_NS1_Mouth_p3",
		"MC (I’ll have to make her breathe through her mouth instead.)",
		"MC (Let’s see if this works.)",
		"MC Sorry Caroline…",

		"scene C_NS1_Mouth_p4",
		"MC (There we go! She’s beginning to open her mouth!)",
		"MC (I’m almost in!)",
		"Caroline Aahhh…",

		"scene C_NS1_Mouth_p5",
		"MC Ahh…",
		"MC (This feels so good!)",
		"MC (That’s it, Caroline. Suck my cock!)",

		"scene C_NS1_Mouth_p6",
		"MC (God… I wish I could force it in deeper!)",
		"MC (Maybe, if I’m really careful, I could get a couple of inches in.)",
		"MC (Dammit - I’ve come this far! Let’s do this!)",

		"scene C_NS1_Mouth_p7",
		"MC Ahh… fuck…",
		"MC (That’s so good!)",
		"Caroline Mmm… Hmm…",
		"MC (Oh shit! She’s beginning to wake up!)",

		"scene C_NS1_Mouth_p8",
		"MC (Fuck fuck fuck!)",
		"MC (I’ve gotta get my dick out of her mouth and bail from her room before she catches me!)",

		"scene #000 with fadeIn",
		"stop music",
		"MC (Shit, that was REALLY close!)",
		"jump C_MS4"

	],
	"C_NS1_a2":[
		"scene C_NS1_Feet_p1",
		"MC (Let’s play with her feet a bit tonight.)",
		"MC (Caroline was kind enough to not wear any socks to bed.)",
		"MC (Mmm, you really do have gorgeous feet, Caroline!)",

		"scene C_NS1_Feet_p2",
		"MC (Okay, time to get your toes working on my cock!)",
		"MC (There we go - almost there…)",

		"scene C_NS1_Feet_p3",
		"MC Ahh... ",
		"MC (I just wish I could grab both her feet and thrust my cock between them.)",
		"MC (Maybe I could get her other foot before she wakes up?)",

		"scene C_NS1_Feet_p4",
		"MC Slowly does it…",
		"Caroline Hmm… Mmm…",
		"MC (CRAP! I’ve pushed her too far!)",
		"MC (Don’t wake up… don’t wake up…)",

		"scene C_NS1_Feet_p5",
		"Caroline Mmm... ",
		"Caroline Yawwwwn!",
		"MC (Uh oh! Time for me to leg it out of here!)",
		"jump C_MS4"
	],
	"C_NS1_a3":[
		"scene C_NS1_Tits_p1",
		"MC (She looks sound asleep. If I’m really careful I might be able to mess about with her tits.)",
		"MC (Well, here goes nothing…)",

		"scene C_NS1_Tits_p2",
		"MC Wow…",
		"MC (Just look at that nipple. I’d love to suck on that!)",
		"MC (And her cleavage is amazing. My cock would fit so perfectly between them!)",

		"scene C_NS1_Tits_p3",
		"MC (Mmm! So soft and warm!)",
		"MC (It doesn’t look like she’s been disturbed yet - maybe I could get away with squeezing it a bit?)",
		"MC (Here goes nothing!)",

		"scene C_NS1_Tits_p4",
		"MC (God, her tits are fucking perfect.)",
		"MC (I wonder how she’s react if she woke up right now?)",


		"MC (It’s better not to think about that…)",
		"MC (Okay, just one final thing to do, then I’ll leave.)",

		"scene C_NS1_Tits_p5",
		"MC Ah….",
		"MC (I’m so fucking hard right now.)",
		"MC (I wish I could fuck her breasts so much right now.)",

		"scene C_NS1_Tits_p6",
		"MC Ooh…",
		"Caroline Hmmm….",
		"MC (Uh oh!)",

		"scene C_NS1_Tits_p7",
		"Caroline Yawn!",
		"MC (Fuck, she’s waking up. Time to bail!)",
		"MC (That’s a shame - things were just getting good!)",
		"jump C_MS4"
	],
	"C_NS1_a4":[
		"scene C_NS1_Ass_p1",
		"MC (Okay, Caroline. Let’s see if that ass of yours feels as good as it looks.)",
		"MC (I’ve got my fingers crossed that she’s in a deep enough sleep to not wake up.)",

		"scene C_NS1_Ass_p2",
		"MC (Her whole body is perfect. She won the jackpot on the genetic lottery!)",

		"MC (I can see how she’s Linda’s friend. They both have brilliant bodies!)",

		"scene C_NS1_Ass_p3",
		"Caroline (Snoooore…)",
		"MC (Let’s begin by groping her butt a bit.)",
		"MC (If she doesn’t rouse then I’ll see how far I can take things.)",

		"scene C_NS1_Ass_p4",
		"MC (Mmm, she’s got an amazing ass!)",
		"MC (Alright, she seems to be in a deep enough sleep for me to rub my cock on her a bit.)",
		"MC (Here we go…)",

		"scene C_NS1_Ass_p5",
		"MC Mmm…",
		"MC (I’d love to fuck her ass in this position.)",
		"MC (I imagine she’s got a very tight asshole.)",

		"scene C_NS1_Ass_p6",
		"MC (I’d plunge my cock really deep inside her with long slow strokes.)",
		"MC (Then, when I’m done, I’d thrust my hips forward and cum deep in her ass.)",
		"MC (God, the thought of that is getting me so horny!)",

		"scene C_NS1_Ass_p7",
		"MC Oooh…. I would fuck you so hard…",
		"Caroline Huh?",
		"MC (Shit! Did I say that out loud?!)",

		"scene C_NS1_Ass_p8",
		"MC (Time for me to abandon ship!)",

		"Caroline (I’d a really weird dream there… Something about my friend fucking my ass.)",
		"Caroline (I need to stop eating cheese so late at night. It gives me bizarre dreams!)"	,
		"jump C_MS4"
	],
	"C_MS4":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene C_MS4_p1 with fadeIn",
		"play music Deadly_Roulette loop",


		"MC (Caroline’s on her phone, but it looks like she’s just texting.)",
		"MC (Hopefully she’s in a better mood, now that I’ve helped out a bit!)",
		"MC Hey, Caroline!",


		"scene C_MS4_p2",
		"Caroline Oh! Hiiii, {{player.Name}}!",
		"Caroline Thanks again for your help, down at the store. I really believe we’re gonna see things turn around soon!",
		"Caroline It’s too early to tell if I’ll turn a profit - but I’ve definitely seen more customers browsing.",
		"Caroline The online store has started taking off too.",

		"scene C_MS4_p3",
		"Caroline Thank you so much for everything you’ve done!",

		"Caroline You’re my best friend in the whole world.!",
		"MC Awww... Thanks, Caroline!",

		"scene C_MS4_p2",
		"Caroline If you fancy visiting me again at work, I’m sure I could use your help more often.",
		"Caroline Just drop by whenever you’re free.",
		"MC No problem! I’m sure you’ll see me again, soon enough.",
		"jump C_ES3"

	],
	"C_ES3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_E with fadeIn",
		"wait 3000",
		"scene C_ES3_p1 with fadeIn",
		"play music RetroFutureClean loop",

		"MC Oh! Hey, Caroline. What are you doing in my room?",
		"MC And who’s this?",
		"Caroline Hiii, {{player.Name}}! I want you to meet Violet!",
		"Violet Hey there.",
		"Caroline I promised you a surprise - so Violet’s going to help you relieve some of that stress you’ve built up.",

		"scene C_ES3_p2",
		"MC You brought a prostitute to my bedroom!?",
		"Violet WHAT?!",
		"Caroline Ahahaha! Oh, my God! I’m so sorry, Violet!",

		"scene C_ES3_p3",
		"Violet Fuck you! I’m not some whore!",
		"Violet Caroline made a deal with me - she owes me a favour if I help you relax.",
		"MC Huh? Like a massage?",

		"scene C_ES3_p4",
		"Caroline She’s not a prostitute. She’s one of my friends.",
		"Caroline I’ve made a deal with her - I owe her a favour now, but in exchange she’s going to do something for you.",
		"MC Do something?",

		"scene C_ES3_p5",
		"Caroline Are you seriously THAT dense? She’s going to get you off!",
		"MC OH!",
		"MC Sorry, Violet! I didn’t realise.",
		"Caroline I’m gonna leave you two alone now. Have fun!",

		"scene C_ES3_p6",
		"Violet See you later, Caroline. Follow me, {{player.Name}}.",
		"MC What are we going to do, then?",
		"MC Like... sex? Or anal?",

		"scene C_ES3_p7",
		"Violet We’re going to get this over with, quickly.",
		"Violet I’ll lie back on the bed and let you fuck my mouth.",
		"MC Awesome!",

		"scene C_ES3_p8",
		"Violet Well? Are you ready? I have places to be.",
		"MC S-Sure!",

		"MC What deal did you make with Caroline, by the way?",
		"Violet She owes me one. I’ll probably end up making her suck off one of my male friends, just to even the score.",

		"scene C_ES3_p9",
		"Violet Okay - let’s get this party started.",
		"Violet First things first - we need to get you hard.",
		"MC (She’s REALLY sexy! Caroline has good taste in friends!)",
		"MC (Let’s see if she’s as slutty as she looks!)",

		"scene C_ES3_p10",
		"Violet Ahh….",
		"MC Oooh…",
		"MC (I can feel her tongue, licking the tip of my cock.)",
		"MC (She’s swirling it around - she’s clearly done this a LOT of times before.)",

		"scene C_ES3_p11",
		"MC (Taking pictures for Caroline, has gotta be one of the best decisions I’ve made all year!)",
		"MC (I never imagined it would end up, with me getting a blowjob from a cocksucking slut!)",

		"scene C_ES3_p12",
		"Violet Ah, there we go. Now we can properly begin.",
		"MC I know you said a quick blowjob, but can I use your tits too?",
		"Violet (Sigh) Fine.",

		"scene C_ES3_p13",
		"MC Awesome! ",
		"Violet Do you need me to hold my breasts together?",
		"MC Could you?",
		"Violet Sure.",

		"scene C_ES3_p14",
		"Violet How’s that?",
		"MC Much better!",
		"MC (I can feel her warm breasts, wrapped around my cock!)",

		"scene C_ES3_p15",
		"Violet (Ugh! How long is this little twerp gonna take to cum?)",
		"Violet (I thought my boobs would be enough, but maybe I should give him a helping hand?)",

		"scene C_ES3_p16",
		"MC OOOHHH!",
		"MC (Holy shit! She’s licking my ass! I never imagined it would be so sensitive there!)",
		"MC (Crap! If she keeps that up, I’ll cum before, I even get a blowjob from her!)",

		"scene C_ES3_p17",
		"MC (I’ll try to endure it for a while - it feels amazing!)",
		"Violet (Time to hold my breasts a little closer together. Let’s see if we can make him cum, before I have to go through with a blowjob.)",
		"MC Ahh… Ohh…",

		"scene C_ES3_p18",
		"MC God, yes! Ahh… Fuck!",
		"Violet (Time to twist and flick my tongue even faster.)",
		"MC AHhhhh! OH! OH OH!!!",

		"scene C_ES3_p19",
		"MC (Between her breasts and her tongue, licking my ass, I feel like I’m about to cum!)",
		"MC (I better stop this and get my blowjob, to finish things off!)",
		"MC Okay, ahh- that’s enough. I want you to use your mouth now.",
		"Violet Ugh! Fine.",

		"scene C_ES3_p20",
		"Violet (Suck Suck)",
		"MC Ooohh - that’s the spot!",
		"MC (I can’t hold back anymore. I really HAVE to fuck her face!)",

		"scene C_ES3_p21",
		"Violet MMPFFFFF!",
		"Violet (Fuck! I wasn’t expecting him to thrust his cock into my mouth like that!)",
		"MC Oooh yeah!",

		"scene C_ES3_p22",
		"MC Damn, you’re a great cocksucker. You know that?",
		"Violet (Smooth... That’s just the kind of compliment a girl wants to hear, from a guy she just met…)",
		"Violet Mmpfff mmmm….",

		"scene C_ES3_p23",
		"MC Ahh, fuck… I’m gonna cum soon!",
		"Violet (At least he gave me a warning. That’s more than I can say for any of my exes.)",

		"scene C_ES3_p24",
		"MC Ah! Ugh! Yes!",
		"Violet (Shlurrrp)",
		"Violet (Suck Suck Suck)",
		"MC I’m cumming!",

		"scene C_ES3_p25",
		"MC Open wide!",
		"MC Ahhh! Yes!",
		"Violet (I better make sure that the favour, Caroline owes me, is worth it!)",

		"scene #fff with fadein",
		"wait 700",
		"scene C_ES3_p25",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene C_ES3_p25a with fadeIn",
		"MC UGH! Ahhhhhh!",
		"MC (Pant... ) Ooohh….",
		"MC Do you need me to get you a tissue or anything, to spit it-",
		"Violet (Gulp!)",
		"MC Or you could just do that.",

		"scene C_ES3_p26",
		"Violet So, Caroline was telling me, you got a boner while looking at her. Is that true?",
		"MC Uh… Yeah, but it’s not the full story.",
		"Violet What’s the story, then?",
		"MC She was dressed up in a sexy costume. A guy doesn’t really have any control over his cock, in a situation like that. So you can’t really say it’s my fault.",
		"Violet Eh... fair enough.",
		"Violet Just one more question - do you prefer me or Caroline?",

		"scene C_ES3_p27",

		"MC Come on - I can’t answer that. She’s my friend.",
		"Violet Sure you can!",
		"MC (Sigh…) You’re hot, but… Caroline’s more of my type. She’s really gorgeous.",

		"scene C_ES3_p28",
		"Caroline (Gasp!)",

		"Caroline (My friend is actually… attracted to me. It’s not just the costume I was wearing!)",
		"Caroline (What the Hell am I supposed to do now? Is it even fair of me, to let him keep taking pictures of me? Or is that just torturing him?)",
		"jump C_AS3"
	],
	"C_AS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene ND_A with fadeIn",
		"wait 3000",
		"scene C_AS3_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"Caroline Okay - that’s me ready to go.",
		"Caroline Let’s just get this photo session over, as soon as possible.",
		"MC No problem. Do you want to strike a pose and I’ll get the camera ready.",

		"scene C_AS3_p2",
		"Caroline (Oh, my God… he’s got a boner again!)",
		"Caroline (Again?! I guess it must be his age.)",
		"Caroline ...",


		"scene C_AS3_p3",
		"Caroline (And he REALLY needs to buy himself a proper belt.)",
		"Caroline (He can’t just have his dick pop out, every time he gets turned on!)",
		"MC Is everything alright, Caroline? Did you hear what I said?",

		"scene C_AS3_p4",
		"Caroline You’ve… umm… got a problem.",
		"MC Huh?",
		"Caroline It’s happening again, {{player.Name}}.",
		"MC Wh-What?!",
		"play music Rhinoceros loop",
		"scene C_AS3_p5",
		"MC Oh shit! I’m so sorry!",
		"MC I didn’t even notice. It was the costume!",
		"Caroline You are a sick little pervert.",

		"scene C_AS3_p4",
		"Caroline I swear to God… after I caught you peeping last time, I thought we had this sorted.",
		"MC I’m sorry, Caroline! I didn’t mean to-",
		"Caroline Ugh! You disgust me.",
		"MC I- I didn’t mean to!",

		"scene C_AS3_p6",
		"Caroline Jesus Christ… You are SO hard right now!",

		"Caroline I can’t believe you get turned on, by your own friend like this!",

		"Caroline We’re supposed to be friends, you fucking sicko.",
		"MC (I’m so fucked… She’s actually gonna kill me!)",

		"scene C_AS3_p7",
		"Caroline Sit down and stay the Hell away from me, you pervert!",
		"MC Caroline, I SWEAR - I didn’t mean to get an erection!",
		"MC I can’t control them!",


		"scene C_AS3_p8",
		"Caroline Bullshit! You’re just a horny little creep.",

		"Caroline God… what am I going to tell Bob?",
		"MC NO! Don’t say anything to Bob! PLEASE!",
		"Caroline I’m gonna have to advertise for a new photographer too.",
		"MC PLEASE DON’T TELL Bob!",
		"Caroline ...",
		"play music OctoBlues loop",
		"scene C_AS3_p9",
		"Caroline Haha…",
		"Caroline AHAHAHAAHAHAHA!",
		"MC Huh?",
		"Caroline Your face! HAHA! You were terrified!",
		"MC Is… Is this a joke?",
		"Caroline Hahaha! I couldn’t resist!",

		"scene C_AS3_p10",
		"Caroline My anger may have been fake - but this boner is very much real.",
		"Caroline I’m not gonna fuck you, but let’s see what I can do to help you out.",
		"MC Caroline, you don’t have t-",

		"scene C_AS3_p11",
		"Caroline Shush. Don’t try to talk me out of it.",
		"Caroline Do you seriously want me to change my mind?",
		"MC Haha! I guess not!",
		"Caroline Good.",

		"scene C_AS3_p12",
		"Caroline Now, sit back, shut up, and enjoy this.",
		"MC ...",
		"MC Mmm…",
		"MC (My cock is sliding between her asscheeks!)",
		"MC Ah... She sped up...",
		"MC It feels amazing...",

		"scene C_AS3_p13",
		"Caroline (Shit… maybe this was a bad idea…)",
		"Caroline (His shaft keeps brushing against my pussy.)",
		"Caroline (If I keep letting him do this I’ll get far too turned on… It would be more awkward if I just stopped now, though.)",

		"scene C_AS3_p14",
		"MC Ah…",
		"MC This is sooo good, Caroline…",
		"Caroline (And I’ve started making him happy… I’d only blueball him if I stopped now.)",


		"scene C_AS3_p15",
		"MC Mmm! Yes…",
		"Caroline Ah…",
		"Caroline (Shit! I can’t let myself moan. He can’t think I’m enjoying this!)",

		"scene C_AS3_p16",
		"MC (Well, this was certainly an unexpected surprise!)",
		"MC (I didn’t think Caroline would even be, slightly open to doing something like this.)",
		"MC (Especially after how angry she got, when she caught me peeping on her!)",

		"scene C_AS3_p17",
		"MC (Women are strange creatures - I don’t think I’ll ever fully understand them!)",
		"Caroline Are you enjoying this?",
		"MC Yeah, Caroline. It’s great! Can you go a bit faster?",

		"scene C_AS3_p18",
		"Caroline Like this?",
		"MC Ahh… That’s perfect!",
		"MC Yeee.. ahh...",
		"MC Ahh! Mmmm!",

		"scene C_AS3_p19",
		"MC Fuck! I’m getting close!",
		"Caroline You’re gonna cum?",
		"Caroline Just be careful that you don’t get any over the costume! I still have to sell this!",

		"scene C_AS3_p20",
		"MC Ahhhh! I’m cumming!",
		"MC Ugh! Fuck!",
		"Caroline (Wow! He came REALLY hard there! I think he enjoyed that!)",

		"scene C_AS3_p21",
		"MC Phew… That was amazing.",
		"MC Thanks for that, Caroline. You were incredible!",
		"Caroline I don’t know what you’re talking about?",

		"scene C_AS3_p22",
		"MC What you just did there now-",
		"Caroline We were about to take some photos. Hurry up and get the camera ready!",
		"MC Uh, okay! Sure. But seriously, you were amazing with your ass, back there.",
		"Caroline I think your imagination has run a little wild, {{player.Name}}. Nothing happened.",
		"MC (Huh?! Why is she acting like she didn’t just, grind against my cock?)",
		"Caroline Come on! We have photos to take! Chop chop!",
		"jump C_ES4"

	],
	"C_ES4":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_E with fadeIn",
		"wait 3000",
		"scene C_ES4_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"Caroline Haha! I can’t believe it!",
		"MC (She sure seems, happy for a change!)",
		"MC Hey, Caroline! What’s so funny?",

		"scene C_ES4_p2",
		"Caroline Oh! Hiii! I didn’t see you come in, there.",
		"Caroline Nothing’s funny - I’m just… You need to see this.",
		"Caroline Here - take a seat beside me! Quick! This is amazing!",

		"scene C_ES4_p3",
		"MC Okay... what am I looking at?",
		"Caroline These are my profit/loss accounts for the past year!",
		"MC What are all those red numbers?",
		"Caroline Those are months where I lost money - but look at the last one!",
		"MC Huh? It’s black there.",
		"Caroline That means I turned a profit! And look! It’s almost enough to pay off, the past four months debts!",
		"Caroline Most of it, ended up, coming from online sales.",

		"scene C_ES4_p4",
		"MC Ahh, so what you’re really saying, is that you couldn’t have done it without ME?",
		"Caroline I never said that.",
		"MC Who took all those pictures, for your website and store?",

		"scene C_ES4_p5",
		"Caroline Haha! I’m grateful you took the pictures - but remember, that I spent MONTHS; setting up business accounts, organising shipping, finding a location to rent.",
		"Caroline You certainly helped - but I still did the LION’S share of the work.",
		"MC Fine! Fine! I get it! Haha!",
		"MC Say - you remember that thing that happened, during the last cosplay?",

		"scene C_ES4_p6",
		"MC I’d really like to do that again.",
		"Caroline Wh-What?",
		"MC You know - when you rubbed yourself against my cock?",
		"MC Don’t you want to do it again too?",

		"scene C_ES4_p7",
		"Caroline {{player.Name}}... That was just us having a bit of fun.",
		"Caroline Were were just blowing off some steam.",
		"MC But, I’m really attracted to you.",

		"Caroline I’m sorry… I don’t feel that way. You’re my friend. We had fun together, and did something we shouldn’t have. Let’s not talk about this again. Please...",
		"MC I’m sorry… I just thought… maybe you enjoyed it too.",
		"Caroline (Sigh) Give me some time alone, to think.",
		"MC Okay… I’ll see you later, Caroline.",

		"scene C_ES4_p8",
		"Caroline (What have I done? Was he already attracted to me? Or have I caused it, by posing in those sexy outfits?)",
		"Caroline (I can’t believe what I’ve gotten myself into…)"  ,
		"jump C_MS5"
	],
	"C_MS5":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene C_MS5_p1 with fadeIn",
		"play music OctoBlues loop",

		"Caroline (Well… this is it. I’ve thought things through, and I know my limitations.)",
		"Caroline (I’ll lay down the boundaries with {{player.Name}}, and see if he’s interested.)",
		"Caroline (God… I hope I’m doing the right thing.)",

		"scene C_MS5_p2",
		"Caroline {{player.Name}}? Are you awake?",
		"MC (Snooooree…)",
		"Caroline (He’s sound asleep. Guess that gives me an excuse - to break the ice, before the difficult conversation!)",

		"scene C_MS5_p3",
		"Caroline BOO!",
		"MC AHHH!",
		"MC Jesus Christ! You scared the shit out of me, Caroline! What the Hell?!",

		"scene C_MS5_p4",
		"Caroline Aww, come on. You’re happy to see me.",
		"MC Yeah - but couldn’t you have woken me up gently?",
		"MC Y’know - maybe a hug or pat on the shoulder...",
		"Caroline Pfft! That’s no fun!",

		"scene C_MS5_p5",
		"Caroline Anyway, I have something important to tell you. So I need you to be fully awake.",
		"MC Uh huh?",
		"Caroline I’m willing to help you out with your… problem.",
		"MC Do you mean my erection?",

		"scene C_MS5_p6",
		"Caroline Yeah… that. However, there are some conditions and rules I have to lay down, first.",
		"MC Like what?",
		"Caroline I need you to promise me something, first.",
		"MC Anything!",
		"Caroline You have to respect these rules and not try to push me, to do something I’m uncomfortable with. Does that sound fair to you?",
		"MC Sure, I guess so.",


		"scene C_MS5_p7",
		"Caroline I’m happy to help you get-off, by using my hands or my butt again. But this comes with two conditions.",
		"Caroline The first is, that you start working for free now, when I need photo sessions done.",
		"MC Fair enough.",
		"Caroline The second is, that this ends when you find yourself a girlfriend. From then on, it’s her job.",
		"Caroline Does that sound fair to you?",
		"MC Yeah, that sounds fair.",

		"scene C_MS5_p8",
		"Caroline Ahh, I see you could probably use some help, RIGHT NOW.",
		"MC Huh?",

		"scene C_MS5_p9",
		"MC Aw crap! Sorry.",
		"Caroline Would you like to begin our deal RIGHT NOW?",
		"MC Definitely!",
		"Caroline Let’s get this started, then - Kick off your boxer shorts." ,

		"scene C_MS5_Foot_p1",
		"Caroline Well, that was fast! Shall I begin with my hand today, since you had my ass last time?",
		"MC Yeah, that works for me!",
		"Caroline Okay, here we go.",

		"scene C_MS5_Foot_p2",
		"Caroline Hehe... You’ve got such a hard cock. Do I really turn you on THAT MUCH?",
		"MC Any beautiful girl would, to be honest.",
		"Caroline Oh, so you think I’m beautiful, then?",

		"scene C_MS5_Foot_p3",
		"Caroline How’s this? Am I holding your cock too hard?",
		"MC Mmmm... No, that’s good, right there.",
		"Caroline Okay then - I’ll keep stroking your, thick cock, like this, then.",

		"scene C_MS5_Foot_p4",
		"Caroline You are a pervert. You know that, right?",

		"Caroline Getting, all hard and horny, because of your good friend.",

		"scene C_MS5_Foot_p5",
		"MC Well, it seems being a pervert, comes with benefits.",
		"Caroline So, have you been thinking of me, when you masturbate?",
		"MC What? I don’t-",

		"scene C_MS5_Foot_p6",
		"Caroline Are you trying to tell me that you, don’t wank yourself? That’s bullshit!",
		"MC Of course I do that… But I’m not gonna just tell you what I fantasise about.",
		"Caroline Oh well... Maybe you’ll open up to me, someday soon.",

		"scene C_MS5_Foot_p7",
		"Caroline Are you enjoying this, by the way? Do you want me to do anything different?" ,

		"clear",
		{"Choice":{
			"C_MS5_a1":{
					"Text": "It’s amazing! Don’t stop!",
					"Do": "jump C_MS5_a1",

			},
			"C_MS5_a2":{
					"Text": "Could you maybe use your feet instead?",
					"Do": "jump C_MS5_a2",


			},
		}}

	],
	"C_MS5_a1":[
		"scene C_MS5_Foot_p8",

		"MC It’s amazing! Don’t stop! Ahh…",
		"Caroline In that case, I’ll use both my hands, then!",
		"MC Ah! I’m so close to cumming! Ugh!",


		"scene C_MS5_Foot_p9",

		"Caroline Cum for me! Cum for Caroline!",
		"MC Hnnng! Ahhh! Ugh! Yes!",
		"MC (She’s amazing with her hands!)",
		"scene #fff with fadein",
		"wait 700",
		"scene C_MS5_Foot_p9 with fadeIn",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene C_MS5_Foot_p9a with fadeIn",
		"Caroline Remember, it only lasts until you get a girlfriend - and you’re working for free, with me now!",
		"Caroline Come back to my shop, when you get a chance. I’m ordering in some new stock.",
		"MC Will do, Caroline!",
		"MC Phew… I’m exhausted after that…",
		"Caroline Well, I hate to break the bad news - but it’s time for you to get up.",
		"jump Character_Choice"
	],
	"C_MS5_a2":[
		"scene C_MS5_Foot_p7",

		"MC Could you try using your feet instead?",
		"Caroline M-My feet?",
		"MC I know you said you would get me off with your hand or ass, as part of the deal - but can we make an exception for feet too?",

		"scene C_MS5_Foot_p11",
		"Caroline Sure, I guess so.",
		"Caroline To be honest, my real limitations were oral and actual sex. I didn’t imagine you had a foot fetish.",
		"Caroline I’ve never actually used my feet on a guy before. So you’ll need to guide me a bit. How is this?",


		"scene C_MS5_Foot_p12",
		"MC That’s good. Just keep moving your feet up and down.",
		"Caroline It feels a little awkward.",
		"MC Don’t worry about it - you’re doing fine.",
		"MC If you wanted - you could also try holding my balls with your toes and caressing my cock with your other foot.",

		"scene C_MS5_Foot_p13",
		"Caroline Kinda like this?",
		"MC Yeah, just like that! Mmm…",
		"Caroline (This is kinda fun actually!)",

		"scene C_MS5_Foot_p14",
		"Caroline Are you gonna cum soon? My legs are getting a bit tired.",
		"MC Soon-ish. If it helps, though, you can use your hand as well.",
		"Caroline Is that okay?",
		"MC Absolutely!",

		"scene C_MS5_Foot_p15",
		"MC Oh God… yes! Ahh…",
		"Caroline Oh! You’re about to cum! I’m gonna use my hand, to finish you, now!",
		"MC Ahh…",

		"scene C_MS5_Foot_p16",
		"Caroline Here we go!",
		"MC Ah! Ahhh! Ahhhhhh! HNNNNGGGGG!",
		"MC I’m cumming!",
		"scene #fff with fadein",
		"wait 700",
		"scene C_MS5_Foot_p16 with fadeIn",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene C_MS5_Foot_p16a with fadeIn",
		"Caroline Oh wow… That’s A LOT of cum right there!",

		"Caroline (I think {{player.Name}} really enjoyed this!)",
		"MC Phew... That was incredible, Caroline! Thank you so much...  (Yaaawwwn!)",
		"Caroline I hope you aren’t tired! It’s time to get up!",

		"scene C_MS5_Foot_p17",
		"MC Aww… Thanks anyway, Caroline. I’m going to enjoy this deal we made!",
		"Caroline Remember, it only lasts until you get a girlfriend - and you’re working for free, with me now!",
		"Caroline Come back to my shop, when you get a chance. I’m ordering in some new stock.",
		"MC Will do, Caroline!",
		"jump Character_Choice"
	],
	"S_MS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene Morning with fadeIn",
		"wait 3000",
		"scene S_MS1_p1 with fadeIn",
		"play music Deadly_Roulette loop",

		"MC (Sara’s engrossed in one of her video games again!)",
		"MC (If she doesn’t hurry up and get ready, she’s gonna be late for her first class.)",
		"MC Hey, you almost ready to go?",

		"scene S_MS1_p2",

		"MC (Huh, I don’t think she heard me, with the headphones on.)",
		"MC Hey! Sara!",
		"Sara Huh?! Oh! Hey, {{player.Name}}!",
		"MC You’re shouting!",
		"Sara What’s up?",
		"MC We need to leave for school in five minutes!",

		"scene S_MS1_p3",
		"Sara It’s okay, I’ll be done in like… a couple of minutes.",
		"MC We both know that’s not true.",
		"MC I can CLEARLY see, you’ve only just started the round!",

		"scene S_MS1_p4",

		"Sara Aww, c’mon {{player.Name}}! You’re not Bob! Hehe!",
		"Sara Why do you care if I’m a little bit late to school? I’m almost top of the class, anyway.",
		"MC Almost top? Weren’t you THE top, two years ago? You’re slipping, Sara.",

		"scene S_MS1_p2",
		"Sara Grr… Fine! I’ll log off.",
		"Sara Say... About Mrs. Celia, the other day...",

		"scene S_MS1_p3",
		"MC I’d rather not talk about it.",
		"Sara Oh… sorry. I understand.",
		"MC Nah, you don’t need to apologise. You were right - I should have listened to your advice.",
		"MC I’ll try to do that more in future, I promise.",

		"scene S_MS1_p4",
		"Sara Want to walk to school together?",
		"MC You’ll need to hurry your ass up! I’ve been ready to leave for the past ten minutes!",

		"jump S_AS1"
	],
	"S_AS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene S_AS1_p1 with fadeIn",
		"play music Deadly_Roulette loop",

		"MC Hey there, sexy.",

    "scene S_AS1_p2",
    "Sara Shush! Y-You can’t say stuff like that in public!",
		"clear",
		{"Choice":{
			"S_AS1_a1":{
					"Text": "Flatter her.",
					"Do": "jump S_AS1_a1",

			},
			"S_AS1_a2":{
					"Text": "Don’t embarrass her in school.",
					"Do": "jump S_AS1_a2",


			},
		}}
	],
	"S_AS1_a1":[
		"MC Can’t say stuff like what? Like how absolutely gorgeous you are?",
		"Sara (Oooh… I get so wet when he compliments me like that…)",
		"Sara J-Just save it for when we get home… I don’t want anyone else to see…",
		"MC I’ll see you later on then… beautiful.",
		"Sara {{player.Name}}! Haha!",
		"jump S_NSS"

	],
	"S_AS1_a2":[
		"MC Yeah, you’re probably right. I won’t say it anymore.",
		"Sara I… I didn’t tell you… to not say it anymore… Just not in public.",
		"MC Oh, so you want me to keep telling you that you’re stunningly beautiful?",
		"Sara (Hehe!) N-No… I didn’t say that either…",
		"MC I’ll see you when you get home.",
		"Sara See ya {{player.Name}}!",
		"jump S_NSS"

	],
	"S_NSS":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Night with fadeIn",
		"wait 3000",
		"scene S_NSS_p1 with fadeIn",
		"play music MiamiViceroy loop",

		"wait 1000",
		"scene #fff with fadeIn",
		"wait 1000",
		"scene S_NSS_p2",
		"MC (She’s fast asleep. This gives me a good opportunity to explore her body.)",
    "MC (Hmm, should I make her touch my cock? Or maybe I should fuck her mouth? Or I could rub my cock between her thighs?)",
    "MC (Alternatively, I could pull her panties aside and finger her.)",

		"clear",
		{"Choice":{
			"S_NSS_a1":{
					"Text": "Let’s finger her pussy a bit.",
					"Do": "jump S_NSS_a1",

			},
			"S_NSS_a2":{
					"Text": "I’ll start by rubbing my cock between her thighs.",
					"Do": "jump S_NSS_a2",


			},
			"S_NSS_a3":{
					"Text": "I’ll put my cock in her mouth while she sleeps.",
					"Do": "jump S_NSS_a3",


			},
			"S_NSS_a4":{
					"Text": "I’m gonna make her wank me off while she sleeps.",
					"Do": "jump S_NSS_a4",


			},
		}}

	],
	"S_NSS_a1":[
		"clear",
		"scene S_NSS_pussy_p1",
		"MC (Let’s get a look at her cute little pussy again.)",
		"MC (Easy does it… Almost there.)",
		"MC Wow… (Her skin is so smooth down there.)",
		"scene S_NSS_pussy_p2",
		"MC (Sara looks so fucking tight. I bet, fucking her would be the closest thing to, Heaven-on-Earth!)",
		"MC (I simply HAVE to put a finger in and feel inside.)",

		"scene S_NSS_pussy_p3",
		"MC (It looks like she’s already a bit wet, from me touching her.)",
		"MC (It should be easy for me to slide my finger in.)",

		"scene S_NSS_pussy_p4",
		"MC (Mmm, it feels so warm inside her!)",
		"MC (My cock would fit perfectly, in there.)",
		"Sara Mmm…",

		"scene S_NSS_pussy_p5",
		"MC (It sounds like Sara’s enjoying this, even if she is sleeping.)",
		"MC (I can probably get away with going a bit deeper.)",
		"Sara Ah…",
		"MC (Her breathing is growing heavier now.)",

		"scene S_NSS_pussy_p6",
		"Sara Hmm… Mmm…",
		"MC (Uh oh, she’s started shifting. I think that’s her waking up now!)",
		"MC (Let’s creep out of here before she notices me.)",

		"scene S_NSS_pussy_p7",
		"Sara (Uh… What time is it?)",
		"Sara (Why is my vagina all wet? And why am I feeling so horny?)",
		"jump S_MS3"
	],
	"S_NSS_a2":[

		"scene S_NSS_thigh_p1",
		"MC (Sara’s already in a good position for me to fuck her thigh. I can make the most of this!)",
		"MC (Here we go…)",

		"scene S_NSS_thigh_p2",
		"MC Mmm…",
		"MC (That’s good… I’m hoping that she doesn’t wake up though. The back of the knee can be quite sensitive - and I know that Sara is VERY ticklish!)",

		"scene S_NSS_thigh_p3",
		"MC Ah… Ohh…",
		"Sara …",
		"MC (Sounds like she’s a deep sleeper. I might actually get to cum!)",

		"scene S_NSS_thigh_p4",
		"MC (I’m gonna thrust a bit deeper now.)",
		"Sara Zzzz….",

		"scene S_NSS_thigh_p5",
		"MC Oooh… That’s good…",
		"MC Mmm… (I’m gonna cum soon.)",
		"MC (Where should I finish though?)",

		"scene S_NSS_thigh_p6",
		"MC (Aha! I’ll cum over her feet before I leave.)",
		"MC (Hopefully she’ll take a shower before she notices my cum in the morning!)",
		"MC Ahh… Yes… Ugh!",

		"scene S_NSS_thigh_p6a",
		"MC Phew… (That was good.)",
		"stop music",
		"scene #000 with fadeIn",
		"MC (Time to go back to my room now. At least I got to cum this time without waking her up!)"	,
		"jump S_MS3"
	],
	"S_NSS_a3":[

		"scene S_NSS_mouth_p1",

		"MC (Okay, let’s do something risky and try to make Sara give me a blowjob while she sleeps.)",
		"MC (I reckon there’s a high chance she’ll wake up - so I’ll have to be ready to run at the slightest twitch.)",

		"scene S_NSS_mouth_p2",
		"MC (There’s a good girl… Just open up a little wider for me…)",
		"Sara Zzzz….",

		"scene S_NSS_mouth_p3",
		"MC Ooh…",
		"MC (Her lips are wrapping around my glans!)",
		"MC (Damn, this feels good. Time to get another inch or two in.)",

		"scene S_NSS_mouth_p4",
		"MC Fuck… That’s good…",
		"MC (It’s so fucking sexy, seeing my cock bulge out her cheek like that.)",
		"Sara (Snoooore)",

		"scene S_NSS_mouth_p5",
		"MC (I wish I could just facefuck her like this and cum in her mouth while she’s asleep.)",
		"MC (There’s NO way she’d sleep through that though.)",
		"MC (At least this gives me a great mental image to masturbate to!)",

		"scene S_NSS_mouth_p6",
		"Sara Zzzz…. (Cough!)",
		"MC Shit… (She’s waking up! I need to get out of here fast!)",
		"MC (Sara really likes me, but I don’t think that she’d take too kindly to finding me, molesting her while she slept!)",

		"scene S_NSS_mouth_p7",
		"Sara Hmm… Yuck… Why have I been drooling?",
		"Sara (I’ve never drooled in my sleep before…)",
		"Sara (There’s a funny taste in my mouth too.)",
		"Sara (Probably something I ate…)",
		"Sara Zzz…",
		"stop music",
		"scene #000 with fadeIn",
		"MC (Time to go back to my room now.)",
		"jump S_MS3"
	],
	"S_NSS_a4":[

		"scene S_NSS_hand_p1",
		"MC (Alright, let’s make Sara wank me off while she sleeps.)",
		"MC (C’mon, Sara. Give me your arm.)",
		"MC (There we go…)",

		"scene S_NSS_hand_p2",
		"MC Ahh… (Perfect!)",
		"MC (She hasn’t really got a grip on my cock, but at least it still feels nice with her soft fingers touching it.)",
		"MC (Let’s see if I can get away with thrusting my hips a bit.)",

		"scene S_NSS_hand_p3",
		"MC Mmm… Ah…",
		"Sara Zzzz…",
		"MC (Maybe I can go a little bit quicker.)",

		"scene S_NSS_hand_p4",
		"MC Ah… Ah…",
		"MC (Shit! I’m getting close to cumming!)",
		"Sara Yaaaaawwn!",
		"MC (Uh oh! Time to bail!)",

		"scene S_NSS_hand_p5",
		"Sara Huh? Is someone there?",

		"Sara Bob?",
		"Sara (No… I must have been dreaming.)",
		"Sara Yaaaawn… Zzzzz…..",
		"stop music",
		"scene #000 with fadeIn",
		"MC (Time to go back to my room now.!)"	,
		"jump S_MS3"
	],
	"S_MS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene N_Morning with fadeIn",
		"wait 3000",
		"scene S_MS3_p1 with fadeIn",
		"play music Marty_Gots_a_Plan loop",

		"MC (Let’s see what could be hidden in here.)",
		"MC (Most of the girls her age have started drinking alcohol now. She might have some stashed away in here.)",
		"scene #000 with fadeIn",
		"play sound DrawerOpen",
		"wait 2000",
		"stop sound",
		"MC (Boring… Junk… Garbage…)",
		"MC (How much makeup does one girl need?!)",
		"MC (Whoa! Hold up!)",

		"scene S_MS3_p2",
		"MC (A pair of Sara’s panties?)",
		"MC (I could sneak these back to my room before she returns.)",
		"MC (Wait - why am I even thinking of doing something like that?! That stupid therapist is putting perverted ideas into my head!)",
		"MC (I should probably just put them back and-)",

		"scene S_MS3_p3",
		"play music AcesHigh loop",
		"Sara AHEM!",
		"Sara {{player.Name}}? What are you doing in my underwear drawer?",
		"MC (FUCK!)",
		"MC (I’m gonna need to come up with a plan to get out of this one…)",

		"clear",
		{"Choice":{
			"S_MS3_a1":{
					"Text": "Drop the panties in the drawer and walk away without saying a word.",
					"Do": "jump S_MS3_a1",

			},
			"S_MS3_a2":{
					"Text": "Lie and state that you found them lying on the floor.",
					"Do": "jump S_MS3_a2",


			},
		}}

	],
	"S_MS3_a1":[
		"scene S_MS3_p4",
		"MC (The less that I say the better. Maybe if I act like nothing weird is going on, then Sara will think I was just cleaning or putting away laundry?)",
		"MC (Yeah, that’s the best way to handle this.)",
		"Sara {{player.Name}}! What are you doing with my-",

		"scene S_MS3_p6",
		"Sara Huh?!",
		"Sara (Wh-What?! He just dropped my panties and  left?)",
		"MC (Haha! Nailed it! Now she thinks I was just putting away the laundry!)",
		"Sara (Was that supposed to be a bluff that he was doing the laundry?)",
		"MC (There’s no way she’ll ever think that I was about to steal her panties and jerk off into them!)",
		"Sara (Damn… the thought of him stealing my panties and jerking off into them is pretty fucking hot.)",

		"scene S_MS3_p7",
		"Sara Really… really… hot...",
		"Sara (He must have really liked those panties if he took them out of the drawer first.)",
		"Sara (I wonder if I could surprise him with them.)",
		"jump S_AS2"
	],
	"S_MS3_a2":[
		"scene S_MS3_p4",
		"MC (I just have to tell her that I came into her room and found her panties lying on the floor.)",
		"MC (You can do this, {{player.Name}}. Practice in your head, then turn around, and confidently explain what happened.)",
		"MC (Sara, I came into your room, saw your panties laying on the floor, and picked them up.)",
		"Sara {{player.Name}}?",
		"MC (Sara, I came into your room, saw your panties laying on the floor.)",
		"Sara {{player.Name}}! What the heck are you doing?!",
		"MC (Sara, I came into your room, saw your panties laying on the-)",
		"Sara {{player.Name}}! Answer me!",

		"scene S_MS3_p5",
		"MC S-Sara, I lay in your room and came in your panties!",
		"Sara WHAT?!",
		"MC N-No! I came in your panties - I mean, I came on your floor!",
		"Sara Wh-What?! Eww!",
		"MC (Oh fuck! I’m screwing this up! I need to take a deep breath and start again.)",
		"MC I came into your… room. I saw your panties lying on the floor. Then I picked them up to put back in the drawer.",
		"MC Here, take them back!",

		"scene S_MS3_p6",
		"MC (Jesus Christ! That was almost as bad as my experience with Mrs. Celia!)",
		"MC (Why can’t I just socialise with people properly!)",

		"scene S_MS3_p7",
		"Sara (Hehe! It was REALLY funny seeing {{player.Name}} get flustered like that.)",
		"Sara (I gotta admit though - the thought of him using my panties and cumming in them is really hot.)",
		"Sara (Just the thought alone is getting me all wet.)",
		"jump S_AS2"
	],
	"S_AS2":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene S_AS2_p1 with fadeIn",
		"play music Fork_and_Spoon loop",

		"MC (Oh! There’s Lily and Sara. They must be waiting for their next class to start.)",
		"Lily What was it you were sooo desperate to show me, Sara?",
		"MC (Huh? Is Sara getting her phone out?)",
		"Lily Oh, my God! Is this Dan from Chemistry?",

		"scene S_AS2_p2",

		"Sara No! It’s… {{player.Name}}",
		"Lily No way! Show me again!",
		"Sara Not in school… I’ll text you later.",
		"Lily Oh, my God!",
		"MC (She’s showing off that picture she took, of my dick!)",

		"scene S_AS2_p3",
		"Lily Like, what the hell happened? Why was he showing you his junk?",
		"Sara We… We were playing a game… It got a little out of hand.",
		"Lily No kidding! You NEED to get another one!",
		"Sara Another pic?",
		"Lily Yeah, and make sure he is fully hard this time.",

		"scene S_AS2_p4",
		"MC (Jeez… I should have forced her to delete it when I had the chance. I should head on to my next class.)",
		"Sara How exactly am I supposed to do that?",
		"Lily Easy - wait until he goes to sleep. Rub your hand over his junk a bit, to get him all hot and horny - then snap a pic. Easy!",
		"Sara Eh… I don’t know… It sounds a bit risky.",
		"Lily Don’t pussy out on me now, Sara!",
		"jump S_NS1"
	],
	"S_NS1":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Night with fadeIn",
		"wait 3000",
		"scene S_NS1_p1 with fadeIn",
		"play music Marty_Gots_a_Plan loop",

		"Sara …",
		"Sara (I wonder if he’s definitely asleep.)",
		"Sara {{player.Name}}? Are you up?",
		"MC …",

		"scene S_NS1_p2",
		"Sara (Okay, you can do this, Sara. Be brave!)",
		"Sara (You have to get this picture of his cock, for Lily.)",
		"Sara (Then you can prove that you’re one of the cool kids, and not just a nerdy virgin!)",

		"scene S_NS1_p3",
		"Sara (Hey, this is easier than I thought it would be! He’s only in his boxer shorts!)",
		"Sara (I just need to strip these off him, then start moving his cock until it gets, all stiff and hard…)",
		"Sara (...like that time in my bedroom, when he pressed it up against my belly.)",

		"scene S_NS1_p4",
		"Sara (Wow… It always takes my breath away, each time I see it!)",
		"Sara (It feels like there’s a hundred tiny butterflies in my belly right now!)",
		"Sara (I don’t think I even need to move his cock at all… it’s already quite stiff!)",

		"scene S_NS1_p5",
		"Sara (I’ll just take a quick picture of it, then sneak out of his bedroom.)",
		"Sara ({{player.Name}} won’t even know I was in here! Haha! Perfect!)",
		"Sara (On the other hand… maybe I could touch his cock, just a little bit…)",

		"scene S_NS1_p6",
		"Sara (Yeah, I should rub it a bit - just to get a better picture, of course.)",
		"Sara (Wow… it’s getting so much bigger and harder!)",
		"Sara (I wonder how long I should do this for?)",

		"play music Deadly_Roulette loop",

		"scene S_NS1_p7",
		"MC Boo!",
		"Sara EEEKKK!",
		"Sara (AHHH! He woke up!)",

		"scene S_NS1_p8",
		"Sara I- I- *Sniff* I’m s-so sorry!",
		"MC What where you doing?",
		"Sara I was… I was… *sob* t-trying to take a… picture…",
		"MC Don’t you already have one on your phone?",

		"scene S_NS1_p9",
		"Sara I… wanted another…",
		"Sara Please forgive me. I’m sooo sorry! *Sob*",


		"Sara I’ll- I’ll do anything! Just don’t tell Bob!",

		"scene S_NS1_p10",
		"MC Hey - relax. I won’t tell Bob.",
		"Sara Th-Thank you. *Sniff* I’ll do anything for you.",
		"Sara O-Or to you!",

		"scene S_NS1_p11",
		"MC Come on into bed and sleep beside me tonight.",
		"Sara Th...that’s all?",
		"MC Yeah, come on in beside me. It’s warm under the covers.",

		"scene S_NS1_p12",
		"Sara Th...thank you… I’m so sorry. *Sniff*",
		"MC Hey - it’s alright. Dry your eyes. Try to breathe.",
		"MC If you were THAT desperate for a picture of my junk, you could have just asked.",

		"scene S_NS1_p13",
		"Sara Hehe… You always make me laugh so easily…",
		"MC That’s better. Let’s get rid of those tears.",
		"MC I’ll shuffle over here, so there’s room for you.",

		"scene S_NS1_p14",
		"Sara Thanks, {{player.Name}}...",
		"MC You still look a little stressed. Is everything alright?",
		"Sara Actually… I wanted to ask you something...",

		"play music Niles_Blues loop",
		"scene S_NS1_p15",
		"Sara D...Do you… like me?",
		"Sara B-Because after everything that happened - with the videogames, Lily, you.. and me...",
		"Sara Y-you said.. I’m nice.. s-sexy...",
		"Sara I… I just need to know…",

		"clear",
		{"Choice":{
			"S_NS1_a1":{
					"Text": "Yes, Sara. I really like you.",
					"Do": "jump S_NS1_a1",

			},
			"S_NS1_a2":{
					"Text": "Stay silent.",
					"Do": "jump S_NS1_a2",


			},
		}}

	],

	"S_NS1_a1":[
		"clear",
		"Sara (Please say yes…)",
		"MC Yes, Sara. I really like you.",
		"scene S_NS1_p16a",
		"MC Honestly, I thought it would have been pretty obvious.",
		"Sara (Oh, my God!)",

		"play music Fork_and_Spoon loop",
		"scene S_NS1_p18",
		"Sara I- I- I can’t believe I just asked you that. G-Go back to sleep.",
		"Sara Forget what I just said!",

		"Sara (Stupid, Sara! How could he ever love a nerdy virgin like you?! )",
		"MC (Huh?! Women are strange…)"	,
		"scene #000 with fadeIn",
		"wait 3000",
		"scene S_NS1_p19",
		"MC (YAWN!)",
		"MC (Looks like Sara left during the night. I wonder when she snuck out. I’ll probably see her around school today anyway.)",
		"MC (I’ve never seen her that emotional before.)",
		"jump S_MS1a"
	],
	"S_NS1_a2":[
		"clear",
		"scene S_NS1_p17",

		"Sara Because I think I like you… more than a friend...",
		"MC …",
		"Sara (Please say yes…)",
		"MC …",
		"Sara (Please, {{player.Name}}… say anything...)",
		"MC …",
		"play music Fork_and_Spoon loop",
		"scene S_NS1_p18",
		"Sara N-Nevermind! I- Forget I asked you about it!",

		"Sara (Stupid, Sara! How could he ever love a nerdy virgin like you?! And he’s your friend!)",
		"Sara (You shouldn’t have put him in that position! You could ruin your relationship with him!)",
		"MC Are you okay, Sara?",
		"Sara J-Just go to sleep, you b-big dumbo!",
		"scene #000 with fadeIn",
		"wait 3000",
		"scene S_NS1_p19",
		"MC (YAWN!)",
		"MC (Looks like Sara left during the night. I wonder when she snuck out. I’ll probably see her around school today anyway.)",
		"MC (I’ve never seen her that emotional before.)",
		"jump S_MS1a"
	],
	"S_MS1a":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene Morning with fadeIn",
		"wait 3000",
		"scene S_MS1_p1 with fadeIn",
		"play music Deadly_Roulette loop",

		"MC (Sigh… Computer games again?!)",
		"MC (Her grades are going to keep dipping if she doesn’t apply herself.)",
		"MC (And even if she does get good grades; what kind of employer is going to want a lazy worker who’s always late?)",

		"scene S_MS1_p2",
		"MC Sara! You’re going to be late AGAIN!",
		"Sara Just… five more minutes. I’ve almost earned my daily loot crate!",
		"MC Can you not do this when you get home, after school?",
		"Sara Umm…",

		"scene S_MS1_p3",
		"Sara But if I don’t open the loot crate now, I’ll be wondering what’s in it ALL DAY!",
		"Sara I’ll just be distracted at school, and not learn anything. So I REALLY need to get it out of the way now.",
		"MC That’s… a terrible excuse. You know that?",
		"Sara Hehe, yeah…",
		"jump S_MS1a_q"
	],
	"S_MS1a_q":[
		"clear",
		"scene S_MS1_p3",

		{"Choice":{
					"S_MS1a_a1":{
							"Text": "Have you done your homework?",
							"Do": "jump S_MS1a_a1",
							"Condition": function () {
									return storage.S_MS1a_a1 == true;
							}
					},
					"S_MS1a_a2":{
							"Text": "What time did you go to bed at last night?",
							"Do": "jump S_MS1a_a2",
							"Condition": function () {
									return storage.S_MS1a_a2 == true;
							}
					},
					"S_MS1a_a3":{
							"Text": "Up to anything exciting today?",
							"Do": "jump S_MS1a_a3",
					},

		}}
	],
	"S_MS1a_a1":[
		"MC Have you at least done your homework?",
		"Sara Yeah! Most of it…",
		"MC What do you mean, most of it?!",
		"Sara Relax! I can finish it off in the school library, over lunch.",
		function () {
			storage.S_MS1a_a1 = false;
			return true;
		},
		"jump S_MS1a_q"
	],
	"S_MS1a_a2":[
		"MC What time did you go to bed at last night?",
		"Sara Umm… Let’s see… I did three matches… then two more capture the flag games…",
		"Sara 2AM?",
		"MC 2AM?! On a school night?!",
		"Sara Hehe, yeah. I’m a little tired…",
		"MC (She really needs to go to bed earlier.)"	,
		function () {
			storage.S_MS1a_a2 = false;
			return true;
		},
		"jump S_MS1a_q"
	],
	"S_MS1a_a3":[
		"MC Are you up to anything exciting today?",
		"Sara No, nothing interesting planned. I’ll probably just be hanging out with Lily.",
		"Sara How about you?",
		"MC Aside from slowly trying to regain some self-esteem and get my life back on track?",
		"Sara You’re overdramatic.",
		"MC It’s melodramatic actually.",
		"Sara Really? Geez… maybe I shouldn’t be skipping English Literature.",
		"MC You’re skipping literature?!",
		"scene S_MS1_p4",
	  "Sara Opps! Look at the time - I better get dressed quickly! I’m gonna be late!",
		function () {
			storage.S_MS1a_a1 = true;
			storage.S_MS1a_a2 = true;
			return true;
		},
		"jump S_AS3"
	],
	"S_AS3":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene SD_Afternoon with fadeIn",
		"wait 3000",
		"scene S_AS3_p1 with fadeIn",
		"play music Deadly_Roulette loop",

		"Sara I honestly don’t know what to do.",
		"Lily Well… do you like him?",
		"Sara Of course I like him.",
		"Lily C’mon, Sara. You know what I mean - do you ‘like’ like him?",
		"Sara Y...Yeah… I think I do.",

		"scene S_AS3_p2",
		"Lily Speak of the Devil!",
		"Sara Huh?!",
		"Lily Hey, {{player.Name}}. We were just talking about you.",

		"scene S_AS3_p3",
		"MC Only good things, I hope.",
		"Lily Hehe! Of course!",
		"MC What’s wrong, Sara? You’re looking a bit nervous.",
		"Lily She’s fine! She just needs to lighten up. How about we all get together and play a fun game? Chill out for a bit!",

		"scene S_AS3_p4",
		"MC Sure - sounds good to me.",
		"Sara Uh… I guess so…",
		"Sara (God… I hope he didn’t hear me saying those things to Lily…)",

		"Lily Are your landlords home right now, Sara?",
		"Sara I don’t think so.",
		"Lily Great! We can use your bedroom then!",
		"Sara My bedroom? What kind of game IS this?",

		"clear",
		{"Choice":{
			"S_AS3_a1":{
					"Text": "Let’s go! This sounds fun!",
					"Do": "jump S_AS3_a1",

			},
			"S_AS3_a2":{
					"Text": "It’s your bedroom, Sara. Do you want to do this?",
					"Do": "jump S_AS3_a2",


			},
		}}

	],
	"S_AS3_a1":[
		"MC This sounds interesting. Let’s go!",
		"Lily That’s the spirit!",
		"jump S_AS3_continue"
	],
	"S_AS3_a2":[
		"MC It’s your bedroom, Sara. Do you want to do this?",
		"Sara Umm… Maybe? I think so…",
		"Lily Yeah, she does. Let’s go!",
		"jump S_AS3_continue"
	],
	"S_AS3_continue":[
		"clear",
		"scene #000 with fadeIn",
		"stop music",
		"wait 3000",
		"scene S_AS3_p5 with fadeIn",
		"play music DooblyDoo loop",


		"MC Well? What now?",
		"Lily Go and get a bottle.",
		"MC A bottle?",
		"Lily Yeah - a glass one. They spin better.",
		"MC Oh! We’re gonna play, spin the bottle.",

		"scene S_AS3_p6",
		"MC I’ll be back in a few minutes.",
		"Lily Cool! See you soon!",
		"Sara (Whispered) You can’t be serious, Lily! He’s not gonna actually kiss me if it points to me, is he?!",
		"Lily Let’s wait and see…",

		"scene S_AS3_p7",
		"Lily Aww... Don’t look soooo gloomy, Sara! What’s the matter?",
		"Sara Wh… What if he doesn’t want to kiss me?",
		"Lily Well, that doesn’t matter…",

		"scene S_AS3_p8",
		"Lily ...because he’s gonna be kissing these luscious lips first!",
		"Lily I think he’s really gonna enjoy making out with me. I’ll make sure to kiss him REAL good for you.",

		"scene S_AS3_p9",

		"Sara Hey! That’s my friend you’re talking about!",
		"Lily Easy, Sara. Chill out!",
		"Sara Don’t tell me to chill out!",

		"scene S_AS3_p10",
		"Sara Don’t you dare think you can just kis-",
		"MC Hey, I found a glass bot-",
		"MC *Ahem* Is everything alright? You two aren’t fighting, are you?",

		"scene S_AS3_p11",
		"Lily Fighting? Haha! No, we’re just wrestling!",
		"Sara Y-Yeah…",
		"MC Great! Let’s get started then. How do you want to do this?",

		"scene S_AS3_p12",
		"Lily Okay, you’re first, {{player.Name}}. Whoever the bottle points at - you’ve got to kiss them.",
		"MC Wait - even Sara?",
		"Lily Yup! Sara too!",
		"MC (Wow… Sara looks so nervous…)",

		"scene S_AS3_p13",
		"Lily Let’s spin the bottle!",

		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",

		"Lily Woo! That’s me!",

		"scene S_AS3_p14",
		"Lily C’mere, big boy, and gimme a kiss!",
		"MC Uh… O-Okay…",
		"MC (She seems really into this! I never imagined that girls might actually like me this much!)",

		"Sara (Nooo! God… the sight of her leaning into my friend is making me feel sick.)",

		"scene S_AS3_p15",
		"Sara (I know she’s meant to be my friend… but I feel so… sad and angry, that she flirts with him like this.)",

		"Sara (And he’s my friend - I shouldn’t even have feelings about him!)",

		"scene S_AS3_p16",
		"Lily Mmm…",
		"MC (Wow! She’s a good kisser!)",
		"Sara (Calm down, Sara… it’s just ONE kiss. You’ll get your turn with him soon.)",

		"scene S_AS3_p17",
		"Lily (Hehe… I can feel Sara’s eyes on me right now. Why are men always, so much more attractive when other women want them?)",
		"MC (Her lips are so soft! I could kiss her for hours!)",

		"scene S_AS3_p18",

		"Lily Mmm, that was fun. Thanks, {{player.Name}}.",
		"Lily Hopefully that won’t be the last time our lips touch today.",
		"Sara (That bitch…)",
		"MC Y-Yeah, I hope so too!",

		"scene S_AS3_p19",
		"Lily Your turn, Sara! Who do you want to spin the bottle for?",
		"Sara …",
		"Lily C’mon! We’re burning daylight here!",
		"Sara I’ll… pass.",
		"Lily Eh? Your loss!",

		"scene S_AS3_p20",
		"Lily I guess it’s your turn again, {{player.Name}}! Who do you want to spin the bottle for?",
		"MC Can I pick myself?",
		"Lily Hehe! Sure!",

		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",
		"wait 150",
		"scene 13b",
		"wait 150",
		"scene 13c",
		"wait 150",
		"scene 13d",
		"wait 150",
		"scene 13e",
		"wait 150",
		"scene 13a",
		"wait 1000" ,


		"scene S_AS3_p21",
		"Lily Yay! Me again!",
		"Lily Hope you’re ready for round two!",

		"scene S_AS3_p22",
		"MC (Damn! I never imagined this would turn out to be such an awesome afternoon!)",
		"MC (I ought to hang out with Lily more often!)",

		"scene S_AS3_p23",
		"play music RetroFutureClean loop",

		"Sara (That… fucking bitch! That’s my friend!)",
		"Sara (How DARE she think she can just come into my bedroom and make out with him like this?!)",

		"scene S_AS3_p24",
		"Sara (I’ll show her. I’ll FUCKING show that slutty little tart!)",

		"Sara Get off my friend!",

		"scene S_AS3_p25",
		"scene #fff with fadein",
		"wait 700",

		"scene S_AS3_p26 with fadein",

		"play sound glassSmash",
		"wait 1000",
		"stop sound",
		"scene S_AS3_p27",
		"MC WHAT?!",
		"Sara EEK!",
		"Sara Lily! Get OUT of my house!",
		"Lily Geez! Okay, I’m going! Catch you later, {{player.Name}}.",

		"scene S_AS3_p28",
		"Sara I don’t want to play this… stupid game anymore.",
		"MC Sara, I-",
		"Sara Leave me alone!",
		"MC But-",
		"Sara I said I wanted to be alone!",

		"scene S_AS3_p29",
		"play music OctoBlues loop",


		"MC Hey, Sara... It’s alright. What’s wrong?",
		"Sara (Sniff)",
		"MC Are you crying?",

		"scene S_AS3_p30",
		"Sara I (sniff) I-I’m s-sorry, {{player.Name}}. When I saw you k-kissing her, I…",
		"MC Hey, it’s alright. Shush - it’s okay."  ,
		"clear",
		{"Choice":{
			"S_AS3_a3":{
					"Text": "Kiss her.",
					"Do": "jump S_AS3_a3",

			},
			"S_AS3_a4":{
					"Text": "Hug her.",
					"Do": "jump S_AS3_a4",


			},
		}}

	],
	"S_AS3_a3":[
		"scene S_AS3_p31b",
		"MC Mwah.",
		"Sara (Oh wow… He’s actually kissing me... )",
		"Sara (It’s like one of my dreams coming true…)",
		"jump S_AS3_continue2"
	],
	"S_AS3_a4":[
		"scene S_AS3_p31a",
		"MC It’s okay, Sara. I think I understand.",
		"Sara (Sniff)",
		"MC There there - I’ve got you. We won’t play that game anymore.",
		"jump S_AS3_continue2"
	],
	"S_AS3_continue2":[
		"scene S_AS3_p32",
		"Sara (Sniff) Th-Thank you, {{player.Name}}. D-Do you think you could give me a… real kiss?",
		"MC A real kiss?",

		"Sara Like Linda and Bob do when they watch a romantic movie.",
		"MC Of course, Sara. Come closer.",

		"scene S_AS3_p33r",
		"Sara (Oh my God! He did it! …This is Heaven!)",

		"MC (She’s a much better kisser than Lily! It feels like there’s more… passion behind Sara’s kiss.)",
		"MC (Why am I going along with this, so freely? She’s my friend! I shouldn’t be kissing her like this. Right?)",
		"scene S_AS3_p34",
		"Sara Thank you so much, {{player.Name}}.",
		"MC What was wrong? You kinda freaked out back there.",
		"Sara I… I don’t know… When I saw Lily kissing you, I just got so… irrationally angry.",
		"MC It’s okay. I think I understand.",

		"scene S_AS3_p35",
		"Sara I… I want to do… something for YOU.",
		"MC What do you mean?",
		"Sara I saw a video once… of a woman using her mouth, to suck a guy’s… thing.",
		"MC What?! Are you talking about giving me a blowjob?",

		"scene S_AS3_p36",
		"Sara Please, {{player.Name}} - just stay still and let me do this. I really want to make you feel good.",

		"MC Sara, I- You’re my friend.",
		"Sara Shush! Just let me pull your trousers down.",

		"scene S_AS3_p37",
		"MC Sara, wait. Are you sure about this?",
		"Sara I- Um… yeah, I am.",
		"MC I don’t want you doing something that you’ll regret later on.",

		"scene S_AS3_p37a",
		"Sara If I’m going to do it for you, there’s no way I could ever regret it.",
		"MC Are you sure? Have you done anything like this before?",
		"Sara No… this is my first time.",
		"MC Let me sit down on the bed, to make it easier for you, then.",
		"Sara Is there anything else I should do?",
		"MC Could you take your top off before you start?",
		"Sara (Ahh… That’s so embarrassing… I feel like I should do it for him though…)",
		"Sara O-Okay…",

		"scene S_AS3_p38",
		"MC Wow… You look so hot, Sara.",
		"Sara Th-Thank you…",
		"Sara What should I do now?",
		"MC Go ahead and pull down my underwear.",

		"scene S_AS3_p40r",
		"Sara Wow!",
		"Sara (It’s bigger than I remember! How can I possibly get it all in my mouth?)",
		"Sara Hehe! It’s all bouncy…",
		"MC (She definitely hasn’t played with a cock before. I guess I’ll just let her have some fun for a bit, while she experiments.)",
		"Sara Can you feel it when I do this?",
		"MC Yeah, but it feels better if you wrap your hands around it and move them up and down.",

		"scene S_AS3_p41r",
		"Sara Like this, {{player.Name}}?",
		"MC Ahh… That’s good, Sara.",
		"Sara Hehe... You’re smiling!",
		"MC That’s because it feels really good.",

		"scene S_AS3_p41rr",
		"MC Mmm!",
		"Sara (It keeps getting harder, the more I move!)",

		"Sara (I’d only ever dreamed about touching {{player.Name}}’s cock before! It’s actually happening now!)",
		"MC Okay - you can start licking, next. Just use your tongue to swirl around the tip of my cock.",

		"scene S_AS3_p42r",
		"Sara (It tastes a little salty! That’s not what I expected at all!)",
		"MC Ohh… That’s good. Keep going, Sara.",

		"scene S_AS3_p43",
		"Sara Am I doing it right, {{player.Name}}?",
		"MC Y-Yeah, it’s so good.",
		"Sara What should I do next?",

		"scene S_AS3_p44",
		"MC Try and take my cock in your mouth.",
		"Sara A-All of it?",
		"Sara (It’s so big… I don’t think I’ll be able to get, even HALF of it in my mouth!)",

		"scene S_AS3_p45",
		"MC Just relax - you don’t have to do the whole thing. Just go as far as you can, without making yourself uncomfortable.",
		"Sara But I want to make you feel good too…",
		"MC It’ll feel good - you don’t need to hurt yourself.",
		"Sara O-Okay!",

		"(Shlurrrp)",
		"(Suck Suck)",
		"MC (Mmm… This feels good. She’s being so gentle with her lips!)",

		"scene S_AS3_p47",
		"(Shllurrrrrrrpp)",
		"Sara (I don’t think I can go much deeper than this!)",
		"MC Easy, Sara. You don’t need to push yourself - it’s your first time.",
		"MC This feels amazing, I promise.",

		"scene S_AS3_p48",
		"MC (I can’t believe that Sara was sexually attracted to me. How long has she felt this way?)",

		"MC (Was I really, so obsessed with my teacher that I never even noticed my own friend’s affections for me?)",
		"(Suck Suck)",

		"(Shlurp Suck)",
		"MC Ohh! Ahh!",
		"MC (I’m gonna cum soon, if she keeps this up! It might be her first time giving a blowjob, but she’s pretty damn good at it!)",

		"scene S_AS3_p50",
		"MC (I’m gonna cum soon. I should let her know!)",
		"MC Sara, I’m about to cum - that means semen is going to come out of my cock.",
		"Sara Mmm hmm!",

		"scene S_AS3_p51",
		"MC Ahhh! Fuck! I’m cumming!",
		"Sara (Wow! I can feel him shaking and trembling! He must really, love me doing this!)",
		"MC Hnnng!",
		"Sara (I should take the whole head of his cock, in my mouth, while he cums!)",

		"scene S_AS3_p52",
		"MC Ahhhh! Yes! Ugh!",
		"Sara (I can feel it filling my mouth! It’s really warm and salty!)",
		"MC Fuck! Ah! You’re so good, Sara!",
		"scene #fff with fadein",
		"wait 700",
		"scene S_AS3_p52 with fadein",
		"wait 700",
		"scene #fff with fadein",
		"wait 700",
		"scene S_AS3_p52 with fadein",
		"MC Ah! You can stop now - I’m done!",

		"scene S_AS3_p53",
		"Sara Wha duh I duh wuh thus?",
		"MC (I think she’s asking what she does with my cum now.)",

		"clear",
		{"Choice":{
			"S_AS3_a5":{
					"Text": "I want to see you swallow my cum.",
					"Do": "jump S_AS3_a5",

			},
			"S_AS3_a6":{
					"Text": "You don’t have to swallow it if you don’t want to.",
					"Do": "jump S_AS3_a6",


			},
		}}

	],
	"S_AS3_a5":[
		"scene S_AS3_p54",
		"Sara (GULP)",
		"Sara (Huh? It’s not too bad. Lily was telling me that she hated the taste of cum when she gave blowjobs!)",
		"scene S_AS3_p55",
		"Sara Ahh! All gone!",
		"MC Thank you, Sara. You’re adorable.",
		"Sara Hehe... I know!",
		"jump S_AS3_continue3"
	],
	"S_AS3_a6":[
		"MC Some girls swallow cum, but you don’t have to if you don’t want-",
		"scene S_AS3_p54",
		"Sara (Gulp!) Ahh!",
		"Sara (I hope he’ll like me more if I swallow all his cum!)",
		"scene S_AS3_p55",
		"Sara All gone!",
		"MC You didn’t have to do that on your first time!",
		"Sara I wanted to. I wanted to make it the best for you!",
		"jump S_AS3_continue3"
	],
	"S_AS3_continue3":[
		"scene S_AS3_p56",
		"Sara I really love you, {{player.Name}}.",
		"Sara (It feels so good lying against him - feeling his clothes against my skin.)",
		"MC (Wow… She really likes me a whole lot!)",
		"scene S_AS3_p57",
		"Sara I want to lie here with you for a while…",
		"MC Are you comfy?",
		"Sara Yeah.",
		"MC Just relax, then. Thank you so much for everything, Sara.",
		"jump Character_Choice"
	]
};
