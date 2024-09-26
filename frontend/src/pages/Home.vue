    <template #body-content>
      <div class="text-base">
        <div class="flex flex-col gap-4">
          <div
            class="flex items-center border-b border-solid border-lightGray pb-4 gap-2"
          >
            <Avatar
              size="3xl"
              class="h-12 w-12"
              :label="studentInfo.student_name"
              :image="studentInfo.image || null"
            />
            <div class="flex flex-col ml-2 gap-1">
              <p class="text-lg font-semibold">
                {{ studentInfo.student_name }}
              </p>
              <p class="text-gray-600">{{ studentInfo.student_email_id }}</p>
            </div>
          </div>
          <div>
            <div class="flex gap-4">
              <div
                v-for="section in infoFormat"
                :key="section.section"
                class="flex-1 flex flex-col gap-4"
              >
                <div v-for="field in section.fields" :key="field.label">
                  <div
                    class="flex items-center"
                    v-if="field.label !== 'Address'"
                  >
                    <p class="w-1/2 text-sm text-gray-600">
                      {{ field.label }}:&nbsp;
                    </p>
                    <p class="w-1/2 text-gray-900">{{ field.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <p class="w-[32%] text-sm text-gray-600">
                {{ infoFormat[0].fields[3].label }}:&nbsp;
              </p>
              <p class="w-full text-gray-900">
                {{ infoFormat[0].fields[3].value }}
              </p>
            </div>
          </div>

          <div
            class="flex items-center bg-gray-50 p-2 text-gray-600 text-sm rounded-md"
          >
            <FeatherIcon name="info" class="h-4 mr-2" />
            In case of any incorrect details, please contact the school admin.
          </div>
        </div>
      </div>
        <body onload="JSmetronome.init()">
	<div id="JSMetroContainer" class="unselectable">
		<div id="tempoUp" class="unselectable"></div>
		<div id="tempoDown" class="unselectable"></div>
		<div id="Beat" class="unselectable">0</div>
		<div id="timeSignature" class="unselectable"></div>
		<div id="TempoContainer" class="unselectable">
			<span id="tempoDisplay" class="unselectable"></span>
			<span id="tempoTag" class="unselectable">bpm</span>
		</div>
		<div id="tapBkg" class="unselectable"></div>
		<div id="tap" class="unselectable">TAP</div>
		<div id="power" class="unselectable"></div>
		<div id="BellButton" class="unselectable"></div>
		<audio id="metronomeTick_1" preload="auto">
	     <source src="https://caljer1.github.io/MetronomeLite/sounds/click.mp3" type="audio/mp3" />
<!--       <source src="https://caljer1.github.io/MetronomeLite/sounds/clave.mp3" type="audio/mp3" /> -->
<!--       <source src="https://caljer1.github.io/MetronomeLite/sounds/clap.mp3" type="audio/mp3" /> -->
<!--       <source src="https://caljer1.github.io/MetronomeLite/sounds/rimshot.mp3" type="audio/mp3" /> -->
		</audio>
		<audio id="metronomeBell" preload="auto">
			<source src="https://caljer1.github.io/MetronomeLite/sounds/bell.mp3" type="audio/mp3" />
		</audio>
	</div>
            <script>
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

    </script>
            </body>
    </template>

<script setup>
import { Dialog, Avatar, FeatherIcon } from 'frappe-ui'
import { inject } from 'vue'
import { studentStore } from '@/stores/student'
const { getStudentInfo } = studentStore()

const showProfileDialog = inject('showProfileDialog')

const studentInfo = getStudentInfo().value

const infoFormat = [
  {
    section: 'section 1',
    fields: [
      {
        label: 'Mobile Number',
        value: studentInfo.student_mobile_number,
      },
      {
        label: 'Joining Date',
        value: studentInfo.joining_date,
      },
      {
        label: 'Date of Birth',
        value: studentInfo.date_of_birth,
      },
      {
        label: 'Address',
        value: [
          studentInfo?.address_line_1,
          studentInfo?.address_line_2,
          studentInfo?.city,
          studentInfo?.pincode,
          studentInfo?.state,
          studentInfo?.country,
        ]
          .map((item) => item?.trim())
          .filter(Boolean)
          .join(', '),
      },
    ],
  },
  {
    section: 'section 2',
    fields: [
      {
        label: 'Blood Group',
        value: studentInfo.blood_group,
      },
      {
        label: 'Gender',
        value: studentInfo.gender,
      },
      {
        label: 'Nationality',
        value: studentInfo.nationality,
      },
    ],
  },
]
</script>
