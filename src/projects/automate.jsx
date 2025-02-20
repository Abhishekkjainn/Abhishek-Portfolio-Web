// import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';
export default function Automate() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Project Automate | Abhishek Jain | Founder | Full Stack Developer
        </title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Automate</div>
        </div>
        <div className="indprojectsubhead">
          It is a seamless autorickshaw booking platform for VIT Vellore
          students, making rides effortless and affordable. It has reduced fares
          by 30%, provided jobs to 20+ drivers, and completed 2000+ rides. The
          platform simplifies booking, fare viewing, and driver coordination,
          with an upcoming driver portal for better management.
        </div>
      </div>
      <a href="https://automatevellore.vercel.app" className="indprojectpage2">
        <img
          src="/automateimages/automateindmock.png"
          alt=""
          className="indfirstimg"
        />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">Web Development</div>
          <div className="indskilltag">FrontEnd Development</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">Business Management</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">Database Management</div>
          <div className="indskilltag">API Development</div>
          <div className="indskilltag">Express.js</div>
          <div className="indskilltag">React.js</div>
          <div className="indskilltag">Node.js</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/automateimages/automatelogo.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/automateimages/mock2.png"
              alt=""
              className="logodivimg"
            />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv">
          <div className="indimagecard">
            <img
              src="/automateimages/1.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/2.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/3.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/4.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/5.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/6.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/7.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/automateimages/8.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
