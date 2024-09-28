import * as React from "react";
import { BaseLayout } from "../../shared/layouts/baseLayout/BaseLayout";
import { BasePromoNinjaUltimate } from "../../shared/layouts/basePromoNinjaUltimate/BasePromoNinjaUltimate";

interface ProductsListProps {
  children?: React.ReactNode;
}

const ProductsList: React.FC<ProductsListProps> = ({ children }) => {
  return (
    <BaseLayout>
      <BasePromoNinjaUltimate />
    </BaseLayout>
  );
};

export default ProductsList;
