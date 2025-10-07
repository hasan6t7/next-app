import { Button } from "@/components/ui/button";
import React from "react";
import { Spinner } from "@/components/ui/spinner"

export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <Button disabled size="sm">
          <Spinner />
          Loading...
        </Button>
      </div>
    </div>
  );
};  
