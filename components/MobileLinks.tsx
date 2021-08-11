import Link from 'next/link';

export default function MobileLinks() {
  return (
    <div className="SidebarLinks" id="SidebarLinks">
      <Link href="/schedule">
        <a className="link">Schedule</a>
      </Link>
      <Link href="/speakers">
        <a className="link">Speakers</a>
      </Link>
      <Link href="/sponsors">
        <a className="link">Sponsors</a>
      </Link>
      <Link href="/faq">
        <a className="link">FAQ</a>
      </Link>
      <button className="SigninButton">Sign-in</button>
    </div>
  );
}
