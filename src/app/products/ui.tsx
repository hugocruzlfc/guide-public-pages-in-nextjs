import Image from "next/image";
import type { Product, Promotion } from "@/app/products/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function List({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10">
      {items.map((product) => (
        <Card
          key={product.id}
          className="grid gap-2"
        >
          <CardContent>
            <Image
              src={product.image}
              alt={product.name}
              width={192}
              height={192}
              className="object-cover opacity-90 brightness-150 dark:brightness-100"
            />
          </CardContent>
          <CardFooter>
            <h2 className="text-gray-700 dark:text-gray-300">{product.name}</h2>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const promotionClasses = "h-[1.5lh] rounded-xl bg-gray-100 dark:bg-gray-800";

export function Promotion({ data }: { data: Promotion }) {
  return (
    <div
      className={`${promotionClasses} flex items-center justify-center text-gray-700 dark:text-gray-300`}
    >
      <div className="opacity-100 transition-opacity duration-300 starting:opacity-0">
        {data.message}
      </div>
    </div>
  );
}

export function PromotionSkeleton() {
  return <div className={promotionClasses} />;
}
