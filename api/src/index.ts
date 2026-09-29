import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", path: req.path });
});

const port = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

app.listen(port, () => {
  console.log(`Database URL: ${DATABASE_URL}`);
  console.log(`App is running on port ${port}`);
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});
