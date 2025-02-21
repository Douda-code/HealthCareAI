<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Reports & Analytics</h1>

      <!-- Pre-built Reports -->
      <h2 class="text-xl font-semibold mb-2">Pre-built Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900">User Registrations</h3>
          <p class="text-gray-600">View trends in user registrations over time.</p>
          <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Report</button>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900">Scan Processing Statistics</h3>
          <p class="text-gray-600">Analyze scan processing times and success rates.</p>
          <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Report</button>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900">Appointment Trends</h3>
          <p class="text-gray-600">Track appointment scheduling and completion rates.</p>
          <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Report</button>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900">AI Performance Metrics</h3>
          <p class="text-gray-600">Evaluate the accuracy and efficiency of AI models.</p>
          <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Report</button>
        </div>
      </div>

      <!-- Custom Report Builder -->
      <h2 class="text-xl font-semibold mb-2">Custom Report Builder</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4 bg-white">
        <p class="text-gray-600 mb-4">Create custom queries and dashboards to analyze specific data sets.</p>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Custom Report
        </button>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../components/AdminLayout.vue';
</script>
