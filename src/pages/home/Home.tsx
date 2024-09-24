import * as React from "react";
import { BaseLayout } from "../../shared/layouts/baseLayout/BaseLayout";
import { BasePromoNinjaUltimate } from "../../shared/layouts/basePromoNinjaUltimate/BasePromoNinjaUltimate";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <BaseLayout>
      <BasePromoNinjaUltimate />
    </BaseLayout>
  );
};

export default Home;
