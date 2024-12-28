<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" class="h-8" alt="Cinemate Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
        </NuxtLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <SvgMenuIcon />
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <NavItem v-for="item in navItems" :key="item.link" :item="item" />
          </ul>
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
  },
  data() {
    return {
      navItems: NAV_ITEMS,
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
      handler: 'updateNavItems',
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
