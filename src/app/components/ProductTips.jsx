import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function ProductTips() {
  const tips = [
    "Use clear and high-quality images.",
    "Provide an accurate description.",
    "Set a competitive price.",
    "Add product categories or tags.",
    "Ensure stock availability is correct.",
  ];

  return (
    <div className="mb-20 mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Tips for Adding Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="bg-[#1D232A] text-white border-none flex items-center gap-3 p-4  transform transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            <Check className="text-amber-500" />
            <CardContent className="p-0">
              <CardTitle className="text-white text-base font-medium">
                {tip}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
