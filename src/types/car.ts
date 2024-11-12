export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  seats: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
}