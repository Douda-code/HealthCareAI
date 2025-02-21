<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const showProfileDropdown = ref(false);

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value;
};

const logout = () => {
  // Add logout logic here
  window.location.href = '/';
};

const profilePicture = ref('https://via.placeholder.com/150');
const userName = ref('John Doe');

// Click away functionality
const handleClickOutside = (event) => {
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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-indigo-600">
        Admin
      </RouterLink>
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
    </div>
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
