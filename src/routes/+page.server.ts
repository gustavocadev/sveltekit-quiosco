import type { Load, Actions } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: Load = async ({ fetch }) => {
  const products = prisma.product.findMany();

  return {
    products,
  };
};

export const actions: Actions = {
  createOrder: async ({ request }) => {
    const data = await request.formData();

    const productId = Number(data.get('id')) as number;
    const quantity = Number(data.get('quantity')) as number;

    try {
      const product = await prisma.product.findUnique({
        where: {
          id: productId,
        },
      });
      if (!product) {
        return {
          status: 404,
          body: 'Product not found',
        };
      }

      await prisma.order.create({
        data: {
          total: quantity,
          date: new Date().toString(),
          name: product.name,
          order: product,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return {
      status: 302,
      // Redirect to the home page
    };
  },
};
