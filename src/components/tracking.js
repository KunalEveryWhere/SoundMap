import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { ref, child, push, update } from "firebase/database";
import {db} from "../firebase";

let log, lat, aud;
let control;
let allAud = [];
let finalSchema = {};
let finalSchemaControl = 1;
let sessionValue, msctr, nickname, sub;



function locationAndAudio() {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
      } else {
        console.log('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          lat = position.coords.latitude;
          log = position.coords.longitude;
          //aud = lat + log;
          console.log(lat, log);
        }, () => {
          console.log('Unable to retrieve your location');
        });
      } 
      AudioLevel(); 
}

function seter () {
    control =  setInterval(locationAndAudio, 500);
}

function stopper () {
    clearInterval(control);
    getAud();
}

function AudioLevel () {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
        .then(function(stream) {
          const audioContext = new AudioContext();
          const analyser = audioContext.createAnalyser();
          const microphone = audioContext.createMediaStreamSource(stream);
          const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
      
          analyser.smoothingTimeConstant = 0.8;
          analyser.fftSize = 1024;
      
          microphone.connect(analyser);
          analyser.connect(scriptProcessor);
          scriptProcessor.connect(audioContext.destination);
          scriptProcessor.onaudioprocess = function() {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            const arraySum = array.reduce((a, value) => a + value, 0);
            const average = arraySum / array.length;
            //console.log(Math.round(average));
            allAud.push(Math.round(average));
  
            
          setTimeout(() => {
              microphone.disconnect();
              analyser.disconnect();
              scriptProcessor.disconnect();
          }, 4500);
          };
        })
        .catch(function(err) {
          /* handle the error */
          console.error(err);
        });
}

function getAud()
{
    var total = 0;
            var count = 0;
        allAud.forEach(function(item, index) {
        total += item;
        count++;
    });
    aud =  total / count;
    console.log(aud);
}

function updateResultsToDB ()
{
     sessionValue = {lat, log, aud};
    //console.log(sessionValue);
    return (sessionValue);
}

function childControl () {
    setTimeout( function() { seter(); }, 200);
    setTimeout( function() { stopper(); }, 4700);
    setTimeout( function() { updateResultsToDB(); }, 4900);
}

function masterControl () {
    childControl();
    setTimeout(() => {
        var a = String(finalSchemaControl);
        finalSchema[a] = sessionValue;
        ++finalSchemaControl;
        console.log(finalSchema);
      }, "5000")
      
}

function masterControlStart (){
   msctr =  setInterval(masterControl, 5200);
}

function masterControlStop (){
 clearInterval(msctr);

 //updating to FireStore RTDB
 const newPostKey = push(child(ref(db), `${nickname}_${sub}/`)).key;
 const updates = {};
updates[`${nickname}_${sub}/` +  (new Date()).toISOString().replace('.', '') + newPostKey] = finalSchema;
finalSchema = {}; finalSchemaControl = 1;
alert("The Sound Map of the area sucessfully mapped!");
return update(ref(db), updates);
}

const Tracking = () => {
    const {user} = useAuth0();
    nickname = user.nickname;
    sub = user.sub;

    return (
        <React.Fragment>
            <br /> <br />
            <button className="btn btn-success btn-block" onClick={masterControlStart}>Master Control Start</button>
            <button className="btn btn-danger btn-block" onClick={masterControlStop}>Master Control Stop</button>
            <br />
    </React.Fragment>
    );
};

export default Tracking;
