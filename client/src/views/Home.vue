<script setup>
import { ref } from 'vue'
import LoginModal from '../components/LoginModal.vue'

const showLoginModal = ref(false)

const openLoginModal = () => {
  showLoginModal.value = true
}

const closeLoginModal = () => {
  showLoginModal.value = false
}

const features = [
  {
    title: 'Instant Scan Results',
    description: 'Access and download your medical scan results securely from anywhere.',
    icon: '📄',
  },
  {
    title: 'AI-Powered Diagnostics',
    description: 'Get preliminary AI-based analysis for three specific diseases.',
    icon: '🤖',
  },
  {
    title: 'Physician Consultation',
    description: 'Connect with healthcare professionals and schedule appointments easily.',
    icon: '👨‍⚕️',
  },
  {
    title: 'Emergency Support',
    description: '24/7 access to emergency contacts and healthcare helplines.',
    icon: '🚑',
  },
]
</script>

<template>
  <main>
    <!-- Hero Section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">Modern Healthcare</span>
                <span class="block text-indigo-600">at Your Fingertips</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Access your scan results, get AI-powered insights, and connect with healthcare professionals - all in one secure platform.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in one place
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides comprehensive healthcare solutions to make your medical journey smoother and more efficient.
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="feature in features" :key="feature.title" class="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="text-4xl mb-4">{{ feature.icon }}</div>
              <h3 class="text-lg font-medium text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="mt-2 text-base text-gray-500">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-indigo-700">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Ready to get started?</span>
          <span class="block">Create your account today.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">
          Join thousands of patients who trust our platform for their healthcare needs.
        </p>
        <RouterLink to="/register" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          Sign up for free
        </RouterLink>
      </div>
    </div>

    <!-- Login Modal -->
    <LoginModal v-if="showLoginModal" @close="closeLoginModal" />
  </main>
</template>
