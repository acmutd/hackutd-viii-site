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
        className="flex justify-center min-h-[90vh] max-h-[90vh] fixed top-24 border-r-2 border-b-2 border-t-2 border-aqua w-1/4 md:w-1/6 2xl:w-1/8 text-xs md:text-xs lg:text-sm overflow-auto bg-black z-51 topz"
      >
        <section id="options" className="relative px-6 py-4">
          <div className="font-bold mb-3">HackerPack</div>
          <ul className="pl-4 pb-32">
            <li>
              General
              <ul className="pl-4 list-disc list-outside">
                <li>
                  <a href="#About">Overview</a>
                </li>
                <li>
                  <a href="#food">Meals</a>
                </li>
                <li>
                  <a href="#hackspaces">Hacking Spaces</a>
                </li>
                <li>
                  <a href="#clubs">Clubs &amp; Orgs</a>
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

      <section id="mainContent" className="px-6 py-3 w-3/4 md:wd-5/6 2xl:w-7/8 z-0 bottomz">
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
          <div className="font-bold text-xl lg:text-3xl mb-4">🖥️ What is HackUTD?</div>
          <p>
            HackUTD is a weekend-long event where students build apps, hardware, and more. HackUTD
            provides a venue for self-expression and creativity through technology. People with
            varying technical backgrounds come together, form teams around a problem or idea, and
            collaboratively build a unique solution from scratch. Whether you&#39;re a frequent
            hackathon attendee or just getting started, we&#39;d love to see what you can make.
          </p>
        </div>

        <div id="" className="my-7">
          <div className="font-bold text-xl lg:text-3xl mb-4">💫 What&#39;s the Purpose?</div>
          <p>
            Develop CS &amp; non-CS student relations and skills through hacking challenges.
            Showcase new technologies through workshops and facilitate meetings with industry
            leaders who choose to participate in our hackathon!
          </p>
        </div>

        <div id="" className="my-7">
          <div className="font-bold text-xl lg:text-3xl mb-4">🎉 Why attend HackUTD?</div>
          <p>
            HackUTD is a student organized hackathon aimed at offering fellow students an outlet for
            self expression and welcoming everyone with or without experience! HackUTD hosts events
            that introduce key concepts and relevant topics that new hackers will find useful.
          </p>
        </div>

        <div id="food" className="my-7 scrollSnap tableOutline">
          <div className="font-bold text-xl lg:text-3xl mb-4">🍕 Meals</div>
          <p className="md:text-xl text-md">Provided</p>
          <table className="border-collapse w-full text-xs md:text-md lg:text-lg">
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
              <th>Day</th>
              <th>Catering</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>Saturday Breakfast</td>
              <td>Coffee &amp; Donuts</td>
              <td>9:00 am</td>
              <td>Room ECS 1.100, Main Community Commons</td>
            </tr>
            <tr>
              <td>Saturday Lunch</td>
              <td>Wafflelicious Food Truck, Yummy Pizza Food Truck</td>
              <td>12:00 pm</td>
              <td>Pedestrian Promenade</td>
            </tr>
            <tr>
              <td>Saturday Dinner</td>
              <td>Jimmy John&#39;s</td>
              <td>7:30 pm</td>
              <td>Room ECS 1.100, Main Community Commons</td>
            </tr>
            <tr>
              <td>Saturday Snacks</td>
              <td>Assorted Snacks</td>
              <td>11:30 pm</td>
              <td>Room ECS 1.100, Main Community Commons</td>
            </tr>
            <tr>
              <td>Sunday Breakfast</td>
              <td>Einstein&#39;s</td>
              <td>9:00 am</td>
              <td>Room ECS 1.100, Main Community Commons</td>
            </tr>
            <tr>
              <td>Sunday Lunch</td>
              <td>Freebird&#39;s</td>
              <td>12:00 pm</td>
              <td>Room ECS 1.100, Main Community Commons</td>
            </tr>
          </table>
          <br />
          <p className="md:text-xl text-md">On-Campus Restaurants</p>
          <table className="border-collapse w-full text-xs md:text-md lg:text-lg">
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
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
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
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
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
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
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
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
          <br />
          <p className="md:text-xl text-md">Off-Campus Restaurants</p>
          <table className="border-collapse w-full text-xs md:text-md lg:text-lg">
            <tr className="pinkShadow lg:text-xl md:text-lg text-md">
              <th>Name</th>
              <th>Distance From Campus</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>Salata</td>
              <td>1.5 miles</td>
              <td>11:00 am - 9:00 pm</td>
              <td>11:00 am - 3:00 pm</td>
            </tr>
            <tr>
              <td>QDOBA</td>
              <td>1.6 miles</td>
              <td>11:00 am - 9:00 pm</td>
              <td>11:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Raising Cane&#39;s</td>
              <td>1.7 miles</td>
              <td>10:00 am - 1:00 am</td>
              <td>10:00 am - 1:00 am</td>
            </tr>
            <tr>
              <td>Whataburger</td>
              <td>1.9 miles</td>
              <td>24 hours</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td>Skyrocket Burger</td>
              <td>2 miles</td>
              <td>11:00 am - 9:00 pm</td>
              <td>closed</td>
            </tr>
            <tr>
              <td>Pizza Hut</td>
              <td>2.1 miles</td>
              <td>10:00 am - 12:00 am</td>
              <td>10:00 am - 11:00 pm</td>
            </tr>
            <tr>
              <td>Rosa&#39;s Caf&eacute;</td>
              <td>2.3 miles</td>
              <td>6:30 am - 11:00 pm</td>
              <td>6:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Smoothie King</td>
              <td>2.4 miles</td>
              <td>8:00 am - 9:00 pm</td>
              <td>10:00 am - 8:00 pm</td>
            </tr>
            <tr>
              <td>TocoToco Boba Tea</td>
              <td>2.9 miles</td>
              <td>10:00 am - 11:00 pm</td>
              <td>10:00 am - 11:00 pm</td>
            </tr>
            <tr>
              <td>Velvet Taco</td>
              <td>3.3 miles</td>
              <td>11:00 am - 2:00 am</td>
              <td>11:00 am - 11:00 pm</td>
            </tr>
            <tr>
              <td>Cafe Brazil</td>
              <td>3.8 miles</td>
              <td>24 hours</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td>OMG Tacos</td>
              <td>4.2 miles</td>
              <td>11:00 am - 2:45 am</td>
              <td>11:00 am - 1:45 am</td>
            </tr>
          </table>
          <p className="mt-3">
            *Off Campus Restaurants with UTD Student Discounts:{' '}
            <a href="https://sg.utdallas.edu/discount/#dining" target="_blank" rel="noreferrer">
              https://sg.utdallas.edu/discount/#dining
            </a>
          </p>
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
        <div id="hackspaces" className="my-7 md:w-3/4 w-full scrollSnap">
          <div className="font-bold text-xl lg:text-3xl mb-4">⌨️ Hacking Spaces</div>
          <div className="w-full flex justify-between flex-wrap">
            <div>
              <p className="lg:text-xl text-md pinkShadow">ECS West</p>
              <ul className="list-disc list-inside">
                <li>More info soon</li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl text-md pinkShadow">ECS South</p>
              <ul className="list-disc list-inside">
                <li>More info soon</li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl text-md pinkShadow">ECS North</p>
              <ul className="list-disc list-inside">
                <li>More info soon</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="clubs" className="my-7 w-full scrollSnap">
          <div className="font-bold text-xl lg:text-3xl mb-4">👥 Clubs and Organizations</div>
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
          <ClubCard
            path="/assets/clubImages/AIS.png"
            club="Artificial Intelligence Society"
            description="The Artificial Intelligence Society is one of the largest computer science organizations at the University of Texas at Dallas. We are a team of passionate individuals, devoted to bridging the gap between people's awareness and the world of AI. Our mission is to promote artificial intelligence education at UT Dallas and in the surrounding communities."
          />
          <ClubCard
            path="/assets/clubImages/SGDA.png"
            club="Student Game Developer Association"
            description="The SGDA serves to promote game development, create a growing community of students and professionals involved in the games industry, and host events related to video game development and its many facets."
          />
          <ClubCard
            path="/assets/clubImages/Makerspace.png"
            club="UTDesign Makerspace"
            description="The mission of UTDesign Makerspace is to provide an environment of innovation, collaboration, and education where Makers can develop their skills and projects among their peers with access to current and next-generation technology."
          />
          <ClubCard
            path="/assets/clubImages/180DegreesConsulting.png"
            club="180 Degrees Consulting"
            description="180DC at UT Dallas provides UT Dallas students with opportunities to develop professional consulting skills by bringing together UTD's top talent to solve challenging, real-world problems. Our members make a real impact, gain practical experience, and exercise leadership in one of the most competitive careers in business."
          />
          <ClubCard
            path="/assets/clubImages/AlphaKappaPsi.png"
            club="Alpha Kappa Psi"
            description="Alpha Kappa Psi is a professional business fraternity. Our motto is &ldquo;Shaping People, Shaping Business,&rdquo; and we are committed to developing business leaders and professionals one student at a time."
          />
        </div>
      </section>
    </div>
  );
}
