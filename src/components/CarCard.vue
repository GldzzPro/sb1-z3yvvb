<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Car } from '@/types/car'

const props = defineProps<{
  car: Car
}>()

const { t } = useI18n()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="car.image" :alt="car.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ car.brand }} {{ car.name }}</h3>
      <div class="mt-2 flex justify-between items-center">
        <span class="text-gray-600">{{ t('car.price') }}: ${{ car.price }}</span>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {{ t('car.book') }}
        </button>
      </div>
    </div>
  </div>
</template>