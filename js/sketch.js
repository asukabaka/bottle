//https://messageinabottle-9d479.firebaseio.com/
//https://console.firebase.google.com/u/0/project/messageinabottle-9d479/database/messageinabottle-9d479/data
'use strict';

let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = "demo-messages"; // name of folder you create in db
let messageInput;
let sendMessageBtn;


function setup() {

  noCanvas();

  //messageInput = select('#messageInput');
messageInput = document.querySelector('#messageInput');
sendMessageBtn = document.querySelector('#sendMessageBtn');

sendMessageBtn.addEventListener('click', sendMessage);

  // put setup code here
  // Initialize firebase
// support for Firebase Realtime Database 4 web here: https://firebase.google.com/docs/database/web/start
// Copy and paste your config here (replace object commented out)
// ---> directions on finding config below

// paste your config file here
let config = {
    apiKey: "AIzaSyAG2u4s7uLQzcP_IZeFCspV3r8Jw8x5X7c",
    authDomain: "messageinabottle-9d479.firebaseapp.com",
    databaseURL: "https://messageinabottle-9d479.firebaseio.com",
    projectId: "messageinabottle-9d479",
    storageBucket: "messageinabottle-9d479.appspot.com",
    messagingSenderId: "1055736324910",
    appId: "1:1055736324910:web:1bee33c463fde9eb2950bf"

};

firebase.initializeApp(config);

database = firebase.database();

// this references the folder you want your data to appear in
let ref = database.ref(folderName);
// **** folderName must be consistant across all calls to this folder

ref.on('value', gotData, errData);


// ---> To find your config object:
// They will provide it during Firebase setup
// or (if your project already created)
// 1. Go to main console page
// 2. Click on project
// 3. On project home page click on name of app under project name (in large font)
// 4. Click the gear icon --> it's in there!

}

function draw() {
  // put drawing code here
}

function sendMessage(){

  Date.now();
  
  // createNode(folderName, _nodeId, _nodeObject)
}
