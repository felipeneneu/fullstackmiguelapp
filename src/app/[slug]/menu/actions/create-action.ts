"use server";
import { db } from "@/lib/prima";
interface CreateGiftConfirmationInput {
  name: string;
  email: string;

  products: Array<{
    id: string;
    quantity: number;
  }>;
}

export const createGift = async (input: CreateGiftConfirmationInput) => {
  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });
  await db.giftConfirmation.create({
    data: {
      name: input.name,
      email: input.email,
      giftProducts: {
        createMany: {
          data: input.products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
            price: productsWithPrices.find((p) => p.id === product.id)!.price,
          })),
        },
      },
    },
  });
};
