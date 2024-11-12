<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
]
</script>

<template>
  <select
    v-model="locale"
    class="bg-white border rounded px-2 py-1"
  >
    <option
      v-for="lang in languages"
      :key="lang.code"
      :value="lang.code"
    >
      {{ lang.name }}
    </option>
  </select>
</template>