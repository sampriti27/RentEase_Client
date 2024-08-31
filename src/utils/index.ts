import { formatDistance, subDays, parseISO, format } from "date-fns";

export const formatDateADistance = (dateListed: string) => {
  const formattedDate = formatDistance(
    subDays(new Date(), 0),
    parseISO(dateListed),
    { addSuffix: false }
  );

  return formattedDate;
};

export const formatDateAsISO = (dateListed?: string) => {
  if (!dateListed) {
    return "Date not available"; // Handle missing date case
  }

  try {
    const parsedDate = parseISO(dateListed);
    const formattedDate = format(parsedDate, "MMM dd, yyyy");
    return `Posted on ${formattedDate}`;
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid date"; // Handle parse errors
  }
};

export const formatCurrency = (amount: number): string => {
  if (amount >= 100000) {
    // Convert amount to lacs
    const inLacs = amount / 100000;
    const roundedLacs = Math.round(inLacs);
    return `₹${roundedLacs} Lac`;
  } else if (amount >= 1000) {
    // Convert amount to thousands
    const inThousands = amount / 1000;
    const roundedThousands = Math.round(inThousands);
    return `₹${roundedThousands} Thousand`;
  } else {
    // For amounts less than 1000, just return the amount with ₹ symbol
    return `₹${amount}`;
  }
};

export const editedDescription = (desc: string | undefined): string => {
  if (!desc) return ""; // Return an empty string if desc is undefined or null
  const words = desc.split(" ");
  return words.length > 100 ? words.slice(0, 100).join(" ") + "..." : desc;
};

export const findIcon = (
  item: string,
  iconMap: Record<string, string>
): string | undefined => {
  // Normalize the item text to lowercase
  const normalizedItem = item.toLowerCase();

  // Find the closest match in the iconMap
  const match = Object.keys(iconMap).find((key) =>
    normalizedItem.includes(key.toLowerCase())
  );

  // Return the corresponding icon if found, otherwise return undefined
  return match ? iconMap[match] : undefined;
};
