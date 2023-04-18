import { useNavigateAction } from "@aws-amplify/ui-react/internal";

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

import Image from 'next/image';
import RemixIcon from '../../../public/remix_icon.svg';

export default function SharingContainer() {
  const goToSmartContract = useNavigateAction({
    type: "url",
    url: "https://remix.ethereum.org/Open-Earth-Foundation/co2-pricing/blob/main/apps/smartcontracts/demo.sol",
  });

  const goToAPI = useNavigateAction({
    type: "url",
    url: "https://app.swaggerhub.com/apis-docs/ADIT_2/CO2_pricing_oracle/1.0.0#/Carbon%20Pricing/co2Data",
  });

  return (
    <div>
      <span className="Start-sharing">
        <span className="google_plus_reshare"></span>
        <span className="text-style-1">Start</span>
        sharing
      </span>
      <div className="Sharing-container">
        <div className="CTAs">
          <div
            className="share-button"
            onClick={() => {
              goToSmartContract();
            }}
          >
            <Image
              src={RemixIcon}
              alt="Remix Icon"
            />
            <div className="share-text">
              Open
              <div className="second-text">in Remix</div>
            </div>
          </div>
          <div
            className="share-button"
            onClick={() => {
              goToAPI();
            }}
          >
            <div className="share-icon"><AccountTreeOutlinedIcon fontSize="inherit" /></div>
            <div className="share-text">
              Connect
              <div className="second-text">to our API</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
