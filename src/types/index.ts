export interface FilterOption {
  id: number;
  filterName: string;
  filterItems: string[];
  isOpen: boolean;
}

export interface PropertyFormData {
  name: string;
  address: string;
  city: string;
  pinCode: string;
  state: string;
  tenantType: string;
  propertyType: string;
  floor: string;
  size: string;
  propertyAge: string;
  availabilityStatus: string;
  furnishedStatus: string;
  rent: number;
  deposit: number;
  configuration: string;
  description: string;
}

export interface PostProperty extends PropertyFormData {
  photos: string[];
  furnishedAmenities: string[]; // Array of strings
  otherAmenities: string[]; // Array of strings
}

export interface PropertyDetails {
  propertyId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pinCode: number;
  tenantType: string;
  dateListed: string;
  description: string;
  floor: string;
  size: string;
  propertyAge: string;
  propertyType: string;
  availabilityStatus: string;
  photos: string[]; // Array of strings
  rent: number;
  deposit: number;
  configuration: string;
  furnishedStatus: string;
  furnishedAmenities: string[]; // Array of strings
  otherAmenities: string[]; // Array of strings
  landlord: {
    userId: string;
    fullName: string;
    userName: string;
    email: string;
    photoUrl: string;
    phone: number;
    address: string;
    city: string;
    pinCode: string;
    state: string;
    joinedDate: string;
  };
}

export interface APIResponse<T> {
  message: string;
  success: boolean;
  status: string;
  data: T | T[];
}

export interface PropertyUpdateForm {
  rent: number;
  deposit: number;
  availabilityStatus: string;
  photos: string[];
}
