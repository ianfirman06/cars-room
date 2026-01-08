
import { Car, Review, ServiceItem } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 2450000000,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2000&auto=format&fit=crop',
    type: 'Sport',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 0,
    description: 'The BMW M4 Competition Coupe offers high-performance driving with luxurious details.',
    features: ['Head-up Display', 'Harman Kardon Audio', 'Carbon Fiber Roof', 'Laser Lights']
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 3200000000,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop',
    type: 'Electric',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: 500,
    description: 'Beyond Ludicrous. The Model S Plaid has the quickest acceleration of any vehicle in production.',
    features: ['Autopilot', 'Full Self-Driving', 'Panoramic Roof', 'Gaming Computer']
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'S-Class S500',
    year: 2024,
    price: 3800000000,
    image: 'https://images.unsplash.com/photo-1622199166626-44479e0f2142?q=80&w=2000&auto=format&fit=crop',
    type: 'Luxury',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: 0,
    description: 'The pinnacle of automotive luxury and technology. S-Class is the ultimate status symbol.',
    features: ['Massaging Seats', 'OLED Screens', 'Rear Axle Steering', 'Air Suspension']
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 4500000000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    type: 'Sport',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 1200,
    description: 'The benchmark sports car. Pure driving pleasure coupled with daily usability.',
    features: ['Sport Chrono Package', 'Bose Surround Sound', 'Launch Control', 'Active Aerodynamics']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Andi Pratama',
    rating: 5,
    comment: 'Pelayanan luar biasa! Proses pembelian BMW M4 sangat cepat dan transparan.',
    date: '12 Okt 2023',
    avatar: 'https://i.pravatar.cc/150?u=andi'
  },
  {
    id: 'r2',
    name: 'Siska Amelia',
    rating: 4,
    comment: 'Salesnya sangat mengerti spesifikasi mobil. Saya puas dengan Tesla baru saya.',
    date: '05 Nov 2023',
    avatar: 'https://i.pravatar.cc/150?u=siska'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Bengkel Resmi',
    description: 'Layanan pemeliharaan berkala dengan teknisi bersertifikat dan suku cadang asli.',
    icon: '🔧'
  },
  {
    id: 's2',
    title: 'Body Paint & Repair',
    description: 'Pemulihan tampilan mobil Anda ke kondisi semula dengan teknologi cat terkini.',
    icon: '🎨'
  },
  {
    id: 's3',
    title: 'Tukar Tambah',
    description: 'Dapatkan penawaran terbaik untuk mobil lama Anda dengan proses instan.',
    icon: '🔄'
  }
];
