import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CardContext } from "../../contexts/cards";
import { useContext } from "react";
import CardItem from "../../components/card-item";

const CardSheet = () => {
  const { isOpen, toggleCard, products } = useContext(CardContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCard}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola de Mimos</SheetTitle>
        </SheetHeader>
        <div className="py-5 space-y-4">
          {products.map((product) => (
            <CardItem item={product} key={product.id} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CardSheet;
