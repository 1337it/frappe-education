import './index.css'

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

mainTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetColor = event.target.dataset.color;
  const targetTranslateValue = event.target.dataset.translateValue;
	var isMobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)
 
if(isMobile)  {
  navigator.vibrate(5)
}





if (event.target.classList.contains("homestab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 0;
var movement = transtarget - transnow;
	var currentsection = document.querySelectorAll('#app .active')[0].id;


document.getElementsByClassName('tabsection active')[0].attributes.style = 'animation:page-slide-end-left 0.2s ease';
document.getElementById('homesection').attributes.style = 'animation:page-slide-start-right 0.2s ease';
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementById(currentsection).ClassName = 'tabsection';

document.getElementById('homesection').className = 'tabsection active';
document.getElementsByClassName('round-button homestab')[0].className = 'tabsection active';


}

if (event.target.classList.contains("gradestab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 100;
var movement = transtarget - transnow;

if (movement > 0)
{




}
if (movement < 0)
{





}

}

if (event.target.classList.contains("scheduletab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 200;
var movement = transtarget - transnow;
var currentsection = document.querySelectorAll('#app .active')[0].id;
if (movement > 0)
{

document.getElementsByClassName('tabsection active')[0].attributes.style = 'animation:page-slide-end-left 0.2s ease';
document.getElementById('schedulesection').attributes.style = 'animation:page-slide-start-right 0.2s ease';
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementById(currentsection).ClassName = 'tabsection';

document.getElementById('schedulesection').className = 'tabsection active';



}
if (movement < 0)
{
	
document.getElementsByClassName('tabsection active')[0].attributes.style = 'animation:page-slide-end-right 0.2s ease;display:block;';
document.getElementById('schedulesection').attributes.style = 'animation:page-slide-start-left 0.2s ease';
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementById(currentsection).ClassName = 'tabsection';

document.getElementById('schedulesection').className = 'tabsection active';



}

}

if (event.target.classList.contains("raventab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 300;
var movement = transtarget - transnow;

if (movement > 0)
{
document.getElementsByClassName('tabsection active')[0].attributes.style = 'animation:page-slide-end-left 0.2s ease;display:block;';
document.getElementById('postssection').attributes.style = 'animation:page-slide-start-right 0.2s ease';
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementsByClassName('tabsection active')[0].ClassName = 'tabsection';

document.getElementById('postssection').className = 'tabsection active';



}
if (movement < 0)
{
document.getElementsByClassName('tabsection active')[0].attributes.style = 'animation:page-slide-end-left 0.2s ease;display:block;';
document.getElementById('postssection').attributes.style = 'animation:page-slide-start-right 0.2s ease';
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementsByClassName('tabsection active')[0].ClassName = 'tabsection';

document.getElementById('postssection').className = 'tabsection active';

	



}

}

if (event.target.classList.contains("feestab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 400;
var movement = transtarget - transnow;

if (movement > 0)
{



}
if (movement < 0)
{

	



}

}

if (event.target.classList.contains("transporttab")) {
	var transnow = document.getElementsByClassName('round-button active')[0].attributes[1].value.split('%')[0];
var transtarget = 500;
var movement = transtarget - transnow;

if (movement > 0)
{



	
}
if (movement < 0)
{
	

	

	
}

}











	

  if (event.target.classList.contains("round-button")) {
    mainSliderCircle.classList.remove("animate-jello");
    void mainSliderCircle.offsetWidth;
    mainSliderCircle.classList.add("animate-jello");

    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));

    handleActiveTab(roundButtons, event, "active");

    

  }

});
document.getElementById('homesection').className = 'tabsection active';
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
		navigator.vibrate(10);
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
		navigator.vibrate(10);
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
		//if(this.vars.currentBeat == 1) this.GUI.metronomeBell.play();
		this.GUI.metronomeTick.play();
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
			navigator.vibrate(10);
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

