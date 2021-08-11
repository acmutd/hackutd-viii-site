import SiteHeader from '../components/SiteHeader';
import MobileHeader from '../components/MobileHeader';
import MobileLinks from '../components/MobileLinks';

export default function sponsors() {
  return (
    <div className="sponsorsPage">
      <SiteHeader></SiteHeader>
      <MobileHeader>
        <MobileLinks></MobileLinks>
      </MobileHeader>

      <div className="sponsersMainPage">
        <h4 className="sponsorsTitle">Sponsors</h4>
        <h5>Come back later for some good news!</h5>
      </div>
    </div>
  );
}
