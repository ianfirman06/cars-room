
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: 'SUV' | 'Sedan' | 'Sport' | 'Luxury' | 'Electric';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  mileage: number;
  description: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
