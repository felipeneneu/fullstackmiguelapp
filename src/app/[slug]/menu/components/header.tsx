"use client";
import { Button } from "@/components/ui/button";
import { BabyShower } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BabyShowerHeaderProps {
  babyShower: Pick<BabyShower, "coverImageUrl" | "name">;
}

const BabyShowerHeader = ({ babyShower }: BabyShowerHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 left-4 rounded-full z-50"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={babyShower?.coverImageUrl}
        fill
        quality={100}
        alt={babyShower?.name}
        className="object-cover"
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 rounded-full z-50"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default BabyShowerHeader;
