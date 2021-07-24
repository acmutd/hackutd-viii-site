import Link from 'next/link';
import HackUTDLogo from './HackUTDLogo';

export default function SiteHeader() {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <Link href="https://acmutd.co/">
          <a>
            <HackUTDLogo />
          </a>
        </Link>
        <Link href="/schedule">
          <a className="link">Schedule</a>
        </Link>
        <Link href="/speakers">
          <a className="link">Speakers</a>
        </Link>
        <Link href="/sponsors">
          <a className="link">sponsors</a>
        </Link>
        <Link href="/faq">
          <a className="link">FAQ</a>
        </Link>
      </div>

      <button className="SigninButton">Sign-in</button>
    </div>
  );
}
