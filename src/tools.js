import { properties } from "./db/properties.js";

export function searchProperties({ city, maxRent }) {
  // Tool inputs නිවැරදිද කියලා පරීක්ෂා කරනවා.
  if (
    typeof city !== "string" ||
    !city.trim() ||
    typeof maxRent !== "number" ||
    !Number.isFinite(maxRent) ||
    maxRent < 0
  ) {
    return {
      error: "Provide a valid city and a non-negative budget.",
    };
  }

  console.log("\n[TOOL CALLED]", { city, maxRent });

  const matches = properties.filter((property) => {
    const cityMatches =
      property.city.toLowerCase() === city.trim().toLowerCase();

    const budgetMatches = property.rent <= maxRent;

    return cityMatches && budgetMatches;
  });

  console.log("[TOOL RESULT]", matches);

  return {
    count: matches.length,
    matches,
  };
}