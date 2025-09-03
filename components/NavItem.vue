<template>
  <li>
    <NuxtLink
      :to="item.link"
      :class="[
        'block py-2 px-3 rounded md:border-0 md:p-0',
        // Base colors for non-active items
        'text-slate-900 hover:bg-slate-200 md:hover:bg-transparent md:hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-900 md:dark:hover:text-slate-300 md:dark:hover:bg-transparent',
        // Active item: make it clearly distinct and match hover tone
        { 'text-slate-700 dark:text-white font-semibold underline underline-offset-4 decoration-2': item.current },
      ]"
      :aria-current="item.current ? 'page' : undefined"
    >
      {{ item.text }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
