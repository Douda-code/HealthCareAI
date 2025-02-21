<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">System Settings & Configuration</h1>

      <!-- General Settings -->
      <h2 class="text-xl font-semibold mb-2">General Settings</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4">
        <div class="mb-4">
          <label for="language" class="block text-gray-700 text-sm font-bold mb-2">Language:</label>
          <select id="language" v-model="settings.language" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="timezone" class="block text-gray-700 text-sm font-bold mb-2">Timezone:</label>
          <select id="timezone" v-model="settings.timezone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>UTC</option>
            <option>EST</option>
            <option>PST</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="branding" class="block text-gray-700 text-sm font-bold mb-2">Branding:</label>
          <input type="text" id="branding" v-model="settings.branding" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
      </div>

      <!-- Security Settings -->
      <h2 class="text-xl font-semibold mb-2">Security Settings</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4">
        <div class="mb-4">
          <label for="password-requirements" class="block text-gray-700 text-sm font-bold mb-2">Password Requirements:</label>
          <input type="text" id="password-requirements" v-model="settings.passwordRequirements" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="2fa" class="block text-gray-700 text-sm font-bold mb-2">2FA:</label>
          <select id="2fa" v-model="settings['2fa']" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="session-timeout" class="block text-gray-700 text-sm font-bold mb-2">Session Timeout:</label>
          <input type="text" id="session-timeout" v-model="settings.sessionTimeout" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
      </div>

      <!-- Integration & API Settings -->
      <h2 class="text-xl font-semibold mb-2">Integration & API Settings</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4">
        <div class="mb-4">
          <label for="ai-model" class="block text-gray-700 text-sm font-bold mb-2">AI Model Integration:</label>
          <input type="text" id="ai-model" v-model="settings.aiModel" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="third-party-services" class="block text-gray-700 text-sm font-bold mb-2">Third-Party Services:</label>
          <input type="text" id="third-party-services" v-model="settings.thirdPartyServices" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="data-storage" class="block text-gray-700 text-sm font-bold mb-2">Data Storage:</label>
          <input type="text" id="data-storage" v-model="settings.dataStorage" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
      </div>

      <!-- Backup & Recovery -->
      <h2 class="text-xl font-semibold mb-2">Backup & Recovery</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4">
        <div class="mb-4">
          <label for="backup-schedule" class="block text-gray-700 text-sm font-bold mb-2">Backup Schedule:</label>
          <input type="text" id="backup-schedule" v-model="settings.backupSchedule" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="recovery-plan" class="block text-gray-700 text-sm font-bold mb-2">Recovery Plan:</label>
          <textarea id="recovery-plan" v-model="settings.recoveryPlan" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="saveSettings">
        Save Settings
      </button>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import AdminLayout from '../components/AdminLayout.vue';

const settings = ref({
  language: 'English',
  timezone: 'UTC',
  branding: 'Healthcare Admin',
  passwordRequirements: '8 characters, 1 uppercase, 1 number',
  '2fa': 'Enabled',
  sessionTimeout: '30 minutes',
  aiModel: 'Default',
  thirdPartyServices: 'None',
  dataStorage: 'Local',
  backupSchedule: 'Daily',
  recoveryPlan: 'Contact support'
});

const saveSettings = () => {
  // Implement settings saving logic here
  console.log('Saving settings:', settings.value);
};
</script>
