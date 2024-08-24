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
  pinCode: number;
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