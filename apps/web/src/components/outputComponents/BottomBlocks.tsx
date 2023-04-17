import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function BottomBlocks() {
  const goToSmartContract = useNavigateAction({
    type: "url",
    url: "https://remix.ethereum.org/Open-Earth-Foundation/co2-pricing/blob/main/apps/smartcontracts/demo.sol",
  });

  const goToAPI = useNavigateAction({
    type: "url",
    url: "https://app.swaggerhub.com/apis-docs/ADIT_2/CO2_pricing_oracle/1.0.0#/Carbon%20Pricing/co2Data",
  });

  return (
    <div className="Row-Container">
      <div className="Description-block">
        <div>
          <div className="help"></div>
          <span className="How-to-integrate-our-API">
            How to build a Smart Contract?
          </span>
        </div>
        <div className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Risus-vel-nibh-nunc-est-sollicitudin-pelle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna
          elit enim fames fames sem at blandit. Pellentesque varius volutpat
          lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus
          sed sed imperdiet varius.
        </div>
        <div>
          <div
            className="Content"
            onClick={() => {
              goToSmartContract();
            }}
          >
            <div className="Know-more">Know more</div>
            <link></link>
            <div className="arrow_forward"></div>
          </div>
        </div>
      </div>
      <div className="Description-block">
        <div>
          <div className="help"></div>
          <span className="How-to-integrate-our-API">
            How to integrate our API?
          </span>
        </div>
        <div className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Risus-vel-nibh-nunc-est-sollicitudin-pelle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          nibh nunc, est sollicitudin pellentesque tincidunt ultrices. Magna
          elit enim fames fames sem at blandit. Pellentesque varius volutpat
          lobortis consequat ornare ut aliquam ornare rhoncus. Molestie cursus
          sed sed imperdiet varius.
        </div>
        <div>
          <div
            className="Content"
            onClick={() => {
              goToAPI();
            }}
          >
            <div className="Know-more">Know more</div>
            <link></link>
            <div className="arrow_forward"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
