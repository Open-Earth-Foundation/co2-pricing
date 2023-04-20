import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function DescriptionBlock() {
  return (
    <div className="Description-block_large">
      <div className="Description-block-text">
        <span className="How-to-start-calculating-your-own-price">
          <span className="text-style-1">How to start </span>
          <span className="text-style-2">calculating your own price?</span>
        </span>
        <span className="Use-this-tool-to-calculate-a-suggested-carbon-price-for-your-organization-based-on-the-Social-Cost">
          Use this tool to calculate a suggested carbon price for your
          organization, based on the Social Cost of Carbon (SCC), which is
          estimate of the damages from emitting a ton of carbon dioxide. To do
          so, define a discount rate which represents how much weight is
          assigned today to impacts of emissions felt in the future. A higher
          discount rate results in a lower carbon price, as future damages are
          considered less valuable. The decision we make about the discount rate
          determines how the undiscounted marginal damages are converted into a
          present value of damages, which is the social cost of carbon. This
          tool is is powered by the open source RFF-Berkeley Greenhouse Gas
          Impact Value Estimator (GIVE) model developed by UC Berkeley and
          Resources for the Future.”
        </span>
      </div>
      <div
        className="Learn-more-via-FUND-Model"
        onClick={() => {
          window.open(
            "https://www.rff.org/publications/data-tools/scc-explorer/"
          );
        }}
      >
        <span className="text-style-1">Learn more</span>
        (via FUND Model)
        <div className="arrow-forward-icon"><ArrowForwardIcon fontSize="inherit"/></div>
      </div>
    </div>
  );
}

// <style>
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
// </style>

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
