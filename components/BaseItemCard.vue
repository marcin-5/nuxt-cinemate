<template>
  <div class="my-2 mx-1">
    <div class="w-full bg-slate-50 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700">
      <NuxtLink @click="changeItemState(item)" :to="`/item/${item[routeTitleKey]}`">
        <img class="w-full h-auto rounded-t-lg object-cover" :src="`${imageSiteUrl}${item.poster_path}`" :alt="alt" />
      </NuxtLink>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {{ item[titleKey] }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-slate-700 dark:text-slate-300">{{ dateLabel }}: {{ item[dateKey] }}</p>
        <p
          class="block px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:text-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-600 overflow-hidden text-ellipsis"
        >
          {{ item.overview || 'No Overview Available' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Record<string, any>
  titleKey?: string
  dateKey?: string
  dateLabel?: string
  alt?: string
  routeTitleKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  titleKey: 'title',
  dateKey: 'release_date',
  dateLabel: 'Release Date',
  alt: 'Item Image',
  routeTitleKey: undefined as unknown as string,
})

const routeTitleKey = computed(() => props.routeTitleKey || props.titleKey)

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'

const itemState = useState('chosenItem', () => ({}) as any)
const changeItemState = (item: any) => {
  itemState.value = item
}
</script>
