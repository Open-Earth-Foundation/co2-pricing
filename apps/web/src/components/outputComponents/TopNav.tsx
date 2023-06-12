import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import OEFLogo from '../../../public/oef_icon.svg';
import Image from 'next/image';

const urlbase = process.env.'NEXT_PUBLIC_WEBFLOW_URL_BASE';

export default function TopNav() {
    const calculatorOnClick = useNavigateAction({
        type: "url",
        url: "/calculator/select",
      });

      const aboutCPTOnClick = useNavigateAction({
        type: "url",
        url: urlbase + "/about"
      });

      const homeOnClick = useNavigateAction({
        type: "url",
        url: urlbase + "/"
      });

      const OEFOnClick = () => window.open("https://www.openearth.org/");

      return (
        <div className="nav-container">
            <div className="left-nav">
            <Image
                src={OEFLogo}
                alt={'Logo for Open Earth Foundation'}
                onClick={OEFOnClick}
                className="open-earth-image"
            />
            CarbonPricing
            </div>
            <div className="right-nav">
                <div className="link-text" onClick={homeOnClick}>Home</div>
                <div className="link-text" onClick={calculatorOnClick}>Calculator</div>
                <div className="link-text" onClick={aboutCPTOnClick}>About</div>
            </div>
        </div>
      )
}