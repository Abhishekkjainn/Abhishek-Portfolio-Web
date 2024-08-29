import { Helmet } from 'react-helmet';
export default function Tripster() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Tripster | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Tripster</div>
        </div>
        <div className="indprojectsubhead">
          Built a complete flight booking app with real-time data and live
          ticketing. Integrated Tripjack Air API for flight availability and
          booking, developed a responsive UI, and ensured secure transactions
          and efficient data handling.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/Tripster-Draft2"
        className="indprojectpage2"
      >
        <img
          src="/tripsterimages/tripsterphonemock.png"
          alt=""
          className="indfirstimg"
        />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">App Development</div>
          <div className="indskilltag">Data Science</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">API Integration</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">DATABASE MANAGEMENT</div>
          <div className="indskilltag">Payment Gateway</div>
          <div className="indskilltag">Real Time Computing</div>

          {/* <div className="indskilltag">Web-App Clone</div> */}
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img src="/tripsterlogo.png" alt="" className="logodivimg" />
          </div>
          <div className="logoimg2">
            <img
              src="/tripsterimages/tripstermockup.png"
              alt=""
              className="logodivimg"
            />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv indimagesdivmonitor">
          <div className="indimagecard">
            <img
              src="/tripsterimages/tripster2.jpeg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/tripsterimages/tripster3.jpeg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/tripsterimages/tripster4.jpeg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/tripsterimages/tripster5.jpeg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/tripsterimages/tripster6.jpeg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
