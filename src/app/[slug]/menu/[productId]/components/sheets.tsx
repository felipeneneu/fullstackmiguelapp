import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CardContext } from "../../contexts/cards";
import { useContext } from "react";

const CardSheet = () => {
  const { isOpen, toggleCard } = useContext(CardContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCard}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CardSheet;
