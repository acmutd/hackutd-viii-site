import SiteHeader from '../components/SiteHeader';
import MobileHeader from '../components/MobileHeader';
import MobileLinks from '../components/MobileLinks';

export default function schedule() {
  return (
    <div className="schedulePage">
      <SiteHeader></SiteHeader>
      <MobileHeader>
        <MobileLinks></MobileLinks>
      </MobileHeader>

      <div className="scheduleMainPage">
        <h4 className="scheduleTitle">SCHEDULE</h4>
        <h5>Come back later for some good news!</h5>
      </div>
    </div>
  );
}
