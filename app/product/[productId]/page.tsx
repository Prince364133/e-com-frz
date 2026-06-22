import products from "@/data/products.json";
import ProductPage from "./ProductPage";

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

export default function Page({
  params,
}: {
  params: { productId: string };
}) {
  return <ProductPage productId={params.productId} />;
}
