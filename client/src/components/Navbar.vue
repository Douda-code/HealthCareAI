<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import LoginModal from './LoginModal.vue';

const router = useRouter();
const isAuthenticated = ref(false); // This should be managed by your auth store
const showLoginModal = ref(false);

const notifications = ref([
  { title: 'New Message from Dr. Smith', date: '2024-03-19' },
  { title: 'AI Analysis Report Ready', date: '2024-03-14' },
]);

const showNotifications = ref(false);
const showProfileDropdown = ref(false);

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value;
};

const openLoginModal = () => {
  showLoginModal.value = true;
};

const closeLoginModal = () => {
  showLoginModal.value = false;
};

const logout = () => {
  isAuthenticated.value = false;
  router.push('/');
};

const profilePicture = ref('https://via.placeholder.com/150');
const userName = ref('John Doe');

// Click away functionality
const handleClickOutside = (event) => {
  if (showNotifications.value && !event.target.closest('.notifications-icon')) {
    showNotifications.value = false;
  }
  if (showProfileDropdown.value && !event.target.closest('.profile-icon')) {
    showProfileDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <RouterLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-indigo-600">HealthCare</span>
          </RouterLink>
        </div>
        <div class="flex items-center">
          <!-- Show these elements only when authenticated -->
          <template v-if="isAuthenticated">
            <div class="relative notifications-icon mr-4">
              <button
                @click="toggleNotifications"
                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538.214 1.055.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </button>
              <div
                v-if="showNotifications"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              >
                <div class="block px-4 py-2 text-sm font-medium text-gray-900">
                  Notifications
                </div>
                <div class="mt-1 text-sm text-gray-500">
                  <ul class="space-y-2">
                    <li
                      v-for="notification in notifications"
                      :key="notification.title"
                      class="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <div>
                        <h3 class="font-medium">{{ notification.title }}</h3>
                        <p class="text-sm text-gray-500">
                          {{ notification.date }}
                        </p>
                      </div>
                      <button class="text-indigo-600 hover:text-indigo-800">
                        Mark as Read
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative profile-icon">
              <button
                @click="toggleProfileDropdown"
                class="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline"
              >
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    :src="profilePicture"
                    alt="Profile Picture"
                    class="h-10 w-10 rounded-full"
                  />
                </div>
              </button>
              <div
                v-if="showProfileDropdown"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              >
                <div class="block px-4 py-2 text-sm text-gray-700 font-semibold">
                  {{ userName }}
                </div>
                <RouterLink
                  to="/dashboard"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </RouterLink>
                <RouterLink
                  to="/notifications"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </RouterLink>
                <RouterLink
                  to="/account-settings"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Account Settings
                </RouterLink>
                <button
                  @click="logout"
                  class="block px-4 py-2 text-sm text-red-600 hover:text-red-800 w-full text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          </template>
          <!-- Show login/register when not authenticated -->
          <template v-else>
            <button
              @click="openLoginModal"
              class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Login
            </button>
            <RouterLink
              to="/register"
              class="bg-white hover:bg-gray-100 text-indigo-500 font-bold py-2 px-4 rounded border border-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Register
            </RouterLink>
          </template>
        </div>
      </div>
    </div>
    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center h-16 items-center">
          <div class="flex space-x-8">
            <RouterLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/resources"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Services
            </RouterLink>
            <RouterLink
              to="/contact"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </RouterLink>
            <RouterLink
              to="/emergency"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-red-600 hover:text-red-700"
            >
              Emergency
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <LoginModal v-if="showLoginModal" @close="closeLoginModal" />
  </nav>
</template>

<style scoped>
.notifications-icon .absolute {
  top: 100%;
  right: 0;
}

.profile-icon .absolute {
  top: 100%;
  right: 0;
}
</style>