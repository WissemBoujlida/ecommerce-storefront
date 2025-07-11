"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { Currency } from "@/components/currency";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  // destructed to be used in use effect
  const removeAll = useCart((state) => state.removeAll);

  const total = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      },
    );
    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="lg:col-span-5 bg-gray-50 mt-16 lg:mt-0 px-4 py-6 sm:p-6 lg:p-8 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900"> Order Summary </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={total} />
        </div>
      </div>
      <Button onClick={onCheckout} className="mt-6 w-full">
        Checkout
      </Button>
    </div>
  );
};
