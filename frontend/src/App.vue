<template>
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
    <div class="flex h-screen w-screen" style="background-size: 100vw auto;height:100vh !important;background-repeat: no-repeat;background-position: center;background-image:url('/files/image.jpg');">
      <div class="h-full border-r bg-gray-50">
        <Sidebar />
      </div>
      <div class="flex-1 flex flex-col h-full overflow-auto" style="background:transparent!important;">
        <Navbar />
          <router-view  
            class="flex-1 overflow-auto" style="background:transparent!important;"
          />
      </div>
    </div>
  </div>
  <Toasts />
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import { Toasts } from 'frappe-ui';
</script>
