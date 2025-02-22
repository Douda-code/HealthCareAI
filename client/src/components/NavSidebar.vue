<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

defineProps({
  activeSection: String
})

const logout = () => {
  // Add logout logic here
  window.location.href = '/'
}
</script>

<template>
  <aside class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <nav class="space-y-2">
      <RouterLink to="/ai-analysis" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'ai-analysis', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'ai-analysis'}">
        AI Classification
      </RouterLink>
     
      <RouterLink to="/scans" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'scans', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'scans'}">
        Scan Results
      </RouterLink>
      <RouterLink to="/make-appointment" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'make-appointment', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'make-appointment'}">
        Make Lab Appointment
      </RouterLink>
      <RouterLink to="/consultation" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'consultation', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'consultation'}">
        Physician Consultation
      </RouterLink>
      <RouterLink to="/activity-history" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'dashboard', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'dashboard'}">
        Activity History
      </RouterLink>
      <RouterLink to="/notifications" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'notifications', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'notifications'}">
        Notifications
      </RouterLink>
      <RouterLink to="/account-settings" class="block py-2 px-4 rounded transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'account-settings', 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': activeSection !== 'account-settings'}">
        Account Settings
      </RouterLink>
      <button @click="logout" class="block py-2 px-4 rounded transition-colors duration-200 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
        Logout
      </button>
    </nav>
  </aside>
</template>