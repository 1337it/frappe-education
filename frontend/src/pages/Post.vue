<template>
  <a class="block bg-transparent hover:bg-transparent active:bg-transparent sm:hidden" style="display: block;z-index: 99;position: absolute;left:5px;" id="backbutton" href="#" onclick="window.location.replace('/student-portal');"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="block text-gray-12" height="34" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></a>
  <iframe src="/raven/channel/general" height="100%" width="100%" style="padding: 0px;margin: 0px;z-index: 9;width: 100vw;position: absolute;left: 0;height:100vh;top:0;" title="Posts"></iframe>
</template>
<script setup>
$("header").prepend($("a#backbutton"));
</script>

