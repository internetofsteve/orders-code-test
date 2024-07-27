import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getOrders = async () => {
  try {
    const orders = await prisma.order.findMany();
    return orders;
  } catch (error) {
    console.error("Error Getting Orders");
    throw error;
  }
};
