import { db } from "@/lib/prima";
import BabyShowerHeader from "./components/header";

interface BabyShowerMenuProps {
  params: Promise<{ slug: string }>;
}

const BabyShowerMenu = async ({ params }: BabyShowerMenuProps) => {
  const { slug } = await params;
  const babyShower = await db.babyShower.findFirst({
    where: {
      slug,
    },
  });
  if (!babyShower) {
    return <div>Not found</div>;
  }
  return (
    <div>
      <BabyShowerHeader babyShower={babyShower} />
    </div>
  );
};

export default BabyShowerMenu;
