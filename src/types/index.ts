export interface FilterOption {
  id: number;
  title: string;
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

export interface AuthUser {
  userName: string;
  password: string;
}

export interface RegisterUser {
  username: string;
  password: string;
  fullName: string;
  email: string;
  role: string;
}
export interface PostProperty extends PropertyFormData {
  photos: string[];
  furnishedAmenities: string[]; // Array of strings
  otherAmenities: string[]; // Array of strings
}

export interface User {
  userId: string;
  fullName: string;
  username: string;
  email: string;
  dob: string;
  photoUrl: string;
  phone: number;
  address: string;
  city: string;
  pinCode: string;
  state: string;
  joinedDate: string;
  password?: string; // Optional, might not be included for Landlord
  role?: string; // Optional, might be used to differentiate roles
  userActivated?: boolean; // Optional, might be used to indicate activation status
}

export interface LoginUserData {
  message: string;
  success: boolean;
  status: string;
  accessToken: string;
  refreshToken: string;
  user: User;
}
// Define the Landlord type extending User
export interface Landlord extends User {}

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
  landlord: Landlord;
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

export interface UpdateProfileProps {
  fullName: string;
  photoUrl: string;
  phone: number;
  address: string;
  city: string;
  pinCode: string;
  state: string;
  dob: string
}