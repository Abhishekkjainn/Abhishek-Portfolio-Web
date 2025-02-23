import { Helmet } from 'react-helmet';
export default function Blink() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Blink | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Blink</div>
        </div>
        <div className="indprojectsubhead">
          BeLinkk is a modern URL shortener and analytics platform that allows
          users to generate short, shareable links and track their performance.
          The platform provides an intuitive interface for managing shortened
          URLs, monitoring click statistics, and retrieving analytics.
        </div>
      </div>
      <a href="https://belinkk.vercel.app" className="indprojectpage2">
        <img src="/blinkmockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">Web Development</div>
          <div className="indskilltag">API Development</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">Business Management</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">Data Science</div>
          <div className="indskilltag">URL Management</div>
          <div className="indskilltag">React JS</div>
          <div className="indskilltag">Node JS</div>
          <div className="indskilltag">Firebase</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/blinkimages/logomock.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/blinkimages/indmockup.png"
              alt=""
              className="logodivimg"
            />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv indimagesdivmonitor">
          <div className="indimagecardmonitor">
            <img
              src="/blinkimages/1.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/blinkimages/2.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/blinkimages/3.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/blinkimages/4.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/blinkimages/5.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
