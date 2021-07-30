import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

export default function faq() {
  return (
    <div>
      <SiteHeader></SiteHeader>
      <h4>FREQUENTLY ASKED QUESTIONS</h4>
      <div className="faqs">
        <div className="leftFacts">
          <div className="facts">
            <h2>What is a hackathon?</h2>
            <h3>
              A hackathon is a 24-hour competition where you and up to 3 teammates build a software
              project from scratch and compete against other groups for prizes. Sponsors will also
              provide workshops, events, and activities throughout the weekend to help you learn
              more about the field of technology!
            </h3>
          </div>
          <div className="facts">
            <h2>Can I participate if I have never hacked?</h2>
            <h3>
              Everyone is welcome to come, and no experience is necessary to attend! We will even be
              hosting workshops to introduce new hackers to industry programs and technologies.
            </h3>
          </div>
          <div className="facts">
            <h2>What if I don’t have a team?</h2>
            <h3>
              We will have a teambuilding session at the start of the hackathon for those who need
              help finding one! You can also choose to work on projects by yourself!
            </h3>
          </div>
          <div className="facts">
            <h2>What do I need to bring?</h2>
            <h3>
              You just need to bring a laptop, charger, and a hacking spirit to participate! We will
              be providing internet connectivity, and we also recommend having a compiler, packages,
              or any packaging tools ready beforehand.
            </h3>
          </div>
          <div className="facts">
            <h2>When is HackUTD VIII?</h2>
            <h3>November 13th and 14th!</h3>
          </div>
          <div className="facts">
            <h2>When is registration?</h2>
            <h3>Replace when information comes out.</h3>
          </div>
        </div>
        <div className="rightFacts">
          <div className="facts">
            <h2>How much does it cost?</h2>
            <h3>HackUTD VIII will be completely free to hackers!</h3>
          </div>
          <div className="facts">
            <h2>Where will it be?</h2>
            <h3>HackUTD will be hosted at... You guessed it: UTD!</h3>
          </div>
          <div className="facts">
            <h2>What are the general rules?</h2>
            <h3>
              Your project must be built entirely over the course of the weekend. No previous
              projects or code may be used, and all attendees must abide by the MLH code of conduct.
            </h3>
          </div>
          <div className="facts">
            <h2>What should I build?</h2>
            <h3>
              Anything you want! You can try to solve a sponsor challenge or submit a project for
              the HackUTD awards!
            </h3>
          </div>
          <div className="facts">
            <h2>Can I volunteer?</h2>
            <h3>
              Mentor and volunteer applications will be open whenever we get it together and figure
              out the logistics
            </h3>
          </div>
          <div className="facts">
            <h2>Free swag? pls?</h2>
            <h3>
              We will have custom HackUTD VIII swag for all participants along with gear provided by
              our sponsors!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
