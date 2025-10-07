import Image from "next/image";
import Hero from "./components/Hero";
import ProductsPage from "./products/page";
import ProductTips from "./components/ProductTips";
import ServicesWeProvide from "./components/ServicesWePro";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="my-20">
        <ProductsPage></ProductsPage>
      </div>
      <ProductTips></ProductTips>
      <ServicesWeProvide></ServicesWeProvide>
    </div>
  );
}
