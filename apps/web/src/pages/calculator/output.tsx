import { useRouter } from "next/router";

import BaseLayout from "layouts/BaseLayout";

import calculatorService from "services/calculator";

import type { NextPageWithLayout } from "types/ui";

import DescriptionBlock from "@/components/outputComponents/DescriptionBlock";
import PriceContainer from "@/components/outputComponents/PriceContainer";
import Chart from "@/components/ui/chart";
import PriceContent from "@/components/outputComponents/PriceContent";
import SharingContainer from "@/components/outputComponents/SharingContainer";
import RestartButton from "@/components/outputComponents/RestartButton";
import BottomBlocks from "@/components/outputComponents/BottomBlocks";
import { useEffect } from "react";

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = "https://matomo.openearth.foundation/";
const MATOMO_SITE_ID = "2";

const OutputPage: NextPageWithLayout = () => {
  const router = useRouter();
  let discount_string = "1%";
  if (Array.isArray(router.query["discount"])) {
    discount_string = router.query["discount"][0] ?? "1%";
  } else {
    discount_string = router.query["discount"] ?? "1%";
  }
  const discount = parseFloat(discount_string) / 100;

  const dataPoints = calculatorService.getPlotData(discount);

  const CURRENT_YEAR = new Date().getFullYear();

  const currentYearDataPoint = dataPoints!.find(
    (dataPoint) => dataPoint.name === CURRENT_YEAR.toFixed(0)
  );

  const price: string | number | undefined = currentYearDataPoint?.scc;

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <div>
      <div className="centered-items-div">
        <DescriptionBlock />
        <PriceContainer />
        <PriceContent price={price} />
        <div className="Chart-card">
          <div className="Chart-div">
            <div className="Chart-title">
              <div className="second-text">Year on year </div>
              <div>&nbsp;overview</div>
            </div>
            <Chart
              dataPoints={dataPoints!}
              axisProp="name"
              dataProps={["scc"]}
              xLabelProp="name"
            />
          </div>
        </div>
      </div>
      <SharingContainer />
      <RestartButton />
      <BottomBlocks />
    </div>
  );
};

OutputPage.getLayout = BaseLayout;

export default OutputPage;
