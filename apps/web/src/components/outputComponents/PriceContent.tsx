import { formatPrice } from "utils/format";

export default function PriceContent(props: any) {
  const price = formatPrice(props.price as number);

  return (
    <>
      <span className="Your-carbon-price-should-be">
        Your carbon price should be
      </span>
      <div className="Text">
        <div className="price-border-div">
          <span className="Price-Span">
            ${price[0]}
            <sup className="price-superscript">{price[1]}</sup>
          </span>
        </div>
      </div>
      <span className="in-USD-per-Ton-of-CO2">in USD per Ton of CO2</span>
    </>
  );
}
