import { Product } from "@/types";

import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryParams {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (
  queryParams: QueryParams,
): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: queryParams.categoryId,
      sizeId: queryParams.sizeId,
      colorId: queryParams.colorId,
      isFeatured: queryParams.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};
