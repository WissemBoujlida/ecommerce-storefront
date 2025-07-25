"use client";

import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import { Currency } from "@/components/currency";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

export const Info = ({ data }: InfoProps) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </span>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div> {data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="size-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="mt-10">
          <Button onClick={onAddToCart} className="flex items-center gap-x-2">
            Add to cart <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
