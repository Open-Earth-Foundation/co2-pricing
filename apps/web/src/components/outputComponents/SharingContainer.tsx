import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import { Share } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function SharingContainer() {
  const goToSmartContract = useNavigateAction({
    type: "url",
    url: "https://remix.ethereum.org/Open-Earth-Foundation/co2-pricing/blob/main/apps/smartcontracts/demo.sol",
  });

  const goToAPI = useNavigateAction({
    type: "url",
    url: "https://app.swaggerhub.com/apis-docs/ADIT_2/CO2_pricing_oracle/1.0.0#/Carbon%20Pricing/co2Data",
  });

  const primary = "#2351dc";

  const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
    },
  });

  return (
    <div>
      <span className="Start-sharing">
        <ThemeProvider theme={theme}>
          <Share className="Share-icon" fontSize="medium" color="primary" />
        </ThemeProvider>
        <span className="text-style-1">Start </span>
        <span className="text-style-2">Sharing</span>
      </span>
      <div className="Sharing-container">
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
          <div
            className="Connect_to_api_button"
            onClick={() => {
              goToAPI();
            }}
          >
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
