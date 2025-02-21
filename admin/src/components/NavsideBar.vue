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
      <RouterLink to="/" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'admin', 'text-gray-600 hover:bg-gray-100': activeSection !== 'admin'}">
        Admin Dashboard
      </RouterLink>
      <RouterLink to="/users" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'users', 'text-gray-600 hover:bg-gray-100': activeSection !== 'users'}">
        User Management
      </RouterLink>
      <RouterLink to="/scan-results" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'scan-results', 'text-gray-600 hover:bg-gray-100': activeSection !== 'scan-results'}">
        Scan Results
      </RouterLink>
      <RouterLink to="/physician-consultation" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'physician-consultation', 'text-gray-600 hover:bg-gray-100': activeSection !== 'physician-consultation'}">
        Physician Consultation
      </RouterLink>
      <RouterLink to="/notifications-announcements" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'notifications-announcements', 'text-gray-600 hover:bg-gray-100': activeSection !== 'notifications-announcements'}">
        Notifications Announcements
      </RouterLink>
      <RouterLink to="/system-settings" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'system-settings', 'text-gray-600 hover:bg-gray-100': activeSection !== 'system-settings'}">
        System Settings
      </RouterLink>
      <RouterLink to="/logs-audit-trail" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'logs-audit-trail', 'text-gray-600 hover:bg-gray-100': activeSection !== 'logs-audit-trail'}">
        Logs Audit Trail
      </RouterLink>
      <RouterLink to="/reports-analytics" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'reports-analytics', 'text-gray-600 hover:bg-gray-100': activeSection !== 'reports-analytics'}">
        Reports Analytics
      </RouterLink>
      <RouterLink to="/support-ticketing" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'support-ticketing', 'text-gray-600 hover:bg-gray-100': activeSection !== 'support-ticketing'}">
        Support Ticketing
      </RouterLink>
      <RouterLink to="/account-settings" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'account-settings', 'text-gray-600 hover:bg-gray-100': activeSection !== 'account-settings'}">
        Account Settings
      </RouterLink>
      <RouterLink to="/emergency" class="block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200" :class="{'bg-indigo-600 text-white': activeSection === 'emergency', 'text-gray-600 hover:bg-gray-100': activeSection !== 'emergency'}">
        Emergency
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
