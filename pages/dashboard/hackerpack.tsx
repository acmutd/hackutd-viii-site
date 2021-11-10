import DashboardHeader from '../../components/DashboardHeader';
import Header from '../../components/AppHeader';
import Head from 'next/head';
import React from 'react';
import { useUser } from '../../lib/profile/user-data';
import { useAuthContext } from '../../lib/user/AuthContext';
import DocLink from './Components/DocLinks';
import SponsorCard from './Components/SponsorChallenge';
import Image from 'next/image';
import ClubCard from './Components/ClubCard';
/**
 * The dashboard / hackerpack.
 *
 * Landing: /hackerpack
 */
export default function HackerPack() {
  const { isSignedIn } = useAuthContext();
  const user = useUser();
  const role = user.permissions?.length > 0 ? user.permissions[0] : '';

  return (
    <div className="font flex flex-grow flex-wrap">
      <Head>
        <title>HackerPacks</title>
        <meta name="description" content="HackPortal's HackerPacks" />
      </Head>

      {/* ghost section to fill in for fixed sidebar */}
      <section
        id="ghost"
        className="flex justify-center h-screen sticky bg-black top-0 w-1/4 md:w-1/6 2xl:w-1/8 text-xs md:text-xs lg:text-sm overflow-auto"
      ></section>

      <section
        id="Sidebar"
        className="flex justify-center min-h-[90vh] max-h-[90vh] fixed top-24 border-r-2 border-t-2 border-aqua w-1/4 md:w-1/6 2xl:w-1/8 text-xs md:text-xs lg:text-sm overflow-auto"
      >
        <section id="options" className="relative px-6 py-4">
          <div className="font-bold mb-3">HackerPack</div>
          <ul className="pl-4 pb-32">
            <li>
              General
              <ul className="pl-4">
                <li>
                  <a href="#About">Overview</a>
                </li>
                <li>
                  <a href="#Subsection2">Mentors</a>
                </li>
              </ul>
            </li>
            <li>
              Tech Workshop Packs
              <ul className="pl-4">
                <li>
                  <a href="#Subsection3">Name of Workshop</a>
                </li>
                <li>
                  <a href="#Subsection4">Name of Workshop</a>
                </li>
                <li>
                  <a href="#Subsection5">Name of Workshop</a>
                </li>
                <li>
                  <a href="#Subsection6">Name of Workshop</a>
                </li>
              </ul>
            </li>
            <li>
              Comm Workshop Packs
              <ul className="pl-4">
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
              </ul>
            </li>
            <li>
              Sponsor Workshop Packs
              <ul className="pl-4">
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
                <li>
                  <a href="">Name of Workshop</a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <div className="dashboardTag fixed bottom-0 border-t-2 border-r-2 border-aqua w-1/4 md:w-1/6 2xl:w-1/8 text-center py-3 bg-black">
          <div>Welcome, {!user || !isSignedIn ? 'hacker' : user.firstName}</div>
          <div className="text-indigo-500">{role}</div>
        </div>
      </section>

      <section id="mainContent" className="px-6 py-3 w-3/4 md:wd-5/6 2xl:w-7/8">
        <section id="subheader" className="p-4">
          <DashboardHeader active="/dashboard/hackerpack" />
        </section>
        <p className="hackerPackShadow inline font-bold text-2xl md:text-4xl lg-text-6xl text-white">
          HackerPack
        </p>

        {/* <section
          id="docLinks"
          className="bg-gray-200 rounded-lg my-6 p-5 w-5/6 bg-opacity-0 border-2 border-aqua"
        >
          Linked Documents:
          <div className="flex flex-wrap grid grid-cols-2 lg:grid-cols-3">
            <DocLink
              type="doc"
              link="https://docs.google.com/document/d/1adXBUwGyVwdzgt43W8JTWb67JMPAaiERei6QWopodVw/edit"
              title="Easy Mac and Cheese Recipe"
            />
          </div>
        </section> */}

        <div id="About" className="my-7 scrollSnap">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">What is HackUTD?</div>
          <p>
            HackUTD is a weekend-long event where students build apps, hardware, and more. HackUTD
            provides a venue for self-expression and creativity through technology. People with
            varying technical backgrounds come together, form teams around a problem or idea, and
            collaboratively build a unique solution from scratch. Whether you&#39;re a frequent
            hackathon attendee or just getting started, we&#39;d love to see what you can make.
          </p>
        </div>

        <div id="" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">Purpose</div>
          <p>
            Develop CS &amp; non-CS student relations and skills through hacking challenges.
            Showcase new technologies through workshops and facilitate meetings with industry
            leaders who choose to participate in our hackathon!
          </p>
        </div>

        <div id="" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">Why attend HackUTD?</div>
          <p>
            HackUTD is a student organized hackathon aimed at offering fellow students an outlet for
            self expression and welcoming everyone with or without experience! HackUTD hosts events
            that introduce key concepts and relevant topics that new hackers will find useful.
          </p>
        </div>

        <div id="Subsection3" className="my-7">
          <div className="font-bold text-lg md:text-xl lg-text-3xl mb-4">Places to Eat</div>
          <table className="border-collapse w-full">
            <tr className="tableShadow lg:text-xl md:text-lg text-md">
              <th>Student Union</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>Starbucks (cafe)</td>
              <td>9:00 am - 3:00 pm</td>
              <td>closed</td>
            </tr>
            <tr>
              <td>Chick-Fil-A (take-out)</td>
              <td>10:20 am - 3:00 pm</td>
              <td>closed</td>
            </tr>
            <tr>
              <td>Panda Express</td>
              <td>10:20 am - 3:00 pm</td>
              <td>closed</td>
            </tr>
            <tr className="row">
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="tableShadow lg:text-xl md:text-lg text-md">
              <th>Parking Structure 3</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>Taco Bell Cantina (dine-in)</td>
              <td>8:00 am - 3:00 pm</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr className="row">
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="tableShadow lg:text-xl md:text-lg text-md">
              <th>Dining Hall West</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>Papa Johns (take-out)</td>
              <td>11:00 am - 11:00 pm</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>The Market</td>
              <td>11:00 am - 11:00 pm</td>
              <td>Closed</td>
            </tr>
            <tr className="row">
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="tableShadow lg:text-xl md:text-lg text-md">
              <th>Northside</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>7-Eleven</td>
              <td>Open 24 Hours</td>
              <td>Open 24 Hours</td>
            </tr>
            <tr>
              <td>Northside Drafthouse &amp; Eatery </td>
              <td>11:00 am - 2:00 am</td>
              <td>11:00 am - 12:00 am</td>
            </tr>
            <tr>
              <td>Pinto Urban Thai Dinner</td>
              <td>12:00 pm - 9:00 pm</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Starbucks</td>
              <td>6:00 am - 10:00 pm</td>
              <td>6:00 am - 10:00 pm</td>
            </tr>
          </table>
        </div>

        {/* MOVE TO HACKCENTER */}
        {/* <div id="Subsection2" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">Sponsor Challenges</div>
          <div className="w-full flex flex-wrap">
            <SponsorCard challenge="General Challenge" description="Challenge Description" />
            <SponsorCard
              challenge="American Airlines Challenge"
              description="Challenge Description"
            />
            <SponsorCard challenge="Goldman Sachs Challenge" description="Challenge Description" />
            <SponsorCard challenge="Capital One Challenge" description="Challenge Description" />
            <SponsorCard challenge="StateFarm Challenge" description="Challenge Description" />
          </div>
        </div> */}

        <div id="Subsection3" className="my-7 w-full">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">Clubs</div>
          <ClubCard
            path="/assets/clubImages/WINStem.png"
            club="WIN Stem"
            description="Win STEM at UT Dallas is a charitable, service-oriented organization aimed at supporting and recruiting ambitious women to pursue STEM careers through building confidence, community engagement, and opportunity guidance."
          />
          <ClubCard
            path="/assets/clubImages/blockchain.png"
            club="UTD BlockChain"
            description="UTD Blockchain is a club that focuses on creating awareness about blockchain technology and it's application in various industries like finance, supply chain, and e-commerce to name a few. We want to help people to get involved in blockchain and other financial technologies from the very start. Our club gives a lot of importance to preparing our students to succeed on a professional level by exposing them to both engineering and business regardless of their majors."
          />
          <ClubCard
            path="/assets/clubImages/IEEE.png"
            club="Institute of Electrical and Electronics Engineers"
            description="IEEE is a student run branch of IEEE whose purpose is to provide current undergraduate students with an opportunity to enrich their learning experience and connect with local industry professionals. We provide students with an environment that allows them to socialize through IEEE events and enables them to develop professional skills through tech talks and personal interactions. By sustaining a close community of passionate young engineers, we hope to encourage excellence among our members and enhance the character of the engineering profession at large. "
          />
          <ClubCard
            path="/assets/clubImages/EntrepreneurshipClub.png"
            club="Entrepreneurship Club"
            description="The mission of Entrepreneurship Club is to promote the entrepreneurship spirit on campus by empowering students to collaborate, create and most importantly become change makers. We do so by promoting local startup events, inviting guest speakers, hosting pitch competitions, and we’re constantly trying to expand the impact of our club both on campus and off campus."
          />
          <ClubCard
            path="/assets/clubImages/gdsc.png"
            club="Google Developer Student Clubs"
            description="Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
          />
        </div>

        <div id="Subsection4" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">SubHeading 4</div>
          <p>
            Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Mauris nunc congue nisi
            vitae suscipit. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.
            Mi proin sed libero enim sed. Sit amet nisl suscipit adipiscing bibendum. Enim sit amet
            venenatis urna cursus eget. Est lorem ipsum dolor sit amet consectetur adipiscing elit
            pellentesque. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum
            arcu. Enim nulla aliquet porttitor lacus luctus accumsan tortor.
          </p>
        </div>

        <div id="Subsection5" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">SubHeading 5</div>
          <div>
            <p>
              Turpis egestas pretium aenean pharetra magna. Turpis in eu mi bibendum neque egestas
              congue quisque egestas. Egestas fringilla phasellus faucibus scelerisque. Tincidunt
              ornare massa eget egestas purus viverra accumsan in. Elit ut aliquam purus sit.
              Interdum varius sit amet mattis vulputate enim nulla. Lacinia quis vel eros donec ac
              odio.
              <ul className="list-disc list-inside">
                <li>Cu erat prompta his</li>
                <li>A habitasse velit </li>
                <li>Duis at tellus at urna</li>
                <li>Egestas nisi</li>
              </ul>
            </p>
          </div>
        </div>

        <div id="Subsection6" className="my-7">
          <div className="font-bold text-lg md:text-xl lg:text-3xl mb-4">SubHeading 6</div>
          <div className="flex grid grid-cols-2 gap-x-4 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et eu et vitae, in quis metus
              quam integer et. Luctus elit cursus a habitasse velit. Egestas nisi, vel, sodales
              proin vitae quam aenean ullamcorper. Fames enim nunc augue velit nunc neque, fermentum
              odio elementum.
            </p>
            <p>
              Lacinia quis vel eros donec ac odio tempor orci. Mauris cursus mattis molestie a
              iaculis at. Ipsum dolor sit amet consectetur adipiscing elit duis. Integer vitae justo
              eget magna fermentum. Leo in vitae turpis massa sed elementum tempus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
