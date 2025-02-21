<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

defineProps({
  activeSection: String
})

const logout = () => {
  // Add logout logic here
  window.location.href = '/';
};
</script>

<template>
  <aside class="bg-white rounded-lg shadow-md p-4">
    
    <nav class="space-y-2">
      <RouterLink to="/dashboard" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'dashboard', 'text-gray-600 hover:bg-gray-100': activeSection !== 'dashboard'}">
        Dashboard
      </RouterLink>
      <RouterLink to="/scans" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'scans', 'text-gray-600 hover:bg-gray-100': activeSection !== 'scans'}">
        Scan Results
      </RouterLink>
      <RouterLink to="/ai-analysis" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'ai-analysis', 'text-gray-600 hover:bg-gray-100': activeSection !== 'ai-analysis'}">
        AI Classification
      </RouterLink>
      <RouterLink to="/consultation" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'consultation', 'text-gray-600 hover:bg-gray-100': activeSection !== 'consultation'}">
        Physician Consultation
      </RouterLink>
      <RouterLink to="/resources" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'resources', 'text-gray-600 hover:bg-gray-100': activeSection !== 'resources'}">
        Resources
      </RouterLink>
      <RouterLink to="/account-settings" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'account-settings', 'text-gray-600 hover:bg-gray-100': activeSection !== 'account-settings'}">
        Account Settings
      </RouterLink>
      <RouterLink to="/notifications" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'notifications', 'text-gray-600 hover:bg-gray-100': activeSection !== 'notifications'}">
        Notifications
      </RouterLink>
      <button @click="logout" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200 text-red-600 hover:text-red-800 w-full text-left">
        Logout
      </button>
    </nav>
  </aside>
</template>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.text-gray-800 {
  color: #2d3748;
}

.hover\:bg-gray-100:hover {
  background-color: #f7fafc;
}

.router-link-active {
  background-color: #edf2f7;
  color: #2d3748;
}

.block {
  display: block;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded {
  border-radius: 0.375rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
