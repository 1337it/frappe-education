<template>
  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;animation:page-slide 0.3s ease;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
  <script>
 setTimeout(() => {
    const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
  }, 200);

</script>
</template>
<script>


</script>
