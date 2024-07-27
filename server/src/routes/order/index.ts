import express, { type Request } from "express";
import { getOrders } from "../../lib/order/get-orders/index.js";
import { newOrder } from "../../lib/order/new-order/index.js";
import { updateOrder } from "../../lib/order/update-order/index.js";

export const orderRouter = express.Router();

/**
 * List the current orders
 */
orderRouter.get("/orders", async (req, res) => {
  const orders = await getOrders();
  res.status(200);
  res.json(orders);
});

/**
 * creating a new order
 */
orderRouter.post("/order", async (req, res) => {
  const orders = await newOrder(req.body.name);
  res.status(201);
  res.json(orders);
});

/**
 * For shipping and deleting orders
 */
orderRouter.put(
  "/order/:id",
  async (
    req: Request<
      { id: string },
      {},
      {
        shipped_at?: string | null;
        deleted_at?: string | null;
      }
    >,
    res
  ) => {
    const { id } = req.params;
    const { shipped_at, deleted_at } = req.body;
    try {
      const orderId = parseInt(id, 10);
      const updatedOrder = await updateOrder(orderId, {
        shipped_at,
        deleted_at,
      });
      res.status(200);
      res.json(updatedOrder);
    } catch (error) {
      res.status(500);
      res.json({
        status: "Error",
        message: "unable to update order",
      });
    }
  }
);
