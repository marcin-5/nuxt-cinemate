<template>
  <BaseItemCard
    :item="item"
    titleKey="title"
    dateKey="release_date"
    dateLabel="Release Date"
    alt="Movie Image"
  />
</template>

<script setup>
import BaseItemCard from '~/components/BaseItemCard.vue'

defineProps(['item'])
</script>
