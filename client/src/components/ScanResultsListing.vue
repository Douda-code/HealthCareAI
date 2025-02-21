<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import ScanDetailsPopup from './ScanDetailsPopup.vue'

const scanResults = ref([
  { id: 1, thumbnail: 'https://via.placeholder.com/150', date: '2024-03-15', type: 'MRI', status: 'Completed', details: 'Detailed view of MRI scan', patientName: 'John Doe', aiReport: 'Normal', confidenceScore: '0.95' },
  { id: 2, thumbnail: 'https://via.placeholder.com/150', date: '2024-03-20', type: 'CT Scan', status: 'Pending', details: 'Detailed view of CT Scan', patientName: 'Jane Smith', aiReport: 'Inconclusive', confidenceScore: '0.80' },
  { id: 3, thumbnail: 'https://via.placeholder.com/150', date: '2024-03-14', type: 'X-Ray', status: 'Completed', details: 'Detailed view of X-Ray scan', patientName: 'Alice Johnson', aiReport: 'Fracture detected', confidenceScore: '0.90' }
])

const searchQuery = ref('')
const sortBy = ref('date')
const sortOrder = ref('asc')
const selectedScanResult = ref(null)
const isModalOpen = ref(false)

const filteredAndSortedResults = computed(() => {
  let results = scanResults.value

  // Filter by search query
  if (searchQuery.value) {
    results = results.filter(result => 
      result.date.includes(searchQuery.value) ||
      result.type.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      result.status.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Sort by selected column and order
  results = results.sort((a, b) => {
    if (a[sortBy.value] < b[sortBy.value]) return sortOrder.value === 'asc' ? -1 : 1
    if (a[sortBy.value] > b[sortBy.value]) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })

  return results
})

const toggleSortOrder = (column) => {
  if (sortBy.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = column
    sortOrder.value = 'asc'
  }
}

const openModal = (scan) => {
  selectedScanResult.value = { ...scan }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedScanResult.value = null
}
</script>

<template>
  <div>
    <div class="mb-4">
      <input v-model="searchQuery" type="text" placeholder="Search by date, type, or status" class="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500">
    </div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" @click="toggleSortOrder('date')">
            Date
            <span v-if="sortBy === 'date'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" @click="toggleSortOrder('type')">
            Type
            <span v-if="sortBy === 'type'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" @click="toggleSortOrder('status')">
            Status
            <span v-if="sortBy === 'status'">{{ sortOrder === 'asc' ? '🔼' : '🔽' }}</span>
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="result in filteredAndSortedResults" :key="result.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img class="h-10 w-10 rounded-full" :src="result.thumbnail" alt="">
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ result.date }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ result.type }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" v-if="result.status === 'Completed'">
              {{ result.status }}
            </span>
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800" v-else>
              {{ result.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button @click="openModal(result)" class="text-indigo-600 hover:text-indigo-800 mr-2">
              View Details
            </button>
            <a href="#" class="text-indigo-600 hover:text-indigo-800">
              Download
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <ScanDetailsPopup :scanResult="selectedScanResult" :showModal="isModalOpen" @close="closeModal" />
  </div>
</template>

<style scoped>
/* Add any additional styles for the scan results listing here */
</style>
