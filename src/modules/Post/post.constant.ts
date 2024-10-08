export const POST_CATEGORY = {
  GARDENING: "GARDENING",
  VEGETABLE: 'VEGETABLE',
  FLOWER: 'FLOWER',
  HERB: 'HERB',
  FRUIT: 'FRUIT',
  LANDSCAPING: 'LANDSCAPING',
  GREENHOUSES: "GREENHOUSES",
  SEASONAL_GARDENING: "SEASONAL_GARDENING",
  GARDEN_TOOLS: "GARDEN_TOOLS",
  INDOOR_GARDENING: "INDOOR_GARDENING",
} as const;

export const POST_TAG = {
    BASIC: "BASIC",
    PREMIUM: "PREMIUM"
} as const;


export const postSearchableFields = ["title", "description", "category"]