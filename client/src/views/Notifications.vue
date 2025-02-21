<script setup>
import { ref, computed } from 'vue'
import NavSidebar from '../components/NavSidebar.vue'

const notifications = ref([
  { id: 1, title: 'New Message from Dr. Smith', date: '2024-03-19', category: 'messages', isRead: false, isImportant: false },
  { id: 2, title: 'AI Analysis Report Ready', date: '2024-03-14', category: 'updates', isRead: false, isImportant: false },
  { id: 3, title: 'MRI Results Available', date: '2024-03-15', category: 'alerts', isRead: false, isImportant: false },
  { id: 4, title: 'Consultation Reminder', date: '2024-03-20', category: 'reminders', isRead: false, isImportant: false }
])

const filterCategory = ref('all')
const activeSection = ref('notifications')

const filteredNotifications = computed(() => {
  if (filterCategory.value === 'all') {
    return notifications.value
  }
  return notifications.value.filter(notification => notification.category === filterCategory.value)
})

const markAsRead = (notification) => {
  notification.isRead = true
}

const markAsImportant = (notification) => {
  notification.isImportant = !notification.isImportant
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-4 px-4 sm:px-6 lg:px-8">
      <!-- Sidebar -->
      <NavSidebar :activeSection="activeSection" />

      <!-- Main Content -->
      <main class="md:col-span-3 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Notification Feed</h2>
        <div class="space-y-4">
          <div v-for="notification in filteredNotifications" :key="notification.id" class="flex items-center justify-between p-4 bg-gray-50 rounded">
            <div>
              <h3 class="font-medium" :class="{'line-through text-gray-500': notification.isRead}">
                {{ notification.title }}
              </h3>
              <p class="text-sm text-gray-500">{{ notification.date }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="markAsRead(notification)" class="text-gray-600 hover:text-gray-800">
                <span v-if="notification.isRead">Mark as Unread</span>
                <span v-else>Mark as Read</span>
              </button>
              <button @click="markAsImportant(notification)" class="text-gray-600 hover:text-gray-800">
                <span v-if="notification.isImportant">Mark as Unimportant</span>
                <span v-else>Mark as Important</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
