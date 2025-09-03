<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    <nav class="bg-slate-50 border-slate-200 dark:bg-slate-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" class="h-8" alt="Cinemate Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
        </NuxtLink>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
          :aria-controls="'navbar-default'"
          :aria-expanded="isMenuOpen.toString()"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <SvgMenuIcon />
        </button>
        <div :class="[isMenuOpen ? 'block' : 'hidden', 'w-full md:flex md:items-center md:w-auto']" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-50 dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700"
          >
            <NavItem v-for="item in navItems" :key="item.link" :item="item" />
          </ul>
          <div class="mt-4 md:mt-0 md:ml-8">
            <ClientOnly fallback-tag="span">
              <ThemeToggle />
            </ClientOnly>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import NavItem from '~/components/NavItem.vue'
import SvgMenuIcon from '~/components/SvgMenuIcon.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'

const INDEX_ROUTE = '/'

const NAV_ITEMS = [
  { text: 'Home', link: '/' },
  { text: 'Search', link: '/search' },
  { text: 'Popular', link: '/popular' },
  { text: 'Now Playing', link: '/now-playing' },
  { text: 'Top Rated', link: '/top-rated' },
  { text: 'Upcoming', link: '/upcoming' },
]

export default {
  components: {
    NavItem,
    SvgMenuIcon,
    ThemeToggle,
  },
  data() {
    return {
      navItems: NAV_ITEMS,
      isMenuOpen: false,
    }
  },
  computed: {
    computedRouteName() {
      const currentRoute = useRoute()
      return currentRoute.name
    },
  },
  watch: {
    computedRouteName: {
      immediate: true,
      handler(newVal) {
        this.updateNavItems(newVal)
        this.isMenuOpen = false
      },
    },
  },
  methods: {
    updateNavItems(newRouteName) {
      const resolvedRoute = newRouteName === 'index' ? INDEX_ROUTE : `/${newRouteName}`

      this.navItems.forEach((item) => {
        item.current = item.link === resolvedRoute
      })
    },
  },
}
</script>
