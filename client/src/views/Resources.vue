<script setup>
import NavSidebar from '../components/NavSidebar.vue'
import { ref } from 'vue';

const activeSection = ref('resources');
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Healthcare Resources</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- FAQs -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <ul class="space-y-4">
                <li>
                  <h3 class="font-medium">How do I upload my scans?</h3>
                  <p class="text-gray-600 text-sm mt-1">Navigate to the Scans page and use the upload feature.</p>
                </li>
                <li>
                  <h3 class="font-medium">How accurate is the AI analysis?</h3>
                  <p class="text-gray-600 text-sm mt-1">Our AI models are regularly validated with high accuracy rates.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Educational Resources -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-4">Educational Resources</h2>
              <ul class="space-y-4">
                <li>
                  <a href="#" class="text-indigo-600 hover:text-indigo-800">Understanding Medical Scans</a>
                </li>
                <li>
                  <a href="#" class="text-indigo-600 hover:text-indigo-800">Patient Rights Guide</a>
                </li>
                <li>
                  <a href="#" class="text-indigo-600 hover:text-indigo-800">Healthcare Terms Glossary</a>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Support -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-4">Technical Support</h2>
              <p class="text-gray-600 mb-4">Need help? Our support team is available 24/7.</p>
              <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 w-full">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
