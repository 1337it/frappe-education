<template>
  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
</template>
<script>
  window.addEventListener("load", (event) => {
const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
});


</script>
