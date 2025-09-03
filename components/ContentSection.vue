<template>
  <section class="container mx-auto px-2 py-4">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-100"
    >
      {{ title }}
    </h1>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
      <li v-for="item in items" :key="item.id">
        <component :is="cardComponent" :item="item" />
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  cardComponent: {
    type: Object,
    required: true,
  },
})
</script>
