<template>
  <iframe src='' id='frame' height="100%" width="100%" style="padding: 0px;margin: 0px;animation: page-slide-down 1s ease;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
</template>
<script>
document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#f6d365');
    setTimeout(() => {
    const person = '/g/people/'+document.cookie.split('=', 4)[3].split(';', 1)[0];
  const frame = document.getElementById("frame");
  frame.src = person;
  }, 100);
</script>
