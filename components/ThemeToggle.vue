<template>
  <button
    @click="toggleTheme"
    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <span class="sr-only">Toggle dark mode</span>
    <SunIcon v-if="isDark" class="w-5 h-5" aria-hidden="true" />
    <MoonIcon v-else class="w-5 h-5" aria-hidden="true" />
  </button>
</template>

<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'ThemeToggle',
  components: { SunIcon, MoonIcon },
  data() {
    return {
      isDark: false,
    }
  },
  mounted() {
    // Initialize based on localStorage or prefers-color-scheme
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      this.applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      this.applyTheme(prefersDark ? 'dark' : 'light')
    }

    // Listen to system changes only if user hasn't explicitly chosen
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    this.systemListener = (e) => {
      const explicit = localStorage.getItem('theme-explicit')
      if (!explicit) {
        this.applyTheme(e.matches ? 'dark' : 'light')
      }
    }
    if (this.mediaQuery?.addEventListener) this.mediaQuery.addEventListener('change', this.systemListener)
    else if (this.mediaQuery?.addListener) this.mediaQuery.addListener(this.systemListener)
  },
  beforeUnmount() {
    if (this.mediaQuery?.removeEventListener) this.mediaQuery.removeEventListener('change', this.systemListener)
    else if (this.mediaQuery?.removeListener) this.mediaQuery.removeListener(this.systemListener)
  },
  methods: {
    applyTheme(mode) {
      this.isDark = mode === 'dark'
      const root = document.documentElement
      root.classList.toggle('dark', this.isDark)
    },
    toggleTheme() {
      const mode = this.isDark ? 'light' : 'dark'
      localStorage.setItem('theme', mode)
      localStorage.setItem('theme-explicit', '1')
      this.applyTheme(mode)
    },
  },
}
</script>
