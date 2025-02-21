<script setup>
import ScanResultsListing from '../components/ScanResultsListing.vue'
import NavSidebar from '../components/NavSidebar.vue'
import { ref } from 'vue';

const activeSection = ref('scans');
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">My Scan Results</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-4">
        <ScanResultsListing />
      </main>
    </div>
  </div>
</template>
