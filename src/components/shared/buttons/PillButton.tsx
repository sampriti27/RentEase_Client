import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilter,
  removeFilter,
  FilterParams,
} from "../../../store/slices/filterSlice";
import { RootState } from "../../../store/store";

interface Props {
  item: string;
  filterType?: keyof FilterParams; // Add a prop for filter type (e.g., propertyTypes, sizes, etc.)
  icon: React.ComponentType<{ isFilter?: boolean }>;
  activeIcon?: React.ComponentType<{ isFilter?: boolean }>;
}

const PillButton: React.FC<Props> = ({
  item,
  filterType,
  icon: Icon,
  activeIcon: ActiveIcon,
}) => {
  const dispatch = useDispatch();
  const filterParams = useSelector(
    (state: RootState) => state.filter.filterparams
  );

  const isActive =
    filterType && Array.isArray(filterParams[filterType])
      ? (filterParams[filterType] as string[]).includes(item)
      : false;

  const handleClick = () => {
    console.log("Pill Button:", filterType);
    if (!filterType) return; // Ensure filterType is defined

    if (isActive) {
      dispatch(removeFilter({ paramKey: filterType, valueToRemove: item }));
    } else {
      dispatch(updateFilter({ paramKey: filterType, valueToAdd: item }));
    }
  };

  return (
    <button
      type="button"
      className={`border focus:outline-none rounded-full text-sm flex items-center py-1 px-2 me-2 mb-2 gap-1 ${
        isActive
          ? "bg-blue-100 hover:bg-blue-200 text-gray-700 border-blue-300"
          : "bg-white hover:bg-gray-100 border-gray-300 text-gray-500"
      }`}
      onClick={handleClick}
    >
      {isActive && ActiveIcon ? (
        <ActiveIcon isFilter={true} />
      ) : (
        <Icon isFilter={true} />
      )}
      {item}
    </button>
  );
};

export default PillButton;
