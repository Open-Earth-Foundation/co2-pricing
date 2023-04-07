import { useNavigateAction } from "@aws-amplify/ui-react/internal";

export default function SharingContainer() {
  const goToSmartContract = useNavigateAction({
    type: "url",
    url: "https://remix.ethereum.org/Open-Earth-Foundation/co2-pricing/blob/main/apps/smartcontracts/demo.sol",
  });

  return (
    <div>
      <span className="Start-sharing">
        <span className="google_plus_reshare"></span>
        <span className="text-style-1">Start</span>
        sharing
      </span>
      <div className="Container">
        <div className="CTAs">
          <div
            className="Open_in_remix_button"
            onClick={() => {
              goToSmartContract();
            }}
          >
            <div className="Vector"></div>
            <div className="Text">
              <span className="Open">Open</span>
              <span className="in-Remix">in Remix</span>
            </div>
          </div>
          <div className="Connect_to_api_button">
            <div className="account_tree_icon"></div>
            <div className="Text">
              <span className="Connect">Connect</span>
              <span className="to-our-API">to our API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
