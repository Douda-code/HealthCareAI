<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">User Management</h1>

      <!-- Filters and Search -->
      <div class="flex flex-wrap items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <label for="user-type-filter" class="text-sm font-medium text-gray-700">Filter by Type:</label>
          <select id="user-type-filter" v-model="userTypeFilter" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">All</option>
            <option>Patient</option>
            <option>Physician</option>
            <option>Admin</option>
          </select>
        </div>

        <div class="flex items-center space-x-2">
          <label for="user-status-filter" class="text-sm font-medium text-gray-700">Filter by Status:</label>
          <select id="user-status-filter" v-model="userStatusFilter" class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="">All</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>

        <div class="flex items-center">
          <label for="user-search" class="sr-only">Search users</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" id="user-search" v-model="searchTerm" placeholder="Search users" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
        </div>
      </div>

      <!-- User List/Table -->
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.role }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.status }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.registrationDate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="openModal(user)" class="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <EditUserModal :user="selectedUser" :showModal="isModalOpen" @close="closeModal" @save="saveUser" />
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AdminLayout from '../components/AdminLayout.vue';
import EditUserModal from '../components/EditUserModal.vue';

const users = ref([
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Patient', status: 'Active', registrationDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Physician', status: 'Active', registrationDate: '2023-12-01' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin', status: 'Active', registrationDate: '2024-02-20' },
]);

const userTypeFilter = ref('');
const userStatusFilter = ref('');
const searchTerm = ref('');
const isModalOpen = ref(false);
const selectedUser = ref(null);

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const typeMatch = userTypeFilter.value === '' || user.role === userTypeFilter.value;
    const statusMatch = userStatusFilter.value === '' || user.status === userStatusFilter.value;
    const searchMatch = user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.value.toLowerCase());
    return typeMatch && statusMatch && searchMatch;
  });
});

const openModal = (user) => {
  selectedUser.value = { ...user };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedUser.value = null;
};

const saveUser = (updatedUser) => {
  const index = users.value.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    users.value[index] = updatedUser;
  }
  closeModal();
};
</script>
