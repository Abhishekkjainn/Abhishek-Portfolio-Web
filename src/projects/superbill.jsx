import { Helmet } from 'react-helmet';
export default function Superbill() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project SuperBill | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">SuperBill</div>
        </div>
        <div className="indprojectsubhead">
          Superbill is a platform that simplifies billing for vendors and
          customers. It allows customers to access their bills via phone number
          verification, while vendors can generate bills, manage inventory, and
          send digital receipts through SMS, making transactions quick and
          efficient.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/Paybill"
        className="indprojectpage2"
      >
        <img src="/superbillmockup.png" alt="" className="indfirstimg" />
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
          <div className="indskilltag">Machine Learning</div>
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
              src="/superbillimages/superbilllogomock.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/superbillimages/superbilldevice.png"
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
              src="/superbillimages/superbill1.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill2.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill3.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill4.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill5.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill6.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/superbillimages/superbill7.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
