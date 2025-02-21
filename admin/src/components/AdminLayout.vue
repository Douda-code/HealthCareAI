<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <NavsideBar :activeSection="activeSection" />
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import NavsideBar from './NavsideBar.vue';
import { ref } from 'vue';

const activeSection = ref('admin');
</script>
