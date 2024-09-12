import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Adjust the import based on your store setup

export interface FilterParams {
  minBudget: number;
  maxBudget: number;
  propertyTypes: string[];
  size: string[];
  furnishedStatuses: string[];
  tenantTypes: string[];
  availabilityStatus: string;
  amenities: string[];
  city: string;
  state: string;
  sortBy: string;
}
export interface InitialStateProps {
  filterparams: FilterParams;
}

const initialState: InitialStateProps = {
  filterparams: {
    minBudget: 0,
    maxBudget: 1000000,
    propertyTypes: [],
    size: [],
    furnishedStatuses: [],
    tenantTypes: [],
    availabilityStatus: "Available",
    amenities: [],
    city: "",
    state: "",
    sortBy: "newest-first",
  },
};

type FilterKeys = keyof FilterParams;
type FilterValue<K extends FilterKeys> = FilterParams[K];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: <K extends FilterKeys>(
      state: any,
      action: PayloadAction<{ paramKey: K; valueToAdd: FilterValue<K> }>
    ) => {
      const { paramKey, valueToAdd } = action.payload;

      if (Array.isArray(state.filterparams[paramKey])) {
        const array = state.filterparams[paramKey] as string[];
        if (!array.includes(valueToAdd as string)) {
          array.push(valueToAdd as string);
        }
      } else {
        state.filterparams[paramKey] = valueToAdd;
      }
    },

    removeFilter: <K extends FilterKeys>(
      state: any,
      action: PayloadAction<{ paramKey: K; valueToRemove: FilterValue<K> }>
    ) => {
      const { paramKey, valueToRemove } = action.payload;

      if (Array.isArray(state.filterparams[paramKey])) {
        state.filterparams[paramKey] = (
          state.filterparams[paramKey] as string[]
        ).filter((item) => item !== valueToRemove) as FilterValue<K>;
      } else {
        state.filterparams[paramKey] = initialState.filterparams[paramKey];
      }
    },

    clearFilters: (state) => {
      state.filterparams = { ...initialState.filterparams };
    },
  },
});

// Selector to compute the "place" value
export const selectPlace = (state: RootState) => {
  const { city, state: regionState } = state.filter.filterparams;

  if (!regionState && !city) return "India";
  if (!regionState) return city;
  return regionState;
};

export const { updateFilter, removeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
