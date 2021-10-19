import Link from 'next/link';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProfileDialog from './ProfileDialog';
import HackUTDLogo from './HackUTDLogo';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * A global site header throughout the entire app.
 */
export default function AppHeader() {
  const [showProfileDialog, setShowProfileDialog] = React.useState(false);

  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

  const dismissDialog = () => {
    setShowProfileDialog(false);
  };

  const toggleDialog = () => {
    console.log('Dialog toggled');
    setShowProfileDialog(!showProfileDialog);
  };

  return (
    <>
      <header className="top-0 sticky flex flex-row justify-between p-2 md:p-4 bg-black shadow-md items-center z-50">
        <Link href="/">
          <a
            className="flex font-display self-center inline-block items-center"
            onClick={dismissDialog}
          >
            <HackUTDLogo />
            <span className="homeLogo md:text-2xl text-lg">HackUTD</span>
          </a>
        </Link>
        {/* Menu items */}
        <div className="sm:inline hidden md:flex justify-left md:text-xl text-md font-header md:text-left cursor:pointer">
          <Link href="/schedule">
            <a onClick={dismissDialog}>
              <span className="inline scheduledot md:invisible"></span>
              <a className="link">Schedule</a>
            </a>
          </Link>
          <Link href="/speakers">
            <a onClick={dismissDialog}>
              <span className="inline speakerdot md:invisible"></span>
              <a className="link">Speakers</a>
            </a>
          </Link>
          <Link href="/sponsors">
            <a onClick={dismissDialog}>
              <span className="inline sponsordot md:invisible"></span>
              <a className="link">Sponsors</a>
            </a>
          </Link>
          <Link href="/faq">
            <a onClick={dismissDialog}>
              <span className="inline faqdot md:invisible"></span>
              <a className="link">FAQ</a>
            </a>
          </Link>
        </div>
        {/* Menu dropdown for mobile */}
        <div className="sm:hidden">
          <div className="dropdown inline-block relative bg-black text-sm rounded-full hover:rounded-b-none hover:rounded-t-2xl">
            <button className="dropdownButton text-gray-700 font-semibold py-1 px-3 rounded inline-flex items-center">
              <div className="mr-1">Menu</div>
              <MenuIcon />
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 -left-px">
              <li className="">
                <Link href="/schedule">
                  <a className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                    Schedule
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/speakers">
                  <a className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                    Speakers
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/sponsors">
                  <a className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                    Sponsors
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/faq">
                  <a className="bg-black hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap">
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse md:text-xl text-sm">
          <div className="md:mx-4 mx-1">
            <button className="SigninButton font-header rounded-full" onClick={toggleDialog}>
              Sign In
            </button>
          </div>
        </div>
        {showProfileDialog && <ProfileDialog onDismiss={dismissDialog} />}
      </header>
    </>
  );
}
