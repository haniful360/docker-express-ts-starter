import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP", path: req.path });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
// 404 handler
app.use((_req, res) => {
    res.status(404).json({ message: "Not found" });
});
// Error handler
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
});
