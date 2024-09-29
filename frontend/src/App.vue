<template>
  <div>
    <div class="wrapper">
  <div class="group">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  <div class="group">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  <div class="group">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  <div class="group">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
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
