import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateDarkMode()
  }

  const updateDarkMode = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDark,
    toggleDarkMode
  }
})