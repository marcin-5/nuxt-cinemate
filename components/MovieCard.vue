<template>
  <div class="my-2 mx-1">
    <div class="max-w-sm bg-slate-50 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700">
      <NuxtLink @click="changeItemState(item)" :to="`/item/${item.title}`">
        <img class="rounded-t-lg" :src="`${imageSiteUrl}${item.poster_path}`" alt="Movie Image" />
      </NuxtLink>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{{ item.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-slate-700 dark:text-slate-300">Release Date: {{ item.release_date }}</p>
        <p
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:text-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-600"
        >
          {{ item.overview || 'No Overview Available' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'

const itemState = useState('chosenItem', () => {})
const changeItemState = (item) => {
  itemState.value = item
}
</script>
