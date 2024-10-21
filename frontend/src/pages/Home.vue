<template>
  <div id="webgl_canvas"></div>
  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;animation: page-slide-down 0.2s;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;animation:page-slide-end-left 0.2s ease;" title="Posts"></iframe>
</template>
<script>


document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

</script>
<script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"></script>
<script setup>
setTimeout(() => {
const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0].split('%', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
   }, 100);

</script>
