<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavSidebar from '../components/NavSidebar.vue'

const recentActivities = ref([
  { type: 'scan', title: 'MRI Results Available', date: '2024-03-15', summary: 'Your MRI scan results are now available for review.' },
  { type: 'appointment', title: 'Consultation with Dr. Smith', date: '2024-03-20', summary: 'You have an upcoming consultation with Dr. Smith.' },
  { type: 'report', title: 'AI Analysis Complete', date: '2024-03-14', summary: 'Your AI analysis report is ready.' }
])

const upcomingAppointments = ref([
  { title: 'Consultation with Dr. Smith', date: '2024-03-20', time: '10:00 AM' },
  { title: 'Follow-up with Dr. Johnson', date: '2024-03-25', time: '2:00 PM' }
])

const logout = () => {
  // Add logout logic here
  window.location.href = '/'
}

const activeSection = ref('dashboard')
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Patient Dashboard</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Recent Activities -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Recent Activities</h2>
            <div class="space-y-4">
              <div v-for="activity in recentActivities" :key="activity.title" class="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <h3 class="font-medium">{{ activity.title }}</h3>
                  <p class="text-sm text-gray-500">{{ activity.date }}</p>
                  <p class="text-sm text-gray-500">{{ activity.summary }}</p>
                </div>
                <button class="text-indigo-600 hover:text-indigo-800">View</button>
              </div>
            </div>
          </div>

          <!-- Upcoming Appointments -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            <div class="space-y-4">
              <div v-for="appointment in upcomingAppointments" :key="appointment.title" class="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <h3 class="font-medium">{{ appointment.title }}</h3>
                  <p class="text-sm text-gray-500">{{ appointment.date }} at {{ appointment.time }}</p>
                </div>
                <button class="text-indigo-600 hover:text-indigo-800">Reschedule</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
