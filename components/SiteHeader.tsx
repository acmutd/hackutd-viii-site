import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <Link href="https://acmutd.co/">
          <Image
            src="../HackUTD8Assets/Logo.png"
            width="47px"
            height="55px"
            padding-right="30px"
          ></Image>
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
