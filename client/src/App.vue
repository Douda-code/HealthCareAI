<script setup>
import Navbar from './components/Navbar.vue'
import BottomNavBar from './components/BottomNavBar.vue'
import { useDarkModeStore } from './stores/darkMode'
import { onMounted, watch } from 'vue'

const darkModeStore = useDarkModeStore()

// Initialize dark mode based on system preference
onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (prefersDark) {
    darkModeStore.toggleDarkMode()
  }
})
</script>

<template>
  <div class="min-h-screen min-w-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <Navbar />
    <main class="flex-grow w-full">
      <RouterView />
    </main>
    <BottomNavBar />
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
</style>