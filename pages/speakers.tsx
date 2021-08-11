import SiteHeader from '../components/SiteHeader';
import MobileHeader from '../components/MobileHeader';
import MobileLinks from '../components/MobileLinks';

export default function speakers() {
  return (
    <div className="speakersPage">
      <SiteHeader></SiteHeader>
      <MobileHeader>
        <MobileLinks></MobileLinks>
      </MobileHeader>

      <div className="speakersMainPage">
        <h4 className="speakersTitle">Speakers</h4>
        <h5>Come back later for some good news!</h5>
      </div>
    </div>
  );
}
