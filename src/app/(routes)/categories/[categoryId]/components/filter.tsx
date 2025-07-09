"use client";

import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Color | Size)[];
}

export const Filter = ({ valueKey, name, data }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = { ...current, [valueKey]: id };

    // if filter is active remove filter
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4 border-gray-200" />
      <div className="flex gap-2 flex-wrap">
        {data.map((filter) => (
          <div key={filter.id}>
            <Button
              className={cn(
                "rounded-md text-sm bg-white text-gray-800 border border-gray-300",
                selectedValue === filter.id && "bg-black text-white",
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
