"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


export default function AddProductPage() {


  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/products", formData);
      alert(" Product added successfully!");
      setFormData({ name: "", price: "", description: "", image: "" });
    } catch (error) {
      console.error(error);
      alert(" Failed to add product");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto ">
      <Card className={"bg-[#1D232A] text-white border-none"}>
        <CardHeader className={"text-center text-2xl font-semibold"}>
          <CardTitle>Add Product</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Label htmlFor="productName">Product Name</Label>
          <Input
            type="text"
            required
            id="productName"
            className={"border-gray-600"}
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Label className={"mt-2"} htmlFor="productPrice">
            Product Price
          </Label>
          <Input
            type="number"
            id="productPrice"
            name="price"
            required
            className={"border-gray-600"}
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <Label className={"mt-2"} htmlFor="description">
            Descripton
          </Label>
          <Textarea
            name="description"
            id="description"
            placeholder="Description"
            required
            className={"border-gray-600"}
            value={formData.description}
            onChange={handleChange}
          />
          <Label className={"mt-2"} htmlFor="imageUrl">
            Image Url
          </Label>
          <Input
            type="text"
            id="imageUrl"
            required
            name="image"
            placeholder="Image URL"
            className={"border-gray-600"}
            value={formData.image}
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            className="w-full mt-2 bg-amber-600 hover:bg-amber-700"
          >
            Add Product
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
