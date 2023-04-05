export default function DescriptionBlock() {
  return (
    <div className="Description-block_large">
      <span className="How-to-start-calculating-your-own-price">
        <span className="text-style-1">How to start</span>
        calculating your own price?
      </span>
      <span className="Use-this-tool-to-calculate-a-suggested-carbon-price-for-your-organization-based-on-the-Social-Cost">
        Use this tool to calculate a suggested carbon price for your
        organization, based on the Social Cost of Carbon (SCC), which is
        estimate of the damages from emitting a ton of carbon dioxide. To do so,
        define a discount rate which represents how much weight is assigned
        today to impacts of emissions felt in the future. A higher discount rate
        results in a lower carbon price, as future damages are considered less
        valuable. The decision we make about the discount rate determines how
        the undiscounted marginal damages are converted into a present value of
        damages, which is the social cost of carbon. This tool is is powered by
        the open source RFF-Berkeley Greenhouse Gas Impact Value Estimator
        (GIVE) model developed by UC Berkeley and Resources for the Future.”
      </span>
      <span className="Learn-more-via-FUND-Model">
        <span className="text-style-1">Learn more</span>
        (via FUND Model)
      </span>
    </div>
  );
}
