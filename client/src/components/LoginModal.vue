<script setup>
import { ref, defineEmits } from 'vue';
import { RouterLink } from 'vue-router';

const emit = defineEmits(['close']);

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  // Handle login logic here
  console.log('Login attempt:', { email: email.value, password: password.value });
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true" @click="closeModal"></div>

      <!-- Modal panel -->
      <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                Login to Your Account
              </h3>
              <div class="mt-4">
                <form @submit.prevent="handleSubmit">
                  <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      v-model="email"
                      required
                      class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      v-model="password"
                      required
                      class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        id="remember-me"
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                  <div class="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      class="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-600">
                    Don't have an account?
                    <RouterLink to="/register" class="font-medium text-indigo-600 hover:text-indigo-500" @click="closeModal">
                      Create an account
                    </RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>