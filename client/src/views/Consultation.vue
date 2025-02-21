<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavSidebar from '../components/NavSidebar.vue'

const consultationOptions = ref([
  { type: 'text', title: 'Text Messaging', description: 'Send a text message to your physician for quick consultations.' },
  { type: 'video', title: 'Video Calls', description: 'Schedule a video call with your physician for a virtual consultation.' },
  { type: 'in-person', title: 'In-Person Appointments', description: 'Book an in-person appointment with your physician.' }
])

const physicians = ref([
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', rating: '4.5/5', contact: 'john.doe@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', rating: '4.8/5', contact: 'jane.smith@example.com', phone: '098-765-4321' },
  { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrician', rating: '4.7/5', contact: 'emily.johnson@example.com', phone: '555-123-4567' }
])

const selectedOption = ref(null)
const selectedPhysician = ref(null)
const showScheduler = ref(false)
const activeSection = ref('consultation')

const selectOption = (option) => {
  selectedOption.value = option
  showScheduler.value = option.type !== 'text'
}

const selectPhysician = (physician) => {
  selectedPhysician.value = physician
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Physician Consultation</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-6">
        <!-- Consultation Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div v-for="option in consultationOptions" :key="option.type" class="bg-white shadow-md rounded-lg overflow-hidden p-6 text-center cursor-pointer" @click="selectOption(option)">
            <h2 class="text-xl font-semibold mb-4">{{ option.title }}</h2>
            <p class="text-gray-600">{{ option.description }}</p>
          </div>
        </div>
        
        <!-- Physician Directory -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Nearby Physicians</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="physician in physicians" :key="physician.id" class="bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer" @click="selectPhysician(physician)">
              <h3 class="font-medium">{{ physician.name }}</h3>
              <p class="text-sm text-gray-500">{{ physician.specialty }}</p>
              <p class="text-sm text-gray-500">{{ physician.rating }}</p>
              <p class="text-sm text-gray-500">{{ physician.contact }}</p>
              <p class="text-sm text-gray-500">{{ physician.phone }}</p>
            </div>
          </div>
        </div>
        
        <!-- Appointment Scheduler -->
        <div v-if="showScheduler && selectedOption" class="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Schedule {{ selectedOption.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            <div>
              <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
              <input type="time" id="time" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>
          <div class="mt-4 text-center">
            <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Book Appointment
            </button>
          </div>
        </div>
        
        <!-- Communication Interface -->
        <div v-if="selectedOption && selectedOption.type === 'text'" class="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Text Messaging with {{ selectedPhysician ? selectedPhysician.name : 'Physician' }}</h2>
          <div class="border-b border-gray-200 p-4">
            <p class="text-gray-600">Send a text message to your physician for quick consultations.</p>
          </div>
          <div class="p-4">
            <textarea rows="4" class="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Type your message here..."></textarea>
            <div class="mt-4 text-right">
              <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                Send Message
              </button>
            </div>
          </div>
        </div>
        
        <div v-if="selectedOption && selectedOption.type === 'video'" class="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Video Call with {{ selectedPhysician ? selectedPhysician.name : 'Physician' }}</h2>
          <div class="border-b border-gray-200 p-4">
            <p class="text-gray-600">Join a secure video call with your physician.</p>
          </div>
          <div class="p-4">
            <button class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Start Video Call
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
