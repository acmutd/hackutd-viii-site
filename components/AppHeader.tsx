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
      <header className="top-0 sticky flex flex-row justify-between p-2 md:p-4 bg-black shadow-md items-center">
      <Link href="/">
            <a className="flex font-display self-center inline-block items-center" onClick={dismissDialog}>
              <HackUTDLogo />
              <span className="text-2xl">HackUTD</span>
            </a>
          </Link>
        <div className="md:flex justify-center text-xl font-header md:text-left">
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
        <div className="flex flex-row-reverse text-xl">
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
