import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { ProductList } from "@/components/product-list";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("6321816b-97f5-4a43-8901-cd6e548a5fec");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
