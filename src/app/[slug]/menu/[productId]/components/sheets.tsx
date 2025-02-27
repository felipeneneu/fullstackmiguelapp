import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CardContext } from "../../contexts/cards";
import { useContext } from "react";
import CardItem from "../../components/card-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/helpers/format-currency";

const CardSheet = () => {
  const { isOpen, toggleCard, products, total } = useContext(CardContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCard}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola de Mimos</SheetTitle>
        </SheetHeader>
        <div className="py-5 space-y-4 flex flex-col h-full">
          <div className="flex-auto">
            {products.map((product) => (
              <CardItem item={product} key={product.id} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="font-semibold text-sm text-muted-foreground">
                  Total
                </p>
                <p className="font-semibold text-sm">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <Button className="w-full rounded-full">Comprar mimo</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CardSheet;
