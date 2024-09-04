import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterParams {
  minBudget: number;
  maxBudget: number;
  propertyTypes: string[];
  size: string[];
  furnishedStatuses: string[];
  availabilityStatus: string;
  amenities: string[];
  city: string;
  state: string;
}
export interface InitialStateProps {
  filterparams: FilterParams;
}

const initialState: InitialStateProps = {
  filterparams: {
    minBudget: 0,
    maxBudget: 100000,
    propertyTypes: [],
    size: [],
    furnishedStatuses: [],
    availabilityStatus: "",
    amenities: [],
    city: "",
    state: "",
  },
};

type FilterKeys = keyof FilterParams;
type FilterValue<K extends FilterKeys> = FilterParams[K];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: <K extends FilterKeys>(
      state: any,
      action: PayloadAction<{ paramKey: K; valueToAdd: FilterValue<K> }>
    ) => {
      const { paramKey, valueToAdd } = action.payload;

      // Check if the field is an array
      if (Array.isArray(state.filterparams[paramKey])) {
        const array = state.filterparams[paramKey] as string[];
        // Add the new value if it's not already in the array
        if (!array.includes(valueToAdd as string)) {
          array.push(valueToAdd as string);
        }
      } else {
        // If it's not an array, set the value directly
        state.filterparams[paramKey] = valueToAdd;
      }
    },

    removeFilter: <K extends FilterKeys>(
      state: any,
      action: PayloadAction<{ paramKey: K; valueToRemove: FilterValue<K> }>
    ) => {
      const { paramKey, valueToRemove } = action.payload;

      // Check if the field is an array and filter out the value if so
      if (Array.isArray(state.filterparams[paramKey])) {
        state.filterparams[paramKey] = (
          state.filterparams[paramKey] as string[]
        ).filter((item) => item !== valueToRemove) as FilterValue<K>;
      } else {
        // Else reset the value to the initial state
        state.filterparams[paramKey] = initialState.filterparams[paramKey];
      }
    },

    clearFilters: (state) => {
      state.filterparams = { ...initialState.filterparams };
    },
  },
});

export const { updateFilter, removeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
