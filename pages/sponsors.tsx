import Image from 'next/image';

export default function sponsors() {
  return (
    <div className="sponsorsPage">
      <div className="sponsersMainPage">
        <h4 className="sponsorsTitle">Sponsors</h4>
        <div>
          <a href="https://www.aa.com/" target="_blank" rel="noreferrer">
            <Image src={'/assets/s_aa.png'} width={1210 / 1.3} height={584 / 1.3} />
            <br />
            <br />
          </a>

          <a href="https://www.statefarm.com/" target="_blank" rel="noreferrer">
            <Image src={'/assets/s_sf.png'} width={1115 / 1.5} height={155 / 1.5} />
            <br />
            <br />
            <br />
            <br />
          </a>

          <a href="https://www.capitalone.com/" target="_blank" rel="noreferrer">
            <Image src={'/assets/s_co.png'} width={993 / 2} height={357 / 2} />
            <br />
          </a>

          <a href="https://www.eogresources.com/" target="_blank" rel="noreferrer">
            <Image src={'/assets/s_er.png'} width={1094 / 2} height={267 / 2} />
            <br />
            <br />
            <br />
          </a>

          <a href="https://www.goldmansachs.com/" target="_blank" rel="noreferrer">
            <Image src={'/assets/s_gs.png'} width={723 / 2} height={313 / 2} />
            <br />
            <br />
            <br />
          </a>
        </div>
      </div>
    </div>
  );
}
