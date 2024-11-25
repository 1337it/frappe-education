import './index.css'
import './cards.scss'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// import '../polyfills'

import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

// create a pinia instance
let pinia = createPinia()
// resources in description
const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

const colors = {
  blue: {
    50: {
      value: "#e3f2fd"
    },
    100: {
      value: "#bbdefb"
    }
  },
  green: {
    50: {
      value: "#e8f5e9"
    },
    100: {
      value: "#c8e6c9"
    }
  },
  purple: {
    50: {
      value: "#f3e5f5"
    },
    100: {
      value: "#e1bee7"
    }
  },
  orange: {
    50: {
      value: "#ffe0b2"
    },
    100: {
      value: "#ffe0b2"
    }
  },
  red: {
    50: {
      value: "#ffebee"
    },
    100: {
      value: "#ffcdd2"
    }
  }
};

const getColor = (color, variant) => {
  return colors[color][variant].value;
};

const handleActiveTab = (tabs, event, className) => {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    event.target.classList.add(className);
  }
};


document.getElementById("metroclose").addEventListener("click", (event) => {

document.getElementById("JSMetroContainer").attributes.style.value = 'animation:disappear 0.2s ease';


 setTimeout(() => {
document.getElementById("JSMetroContainer").attributes.style.value = 'display:none;';
	 }, 200);
});

	document.getElementById("openmetro").addEventListener("click", (event) => {


	document.getElementById("JSMetroContainer").attributes.style.value = '';
document.getElementById("JSMetroContainer").attributes.style.value = 'animation:appear 0.2s ease';


	
});
	document.getElementById("opentanpura").addEventListener("click", (event) => {


	document.getElementById("tanpura").attributes.style.value = '';
document.getElementById("tanpura").attributes.style.value = 'animation:appear 0.2s ease';


	
});

 setTimeout(() => {
document.getElementById("startup").attributes.style.value = 'animation:disappear 0.2s ease';
	   }, 2000);

 setTimeout(() => {
document.getElementById("startup").attributes.style.value = 'display:none;';
	 }, 2200);

mainTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetColor = event.target.dataset.color;
  const targetTranslateValue = event.target.dataset.translateValue;
	var isMobile = /Android|BlackBerry/.test(navigator.userAgent)
 
if(isMobile)  {
  navigator.vibrate(5)
}





if (event.target.classList.contains("hometab")) {

	var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
	document.getElementById('homesection').classList.add('active');


document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('homesection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;'; 		 }, 100);


document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');




}

if (event.target.classList.contains("gradestab")) {
	var transnow = document.querySelectorAll('html')[0].attributes.style.value.split(';')[0].split(':')[1].split('%')[0];
var transtarget = 100;
var movement = transtarget - transnow;
	var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
document.getElementById('gradesection').classList.add('active');
if (movement < 0)
{
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('gradesection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
	console.log('fromleft');
	
}
	
if (movement > 0)
{

document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('gradesection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');



}

}

if (event.target.classList.contains("scheduletab")) {
	document.querySelector('#schedulesection .w-full.h-full').append(document.getElementById('frappeui-popper-root'));
	var transnow = document.querySelectorAll('html')[0].attributes.style.value.split(';')[0].split(':')[1].split('%')[0];
var transtarget = 200;
var movement = transtarget - transnow;
var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
	console.log(movement);
	document.getElementById('schedulesection').classList.add('active');
if (movement < 0)
{

document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('schedulesection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');

console.log('fromleft');


}
if (movement > 0)
{
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('schedulesection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');



}

}

if (event.target.classList.contains("raventab")) {
	var transnow = document.querySelectorAll('html')[0].attributes.style.value.split(';')[0].split(':')[1].split('%')[0];
var transtarget = 300;
var movement = transtarget - transnow;
	var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
	console.log(movement);
	document.getElementById('postssection').classList.add('active');
if (movement < 0)
{

document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('postssection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
	console.log('fromleft');
}
if (movement > 0)
{
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('postssection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');



}

}

if (event.target.classList.contains("feestab")) {
	var transnow = document.querySelectorAll('html')[0].attributes.style.value.split(';')[0].split(':')[1].split('%')[0];
var transtarget = 400;
var movement = transtarget - transnow;
	var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
	console.log(movement);
	document.getElementById('feessection').classList.add('active');
if (movement < 0)
{

document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('feessection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
	console.log('fromleft');
}
if (movement > 0)
{
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('feessection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');



}

}

if (event.target.classList.contains("transporttab")) {

	var currentsection = document.getElementsByClassName("tabsection active")[0].id;
	document.getElementById(currentsection).classList.remove('active');
	console.log(movement);
	document.getElementById('feessection').classList.add('active');

document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('feessection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');



transport();

}











	

  if (event.target.classList.contains("round-button")) {
	  getAccel();
    mainSliderCircle.classList.remove("animate-jello");
    void mainSliderCircle.offsetWidth;
    mainSliderCircle.classList.add("animate-jello");
    setTimeout(() => {
    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));
    }, 100);
    handleActiveTab(roundButtons, event, "active");

    

  }

});
// set up the page

function transport() {


	
var mapCanvas = document.getElementById('map_canvas');
var geoBtn = document.querySelector('.enable');
var revokeBtn = document.querySelector('.revoke');
geoBtn.onclick = function() {
  console.log('Permission currently denied; future features of the Permissions API will allow us to request permission here.')
  console.log('Currently you have to reset the permission state using the browser UI.')
  console.log('In Firefox it is done with Tools > Page Info > Permissions > Access Your Location.')
}

revokeBtn.onclick = function() {
  revokePermission();
}

  
var positionDenied = function() {
  geoBtn.style.display = 'inline';
};
  
var revealPosition = function(position) {


  var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	

fetch(`https://app.kairaliartscentre.com:9999/hooks/getlocation`, {
    method: 'GET',  }).then(r => 
    r.text()) .then(r => {
        const latcut = r.split("lat=", 100000);
        const loncut = r.split("lon=", 100000);
        const timecut = r.split("timestamp=", 100000);
        var lat = latcut[latcut.length - 1].slice(0, 9);
        var lon = loncut[loncut.length - 1].slice(0, 9);
        var timestamp = timecut[timecut.length - 1].slice(0, 19);
	var origin = "("+lat+","+lon+")"; // using google.maps.LatLng class
var destination = latlng; // using string
var now = moment();
	var then = moment(timestamp).add(4, 'hour');
var duration = moment.duration(now.diff(then));
	var minutes = duration.minutes();
	var directionsService = new google.maps.DirectionsService();
var request = {
    origin: origin, // LatLng|string
    destination: destination, // LatLng|string
    travelMode: google.maps.DirectionsTravelMode.DRIVING
};

directionsService.route( request, function( response, status ) {

    if ( status === 'OK' ) {
        var point = response.routes[ 0 ].legs[ 0 ];
          document.getElementById('seen').innerText = 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')';
    }
} );
	
        document.getElementById('item').innerHTML = ''; 
        document.getElementById('item').src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBMTueLj6IEJA1eEePKjmA3tYNw-lnd3TQ&origin="+lat+","+lon+"&destination="+latlng+"&maptype=roadmap&zoom=13"
        document.getElementById('time').innerText = 'Last seen '+minutes+' minutes ago.';
        console.log('Lat='+lat+' Lon='+lon+' Timestamp='+moment(timestamp).add(4, 'hour').format('dddd, MMMM Do YYYY, h:mm:ss a'));




	
        })
 document.onreadystatechange = function () {
        if (document.readyState === "loading") {
            console.log('Page is loading');
        }
        if (document.readyState === "interactive") {
            console.log('DOM is ready');
        }
        if (document.readyState === "complete") {
		$('.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom').remove();
$('[jstcache="51"]').remove();
            console.log('Page is fully loaded');
          
        }
    };

}
// test for geolocation support, provide geolocation settings, determine location of the user's device


if (!"geolocation" in navigator) {
  alert("No geolocation available!");
}
  
var geoSettings = {
  enableHighAccuracy: false,
  maximumAge        : 30000,
  timeout           : 20000
};

// Start everything off

function handlePermission() {
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if (result.state == 'granted') {
      report(result.state);
      geoBtn.style.display = 'none';
    } else if (result.state == 'prompt') {
      report(result.state);
      navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
    } else if (result.state == 'denied') {
      report(result.state);
      geoBtn.style.display = 'inline';
    }
    result.onchange = function() {
      report(result.state);
    }
  });
}

function revokePermission() {
  navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
    report(result.state);
  });
}

function report(state) {
  console.log('Permission: ' + state);
}

handlePermission();

	
	
}

var px = 50; // Position x and y
var py = 50;
var vx = 0.0; // Velocity x and y
var vy = 0.0;
var updateRate = 1/60; // Sensor refresh rate

function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way

                var vertical = parseInt(event.beta);
		var horizontal = parseInt(event.gamma);
		   
            
                
                // Update velocity according to how tilted the phone is
                // Since phones are narrower than they are long, double the increase to the x velocity
        const $cards = document.querySelectorAll(".card");



		    const $card = document.querySelector(".card.active");
const $style = document.querySelector(".hover");



  var l = parseInt(event.beta);
  var t = parseInt(event.gamma);

  var h = window.getComputedStyle(document.querySelector(".card.active")).height.split('px')[0];
  var w = window.getComputedStyle(document.querySelector(".card.active")).width.split('px')[0];
  var lp = Math.abs(Math.floor(100 / w * l)-100);
  var tp = Math.abs(Math.floor(100 / h * t)-100);
  var bg = `background-position: ${lp}% ${tp}%;`;
  var style = `.card.active:before { ${bg} }`;

  $style.innerHTML = style;

//
// 3d hover magic








// setup cards interaction

 



	

            });
        }
    });
}




  var JSmetronome = {
	GUI:{
		power : document.getElementById("power"),
		tap : document.getElementById("tap"),
		tapBkg : document.getElementById("tapBkg"),
		tempoUp : document.getElementById("tempoUp"),
		tempoDown : document.getElementById("tempoDown"),
		tempoDisplay : document.getElementById("tempoDisplay"),
		metronomeTick : document.getElementById("metronomeTick_1"),
		metronomeBell : document.getElementById("metronomeBell"),
		timeSignature : document.getElementById("timeSignature"),
		beatDisplay : document.getElementById("Beat")
	},
	vars:{
		power : false,
		tempo : 0,
		BeatsPerMeasure:0,
		BeatSubdivision:0,
		CurrentBeatSubdivision:0,
		currentBeat : 0,
		lastTap : 0,
		_timeoutID : 0,
		_tempoMin : 1,
		_tempoMax : 250,
		_timeSignature:[
			// name , beats, time subdivision(2 = binary / 3 = ternary)
			[2,4,2],
			[3,4,2],
			[4,4,2],
			[6,8,3],
			[9,8,3],
			[12,8,3]
		]
	},
	setTimeSignature: function(timeSignature){
		//chekc if it's a number
		if(!isNaN(parseFloat(timeSignature)) && isFinite(timeSignature)){
			// if its positive, rotate one step positive or negative the array items. Selected item, result as first of list.
			if(timeSignature >= 0){
				// positive array rotation
				var currentTimeSignature = this.vars._timeSignature.shift();
				this.vars._timeSignature.push(currentTimeSignature);
				currentTimeSignature = this.vars._timeSignature[0];
			}else{
				// negative array rotation
				var currentTimeSignature = this.vars._timeSignature.pop();
				this.vars._timeSignature.unshift(currentTimeSignature);
				currentTimeSignature = this.vars._timeSignature[0];
			};
		}else{
			// If timesignature provided as String (ex. "4/4"), find coincidences with array items
			var currentTimeSignature= timeSignature.split("/");
			for(var i=0; i < this.vars._timeSignature.length; i++) {
				if(this.vars._timeSignature[i][0]== currentTimeSignature[0] && this.vars._timeSignature[i][1]== currentTimeSignature[1]){
					currentTimeSignature[2] = this.vars._timeSignature[i][2];
					for(var r=0; r < i; r++) this.setTimeSignature(+1);
				};
			}
			if(!currentTimeSignature[2]) return false;
		}
		//config system with new Time Signature params.
		this.vars.BeatSubdivision = currentTimeSignature[2];
		this.vars.BeatsPerMeasure = (this.vars.BeatSubdivision == 3) ? (currentTimeSignature[0]/3) : currentTimeSignature[0];
		//reinitiate counters
		this.vars.currentBeat = 0;
		this.vars.CurrentBeatSubdivision = 0;
		//draw interface
		this.GUI.timeSignature.innerHTML = currentTimeSignature[0] + "/" + currentTimeSignature[1];
		
		//document.body.style.background='url('+background')';
		//reset and restart.
		clearTimeout(this.vars._timeoutID);
		this.tick();
		return true;
	},
	setTempo: function(newTempo,operator){
		if(operator) var newTempo = (operator == "+") ? this.vars.tempo + newTempo : this.vars.tempo - newTempo;
		if(newTempo >= this.vars._tempoMax) newTempo = this.vars._tempoMax;
		if(newTempo <= this.vars._tempoMin) newTempo = this.vars._tempoMin;
		this.vars.tempo = newTempo;
		this.GUI.tempoDisplay.innerHTML = this.vars.tempo;
		this.vars.currentBeat = 0;
		this.vars.CurrentBeatSubdivision = 0;
		clearTimeout(this.vars._timeoutID);
		this.tick();
		return true;
	},
	tick: function(){
		if(!this.vars.power) return false;
		if(this.vars.currentBeat >= this.vars.BeatsPerMeasure) this.vars.currentBeat = 1;
			else this.vars.currentBeat += 1;
		this.GUI.metronomeBell.pause();
		this.GUI.metronomeBell.currentTime = 0;
		this.GUI.metronomeTick.pause();
		this.GUI.metronomeTick.currentTime = 0;
		if(this.vars.currentBeat == 1)
		{ this.GUI.metronomeBell.play();
		 if(isMobile)  {
  navigator.vibrate(10)
}
		}
		else
		{
		this.GUI.metronomeTick.play();
			if(isMobile)  {
  navigator.vibrate(5)
}
		}
		this.GUI.beatDisplay.innerHTML = this.vars.currentBeat;
		this.vars._timeoutID = setTimeout(function(){this.tick()}.bind(this), 1000/(this.vars.tempo/60));

		return true;
	},
	tap: function(){
		this.GUI.tapBkg.style.visibility  = "visible";
		var lastTapTime = this.vars.lastTap;
		var currentTapTime = new Date().getTime();
		this.vars.lastTap =  currentTapTime;
		var newTempo = Math.round(1000/(currentTapTime-lastTapTime)*60);
		this.setTempo(newTempo);
		return true;
	},
	power: function(status){
		if(this.vars.power){
			this.vars.power = false;
			clearTimeout(this.vars._timeoutID);
			this.vars.currentBeat = 0;
			this.GUI.beatDisplay.innerHTML = this.vars.currentBeat;
		}else{
			this.vars.power = true;
			this.tick();
		};
	},
	init: function(){
		this.GUI.timeSignature.onmousedown = function(){this.setTimeSignature(+1)}.bind(this);
		this.GUI.power.onmousedown = function(){this.power()}.bind(this);
		this.GUI.tap.onmousedown = function(){this.tap()}.bind(this);
		this.GUI.tap.onmouseup = function(){this.GUI.tapBkg.style.visibility  = "hidden "}.bind(this);
		this.GUI.tap.onmouseout = function(){this.GUI.tapBkg.style.visibility  = "hidden"}.bind(this);
		this.GUI.tempoUp.onmousedown = function(){ProgInterval.add(function(){this.setTempo(1,'+')}.bind(this),1000,0.18,'tempoUp')}.bind(this);
		this.GUI.tempoUp.onmouseup = function(){ProgInterval.del('tempoUp')}.bind(this);
		this.GUI.tempoUp.onmouseout = function(){ProgInterval.del('tempoUp')}.bind(this);
		this.GUI.tempoDown.onmousedown = function(){ProgInterval.add(function(){this.setTempo(1,'-')}.bind(this),1000,0.18,'tempoDown')}.bind(this);
		this.GUI.tempoDown.onmouseup = function(){ProgInterval.del('tempoDown')}.bind(this);
		this.GUI.tempoDown.onmouseout = function(){ProgInterval.del('tempoDown')}.bind(this);
	
		this.setTimeSignature("4/4");
		this.setTempo(60);
		return true;
	}

}

var ProgInterval = {
	_active: [],
	_exec: function(callback,interval,acceleration,ID){
		if(this._active.indexOf(ID) == -1) return false;
		callback();
		interval += interval*(acceleration*(-1));
		if(interval <= 1) interval = 1;
		//console.log(interval);
		setTimeout(function(){this._exec(callback,interval,acceleration,ID)}.bind(this),interval);
	},
	add: function(callback,interval,acceleration,ID){
		var acceleration = acceleration || 0;
		this._active.push(ID);
		this._exec(callback,interval,acceleration,ID);
	},
	del: function(ID){
		var position = this._active.indexOf(ID);
		if(position != -1) this._active.splice(position,1);
	}
}






let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(pinia)
app.use(router)
app.use(resourcesPlugin)


app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

router.isReady().then(() => {
	app.mount("#app")
})

