<script setup>
import Navbar from './components/Navbar.vue'
import BottomNavBar from './components/BottomNavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="py-8">
      <RouterView />
    </main>
    <BottomNavBar />
  </div>
</template>

<style scoped>
/* Add padding to the body to make room for the bottom navigation bar */
body {
  padding-bottom: 6rem; /* Adjust the padding based on the height of the bottom navigation bar */
}

/* Ensure the main content area is padded appropriately */
main {
  padding-bottom: 6rem; /* Adjust the padding based on the height of the bottom navigation bar */
}
</style>
