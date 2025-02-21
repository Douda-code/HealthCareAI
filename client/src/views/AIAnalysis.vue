<script setup>
import { ref } from 'vue'
import NavSidebar from '../components/NavSidebar.vue'

const file = ref(null)
const isUploading = ref(false)
const activeSection = ref('ai-analysis')

const handleFileChange = (event) => {
  file.value = event.target.files[0]
}

const handleDrop = (event) => {
  event.preventDefault()
  file.value = event.dataTransfer.files[0]
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const uploadScan = () => {
  if (file.value) {
    isUploading.value = true
    // Simulate upload and processing
    setTimeout(() => {
      isUploading.value = false
      alert('Scan uploaded and processed successfully!')
    }, 3000)
  } else {
    alert('Please select a file to upload.')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">AI Analysis</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Disease Classification</h2>
        <p class="text-gray-600 mb-6">
          Upload your scan images for AI-powered analysis of three specific diseases.
        </p>
        
        <!-- Combined Upload and Drag and Drop Section -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center relative" @drop="handleDrop" @dragover="handleDragOver">
          <div v-if="isUploading" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <svg class="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <div v-else>
            <p class="text-gray-600 mb-4">Drag and drop your scan files here or click to select files</p>
            <input type="file" @change="handleFileChange" class="hidden" id="file-upload">
            <label for="file-upload" class="cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Select Files
            </label>
            <div class="mt-4">
              <p class="text-gray-500 text-sm">Supported file types: JPEG, PNG, PDF</p>
              <p class="text-gray-500 text-sm">Max file size: 10MB</p>
            </div>
          </div>
        </div>
        
        <!-- Upload Button -->
        <div class="mt-8 text-center">
          <button @click="uploadScan" class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700" :disabled="isUploading">
            Upload and Analyze
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
