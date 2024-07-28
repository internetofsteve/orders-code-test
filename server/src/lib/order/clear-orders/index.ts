import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const clearOrders = async () => {
  try {
    const orders = await prisma.order.deleteMany();
  } catch (error) {
    console.error("Error clearing Orders");
    throw error;
  }
};
