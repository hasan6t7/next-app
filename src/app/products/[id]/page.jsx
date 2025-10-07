"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "../../components/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
 const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <Loader></Loader>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-lg text-gray-500">Product not found</p>
      </div>
    );

  return (
    <div className=" p-6">
      <Card className="shadow-lg border text-white bg-[#1D232A] border-[#1D232A] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <Image
              src={product?.image || "/placeholder.jpg"}
              alt={product?.name}
              width={450}
              height={450}
              className="rounded-xl object-cover shadow-md"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-4">
            <CardHeader className="p-0">
              <CardTitle className="text-3xl font-bold ">
                {product?.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">

              <p className="text-2xl font-semibold text-amber-600 mt-2">
                ${product.price}
              </p>

              <p className=" leading-relaxed mt-4">
                {product.description}
              </p>

              <div className="mt-6">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
