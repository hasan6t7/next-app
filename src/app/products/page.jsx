"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader } from "../components/Loader";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loader></Loader>;

  return (
    <div className="py-16">
      <h1 className="text-3xl text-center font-bold pb-10">All Products</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length === 0 && <p>No products found.</p>}
        {products.map((product) => (
          <Card key={product?._id} className={"bg-[#1D232A] border-[#1D232A] text-white  transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"}>
            <CardHeader>
              <CardTitle className={"text-xl font-bold"}>
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {product?.image && (
                <Image
                  className="w-full h-[350px] lg:h-[250px] "
                  src={product?.image}
                  alt={product?.name}
                  width={500}
                  height={500}
                />
              )}
              <p className="truncate">{product?.description}</p>
              <div className="flex items-center justify-between pt-4 ">
                <Link href={`/products/${product._id}`}>
                  <Button
                    className={"bg-amber-600 hover:bg-amber-700 cursor-pointer"}
                  >
                    Details
                  </Button>
                </Link>
                <p className="font-semibold text-xl">
                  Price: <span className="text-amber-600">${product?.price}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
