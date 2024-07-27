import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const newOrder = async (name: string) => {
  try {
    const order = await prisma.order.create({
      data: { name },
    });
    return order;
  } catch (error) {
    console.error("error creating new order");
    throw error;
  }
};
