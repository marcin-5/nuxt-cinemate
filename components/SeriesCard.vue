<template>
  <BaseItemCard
    :item="item"
    titleKey="name"
    dateKey="first_air_date"
    dateLabel="First Air Date"
    alt="Series Image"
  />
</template>

<script setup>
import BaseItemCard from '~/components/BaseItemCard.vue'

defineProps(['item'])
</script>
