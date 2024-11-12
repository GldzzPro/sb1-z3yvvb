<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">
      {{ t('home.title') }}
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      {{ t('home.subtitle') }}
    </p>
    <RouterLink
      to="/cars"
      class="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
    >
      {{ t('home.searchButton') }}
    </RouterLink>
  </div>
</template>