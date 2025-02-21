<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scanId = route.params.id
const scanDetails = ref(null)

onMounted(() => {
  // Fetch scan details based on scanId
  scanDetails.value = {
    id: scanId,
    date: '2024-03-15',
    type: 'MRI',
    status: 'Completed',
    details: 'Detailed view of MRI scan',
    thumbnail: 'https://via.placeholder.com/150',
    annotations: 'Annotations for MRI scan',
    visualization: 'https://via.placeholder.com/300'
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Scan Details</h1>
    
    <div v-if="scanDetails" class="bg-white shadow-md rounded-lg overflow-hidden p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">{{ scanDetails.type }} Scan - {{ scanDetails.date }}</h2>
        <RouterLink to="/scans" class="text-indigo-600 hover:text-indigo-800">
          Back to Scan Results
        </RouterLink>
      </div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex-shrink-0 h-20 w-20">
          <img class="h-20 w-20 rounded-full" :src="scanDetails.thumbnail" alt="">
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ scanDetails.date }}
          </div>
          <div class="text-sm text-gray-500">
            {{ scanDetails.type }} - {{ scanDetails.status }}
          </div>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Details</h3>
        <p class="text-gray-600">{{ scanDetails.details }}</p>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Annotations</h3>
        <p class="text-gray-600">{{ scanDetails.annotations }}</p>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Visualization</h3>
        <img :src="scanDetails.visualization" alt="Scan Visualization" class="w-full rounded-lg">
      </div>
      <div class="text-right">
        <a href="#" class="text-indigo-600 hover:text-indigo-800">
          Download Report
        </a>
      </div>
    </div>
  </div>
</template>
