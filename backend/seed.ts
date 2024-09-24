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
        desc: "Blue Harmony offers a peaceful bouquet of soft blue hues, bringing a calm and tranquil ambiance to any setting. Each petal is delicately arranged to evoke feelings of serenity and balance, making it perfect for occasions where a touch of elegance and refinement is desired. The subtle fragrance of the blooms adds to the calming atmosphere, ensuring it leaves a lasting impression on those who experience its charm."
      },
      {
        name: "Rosy Delight",
        price: 30.99,
        picture: loadImageAsBuffer("Rosy Delight.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Rosy Delight is an enchanting bouquet bursting with shades of red and pink, reminiscent of romance and passion. This vibrant arrangement captures the essence of love, making it an ideal gift for anniversaries, special occasions, or simply to brighten someone's day. The lush roses are complemented by delicate greenery, providing a rich contrast that elevates the bouquet’s visual appeal."
      },
      {
        name: "Dawn's Delight",
        price: 20.99,
        picture: loadImageAsBuffer("Dawn's Delight.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Dawn's Delight is a radiant bouquet inspired by the early morning sun. Featuring soft pastel shades of pink, yellow, and cream, this arrangement exudes warmth and joy. Each flower is carefully chosen to reflect the optimism of a new day, making it perfect for celebrations, or as a thoughtful gesture to uplift and inspire someone close to your heart."
      },
      {
        name: "Serenity",
        price: 29.99,
        picture: loadImageAsBuffer("Serenity.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Serenity is a bouquet that embodies peace and tranquility, with soft white and lavender blossoms delicately interwoven with pale green foliage. This serene composition is perfect for moments of reflection, meditation, or as a calming presence in your home. The subtle fragrance of lavender adds to the bouquet's soothing nature, creating a peaceful atmosphere wherever it's displayed."
      },
      {
        name: "Autumn Symphony",
        price: 27.99,
        picture: loadImageAsBuffer("Autumn Symphony.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Autumn Symphony is a striking blend of warm oranges, reds, and golden hues, capturing the essence of the fall season. This bouquet is filled with rich textures and colors, evoking the beauty of a woodland walk during autumn. Perfect for seasonal celebrations or to bring the warmth of fall into your home, it makes a bold statement with its vibrant colors and rustic charm."
      },
      {
        name: "Snowfall",
        price: 35.99,
        picture: loadImageAsBuffer("Snowfall.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Snowfall is a luxurious winter bouquet, featuring pristine white blooms that resemble freshly fallen snow. Perfect for holiday celebrations or to brighten up a cold winter’s day, this arrangement exudes elegance and purity. The white flowers are beautifully paired with soft greenery, creating a wintry wonderland that is both graceful and enchanting."
      },
      {
        name: "Rustic Charm",
        price: 28.99,
        picture: loadImageAsBuffer("Rustic Charm.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Rustic Charm is a bouquet that celebrates nature's untamed beauty. With its earthy tones and wildflower aesthetic, this arrangement brings a sense of country living into your home. Perfect for those who appreciate the simplicity of nature, this bouquet features a mix of seasonal blooms, carefully arranged to create a sense of effortless beauty and charm."
      },
      {
        name: "Pink Elegance",
        price: 24.99,
        picture: loadImageAsBuffer("Pink Elegance.jpeg"),
        productCategory_id: freshFlowers._id,
        desc: "Pink Elegance is a sophisticated bouquet that exudes grace and femininity. The soft pink blossoms are complemented by lush green foliage, creating a delicate yet striking arrangement. Ideal for birthdays, anniversaries, or as a symbol of affection, this bouquet brings a touch of refined beauty to any occasion."
      },
      {
        name: "Mystical Majesty",
        price: 32.99,
        picture: loadImageAsBuffer("Mystical Majesty.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Mystical Majesty is an enchanting bouquet that captivates with its deep purple and blue hues. Each flower is carefully chosen to evoke a sense of mystery and wonder, making this arrangement perfect for special occasions where you want to leave a lasting impression. The rich colors and intricate blooms make this bouquet a standout piece that radiates elegance and sophistication."
      },
      {
        name: "Blazing Blossoms",
        price: 33.99,
        picture: loadImageAsBuffer("Blazing Blossoms.webp"),
        productCategory_id: freshFlowers._id,
        desc: "Blazing Blossoms is a fiery bouquet bursting with vibrant reds, oranges, and yellows. This arrangement is full of energy and life, making it the perfect choice for celebrations or to brighten someone’s day. The bold colors and dynamic composition of the flowers give this bouquet a lively and spirited appearance, ensuring it commands attention wherever it’s placed."
      },
    
      // Dried Flowers
      {
        name: "The Savoy",
        price: 40.99,
        picture: loadImageAsBuffer("The Savoy.webp"),
        productCategory_id: driedFlowers._id,
        desc: "The Savoy is a sophisticated dried flower arrangement that combines timeless elegance with a modern touch. Featuring soft neutrals and muted tones, this bouquet is perfect for those who appreciate minimalism and refined beauty. The long-lasting nature of the dried flowers ensures this arrangement will be a stunning addition to any space for months to come."
      },
      {
        name: "The Suri",
        price: 35.99,
        picture: loadImageAsBuffer("The Suri.webp"),
        productCategory_id: driedFlowers._id,
        desc: "The Suri is a dried flower bouquet that embodies rustic charm with its earthy tones and organic textures. Perfect for those who love the natural beauty of wildflowers, this arrangement brings a sense of the outdoors into your home. The carefully selected dried blooms create a harmonious blend of color and texture, making it a unique and lasting centerpiece."
      },
      {
        name: "The Naomi",
        price: 39.99,
        picture: loadImageAsBuffer("The Naomi.webp"),
        productCategory_id: driedFlowers._id,
        desc: "The Naomi is a luxurious dried flower arrangement that exudes sophistication. The muted colors and intricate details of each bloom make this bouquet a perfect choice for those who appreciate subtle elegance. Whether displayed as a centerpiece or given as a thoughtful gift, The Naomi is sure to add a touch of timeless beauty to any setting."
      },
      {
        name: "The Heath",
        price: 45.99,
        picture: loadImageAsBuffer("The Heath.webp"),
        productCategory_id: driedFlowers._id,
        desc: "The Heath is a bold and striking dried flower arrangement that showcases deep, rich colors and dramatic textures. Perfect for those who love statement pieces, this bouquet adds a sense of grandeur to any room. The carefully preserved flowers maintain their beauty for months, making The Heath a stunning and long-lasting addition to your décor."
      },
      {
        name: "Frosty Winter",
        price: 42.99,
        picture: loadImageAsBuffer("Frosty Winter.webp"),
        productCategory_id: driedFlowers._id,
        desc: "Frosty Winter is a stunning dried flower arrangement that captures the beauty of a winter’s day. With its soft white and silver tones, this bouquet brings a sense of calm and serenity to any space. The frosted appearance of the blooms adds a touch of elegance, making it perfect for holiday décor or as a sophisticated gift."
      },
      {
        name: "Rosy Perfection",
        price: 47.99,
        picture: loadImageAsBuffer("Rosy Perfection.webp"),
        productCategory_id: driedFlowers._id,
        desc: "Rosy Perfection is a dried flower arrangement that celebrates the timeless beauty of roses. The soft pink and blush tones of the flowers are preserved to perfection, creating a bouquet that exudes romance and grace. Ideal for special occasions or as a luxurious gift, Rosy Perfection is a stunning and long-lasting tribute to the elegance of roses."
      },
    
      // Live Plants
      {
        name: "The Snake Plant",
        price: 20.99,
        picture: loadImageAsBuffer("The Snake Plant.webp"),
        productCategory_id: livePlants._id,
        desc: "The Snake Plant is a low-maintenance houseplant known for its striking appearance and air-purifying qualities. With its tall, upright leaves and unique variegated patterns, this plant adds a modern and sculptural element to any space. Ideal for beginners or those with a busy lifestyle, the Snake Plant is both hardy and visually appealing."
      },
      {
        name: "The Fiddle Leaf Fig",
        price: 60.99,
        picture: loadImageAsBuffer("The Fiddle Leaf Fig.webp"),
        productCategory_id: livePlants._id,
        desc: "The Fiddle Leaf Fig is a statement plant that has become a favorite among interior designers. With its large, glossy leaves and towering height, this plant adds a touch of tropical elegance to any room. While it requires a bit more care, the reward is a lush and vibrant plant that enhances the beauty of any space."
      },
      {
        name: "Large Monstera Deliciosa",
        price: 75.99,
        picture: loadImageAsBuffer("Large Monstera Deliciosa.webp"),
        productCategory_id: livePlants._id,
        desc: "The Large Monstera Deliciosa is a stunning houseplant known for its unique, split leaves and dramatic appearance. Often referred to as the Swiss Cheese Plant, this plant is perfect for adding a tropical vibe to your home. Its large leaves and rapid growth make it a showstopper in any room, bringing a touch of the jungle indoors."
      },
      {
        name: "Large Majesty Palm",
        price: 80.99,
        picture: loadImageAsBuffer("Large Majesty Palm.webp"),
        productCategory_id: livePlants._id,
        desc: "The Large Majesty Palm is a tall and graceful houseplant that brings a tropical ambiance to any space. With its long, arching fronds, this plant creates a sense of lush greenery that is both elegant and relaxing. Perfect for bright, open spaces, the Majesty Palm adds a touch of nature and tranquility to your home."
      },
      {
        name: "Money Tree",
        price: 45.99,
        picture: loadImageAsBuffer("Money Tree.webp"),
        productCategory_id: livePlants._id,
        desc: "The Money Tree is a popular houseplant believed to bring good luck and prosperity. With its braided trunk and vibrant green leaves, this plant adds a unique and decorative element to any room. Easy to care for and known for its resilience, the Money Tree is a favorite choice for both novice and experienced plant owners."
      },
      {
        name: "Bird’s Nest Fern",
        price: 22.99,
        picture: loadImageAsBuffer("Bird’s Nest Fern.webp"),
        productCategory_id: livePlants._id,
        desc: "The Bird’s Nest Fern is a distinctive houseplant with bright green, wavy fronds that radiate from a central rosette. This low-maintenance plant adds a touch of natural beauty to any room, and its unique texture and shape make it a standout addition to your indoor plant collection. Ideal for shaded areas, the Bird’s Nest Fern thrives in low light."
      },
    
      // Aroma Candles
      {
        name: "Rattan Grapefruit",
        price: 15.99,
        picture: loadImageAsBuffer("Rattan Grapefruit.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Rattan Grapefruit is a refreshing aroma candle that combines the tangy sweetness of grapefruit with the earthy notes of rattan. This candle fills your space with a bright and uplifting scent, making it perfect for energizing your home or creating a welcoming atmosphere for guests. Its sleek design also makes it a stylish addition to your décor."
      },
      {
        name: "Himalayan Salt & Rosewater",
        price: 18.99,
        picture: loadImageAsBuffer("Himalayan Salt & Rosewater.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Himalayan Salt & Rosewater is a luxurious aroma candle that blends the soothing properties of Himalayan salt with the delicate fragrance of rosewater. This candle creates a calming and relaxing ambiance, perfect for unwinding after a long day or adding a touch of serenity to your space. Its subtle yet captivating scent lingers, making your home feel like a personal spa."
      },
      {
        name: "Charcoal Woods",
        price: 14.99,
        picture: loadImageAsBuffer("Charcoal Woods.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Charcoal Woods is an earthy aroma candle that brings the rugged outdoors into your home. With deep, smoky notes and a hint of cedar, this candle evokes the warmth and comfort of a crackling fire on a chilly evening. Ideal for creating a cozy atmosphere, Charcoal Woods is perfect for evenings spent relaxing or as a complement to rustic décor."
      },
      {
        name: "Lime & Matcha",
        price: 17.99,
        picture: loadImageAsBuffer("Lime & Matcha.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Lime & Matcha is a refreshing and invigorating aroma candle that blends zesty lime with the calming scent of matcha green tea. The combination of citrus and earthy tones creates a balanced fragrance that energizes your space while promoting relaxation. Perfect for morning rituals or afternoon pick-me-ups, this candle adds a vibrant and soothing touch to any room."
      },
      {
        name: "Bamboo",
        price: 19.99,
        picture: loadImageAsBuffer("Bamboo.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Bamboo is a clean and refreshing aroma candle that fills your space with the fresh scent of bamboo leaves. This candle is perfect for creating a calm and peaceful atmosphere, making it ideal for meditation, yoga, or simply relaxing at home. Its minimalist design and soothing fragrance make it a versatile addition to any room."
      },
      {
        name: "Driftwood",
        price: 16.99,
        picture: loadImageAsBuffer("Driftwood.webp"),
        productCategory_id: aromaCandles._id,
        desc: "Driftwood is an aroma candle that evokes the scent of sun-bleached wood and the salty air of the ocean. This candle brings the calm and relaxing essence of a beachside retreat into your home, making it perfect for those who love coastal living. With its natural, earthy fragrance, Driftwood is ideal for creating a laid-back, tranquil atmosphere."
      },
    
      // Fresheners
      {
        name: "Cedar & Lavender",
        price: 12.99,
        picture: loadImageAsBuffer("F_Cedar & Lavender.webp"),
        productCategory_id: fresheners._id,
        desc: "Cedar & Lavender is a freshener that combines the soothing scent of lavender with the warm, woody aroma of cedar. This freshener creates a calming and peaceful environment, perfect for bedrooms or areas where relaxation is key. The natural fragrance lingers in the air, providing a sense of comfort and tranquility."
      },
      {
        name: "Himalayan Salt & Rosewater",
        price: 14.99,
        picture: loadImageAsBuffer("F_Himalayan Salt & Rosewater.webp"),
        productCategory_id: fresheners._id,
        desc: "Himalayan Salt & Rosewater is a luxurious freshener that blends the cleansing properties of Himalayan salt with the delicate fragrance of rosewater. This freshener creates a spa-like atmosphere in your home, leaving the air scented with a soft, floral fragrance that promotes relaxation and calmness."
      },
      {
        name: "Wild Mint & Eucalyptus",
        price: 13.99,
        picture: loadImageAsBuffer("F_Wild Mint & Eucalyptus.webp"),
        productCategory_id: fresheners._id,
        desc: "Wild Mint & Eucalyptus is a refreshing freshener that combines the invigorating scents of wild mint and eucalyptus. This freshener instantly revitalizes your space with its cool, minty fragrance, making it perfect for areas where you want to create an uplifting and energizing atmosphere."
      },
      {
        name: "Grapefruit",
        price: 10.99,
        picture: loadImageAsBuffer("F_Grapefruit.webp"),
        productCategory_id: fresheners._id,
        desc: "Grapefruit is a bright and zesty freshener that fills your space with the sweet and tangy fragrance of ripe grapefruit. This freshener is perfect for kitchens, bathrooms, or anywhere you want to add a burst of freshness and energy. Its lively scent invigorates the senses, creating a cheerful and refreshing environment."
      },
      {
        name: "Ocean Mist",
        price: 11.99,
        picture: loadImageAsBuffer("F_Ocean Mist.webp"),
        productCategory_id: fresheners._id,
        desc: "Ocean Mist is a freshener that brings the crisp, clean scent of the ocean breeze into your home. Perfect for those who love the beach, this freshener fills your space with the fresh and invigorating fragrance of sea salt and ocean air, creating a calm and peaceful atmosphere."
      },
      {
        name: "Driftwood",
        price: 15.99,
        picture: loadImageAsBuffer("F_Driftwood.webp"),
        productCategory_id: fresheners._id,
        desc: "Driftwood freshener brings the earthy, natural scent of driftwood into your home. This freshener evokes the essence of a peaceful beachside retreat, filling your space with a calming and grounding fragrance. Its warm, woody scent is perfect for creating a cozy and relaxing atmosphere."
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
