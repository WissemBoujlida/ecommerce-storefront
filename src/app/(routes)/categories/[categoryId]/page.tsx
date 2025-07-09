import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { Filter } from "./components/filter";
import { NoResults } from "@/components/no-results";
import { ProductCard } from "@/components/product-card";
import { MobileFilters } from "./components/mobile-filters";
import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    sizeId: string;
    colorId: string;
  }>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = await params;
  const { sizeId, colorId } = await searchParams;

  const products = await getProducts({ categoryId, colorId, sizeId });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
            <div className="mt-6 lg:mt-0 lg:col-span-4">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
