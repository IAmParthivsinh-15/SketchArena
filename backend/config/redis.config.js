import Redis from "ioredis";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASSWORD,
  connectTimeout: 10000,
  retryStrategy(times) {
    const delay = Math.min(times * 100, 3000); // Retry up to 3 seconds
    console.log(`🔄 Retry attempt #${times}, waiting ${delay}ms before retry.`);
    return delay;
  },
});

redisClient.on("connect", () => {
  console.log("✅ Connected to Redis");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});

export default redisClient;
