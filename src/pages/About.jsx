import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet';
export default function AboutPage() {
  return (
    <div className="aboutpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Me | Abhishek Jain's Portfolio | Web Developer | Cross Platform
          Application Developer
        </title>
      </Helmet>
      <div className="projectpage1">
        <div className="projectpage1head">
          <div className="head">
            <div className="projectcircle"></div>
            <div className="projectheadcontent">About Me</div>
          </div>
          <div className="projectsubhead">
            I was born and raised in a small town in Central India, and now I’m
            living in Vellore, where I’m pursuing a BTech in Electronics and
            Communication Engineering at VIT. Alongside my studies, I’m the
            founder of Automate Vellore, a platform for seamless autorickshaw
            booking. I’m also a full-stack web and app developer, API creator,
            and open-source contributor.
          </div>
        </div>
      </div>
      <div className="aboutpage2">
        <div className="whatidobanner">
          <div className="whatidohead">
            <div className="whatidocircle"></div>
            <div className="whatidoheadcontent">What I Do?</div>
          </div>
          <div className="whatidocontent">
            "I’m a seasoned web and cross-platform app developer with three
            years of hands-on experience, currently advancing my skills through
            a B.Tech in ECE Engineering from VIT Vellore. My passion for
            storytelling, human-centered design, and backend development fuels
            my exploration of innovative strategies for brands to engage
            effectively with their audiences. With expertise in API creation and
            database management, I thrive on pushing creative boundaries and
            delivering exceptional user experiences."
          </div>
        </div>
      </div>
      <div className="aboutpage3">
        <div className="whatidohead exphead">
          <div className="whatidocircle"></div>
          <div className="whatidoheadcontent">My Experience</div>
        </div>
        <div className="educationsection">
          <div className="educationcard">
            <div className="educationimage img3"></div>
            <div className="educationdetails">
              <div className="educationhead">Automate Vellore</div>
              <div className="educationcollege">April 2023 - Present</div>
              <div className="educationcollege">
                Developed a platform from which Autorickshaws can be booked
                effortlessly in vellore. Reducing the standard Fares by 30% in
                Vellore. Providing Employement to More than 20 Autodrivers.
              </div>
              <div className="educationsession">Founder | CTO</div>
            </div>
          </div>
          <div className="educationcard">
            <div className="educationimage img4"></div>
            <div className="educationdetails">
              <div className="educationhead">Solero Ceramics</div>
              <div className="educationcollege">Jun 2024 - July 2024</div>
              <div className="educationcollege">
                Developed the Offical Page for the Creamic Tiles Manufacturing
                Company Based in Gujarat, India. Showcasing Their Products
                ,Catalogues and Manufacturing Facilitie Present in Gujarat.
              </div>
              <div className="educationsession">
                Full Stack Website Developer
              </div>
            </div>
          </div>
          <div className="educationcard">
            <div className="educationimage img6"></div>
            <div className="educationdetails">
              <div className="educationhead">Studize</div>
              <div className="educationcollege">Feb 2024 - March 2024</div>
              <div className="educationcollege">
                Developed Some Crucial Features of the App such as Syllabus
                Tracking System , Dynamic Notification System , Integrated a
                Fully Functional Chatbot. Contributing to almost 50% of the
                Complete Application and increasing the Team Efficiency by 30%
              </div>
              <div className="educationsession">
                Cross Platform App Developer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutpage3">
        <div className="whatidohead exphead">
          <div className="whatidocircle"></div>
          <div className="whatidoheadcontent">My Achivements</div>
        </div>
        <div className="educationsection">
          <div className="educationcard">
            <div className="educationimage imgach1"></div>
            <div className="educationdetails">
              <div className="educationhead">
                App Dev Hackathon - First Position
              </div>
              <div className="educationcollege">
                Organized by MeitY, Govt. of India at VIT Vellore
              </div>
              <div className="educationcollege">
                Secured 1st position in a prestigious hackathon organized by
                MeitY, Govt. of India. Developed a full-fledged Event Management
                System that streamlined event registrations and operations. The
                award was presented by the CEO of MeitY, with Institute
                Innovation Council, VIT Vellore as the co-organizer.
              </div>
              <div className="educationsession"></div>
            </div>
          </div>

          <div className="educationcard">
            <div className="educationimage imgach2"></div>
            <div className="educationdetails">
              <div className="educationhead">Hackoff V4.0 – 2nd Position</div>
              <div className="educationcollege">
                Pan-India Hackathon | IET, VIT Vellore
              </div>
              <div className="educationcollege">
                Secured 2nd place in the prestigious Pan-India Hackathon,
                Hackoff V4.0, organized by the Institute of Engineering and
                Technology, VIT Vellore. Developed a full-stack Education
                Companion Platform for mentorship, enabling seamless
                mentor-student connections, personalized learning, and guidance.
              </div>
              <div className="educationsession">
                <a
                  href="https://drive.google.com/file/d/1x7gnARA8iABgnyGjnnU9Mnf5CJ7T2ZmA/view"
                  target="_blank"
                  className="certlink"
                >
                  <img src="/link.png" alt="Link" className="linkimg" />{' '}
                </a>
              </div>
            </div>
          </div>

          <div className="educationcard">
            <div className="educationimage imgach3"></div>
            <div className="educationdetails">
              <div className="educationhead">Relay Coding – 1st Position</div>
              <div className="educationcollege">
                Institute of Engineering and Technology, VIT Vellore
              </div>
              <div className="educationcollege">
                Secured 1st place in the Relay Coding competition organized by
                the Institute of Engineering and Technology, VIT Vellore.
                Developed a **Student Community Platform** where students can
                create **study groups**, collaborate, and organize meetups for
                group study sessions, enhancing peer learning and academic
                engagement.
              </div>
              <div className="educationsession">
                <a
                  href="https://drive.google.com/file/d/1tRSRfv_73Z0H1a2FatCbzYDD2nlod3jf/view"
                  target="_blank"
                  className="certlink"
                >
                  <img src="/link.png" alt="Link" className="linkimg" />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastpage">
        <Marquee
          className="aboutmemarquee aboutmarq"
          speed={40}
          autoFill={true}
          loop={0}
          direction="right"
        >
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
          <img src="docker.png" alt="" className="skillimage marqimg" />
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
          <img src="docker.png" alt="" className="skillimage marqimg" />
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
          <img src="docker.png" alt="" className="skillimage marqimg" />
        </Marquee>
      </div>
    </div>
  );
}
