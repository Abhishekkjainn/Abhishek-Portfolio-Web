import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function ProjectsPage() {
  return (
    <div className="projectspage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Explore My Projects | Abhishek Jain's Portfolio | Web Developer |
          Cross Platform Application Developer
        </title>
      </Helmet>
      <div className="projectpage1">
        <div className="projectpage1head">
          <div className="head">
            <div className="projectcircle"></div>
            <div className="projectheadcontent">My Projects</div>
          </div>
          <div className="projectsubhead">
            Check out some of the most recent projects I've had the pleasure of
            working on.
          </div>
        </div>
      </div>

      <div className="projectpage2">
        <div className="projectpagesection">
          <Link
            to={'/projects/automate'}
            className="projectpagecard automatecard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">1.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">Autorickshaw Booking</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Automate</div>
              </div>
              <div className="projectcardbottomcontent">
                Automate Vellore is a smart autorickshaw booking platform for
                VIT students, reducing fares by 30% and completing 2000+ rides
                while supporting 20+ drivers.
              </div>
            </div>
          </Link>

          <Link
            to={'/projects/livit'}
            className="projectpagecard livitcard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">2.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Event Management</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">LiVIT</div>
              </div>
              <div className="projectcardbottomcontent">
                Don't miss a beat at VIT! Discover upcoming events, register in
                seconds, and stay connected to the vibrant campus life. LiVIT -
                Your one-stop shop for all things events at VIT Vellore.
              </div>
            </div>
          </Link>

          <Link
            to={'/projects/superbill'}
            className="projectpagecard livitcard superbillcard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">3.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">Inventory Management</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">SuperBill</div>
              </div>
              <div className="projectcardbottomcontent">
                Superbill streamlines billing by allowing customers to access
                bills via phone number verification, while vendors can generate
                bills and manage inventory efficiently.
              </div>
            </div>
          </Link>

          <Link
            to={'/projects/tripster'}
            className="projectpagecard tripstercard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">4.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Flight Booking App</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Tripster</div>
              </div>
              <div className="projectcardbottomcontent">
                Built a complete flight booking app with real-time data and live
                ticketing. Integrated Tripjack Air API for flight availability
                and booking, developed a responsive UI, and ensured secure
                transactions and efficient data handling.
              </div>
            </div>
          </Link>

          <Link
            to={'/projects/blink'}
            className="projectpagecard blinkcard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">5.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">URL Management</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Blink</div>
              </div>
              <div className="projectcardbottomcontent">
                Blink is a modern URL shortener and analytics platform that
                allows users to generate short, shareable links and track their
                performance. The platform provides an intuitive interface for
                managing shortened URLs, monitoring click statistics, and
                retrieving analytics.
              </div>
            </div>
          </Link>

          <Link
            to={'/projects/solero'}
            className="projectpagecard solerocard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">6.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">Commerical Website</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Solero Ceramics</div>
              </div>
              <div className="projectcardbottomcontent">
                Designed and developed Solero Ceramics' official website,
                showcasing their premium tiles. The user-friendly interface
                adheres to industry standards, allowing visitors to explore a
                world of exquisite designs and discover the perfect pieces to
                elevate their space.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/newsmann'}
            className="projectpagecard newsmancard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">7.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Daily News App</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Newsmann</div>
              </div>
              <div className="projectcardbottomcontent">
                Daily News App made in Flutter .Search headlines, browse by
                category (sports, business, etc.), and stay informed on the go.
                This Dynamic app keeps users engaged with the latest news.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/spennd'}
            className="projectpagecard spenndcard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">8.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Finance Management</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Spennd</div>
              </div>
              <div className="projectcardbottomcontent">
                Spennd (Flutter) - Track expenses, gain insights, and manage
                your finances in style. Beautiful UI, informative graphs, and
                data persistence keep you in control.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/reorder'}
            className="projectpagecard reordercard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">9.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">Inventory Management</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Re-Order</div>
              </div>
              <div className="projectcardbottomcontent">
                I created an inventory management system in React.js that
                streamlines inventory and order management. Users can easily
                mark orders as completed or rejected. The intuitive and visually
                appealing UI enhances usability, making it ideal for merchants
                and sellers.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/TMDB'}
            className="projectpagecard tmdbcard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">10.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Movie Database</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">TMDB-Drive</div>
              </div>
              <div className="projectcardbottomcontent">
                I developed a movie database application in Flutter with a
                spectacular UI. Users can add movies to favorites and categorize
                them, enhancing the browsing experience.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/vision'}
            className="linkstyle projectpagecard visioncard"
          >
            <div className="topprojectpagecard">
              <div className="sno">11.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">Social Media</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Vision</div>
              </div>
              <div className="projectcardbottomcontent">
                I developed a full-stack Pinterest clone, replicating the core
                features and functionality of the original platform. This
                application allows users to upload, save, and organize images
                into collections with a visually appealing and user-friendly
                interface.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/hoodeye'}
            className="projectpagecard hoodeyecard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">12.</div>
              <div className="projectpagetags">
                <div className="skilltag">App Dev</div>
                <div className="skilltag">Machine Learning</div>
                <div className="skilltag">Safety</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Hoodeye</div>
              </div>
              <div className="projectcardbottomcontent">
                I developed a security application that identifies the five
                safest nearby places and visualizes past crime data, including
                murders thefts etc, through detailed graphs over different
                years.
              </div>
            </div>
          </Link>
          <Link
            to={'/projects/karigari'}
            className="projectpagecard karigaricard linkstyle"
          >
            <div className="topprojectpagecard">
              <div className="sno">13.</div>
              <div className="projectpagetags">
                <div className="skilltag">Web Dev</div>
                <div className="skilltag">E-Commerce</div>
              </div>
            </div>
            <div className="middleprojectpagecard"></div>
            <div className="bottomprojectpagecard">
              <div className="projectcardbottomhead">
                <div className="cardcircle"></div>
                <div className="projectcardtag">Karigari</div>
              </div>
              <div className="projectcardbottomcontent">
                I developed the front end for Karigari, an e-commerce furniture
                store, featuring a visually appealing and intuitive UI that
                enhances the shopping experience for users.
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
