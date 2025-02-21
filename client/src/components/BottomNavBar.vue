<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center h-16 items-center">
        <div class="flex space-x-8">
          <RouterLink
            to="/about"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            About Us
          </RouterLink>
          <RouterLink
            to="/resources"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Contact Us
          </RouterLink>
          <RouterLink
            to="/emergency"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-red-600 hover:text-red-700"
          >
            Emergency
          </RouterLink>
        </div>
      </div>
    </div>
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
