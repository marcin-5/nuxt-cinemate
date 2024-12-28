<template>
  <section>
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ title }}
    </h1>
    <ul class="grid grid-cols-5 gap mb-10">
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
