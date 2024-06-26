import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import $ from 'jquery';
import CircleType from 'circletype';
import { FaStarOfLife, FaCircle } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Homepage() {
  const rotatedRef = useRef(null);

  useEffect(() => {
    if (rotatedRef.current) {
      new CircleType(rotatedRef.current).radius(50);
    }
    $(window).scroll(function () {
      var offset = $(window).scrollTop();
      offset = offset * 0.5;
      $('.circular-text').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Abhishek Jain | Web Developer | Cross Platform Application Developer |
          Portfolio
        </title>
      </Helmet>
      <Circulartext />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
    </>
  );

  function Circulartext() {
    return (
      <>
        <div className="circular-text">
          <span id="rotated" ref={rotatedRef}>
            Web Developer | Flutter App Developer | Database Management |
            Version Control |
          </span>
        </div>
        <div className="arrow">
          <img src="mainlogo2.png" alt="mainlogo" className="centercircle" />
        </div>
      </>
    );
  }

  function Page1() {
    return (
      <div className="page1">
        <div className="marqueepage1">
          <Marquee className="namemarquee" speed={40} loop={0}>
            &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
          </Marquee>
        </div>
        <div className="imagepage1">
          <img src="abhishek.png" alt="abhishek" className="abhishekimage" />
        </div>
      </div>
    );
  }

  function Page2() {
    return (
      <div className="page2">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="right"
        >
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
        </Marquee>

        <div className="aboutmesection">
          <div className="aboutmecontent">
            I’m a skilled <span className="blue"> web developer </span> and{' '}
            <span className="blue"> app developer </span>with nearly three years
            of experience crafting innovative and functional digital solutions.
            My expertise lies in building user-friendly{' '}
            <span className="blue"> websites</span> and{' '}
            <span className="blue"> applications</span> that deliver seamless
            experiences. <br />
            <br />
            Throughout my career, I have successfully completed numerous{' '}
            <span className="blue"> freelancing projects</span>, demonstrating a
            keen ability to adapt and excel in dynamic environments. I bring a
            blend of technical proficiency and creative problem-solving to every
            project, ensuring{' '}
            <span className="blue"> high-quality results</span> that meet client
            needs and exceed expectations.
          </div>
          <Link to={'/about'} className="linkstyle">
            <div className="resumebutton">
              <div className="circlebutton"></div>
              <div className="buttonhead">About Me</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  function Page3() {
    return (
      <div className="page3">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
        </Marquee>
        <div className="skillsection">
          <div className="skilldiv skilldiv1">
            <div className="topskilldiv">
              <div className="skilltag">Web Dev</div>
              <div className="skilltag">Available</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">Web Developer</div>
              <div className="titlesub">
                As a freelance web developer, I create custom websites that
                blend sleek design with seamless functionality. I specialize in
                crafting user-friendly interfaces and robust backend systems,
                ensuring every project meets client needs with precision and
                creativity.
              </div>
            </div>

            <div className="bottomskilldiv">
              <Link
                to={'/services/webdeveloper'}
                className="bottomskilldiv linkstyle"
              >
                <div className="infobutton">Get More Info</div>
              </Link>
            </div>
          </div>
          <div className="skilldiv skilldiv2">
            <div className="topskilldiv">
              <div className="skilltag">App Dev</div>
              <div className="skilltag">Available</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">App Developer</div>
              <div className="titlesub">
                As a freelance Flutter developer, I create cross-platform mobile
                apps for Android and iOS. My focus is on delivering sleek
                designs and high-performance applications that meet client goals
                and user expectations seamlessly.
              </div>
            </div>
            <div className="bottomskilldiv">
              <Link
                to={'/services/appdeveloper'}
                className="bottomskilldiv linkstyle"
              >
                <div className="infobutton">Get More Info</div>
              </Link>
            </div>
          </div>
          <div className="skilldiv skilldiv3">
            <div className="topskilldiv">
              <div className="skilltag">User Interface</div>
              <div className="skilltag">User Experience</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">UI UX Designer</div>
              <div className="titlesub">
                As a freelance UI/UX designer, I create intuitive and visually
                appealing interfaces that prioritize user experience. My designs
                blend creativity with usability, ensuring seamless navigation
                and engagement for optimal digital experiences.
              </div>
            </div>
            <div className="bottomskilldiv">
              <Link
                to={'/services/uiuxdesigner'}
                className="bottomskilldiv linkstyle"
              >
                <div className="infobutton">Get More Info</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page4() {
    const page4Ref = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const page4 = page4Ref.current;
        const projectDivs = page4.querySelectorAll('.projectdiv');
        const rect = page4.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          projectDivs.forEach((div) => div.classList.add('sticky'));
        } else {
          projectDivs.forEach((div) => div.classList.remove('sticky'));
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className="page4" id="page4" ref={page4Ref}>
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
        </Marquee>

        <div className="projectdiv projectdiv1">
          <div className="projectcardhead">
            <div className="sno">1.</div>
            <div className="projectcardtags">
              <div className="cardtag">App Dev</div>
              <div className="cardtag">College Project</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> LiVIT
            </div>
            <div className="projectdesc">
              Your gateway to campus life: Explore all VIT Vellore events at
              your fingertips!
            </div>
          </div>
          <Link className="projectvisitbutton linkstyle" to={'/projects/livit'}>
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>

        <div className="projectdiv projectdiv2">
          <div className="projectcardhead">
            <div className="sno">2.</div>
            <div className="projectcardtags">
              <div className="cardtag">Web Dev</div>
              <div className="cardtag">Commerical Website</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> Solero
            </div>
            <div className="projectdesc">
              Crafted a stunning commercial website for Solero Ceramics,
              showcasing their premium, elegant, and durable ceramic tiles to
              transform any space with style
            </div>
          </div>
          <Link
            className="projectvisitbutton linkstyle"
            to={'/projects/solero'}
          >
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>
        <div className="projectdiv projectdiv3">
          <div className="projectcardhead">
            <div className="sno">3.</div>
            <div className="projectcardtags">
              <div className="cardtag">App Dev</div>
              <div className="cardtag">Daily News</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> Newsmann
            </div>
            <div className="projectdesc">
              Developed a dynamic daily news app that categorizes and delivers
              the latest headlines, keeping you informed and organized
              effortlessly
            </div>
          </div>
          <Link
            className="projectvisitbutton linkstyle"
            to={'/projects/newsmann'}
          >
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>
        <div className="projectdiv projectdiv4">
          <div className="projectcardhead">
            <div className="sno">4.</div>
            <div className="projectcardtags">
              <div className="cardtag">App Dev</div>
              <div className="cardtag">Finance Manager</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> Spennd
            </div>
            <div className="projectdesc">
              Developed an all-in-one Expense Manager app, equipped with
              essential features for daily financial management and budgeting.
            </div>
          </div>
          <Link
            className="projectvisitbutton linkstyle"
            to={'/projects/spennd'}
          >
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>
        <div className="projectdiv projectdiv5">
          <div className="projectcardhead">
            <div className="sno">5.</div>
            <div className="projectcardtags">
              <div className="cardtag">App Dev</div>
              <div className="cardtag">Social Media</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> Vision
            </div>
            <div className="projectdesc">
              Created a visually inspiring social media platform where ideas
              come to life, allowing users to discover, save, and share their
              passions.
            </div>
          </div>
          <Link
            className="projectvisitbutton linkstyle"
            to={'/projects/vision'}
          >
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>
        <div className="projectdiv projectdiv6">
          <div className="projectcardhead">
            <div className="sno">6.</div>
            <div className="projectcardtags">
              <div className="cardtag">Web Dev</div>
              <div className="cardtag">Cab Booking</div>
            </div>
          </div>
          <div className="projectcardcontent">
            <div className="projectname">
              <div className="circleprodcard"></div> AutoMate
            </div>
            <div className="projectdesc">
              Founded and developed Automate Vellore, an online autorickshaw
              booking platform that simplifies travel in Vellore, making your
              journeys easier and more convenient.
            </div>
          </div>
          <Link
            className="projectvisitbutton linkstyle"
            to={'/projects/automate'}
          >
            <div className="projectvisitbutton">
              <div className="visitbutton">View Project</div>
            </div>
          </Link>
        </div>
        <div className="allprojectsbutton">
          <Link to={'/projects'} className="linkstyle">
            <div className="resumebutton">
              <div className="circlebutton"></div>
              <div className="buttonhead">All Projects</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  function Page5() {
    return (
      <div className="page5">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="right"
        >
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
          <FaStarOfLife /> &nbsp; Techstack &nbsp;
        </Marquee>

        <div className="skillsectiondiv">
          <div className="skillcarddiv">
            <SkillCard imgsrc={'reactjs.png'} skilltag={'React JS'} />
            <SkillCard imgsrc={'NEXTJS.png'} skilltag={'Next JS'} />
            <SkillCard imgsrc={'nodejs.png'} skilltag={'Node JS'} />
            <SkillCard imgsrc={'javascript.png'} skilltag={'Javascript'} />
            <SkillCard imgsrc={'typescript.png'} skilltag={'Typescript'} />
            <SkillCard imgsrc={'java.png'} skilltag={'Java'} />
            <SkillCard imgsrc={'dart.png'} skilltag={'Dart'} />
            <SkillCard imgsrc={'python.png'} skilltag={'Python'} />
            <SkillCard imgsrc={'git.png'} skilltag={'Git'} />
            <SkillCard imgsrc={'github.png'} skilltag={'Github'} />
            <SkillCard imgsrc={'flutter.png'} skilltag={'Flutter'} />
            <SkillCard imgsrc={'firebase.png'} skilltag={'Firebase'} />
          </div>
        </div>
      </div>
    );
  }

  function SkillCard({ imgsrc, skilltag }) {
    return (
      <div className="skillcard">
        <img src={imgsrc} alt="React" className="skillimage" />
        <div className="skillcardtag">{skilltag}</div>
      </div>
    );
  }

  function Page6() {
    return (
      <div className="page6">
        <div className="banner">
          <div className="topbanner">
            <div className="skilltag">FrontEnd Web Dev</div>
            <div className="skilltag">BackEnd Web Dev</div>
            <div className="skilltag">Cross Platform App Dev</div>
          </div>
          <div className="middlebanner">
            <div className="middlesubhead">
              Have An Idea ? A Website ? App ?
            </div>
            <div className="middlehead">
              Want Your Idea to be turned into Reality?
            </div>
            <div className="middlesubhead">I got you</div>
          </div>
          <div className="bottombanner">
            <div className="getquotebutton">Get Quote</div>
            <div className="getquotebutton">Send me Idea</div>
          </div>
        </div>
      </div>
    );
  }

  function Page7() {
    return (
      <div className="page7">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
          <FaStarOfLife /> &nbsp; Education &nbsp;
        </Marquee>
        <div className="educationsection">
          <div className="educationcard">
            <div className="educationimage"></div>
            <div className="educationdetails">
              <div className="educationhead">
                Bachelors of Technology in Electronics and Communication
                Engineering
              </div>
              <div className="educationcollege">
                Vellore Institute of Technology , Vellore | CGPA - 9.1
              </div>
              <div className="educationsession">2022 | 2026 [Pursuing]</div>
            </div>
          </div>
          <div className="educationcard">
            <div className="educationimage img2"></div>
            <div className="educationdetails">
              <div className="educationhead">
                Higher Senior Secondary School | Science Stream
              </div>
              <div className="educationcollege">
                Shri Shankaracharya Vidyalaya , Hudco , Bhilai | Percentage -
                90%
              </div>
              <div className="educationsession">2018 | 2022</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page8() {
    return (
      <div className="page8">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
          <FaStarOfLife /> &nbsp; Experience &nbsp;
        </Marquee>
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
    );
  }

  function Page9() {
    return (
      <div className="page9">
        <div className="page9head">Intersted in Working Together?</div>
        <Link to={'/contacts'} className="linkstyle">
          <div className="resumebutton">
            <div className="circlebutton"></div>
            <div className="buttonhead">Drop Me a Mail</div>
          </div>
        </Link>
      </div>
    );
  }
}

//Skills
//REACTJS NEXTJS TAILWINDCSS GIT GITHUB JAVASCRIPT TYPESCRIPT NODEJS PYTHON JAVA
//DART FLUTTER STATE MANAGEMENT FIREBASE
