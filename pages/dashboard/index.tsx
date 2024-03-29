import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { useUser } from '../../lib/profile/user-data';
import { useAuthContext } from '../../lib/user/AuthContext';
import AnnouncementCard from './Components/AnnouncementCards';
import Sidebar from './Components/Sidebar';
import Script from 'next/script';
import firebase from 'firebase';
import 'firebase/messaging';
import { GetServerSideProps } from 'next';
import { RequestHelper } from '../../lib/request-helper';
import { useFCMContext } from '../../lib/service-worker/FCMContext';

/**
 * The dashboard / hack center.
 *
 * Landing: /dashboard
 */
var eventCount = 0;
export const getItemCount = () => {
  if (typeof window !== 'undefined') {
    const items = document.querySelectorAll('.scrollItem');
    if (items !== undefined && items !== null && items.length !== 0) {
      eventCount = items.length;
    }
  }
};

export default function Dashboard(props: { announcements: Announcement[] }) {
  const { isSignedIn } = useAuthContext();
  const user = useUser();
  const role = user.permissions?.length > 0 ? user.permissions[0] : '';
  const { announcements } = useFCMContext();
  // Change this to check-in condition instead of signed in
  const checkin =
    !user || !isSignedIn ? (
      <p>
        It looks like you&apos;re not checked in! Please click{' '}
        <Link href="/dashboard/scan-in" passHref>
          <u>here</u>
        </Link>{' '}
        to check in to the event.
      </p>
    ) : (
      'You are successfully checked in!'
    );

  var eventCount = 0;
  if (typeof window !== 'undefined') {
    document.querySelectorAll('.carousel').forEach((carousel) => {
      const items = carousel.querySelectorAll('.carousel__item');

      //run if there are carousel items
      if (items !== undefined && items !== null && items.length !== 0) {
        const buttonsHtml = Array.from(items, () => {
          return `<span class="carousel__button"></span>`;
        });

        carousel.insertAdjacentHTML(
          'beforeend',
          `
	        	<div class="carousel__nav">
	        		${buttonsHtml.join('')}
	        	</div>
	        `,
        );

        const buttons = carousel.querySelectorAll('.carousel__button');
        eventCount = items.length;
        buttons.forEach((button, i) => {
          button.addEventListener('click', () => {
            // un-select all the items
            items.forEach((item) => item.classList.remove('carousel__item--selected'));
            buttons.forEach((button) => button.classList.remove('carousel__button--selected'));

            console.log(i - buttons.length / 2);
            const itemNumber = i - buttons.length / 2;

            items[itemNumber].classList.add('carousel__item--selected');
            button.classList.add('carousel__button--selected');
          });
        });

        //Set default to first item
        items[0].classList.add('carousel__item--selected');
        buttons[0].classList.add('carousel__button--selected');
      }
    });
  }

  var eventCountString;
  if (eventCount === 1) {
    eventCountString = '1 event is happening right now!';
  } else {
    eventCountString = `${eventCount} events are happening right now!`;
  }

  return (
    <>
      <Script
        onLoad={() => {
          getItemCount();
        }}
      />
      <div className="flex flex-wrap flex-grow">
        <Head>
          <title>HackPortal - Dashboard</title>
          <meta name="description" content="HackPortal's Dashboard" />
        </Head>

        <Sidebar />

        <section id="mainContent" className="px-6 py-3 w-5/6 lg:w-7/8 md:w-6/7 w-screen">
          <section id="subheader" className="p-4">
            <DashboardHeader active="/dashboard/" />
          </section>

          <div className="flex flex-wrap my-16 mb-28">
            {/* Announcements */}
            <div className="md:w-3/5 w-screen h-96">
              <h1 className="md:text-3xl text-xl font-black">Announcements</h1>
              <div
                id="announcement-items"
                className="overflow-y-scroll p-3"
                style={{ height: '400px' }}
              >
                {announcements.map((announcement, idx) => {
                  const dateObj = new Date(announcement.timestamp!);
                  const hour = dateObj.getHours(),
                    minutes = dateObj.getMinutes();

                  const time = `${hour < 10 ? '0' : ''}${hour}:${
                    minutes < 10 ? '0' : ''
                  }${minutes}`;

                  return (
                    <AnnouncementCard key={idx} text={announcement.announcement} time={time} />
                  );
                })}
                {/* <AnnouncementCard text="More announcements coming soon!" time="8:39 PM" /> */}
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="my-16">
            <h1 className="md:text-3xl text-2xl font-header font-black">Challenges</h1>
            {/* <h1 className="md:text-2xl text-lg font-header font-black">Challenges coming soon!</h1> */}
            <div className="w-full flex flex-wrap">
              {/* card */}
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  American Airlines Challenge - Flight Enhancement
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    Thousands of people fly American each and every day. This awesome responsibility
                    opens the door to incredible opportunities! <br /> <br />
                    Build something that helps us elevate the customer travel experience, boost
                    operational efficiencies and employee performance (baggage handling, gate
                    agents, etc.), or enhance American’s brand image. <br /> <br />
                    The American team will provide more details via Discord and Hangar.
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>
                    1st Place: 75k AAdvantage Miles* <br />
                    2nd Place: 50k AAdvantage Miles* <br />* Prize sums represent the total miles
                    per team and the amount will be split evenly between all team members
                  </div>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  Goldman Sachs Challenge - Investment Strategy
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-md text-sm">
                    <p className="underline">Background</p>
                    Goldman Sachs provides a wide range of financial services including investment
                    management solutions across all major asset classes to a diverse set of
                    institutional and individual clients. As such, among other things, we focus on a
                    variety of macro, quantitative and research data to identify investment ideas
                    and trends. <br />
                    Retail investors have been on rise over the past couple of years. Retail
                    investors are most likely to look beyond traditional stock fundamentals and are
                    increasingly influenced by Social Media activity. Social media chatter and
                    sentiments are significantly connected with stock price movements, retail flows
                    and short selling activity. In fact, recent studies have shown that the majority
                    of institutional investors also use social media as part of their regular work
                    flow. Information obtained through social media has directly influenced an
                    investment recommendation or decision. <br />
                    <p className="underline mt-2">Challenge</p>
                    The GS Challenge for the Hackathon proposes building co-relation between
                    non-traditional fundamentals like social media chatter and activity, industry
                    leader influences, trends/bubbles created by groups of retail investors etc, and
                    their relation to performance of different types of asset classes including
                    digital/crypto. We would like the participants to develop an investment platform
                    that makes investment recommendations and trading strategy by leveraging data
                    available on historic and current performance of investment products and data
                    available from various outlets on social media activity, sentiment, chatter,
                    influencers etc. You are encouraged to explore beyond the traditional metrics
                    and research different ways this information could be presented as a critical
                    tool, including possibly assigning &lsquo;Social Ratings/Scores&rsquo; and tying
                    this research to preferences that users might have based on their own investment
                    history and risk tolerance.
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>
                    First Place: DJ Mini SE Drones <br />
                    Second Place: Apple Airpods <br />
                    Third Place: Doordash Gift Cards
                  </div>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl p-2">
                  Capital One Challenge - Best Financial Hack
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    Capital One would like to challenge HackUTD to create the best financial hack.
                    Money impacts much of our lives and we would like to promote change for good.
                    The winning team members will be awarded $200 Amazon gift cards. (Prize is not
                    available to international winners). <br /> <br />
                    *If you are submitting a project to the Capital One &lsquo;Best Financial
                    Hack&rsquo; challenge, you must submit a 5-minute video to be considered.
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>1st Place: $200 Amazon Gift Cards</div>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  EOG Resources Challenge - Operations Optimization
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    EOG wells are constantly producing water and we need to find ways to reduce
                    expenditures, as well as reuse and recycle water whenever possible. Your
                    challenge is to use your creativity to develop an application which can process
                    a steady stream of real-time sensor data to both optimize and visualize the
                    distribution of water for our upstream operations. Oculus Quests will be awarded
                    to the best team for this category. Please come and see the EOG Resources team
                    for more details!
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>Oculus Quests</div>
                  <br />
                  Checkout our github for more info&nbsp;
                  <a
                    href="https://github.com/humflelump/utd-hackathon"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 underline"
                  >
                    here!
                  </a>
                  <br />
                  <a
                    href="https://github.com/humflelump/utd-hackathon"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 underline"
                  >
                    https://github.com/humflelump/utd-hackathon
                  </a>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  StateFarm Challenge - 100-Year Anniversary
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    State Farm’s 100-year anniversary is in 2022. Over the years we have continued
                    to add products to better help our customers. Your challenge is to identify and
                    build out a new tech product or service State Farm could provide to its
                    customers as a “value add”. While State Farm is primarily in the insurance and
                    financial services industry, do not feel limited to those product lines.
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>
                    1st place: iPad Air 64 GB <br />
                    2nd place: Oculus Quest 2 128 GB <br />
                    3rd place: Logitech Mechanical Keyboard
                  </div>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  Student Government Challenge - Improving Student Life
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    Build for UT Dallas Students: Build an app (either mobile or web) that makes UTD
                    Student life better. <br /> <br />
                    This challenge will be judged by the Office of Information Technology, with
                    prizes being awarded to UTD students only.
                  </div>
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>
                    First Place: 10.2 inch iPads <br />
                    Second Place: Airpod Pros
                  </div>
                </div>
              </div>
              <div className="border-2 border-green rounded-lg lg:max-w-5/12 lg:min-w-5/12 min-w-full m-4 h-auto">
                <p className="min-h-[4rem] border-b-2 border-green flex justify-center items-center hackerPackShadow md:text-3xl text-2xl block">
                  Project Nebula Challenge
                </p>
                <div className="sm:p-6 p-2 trebuchet">
                  <div className=" md:text-lg text-md">
                    Project Nebula is an initiative to build tools that help students. We have teams
                    actively developing several projects, including a comprehensive degree planning
                    tool, a personalized guide for UTD students, and the Nebula API⁠—a public API to
                    retrieve UTD data such as course information, degree plan requirements, and
                    historical grade data. <br /> <br />
                    Your challenge is to build a tool using the Nebula API that helps students
                    during their time in college. Think big: we envision dashboards, interactive
                    planners, and chatbots, but we encourage you to dig deep and build something
                    really cool and creative. <br /> <br />
                    Only currently enrolled UTD students are eligible to participate in this
                    challenge. All students who submit a project for this challenge will be
                    considered for an interview to join our maintainer team.
                  </div>
                  <br />
                  Your project will be evaluated on:
                  <ul className="list-disc list-inside">
                    <li>Student usefulness</li>
                    <li>Novelty and creativity</li>
                    <li>Project functionality</li>
                  </ul>
                  <br />
                  <p className="md:text-lg text-md mt-2 underline">Prizes</p>
                  <div>
                    The winning team will be given Corsair mechanical keyboards, an honorable
                    mention on our website, and a meeting with us to help grow their idea.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers.referer?.split('://')[0] || 'http';
  const { data } = await RequestHelper.get<Announcement[]>(
    `${protocol}://${context.req.headers.host}/api/announcements/`,
    {},
  );
  return {
    props: {
      announcements: data,
    },
  };
};
