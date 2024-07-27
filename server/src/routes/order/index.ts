import express, { type Request } from "express";
import { getOrders } from "../../lib/order/get-orders/index.js";
import { newOrder } from "../../lib/order/new-order/index.js";
import { updateOrder } from "../../lib/order/update-order/index.js";
import { errorResponse } from "../../utils/error-response/index.js";

export const orderRouter = express.Router();

/**
 * List the current orders
 */
orderRouter.get("/orders", async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200);
    res.json(orders);
  } catch (error) {
    res.status(400);
    res.json(errorResponse("Error", "unable to get orders"));
  }
});

/**
 * creating a new order
 */
orderRouter.post("/orders/order", async (req, res) => {
  try {
    const orders = await newOrder(req.body.name);
    res.status(201);
    res.json(orders);
  } catch (error) {
    res.status(400);
    res.json(errorResponse("Error", "unable to create order"));
  }
});

/**
 * For shipping and deleting orders
 */
orderRouter.put(
  "/orders/order/:id",
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
      res.status(400);
      res.json(errorResponse("Error", "unable to update order"));
    }
  }
);
