export interface Room {
  id: string;
  name: string;
  capacity: number;
  size: number;
  description: string;
  image: string;
  amenities: string[];
  features: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  type: 'restaurant' | 'bar';
}

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  icon: string;
  category: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
