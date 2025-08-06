export interface Equipment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  specifications: string; // JSON string
  images: string[];
  condition: 'new' | 'used';
  availability: 'available' | 'sold' | 'reserved';
  year?: number;
  hours?: number;
  weight?: number;
  power?: number;
  price?: number;
  featured: boolean;
}

export interface Part {
  id: string;
  name: string;
  reference: string;
  category: string;
  compatibility: string[];
  description?: string;
  images: string[];
  availability: 'in_stock' | 'on_order' | 'out_of_stock';
  price?: number;
  featured: boolean;
}

export interface Quote {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  sector?: string;
  message: string;
  productId?: string;
  productType?: 'equipment' | 'part';
}
