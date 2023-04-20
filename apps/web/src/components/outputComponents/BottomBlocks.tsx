import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function BottomBlocks() {
  const goToSmartContractBlog = () => window.open("https://open-earth-foundation.github.io/2023/04/12/How-to-use-the-CO2-Oracle.html");

  const goToAPI = () => window.open("https://app.swaggerhub.com/apis-docs/ADIT_2/CO2_pricing_oracle/1.0.0#/Carbon%20Pricing/co2Data");

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
          A smart contract is a self-executing computer program that
          automatically executes the terms of a contract when certain
          pre-defined conditions are met. Click below to learn more about how to
          set one up.
        </div>
        <div>
          <div
            className="Content"
            onClick={() => {
              goToSmartContractBlog();
            }}
          >
            <div className="Know-more">Learn more about Smart Contracts</div>
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
          An API, or application programming interface, is a set of defined
          rules that enable different applications to communicate with each
          other. Click the link below to find out how to access the pricing data
          programatically and build it into your application.
        </div>
        <div>
          <div
            className="Content"
            onClick={() => {
              goToAPI();
            }}
          >
            <div className="Know-more">
              See the CO2 Pricing Oracle API Guide
            </div>
            <link></link>
            <div className="arrow_forward"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
