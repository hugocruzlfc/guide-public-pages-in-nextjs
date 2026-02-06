import { Suspense } from "react";
import { List, Promotion, PromotionSkeleton } from "@/app/products/ui";
import { getProducts, getPromotion } from "@/app/products/data";

// Static component
function Header() {
  return (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
      Shop
    </h1>
  );
}

// Cache component
async function ProductList() {
  "use cache";
  const products = await getProducts();
  return <List items={products} />;
}

// Dynamic component
async function PromotionContent() {
  const promotion = await getPromotion();
  if (!promotion) return null;
  return <Promotion data={promotion} />;
}

export default async function Page() {
  return (
    <>
      <Suspense fallback={<PromotionSkeleton />}>
        <PromotionContent />
      </Suspense>
      <Header />
      <ProductList />
    </>
  );
}
