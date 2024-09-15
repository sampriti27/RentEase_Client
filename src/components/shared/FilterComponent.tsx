import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store/store";

const FilterComponent: React.FC = () => {
  const filterParams = useSelector(
    (state: RootState) => state.filter.filterparams
  );

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Construct new query parameters based on filterParams
    const params: Record<string, string> = {};

    for (const key in filterParams) {
      const value = filterParams[key as keyof typeof filterParams];
      // Ensure we only add params that have values
      if (Array.isArray(value) ? value.length > 0 : value) {
        params[key] = value.toString();
      }
    }

    // Update the search params in the URL
    setSearchParams(params);
  }, [filterParams, setSearchParams]);

  return null; // This component can be used inside the layout or a filter UI
};

export default FilterComponent;
