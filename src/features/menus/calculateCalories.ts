export const calculateCalories = (
  items: { caloriesPerGram: number; grams: number }[]
) =>
  items.reduce(
    (t, i) => t + i.caloriesPerGram * i.grams,
    0
  )
