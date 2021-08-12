import Link from 'next/link';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProfileDialog from './ProfileDialog';
import HackUTDLogo from './HackUTDLogo';

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
      <header className="sticky top-0 p-2 md:p-4 flex bg-gray-900 shadow-md">
        <div className="md:flex justify-center text-xl font-header text-center md:text-left">
          <Link href="/">
            <a className="pr-4 flex font-display content--center" onClick={dismissDialog}>
              <HackUTDLogo />
              <span>HackUTD</span>
            </a>
          </Link>
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
          <Link href="/sponsorship-packet.pdf">
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
        <div className="flex flex-grow flex-row-reverse text-xl">
          <div className="mx-4">
            <button className="SigninButton font-header" onClick={toggleDialog}>
              Sign In
            </button>
          </div>
        </div>
        {showProfileDialog && <ProfileDialog onDismiss={dismissDialog} />}
      </header>
    </>
  );
}
