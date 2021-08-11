import SiteHeader from '../components/SiteHeader';
import MobileHeader from '../components/MobileHeader';
import MobileLinks from '../components/MobileLinks';

export default function Home() {
  return (
    <div>
      <SiteHeader></SiteHeader>
      <MobileHeader>
        <MobileLinks></MobileLinks>
      </MobileHeader>

      <div className="Jumbotron">
        <div className="TitleScreen">
          <h2 className="ACMname">ACM presents</h2>
          <h1 className="Eventname">HACKUTD</h1>
          <h3 className="subTitle">BLAST FROM THE PAST</h3>
        </div>

        <div className="joinButtons">
          <button className="HackerButton">BECOME A HACKER</button>
          <button className="MentorButton">BECOME A MENTOR</button>
          <button className="SponserButton">BECOME A SPONSOR</button>
        </div>
      </div>

      <div className="date">JOIN US ON NOVEMBER 13 & 14</div>

      <div className="Stats">
        <div className="Statsright">
          <div className="statsOne">
            <h5 className="Info">700+</h5>
            <h6 className="Info">participants</h6>
          </div>
          <div className="row">
            <div className="statsTwo">
              <h5 className="Info">24</h5>
              <h6 className="Info">hours</h6>
            </div>
            <div className="statsThree">
              <h5 className="Info">34</h5>
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

      <div className="AboutHackUTD">
        <h4 className="Subtitle">About HackUTD</h4>

        <p className="paragraph">
          Here will be a short paragraph providing a general overview of what hackutd is including
          dates, events, contests, and prizes. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum eget magna ut risus fermentum dapibus. Sed vulputate vulputate lacus eu
          ullamcorper.
        </p>
        <p className="paragraph">
          A second paragraph will serve to inform the reader of the size and reach of hackutd. we
          will inform them of how many people come each year and how much in we have in prizes.
          Nulla felis tellus, varius suscipit nisl sit amet, pretium mollis erat. Morbi ipsum risus,
          malesuada eget leo ut, ultrices convallis ex. Etiam blandit magna id dictum finibus.
        </p>
        <p className="paragraph">
          A final paragraph can be included to briefly discuss our partnership as a branch of utd
          acm. Mauris aliquam sed sapien ut pretium. Etiam a porta magna. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
}
