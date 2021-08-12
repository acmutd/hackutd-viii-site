import MobileHeader from '../components/MobileHeader';
import MobileLinks from '../components/MobileLinks';

export default function Home() {
  return (
    <div>
      <div className="Jumbotron">
        <div className="TitleScreen">
          <h2 className="ACMname">ACM presents</h2>
          <h1 className="Eventname">HACKUTD</h1>
          <h3 className="subTitle">BLAST FROM THE PAST</h3>
        </div>

        <div className="joinButtons">
          <div className=" font-display text-2xl bg-black">REGISTRATION OPENING SOON</div>
        </div>
      </div>

      <div className="date">JOIN US ON NOVEMBER&nbsp;13&nbsp;&amp;&nbsp;14</div>

      <div className="Stats">
        <div className="Statsright">
          <div className="p-5 HackerButton text-2xl">
            <h5 className="Info text-3xl">700+</h5>
            <h6 className="Info">participants</h6>
          </div>
          <div className="row">
            <div className="HackerButton text-2xl">
              <h5 className="Info text-3xl">24</h5>
              <h6 className="Info">hours</h6>
            </div>
            <div className="p-10  HackerButton text-2xl">
              <h5 className="Info text-3xl">34</h5>
              <h6 className="Info">events</h6>
            </div>
          </div>
        </div>

        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div className="AboutHackUTD p-4">
        <h4 className="Subtitle p-4">About HackUTD</h4>

        <p className="paragraph">
          HackUTD, the largest university hackathon in North Texas, is a weekend long event where
          students build apps, hardware, and more. HackUTD provides a venue for self-expression and
          creativity through technology. People with varying technical backgrounds come together,
          form teams around a problem or idea, and collaboratively code a unique solution from
          scratch. Whether you&amp;re a frequent hackathon attendee or just getting started,
          we&amp;d love to see what you can make.
        </p>
      </div>
    </div>
  );
}
