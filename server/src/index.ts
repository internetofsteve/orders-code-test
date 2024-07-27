import express, { type Request } from "express";
import cors from "cors";
import { orderRouter } from "./routes/order/index.js";

const app = express();
const router = express.Router();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(orderRouter);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
