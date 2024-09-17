import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { prisma } from "./database";
import routes from "./routes/routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


async function connection() {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

connection().then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(
      `API Docs available at http://localhost:${PORT}/api-docs`,
    );
  });
});
