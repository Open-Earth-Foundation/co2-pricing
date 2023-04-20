import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import OEFLogo from '../../../public/oef_icon.svg';
import Image from 'next/image';


export default function TopNav() {
    const calculatorOnClick = useNavigateAction({
        type: "url",
        url: "/calculator/select",
      });
    
      const aboutCPTOnClick = useNavigateAction({
        type: "url",
        url: "http://cpt-stage.webflow.io",
      });

      const homeOnClick = useNavigateAction({
        type: "url",
        url: "http://cpt-stage.webflow.io",
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