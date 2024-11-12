<script setup lang="ts">
import { onMounted } from 'vue'
import { useCarStore } from '@/stores/cars'
import CarCard from '@/components/CarCard.vue'

const carStore = useCarStore()

onMounted(() => {
  carStore.fetchCars()
})
</script>

<template>
  <div>
    <div v-if="carStore.loading" class="text-center">
      Loading...
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <CarCard
        v-for="car in carStore.cars"
        :key="car.id"
        :car="car"
      />
    </div>
  </div>
</template>