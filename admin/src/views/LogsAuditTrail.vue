<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Logs & Audit Trail</h1>

      <!-- Filters & Date Ranges -->
      <div class="flex flex-wrap items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <label for="user-filter" class="text-sm font-medium text-gray-700">Filter by User:</label>
          <select id="user-filter" v-model="logFilters.user" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">All</option>
            <option>Admin</option>
            <option>User1</option>
            <option>User2</option>
          </select>
        </div>

        <div class="flex items-center space-x-2">
          <label for="event-type-filter" class="text-sm font-medium text-gray-700">Filter by Event Type:</label>
          <select id="event-type-filter" v-model="logFilters.eventType" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">All</option>
            <option>Login</option>
            <option>Logout</option>
            <option>Data Change</option>
            <option>Error</option>
          </select>
        </div>

        <div class="flex items-center space-x-2">
          <label for="date-range-start" class="text-sm font-medium text-gray-700">Date Range:</label>
          <input type="date" id="date-range-start" v-model="logFilters.dateRangeStart" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <label for="date-range-end" class="text-sm font-medium text-gray-700">to</label>
          <input type="date" id="date-range-end" v-model="logFilters.dateRangeEnd" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        </div>
      </div>

      <!-- Activity Logs -->
      <h2 class="text-xl font-semibold mb-2">Activity Logs</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Type</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="log in filteredLogs" :key="log.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ log.user }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ log.dateTime }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ log.eventType }}</td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ log.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Export Options -->
      <div class="mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="exportLogs">
          Export Logs
        </button>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AdminLayout from '../components/AdminLayout.vue';

const logs = ref([
  { id: 1, user: 'Admin', dateTime: '2024-03-25 10:00 AM', eventType: 'Login', description: 'Admin logged in' },
  { id: 2, user: 'User1', dateTime: '2024-03-25 11:00 AM', eventType: 'Data Change', description: 'User1 updated profile' },
  { id: 3, user: 'Admin', dateTime: '2024-03-25 12:00 PM', eventType: 'Logout', description: 'Admin logged out' },
]);

const logFilters = ref({
  user: '',
  eventType: '',
  dateRangeStart: '',
  dateRangeEnd: ''
});

const filteredLogs = computed(() => {
  return logs.value.filter(log => {
    const userMatch = logFilters.value.user === '' || log.user === logFilters.value.user;
    const eventTypeMatch = logFilters.value.eventType === '' || log.eventType === logFilters.value.eventType;

    const logDate = new Date(log.dateTime);
    const startDate = logFilters.value.dateRangeStart ? new Date(logFilters.value.dateRangeStart) : null;
    const endDate = logFilters.value.dateRangeEnd ? new Date(logFilters.value.dateRangeEnd) : null;

    let dateMatch = true;
    if (startDate) {
      dateMatch = dateMatch && logDate >= startDate;
    }
    if (endDate) {
      dateMatch = dateMatch && logDate <= endDate;
    }

    return userMatch && eventTypeMatch && dateMatch;
  });
});

const exportLogs = () => {
  // Implement log export logic here
  console.log('Exporting logs');
};
</script>
