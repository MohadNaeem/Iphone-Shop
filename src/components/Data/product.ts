// src/data/product.ts
export const product = {
    name: "Refurbished iPhone 14 Pro",
    inStock: true,
    price: 980,
    images: [
      require("../../assets/views/ProductImage.svg").default,
      require("../../assets/views/ProductImage.svg").default,
      require("../../assets/views/ProductImage.svg").default,
    ],
    reviews: {
      score: 4,
      total: 5,
    },
    description:
      "Bringing you Dynamic Island, access your music while scrolling social media. Apple iPhone 14 Pro colours - Deep Purple, Gold, Silver, and Space Black.",
    conditions: ["GOOD", "GREAT", "PRISTINE"],
    capacities: ["128GB", "256GB", "512GB"],
    colors: ["#000000", "#a15dbb", "#f5e1c6", "#d3d3d3"],
  };
  