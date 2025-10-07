import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Box, ShoppingCart, Package, Users } from "lucide-react";

export default function ServicesWeProvide() {
  const services = [
    {
      id: 1,
      icon: <ShoppingCart className="text-amber-500 w-8 h-8" />,
      title: "Ecommerce Solutions",
      description:
        "We help you set up online stores with modern technologies for seamless shopping experience.",
    },
    {
      id: 2,
      icon: <Package className="text-amber-500 w-8 h-8" />,
      title: "Product Management",
      description:
        "Organize and manage your product catalog efficiently with our intuitive system.",
    },
    {
      id: 3,
      icon: <Users className="text-amber-500 w-8 h-8" />,
      title: "User Engagement",
      description:
        "Enhance customer interaction and boost retention with smart engagement tools.",
    },
    {
      id: 4,
      icon: <Box className="text-amber-500 w-8 h-8" />,
      title: "Inventory Solutions",
      description:
        "Track stock levels, orders, and deliveries with our comprehensive inventory system.",
    },
  ];

  return (
    <div className="py-20 mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="bg-[#1D232A] text-white border-none p-6 flex flex-col items-start gap-4  transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            <div>{service.icon}</div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-bold">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-gray-300 text-sm">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
