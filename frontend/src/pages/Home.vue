<template>
  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;animation: page-slide-down 0.2s;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
</template>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {

document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');

document.getElementsByClassName('flex-1 flex flex-col h-full overflow-auto')[0].attributes.style.value = 'animation:page-slide-end-left 0.2s ease';
  });
</script>
<script setup>
    document.addEventListener("DOMContentLoaded", function(event) {
const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0].split('%', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
    });

</script>
