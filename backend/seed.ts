import mongoose from "mongoose";
import { IUser, userSchema } from "./Models/user";
import { Product, ProductSchema } from "./Models/product";
import { ProductCategory, ProductCategorySchema } from "./Models/products_category";
import { Cart, CartSchema } from "./Models/cart";
import { Order, OrderSchema } from "./Models/order";
import { Payment, PaymentSchema } from "./Models/payment";
import { UserAddress, UserAddressSchema } from "./Models/user_address";
import path from "path";
import fs from "fs";

const MONGO_CONFIG = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydb", MONGO_CONFIG);

// Define Models
const ProductCategory = mongoose.model<ProductCategory>(
  "ProductCategory",
  ProductCategorySchema
);
const Product = mongoose.model<Product>("Product", ProductSchema);
const loadImageAsBuffer = (imageName: string): Buffer => {
  const imagePath = path.resolve(__dirname, "./images", imageName);
  return fs.readFileSync(imagePath);
};

// Seed Data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await ProductCategory.deleteMany({});
    await Product.deleteMany({});

    // Create Product Categories
    const categories = [
      {
        name: "Fresh Flowers",
        desc: "Freshly picked flowers",
        picture: loadImageAsBuffer("H_Fresh Flowers.webp"),
        categoryPicture: loadImageAsBuffer("Fresh Flowers.webp"),
      },
      {
        name: "Dried Flowers",
        desc: "Preserved flowers for lasting beauty",
        picture: loadImageAsBuffer("H_Dried Flowers.webp"),
        categoryPicture: loadImageAsBuffer("Dried Flowers.webp"),
      },
      {
        name: "Live Plants",
        desc: "Indoor plants to enhance your space",
        picture: loadImageAsBuffer("H_Live Plants.webp"),
        categoryPicture: loadImageAsBuffer("Live Plants.webp"),
      },
      {
        name: "Aroma Candles",
        desc: "Scented candles for a relaxing ambiance",
        picture: loadImageAsBuffer("H_Aroma Candles.webp"),
        categoryPicture: loadImageAsBuffer("H_Aroma Candles.webp"),
      },
      {
        name: "Fresheners",
        desc: "Natural fresheners for a pleasant environment",
        picture: loadImageAsBuffer("H_Fresheners.webp"),
        categoryPicture: loadImageAsBuffer("H_Fresheners.webp"),
      },
    ];

    const [freshFlowers, driedFlowers, livePlants, aromaCandles, fresheners] =
      await ProductCategory.insertMany(categories);

    // Create Products
    const products = [
      // Fresh Flowers
      {
        name: "Blue Harmony",
        price: 25.99,
        picture: loadImageAsBuffer("Blue Harmony.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Rosy Delight",
        price: 30.99,
        picture: loadImageAsBuffer("Rosy Delight.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Dawn's Delight",
        price: 20.99,
        picture: loadImageAsBuffer("Dawn's Delight.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Serenity",
        price: 29.99,
        picture: loadImageAsBuffer("Serenity.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Autumn Symphony",
        price: 27.99,
        picture: loadImageAsBuffer("Autumn Symphony.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Snowfall",
        price: 35.99,
        picture: loadImageAsBuffer("Snowfall.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Rustic Charm",
        price: 28.99,
        picture: loadImageAsBuffer("Rustic Charm.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Pink Elegance",
        price: 24.99,
        picture: loadImageAsBuffer("Pink Elegance.jpeg"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Mystical Majesty",
        price: 32.99,
        picture: loadImageAsBuffer("Mystical Majesty.webp"),
        productCategory_id: freshFlowers._id,
      },
      {
        name: "Blazing Blossoms",
        price: 33.99,
        picture: loadImageAsBuffer("Blazing Blossoms.webp"),
        productCategory_id: freshFlowers._id,
      },

      // Dried Flowers
      {
        name: "The Savoy",
        price: 40.99,
        picture: loadImageAsBuffer("The Savoy.webp"),
        productCategory_id: driedFlowers._id,
      },
      {
        name: "The Suri",
        price: 35.99,
        picture: loadImageAsBuffer("The Suri.webp"),
        productCategory_id: driedFlowers._id,
      },
      {
        name: "The Naomi",
        price: 39.99,
        picture: loadImageAsBuffer("The Naomi.webp"),
        productCategory_id: driedFlowers._id,
      },
      {
        name: "The Heath",
        price: 45.99,
        picture: loadImageAsBuffer("The Heath.webp"),
        productCategory_id: driedFlowers._id,
      },
      {
        name: "Frosty Winter",
        price: 42.99,
        picture: loadImageAsBuffer("Frosty Winter.webp"),
        productCategory_id: driedFlowers._id,
      },
      {
        name: "Rosy Perfection",
        price: 47.99,
        picture: loadImageAsBuffer("Rosy Perfection.webp"),
        productCategory_id: driedFlowers._id,
      },

      // Live Plants
      {
        name: "The Snake Plant",
        price: 20.99,
        picture: loadImageAsBuffer("The Snake Plant.webp"),
        productCategory_id: livePlants._id,
      },
      {
        name: "The Fiddle Leaf Fig",
        price: 60.99,
        picture: loadImageAsBuffer("The Fiddle Leaf Fig.webp"),
        productCategory_id: livePlants._id,
      },
      {
        name: "Large Monstera Deliciosa",
        price: 75.99,
        picture: loadImageAsBuffer("Large Monstera Deliciosa.webp"),
        productCategory_id: livePlants._id,
      },
      {
        name: "Large Majesty Palm",
        price: 80.99,
        picture: loadImageAsBuffer("Large Majesty Palm.webp"),
        productCategory_id: livePlants._id,
      },
      {
        name: "Money Tree",
        price: 45.99,
        picture: loadImageAsBuffer("Money Tree.webp"),
        productCategory_id: livePlants._id,
      },
      {
        name: "Bird’s Nest Fern",
        price: 22.99,
        picture: loadImageAsBuffer("Bird’s Nest Fern.webp"),
        productCategory_id: livePlants._id,
      },

      // Aroma Candles
      {
        name: "Rattan Grapefruit",
        price: 15.99,
        picture: loadImageAsBuffer("Rattan Grapefruit.webp"),
        productCategory_id: aromaCandles._id,
      },
      {
        name: "Himalayan Salt & Rosewater",
        price: 18.99,
        picture: loadImageAsBuffer("Himalayan Salt & Rosewater.webp"),
        productCategory_id: aromaCandles._id,
      },
      {
        name: "Charcoal Woods",
        price: 14.99,
        picture: loadImageAsBuffer("Charcoal Woods.webp"),
        productCategory_id: aromaCandles._id,
      },
      {
        name: "Lime & Matcha",
        price: 17.99,
        picture: loadImageAsBuffer("Lime & Matcha.webp"),
        productCategory_id: aromaCandles._id,
      },
      {
        name: "Bamboo",
        price: 19.99,
        picture: loadImageAsBuffer("Bamboo.webp"),
        productCategory_id: aromaCandles._id,
      },
      {
        name: "Driftwood",
        price: 16.99,
        picture: loadImageAsBuffer("Driftwood.webp"),
        productCategory_id: aromaCandles._id,
      },

      // Fresheners
      {
        name: "Cedar & Lavender",
        price: 12.99,
        picture: loadImageAsBuffer("F_Cedar & Lavender.webp"),
        productCategory_id: fresheners._id,
      },
      {
        name: "Himalayan Salt & Rosewater",
        price: 14.99,
        picture: loadImageAsBuffer("F_Himalayan Salt & Rosewater.webp"),
        productCategory_id: fresheners._id,
      },
      {
        name: "Wild Mint & Eucalyptus",
        price: 13.99,
        picture: loadImageAsBuffer("F_Wild Mint & Eucalyptus.webp"),
        productCategory_id: fresheners._id,
      },
      {
        name: "Grapefruit",
        price: 10.99,
        picture: loadImageAsBuffer("F_Grapefruit.webp"),
        productCategory_id: fresheners._id,
      },
      {
        name: "Ocean Mist",
        price: 11.99,
        picture: loadImageAsBuffer("F_Ocean Mist.webp"),
        productCategory_id: fresheners._id,
      },
      {
        name: "Driftwood",
        price: 15.99,
        picture: loadImageAsBuffer("F_Driftwood.webp"),
        productCategory_id: fresheners._id,
      },
    ];
    await Product.insertMany(products);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

// Run seed function
seedDatabase();
