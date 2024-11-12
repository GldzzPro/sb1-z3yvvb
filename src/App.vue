<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center space-x-8">
            <RouterLink to="/" class="text-xl font-bold text-gray-800">
              CarRental
            </RouterLink>
            <div class="hidden md:flex space-x-4">
              <RouterLink 
                to="/" 
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                {{ t('navigation.home') }}
              </RouterLink>
              <RouterLink 
                to="/cars" 
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                {{ t('navigation.cars') }}
              </RouterLink>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>
  </div>
</template>