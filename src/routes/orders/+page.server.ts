import type { Load } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: Load = async () => {
  let orders = await prisma.order.findMany();

  orders = JSON.parse(JSON.stringify(orders));

  return {
    orders,
  };
};
