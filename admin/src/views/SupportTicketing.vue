<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Support & Ticketing System</h1>

      <!-- Ticket List -->
      <h2 class="text-xl font-semibold mb-2">Ticket List</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ ticket.subject }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ ticket.status }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ ticket.reportedBy }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="openTicketDetails(ticket)" class="text-indigo-600 hover:text-indigo-900">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Ticket Details Modal -->
      <div v-if="selectedTicket" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Ticket Details
              </h3>
              <div class="mt-2">
                <p><strong>Subject:</strong> {{ selectedTicket.subject }}</p>
                <p><strong>Status:</strong> {{ selectedTicket.status }}</p>
                <p><strong>Reported By:</strong> {{ selectedTicket.reportedBy }}</p>
                <p><strong>Description:</strong> {{ selectedTicket.description }}</p>

                <div class="mt-4">
                  <label for="ticket-notes" class="block text-gray-700 text-sm font-bold mb-2">Notes:</label>
                  <textarea id="ticket-notes" v-model="selectedTicket.notes" rows="3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>

                <div class="mt-4">
                  <label for="ticket-status" class="block text-gray-700 text-sm font-bold mb-2">Change Status:</label>
                  <select id="ticket-status" v-model="selectedTicket.status" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Open</option>
                    <option>Pending</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="saveTicketDetails">
                Save
              </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeTicketDetails">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import AdminLayout from '../components/AdminLayout.vue';

const tickets = ref([
  { id: 1, subject: 'Login Issue', status: 'Open', reportedBy: 'John Doe', description: 'Unable to login', notes: '' },
  { id: 2, subject: 'Scan Result Error', status: 'Pending', reportedBy: 'Jane Smith', description: 'Incorrect scan result', notes: '' },
  { id: 3, subject: 'System Slowdown', status: 'Resolved', reportedBy: 'Alice Johnson', description: 'System is running slow', notes: '' },
]);

const selectedTicket = ref(null);

const openTicketDetails = (ticket) => {
  selectedTicket.value = { ...ticket };
};

const closeTicketDetails = () => {
  selectedTicket.value = null;
};

const saveTicketDetails = () => {
  // Implement ticket details saving logic here
  console.log('Saving ticket details:', selectedTicket.value);
  closeTicketDetails();
};
</script>
