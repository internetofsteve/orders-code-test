import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const updateOrder = async (
  id: number,
  {
    shipped_at,
    deleted_at,
  }: Pick<Prisma.OrderUpdateInput, "shipped_at" | "deleted_at">
) => {
  try {
    const shippedOrder = await prisma.order.update({
      where: { id },
      data: {
        shipped_at,
        deleted_at,
      },
    });

    return shippedOrder;
  } catch (error) {
    console.error("error updating order");
    throw error;
  }
};
