<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Physician & Consultation Management</h1>

      <!-- Physician Directory -->
      <h2 class="text-xl font-semibold mb-2">Physician Directory</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="physician in physicians" :key="physician.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ physician.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ physician.specialty }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ physician.rating }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Appointment Scheduler -->
      <h2 class="text-xl font-semibold mb-2">Appointment Scheduler</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="appointment in appointments" :key="appointment.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ appointment.patientName }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ appointment.dateTime }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ appointment.status }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import AdminLayout from '../components/AdminLayout.vue';

const physicians = ref([
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', rating: '4.5' },
  { id: 2, name: 'Dr. Johnson', specialty: 'Neurologist', rating: '4.2' },
  { id: 3, name: 'Dr. Williams', specialty: 'Pediatrician', rating: '4.8' },
]);

const appointments = ref([
  { id: 1, patientName: 'John Doe', dateTime: '2024-03-25 10:00 AM', status: 'Scheduled' },
  { id: 2, patientName: 'Jane Smith', dateTime: '2024-03-26 02:00 PM', status: 'Confirmed' },
  { id: 3, patientName: 'Alice Johnson', dateTime: '2024-03-27 11:00 AM', status: 'Pending' },
]);
</script>
