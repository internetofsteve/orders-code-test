import express, { type Request } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const makeAnOrder = async () => {
  const order = await prisma.order.create({
    data: { name: "First Order" },
  });
};

/**
 * NOTE - Currently unbounded. Could do with pagination
 */
const getOrders = async () => {
  const orders = await prisma.order.findMany();

  return orders;
};

app.post("/order", async (req, res) => {
  try {
    await makeAnOrder();
    res.status(201);
    res.send("order created");
  } catch (error) {
    res.status(500);
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200);
    res.json(orders);
  } catch (error) {
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
