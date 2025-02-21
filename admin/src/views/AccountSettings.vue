<template>
  <AdminLayout>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Account Settings</h1>

      <!-- Profile Information -->
      <h2 class="text-xl font-semibold mb-2">Profile Information</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4 bg-white">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" id="name" v-model="profile.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="profile.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input type="tel" id="phone" v-model="profile.phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
      </div>

      <!-- Security Settings -->
      <h2 class="text-xl font-semibold mb-2">Security Settings</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4 bg-white">
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="security.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
          <input type="password" id="confirm-password" v-model="security.confirmPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Two-Factor Authentication:</label>
          <label class="inline-flex items-center">
            <input type="checkbox" v-model="security.twoFactorAuth" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">Enable</span>
          </label>
        </div>
      </div>

      <!-- Preferences -->
      <h2 class="text-xl font-semibold mb-2">Preferences</h2>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4 p-4 bg-white">
        <div class="mb-4">
          <label for="language" class="block text-gray-700 text-sm font-bold mb-2">Language:</label>
          <select id="language" v-model="preferences.language" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Notifications:</label>
          <label class="inline-flex items-center">
            <input type="checkbox" v-model="preferences.notifications" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">Enable</span>
          </label>
        </div>
        <div class="mb-4">
          <label for="theme" class="block text-gray-700 text-sm font-bold mb-2">Theme:</label>
          <select id="theme" v-model="preferences.theme" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Light</option>
            <option>Dark</option>
          </select>
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

const profile = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890'
});

const security = ref({
  password: '',
  confirmPassword: '',
  twoFactorAuth: false
});

const preferences = ref({
  language: 'English',
  notifications: true,
  theme: 'Light'
});

const saveSettings = () => {
  // Implement settings saving logic here
  console.log('Saving settings:', {
    profile: profile.value,
    security: security.value,
    preferences: preferences.value
  });
};
</script>
