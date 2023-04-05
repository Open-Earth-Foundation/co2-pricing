export default function PriceContent(props: any) {
  return (
    <div className="Container">
      <span className="Your-carbon-price-should-be">
        Your carbon price should be
      </span>
      <div className="Text">
        <span className="Price-Span">{props.price}</span>
      </div>
      <span className="in-USD-per-Ton-of-CO2">in USD per Ton of CO2</span>
    </div>
  );
}
