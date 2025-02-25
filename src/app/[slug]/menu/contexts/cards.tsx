"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CardProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICardContext {
  isOpen: boolean;
  products: CardProduct[];
  toggleCard: () => void;
  addProduct: (product: CardProduct) => void;
}

export const CardContext = createContext<ICardContext>({
  isOpen: false,
  products: [],
  toggleCard: () => {},
  addProduct: () => {},
});

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CardProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleCard = () => setIsOpen((prev) => !prev);

  const addProduct = (product: CardProduct) => {
   
    const productIsAlreadyInCart = products.some(
      (prevProduct) => prevProduct.id === product.id
    );
    if (!productIsAlreadyInCart) {
      return setProducts((prev) => [...prev, product]);
    }
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
    
  };
  return (
    <CardContext.Provider
      value={{
        isOpen,
        products,
        toggleCard,
        addProduct,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
