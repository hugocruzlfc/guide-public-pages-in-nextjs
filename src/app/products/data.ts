export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://next-recipe-api.vercel.dev/products");

  return response.json();
}

export type Promotion = { message: string };
export async function getPromotion(): Promise<Promotion | null> {
  // Artificial delay to make the demo more obvious
  await new Promise((resolve) => setTimeout(resolve, 200));

  const response = await fetch("https://next-recipe-api.vercel.dev/promotion");

  return response.json();
}
