<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  scanResult: {
    type: Object,
    required: true
  },
  showModal: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay, when the modal is open -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            Scan Result Details
          </h3>
          <div class="mt-2">
            <p><strong>Patient Name:</strong> {{ scanResult.patientName }}</p>
            <p><strong>Upload Date:</strong> {{ scanResult.uploadDate }}</p>
            <p><strong>Scan Type:</strong> {{ scanResult.scanType }}</p>
            <p><strong>Classification Status:</strong> {{ scanResult.classificationStatus }}</p>
            <p><strong>Confidence Score:</strong> {{ scanResult.confidenceScore }}</p>
            <p><strong>AI Report:</strong> {{ scanResult.aiReport }}</p>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles for the popup here */
</style>
