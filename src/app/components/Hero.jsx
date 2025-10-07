"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className=" ">
      <Carousel className="w-full relative">
        {/* Navigation Buttons */}
        

        <CarouselContent>
          {/* --- Slide 1 --- */}
          <CarouselItem>
            <div
              className="relative min-h-[50vh] lg:min-h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
              style={{
                backgroundImage:
                  'url("https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp")',
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 text-white max-w-md px-2">
                <h1 className="mb-5 text-5xl font-bold">Boost Your Sales</h1>
                <p className="mb-5">
                  Reach more customers and increase revenue with our powerful tools and seamless experience.
                </p>
                <Button className={"bg-amber-600 hover:bg-amber-700 px-6 py-2"}>Get Started</Button>
              </div>
            </div>
          </CarouselItem>

          {/* --- Slide 2 --- */}
          <CarouselItem>
            <div
              className="relative min-h-[50vh] lg:min-h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
              style={{
                backgroundImage:
                  'url("https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp")',
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 text-white max-w-md px-2">
                <h1 className="mb-5 text-5xl font-bold">Manage Everything in One Place</h1>
                <p className="mb-5">
                 From inventory to orders, control your entire product ecosystem with ease and confidence.
                </p>
                <Button className={"bg-amber-600 hover:bg-amber-700 px-6 py-2"}>Get Started</Button>
              </div>
            </div>
          </CarouselItem>

          {/* --- Slide 3 --- */}
          <CarouselItem>
            <div
              className="relative min-h-[50vh] lg:min-h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
              style={{
                backgroundImage:
                  'url("https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp")',
              }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 text-white max-w-md px-2">
                <h1 className="mb-5 text-5xl font-bold">Add Your Products Effortlessly</h1>
                <p className="mb-5">
                  Create, showcase, and manage your products with a simple interface designed for speed and efficiency
                </p>
                <Button className={"bg-amber-600 hover:bg-amber-700 px-6 py-2"}>Get Started</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
