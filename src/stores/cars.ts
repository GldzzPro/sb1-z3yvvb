import { defineStore } from 'pinia'
import type { Car } from '@/types/car'

export const useCarStore = defineStore('cars', {
  state: () => ({
    cars: [] as Car[],
    loading: false,
    selectedCar: null as Car | null
  }),
  
  actions: {
    async fetchCars() {
      this.loading = true
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.cars = [
        {
          id: '1',
          name: 'Model 3',
          brand: 'Tesla',
          price: 100,
          image: 'https://images.unsplash.com/photo-1677679619900-a87a9da19e39',
          category: 'Electric',
          seats: 5,
          transmission: 'automatic',
          fuelType: 'electric'
        },
        {
          id: '2',
          name: 'A4',
          brand: 'Audi',
          price: 85,
          image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
          category: 'Luxury',
          seats: 5,
          transmission: 'automatic',
          fuelType: 'petrol'
        },
        {
          id: '3',
          name: 'Prius',
          brand: 'Toyota',
          price: 65,
          image: 'https://images.unsplash.com/photo-1619767886558-efdc259b6e09',
          category: 'Economy',
          seats: 5,
          transmission: 'automatic',
          fuelType: 'hybrid'
        }
      ]
      this.loading = false
    },
    
    selectCar(car: Car) {
      this.selectedCar = car
    }
  }
})