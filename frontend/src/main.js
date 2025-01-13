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

if(currentsection != 'homesection'){
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-right 0.2s ease'; 
setTimeout(() => { document.getElementById('homesection').attributes.style.value  = 'animation:page-slide-end-left 0.2s ease;overflow:scroll;'; 		 }, 100);


document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');

}


}




if (event.target.classList.contains("raventab")) {
	var transnow = document.querySelectorAll('html')[0].attributes.style.value.split(';')[0].split(':')[1].split('%')[0];
var transtarget = 100;
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
var transtarget = 200;
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
	document.getElementById('transportsection').classList.add('active');
if(currentsection != 'transportsection'){
document.getElementById(currentsection).attributes.style.value = 'animation:page-slide-start-left 0.2s ease'; 
setTimeout(() => { document.getElementById('feessection').attributes.style.value  = 'animation:page-slide-end-right 0.2s ease;'; 		 }, 100);
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');

}

     initMap();

}











	

  if (event.target.classList.contains("round-button")) {

const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (mobile) {
  /* your code here */

	  
	  getAccel();
}

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
	 
function updatelocation(){


fetch(`https://locate.kairaliartscentre.com/api/positions/`, {
    method: 'GET',
headers: {
            "Authorization": "Basic " + btoa("admin" + ":" + "@Sianet211211")
        },
        contentType:"application/json",
        data:JSON.stringify({
            name:"Dhanish",
            deviceId:"4"
          }),}).then(r => 
    r.text()) .then(r => {
        const latcut = r.split('"latitude":', 100000)[1];
        const loncut = r.split('"longitude":', 100000)[1];
        const timecut = r.split('"deviceTime":"', 100000)[1];
        var lat = latcut.slice(0,10);
        var lon = loncut.slice(0,10);
        var timestamp = timecut.slice(0,19);
	var origin = "("+lat+","+lon+")"; // using google.maps.LatLng class
var destination = latlng; // using string
var now = moment();
	var then = moment(timestamp).add(4, 'hour');
var duration = moment.duration(moment().diff(then));
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
       if(moment.duration(moment().diff(then))._milliseconds <= 120000){
 document.getElementById('time').innerText = 'Online';
document.getElementById('time').parentNode.style.backgroundColor = "rgba(0,255,0,0.5)";
       }
	else
       {
document.getElementById('time').innerText = 'Offline';
document.getElementById('time').parentNode.style.backgroundColor = "rgba(255,0,0,0.5)";
       }



        console.log('Lat='+lat+' Lon='+lon+' Now='+moment()+' Timestamp='+moment(timestamp).add(4, 'hour').format('dddd, MMMM Do YYYY, h:mm:ss a'));




	
        })
 
setTimeout(() => { 
updatelocation();
}, 10000);

}

	
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
		   
            var cardon = document.querySelectorAll('.card') !== null;
                if(cardon) {
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
  var bg = `background-position: ${t + 50}% ${l + 50}%;`;
  var style = `.card.active:before { ${bg} }`;

  $style.innerHTML = style;

//
// 3d hover magic




// setup cards interaction

 

		}

	

            });
        }
    });
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

              		  
  const traccarApiUrl = "https://locate.kairaliartscentre.com/api/positions"; // Replace with your Traccar API endpoint
        const traccarAuthToken = "KYUs5rZVH5k4ZvNrxrGfKo1ptQEaJjkf"; // Replace with your Traccar API token

        let map;
        let clientMarker, userMarker, routeLine;
        let clientLocation = { lat: 0, lng: 0 };
        let userLocation = { lat: 0, lng: 0 };

        // Initialize Google Map
        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 0, lng: 0 },
                zoom: 14,
            });

            // Add markers for user and client
            clientMarker = new google.maps.Marker({
                map,
                label: "Client",
                icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            });

            userMarker = new google.maps.Marker({
                map,
                label: "You",
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });

            routeLine = new google.maps.Polyline({
                map,
                strokeColor: "#FF0000",
                strokeOpacity: 0.7,
                strokeWeight: 4
            });

            updateLocations();
            setInterval(updateLocations, 5000); // Update every 5 seconds
        }

        // Fetch client location from Traccar API
function fetchClientLocation() {
     


fetch(`https://locate.kairaliartscentre.com/api/positions/`, {
    method: 'GET',
headers: {
            "Authorization": "Basic " + btoa("admin" + ":" + "@Sianet211211")
        },
        contentType:"application/json",
        data:JSON.stringify({
            name:"Dhanish",
            deviceId:"4"
          }),}).then(r => 
    r.text()) .then(r => {
        const latcut = r.split('"latitude":', 100000)[1];
        const loncut = r.split('"longitude":', 100000)[1];
        const timecut = r.split('"deviceTime":"', 100000)[1];
        var lat = latcut.slice(0,10);
        var lon = loncut.slice(0,10);


     //   var point = response.routes[ 0 ].legs[ 0 ];
     //    document.getElementById('seen').innerText = 'Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')';
	    clientLocation.lat = Number(lat);
	    clientLocation.lng = Number(lon);

})
    //  document.getElementById('item').innerHTML = ''; 

        }

        // Fetch user location
        function fetchUserLocation() {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLocation.lat = position.coords.latitude;
                        userLocation.lng = position.coords.longitude;
                        resolve();
                    },
                    (error) => reject(error)
                );
            });
        }

        // Update locations and map
        async function updateLocations() {
            await fetchClientLocation();
            await fetchUserLocation();

            // Update markers
            clientMarker.setPosition(clientLocation);
            userMarker.setPosition(userLocation);

            // Update route line
            routeLine.setPath([clientLocation, userLocation]);

            // Center map
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(clientLocation);
            bounds.extend(userLocation);
            map.fitBounds(bounds);

            // Calculate distance and time
            calculateDistanceAndTime();
        }

        // Calculate distance and time using Google Maps Distance Matrix API
        function calculateDistanceAndTime() {
            const service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [userLocation],
                    destinations: [clientLocation],
                    travelMode: "DRIVING",
                },
                (response, status) => {
                    if (status === "OK") {
                        const element = response.rows[0].elements[0];
                        const distance = element.distance.text;
                        const duration = element.duration.text;
                        document.getElementById("distance").textContent = `Distance: ${distance}`;
                        document.getElementById("time").textContent = `Travel Time: ${duration}`;
                    } else {
                        console.error("Error with Distance Matrix API:", status);
                    }
                }
            );
        }

        // Load the map
   

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

