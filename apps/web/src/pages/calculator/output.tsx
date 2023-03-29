import { useRouter } from "next/router";

import BaseLayout from "layouts/BaseLayout";

import calculatorService from "services/calculator";

import type { NextPageWithLayout } from "types/ui";

const OutputPage: NextPageWithLayout = () => {
  const router = useRouter();
  console.log(router.query);
  let discount_string = "1%";
  if (Array.isArray(router.query["discount"])) {
    discount_string = router.query["discount"][0] ?? "1%";
  } else {
    discount_string = router.query["discount"] ?? "1%";
  }
  const discount = parseFloat(discount_string) / 100;
  console.log(discount);

  const dataPoints = calculatorService.getPlotData(discount);
  console.log(dataPoints);

  return (
    <div>
      <h1>{router.query["discount"]}</h1>
    </div>
  );
};

OutputPage.getLayout = BaseLayout;

export default OutputPage;
